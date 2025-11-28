import { useRef, useState } from 'react';
import { Download } from 'lucide-react';
import { WaveXLogo } from './WaveXLogo';
import { WaveXLogoFull } from './WaveXLogoFull';
import { WaveLogo } from './WaveLogo';
import { WaveLogoFull } from './WaveLogoFull';
import { WaveSpaceLogo } from './WaveSpaceLogo';
import { GroundedLogoFull } from './GroundedLogoFull';
import { TodayIsLogo } from './TodayIsLogo';
import { TodayIsLogoFull } from './TodayIsLogoFull';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';

export function LogoDownloadPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [pngResolution, setPngResolution] = useState<number>(4);
  const [videoResolution, setVideoResolution] = useState<number>(1920);

  const downloadSVG = (component: React.ReactElement, filename: string) => {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    document.body.appendChild(container);

    const root = document.createElement('div');
    container.appendChild(root);

    import('react-dom/client').then((ReactDOM) => {
      const reactRoot = ReactDOM.createRoot(root);
      reactRoot.render(component);
      
      setTimeout(() => {
        const svgElement = root.querySelector('svg');
        if (svgElement) {
          const clonedSvg = svgElement.cloneNode(true) as SVGElement;
          
          // Remove any motion-specific attributes
          clonedSvg.querySelectorAll('*').forEach((el) => {
            el.removeAttribute('data-projection-id');
            el.removeAttribute('style');
          });
          
          const svgData = new XMLSerializer().serializeToString(clonedSvg);
          const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
          const url = URL.createObjectURL(svgBlob);
          
          const link = document.createElement('a');
          link.href = url;
          link.download = filename;
          link.click();
          
          URL.revokeObjectURL(url);
        }
        
        reactRoot.unmount();
        document.body.removeChild(container);
      }, 100);
    });
  };

  const downloadPNG = (component: React.ReactElement, filename: string, scale: number) => {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.background = '#ffffff';
    document.body.appendChild(container);

    const root = document.createElement('div');
    container.appendChild(root);

    import('react-dom/client').then((ReactDOM) => {
      const reactRoot = ReactDOM.createRoot(root);
      reactRoot.render(component);
      
      setTimeout(() => {
        const svgElement = root.querySelector('svg') as SVGElement;
        if (svgElement) {
          const svgData = new XMLSerializer().serializeToString(svgElement);
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const img = new Image();
          
          // Base size for logos (larger base for better quality)
          const baseSize = 500;
          const finalSize = baseSize * scale;
          
          canvas.width = finalSize;
          canvas.height = finalSize;
          
          img.onload = () => {
            if (ctx) {
              // ctx.fillStyle = 'transparent';
              ctx.fillStyle = '#ffffff';
              // ctx.fillRect(0, 0, finalSize, finalSize);
              ctx.fillRect(0, 0, finalSize, finalSize);
              ctx.drawImage(img, 0, 0, finalSize, finalSize);
              
              canvas.toBlob((blob) => {
                if (blob) {
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = filename;
                  link.click();
                  URL.revokeObjectURL(url);
                }
              }, 'image/png');
            }
            
            reactRoot.unmount();
            document.body.removeChild(container);
          };
          
          img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
        }
      }, 100);
    });
  };

  const downloadVideo = async (component: React.ReactElement, filename: string, resolution: number, duration: number = 6000) => {
    setIsRecording(true);
    
    // Create container for rendering
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '-9999px';
    container.style.left = '-9999px';
    container.style.width = `${resolution}px`;
    container.style.height = `${resolution}px`;
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.background = '#ffffff';
    document.body.appendChild(container);

    const root = document.createElement('div');
    container.appendChild(root);

    const ReactDOM = await import('react-dom/client');
    const reactRoot = ReactDOM.createRoot(root);
    reactRoot.render(component);
    
    // Wait for component to render
    await new Promise(resolve => setTimeout(resolve, 500));

    const svgElement = root.querySelector('svg');
    if (!svgElement) {
      reactRoot.unmount();
      document.body.removeChild(container);
      setIsRecording(false);
      return;
    }

    // Create canvas for recording
    const canvas = document.createElement('canvas');
    canvas.width = resolution;
    canvas.height = resolution;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      reactRoot.unmount();
      document.body.removeChild(container);
      setIsRecording(false);
      return;
    }

    // Setup MediaRecorder
    const stream = canvas.captureStream(60);
    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'video/webm;codecs=vp9',
      videoBitsPerSecond: 16000000,
    });

    const chunks: Blob[] = [];
    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunks.push(e.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);
      
      reactRoot.unmount();
      document.body.removeChild(container);
      setIsRecording(false);
    };

    mediaRecorder.start();

    // Animation loop
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      
      if (elapsed >= duration) {
        mediaRecorder.stop();
        return;
      }

      // Clear canvas with transparent background
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Get current SVG state
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const img = new Image();
      
      img.onload = () => {
        // Draw centered with padding
        const padding = resolution * 0.1;
        const size = resolution - (padding * 2);
        const x = padding;
        const y = padding;
        ctx.drawImage(img, x, y, size, size);
        requestAnimationFrame(animate);
      };
      
      img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
    };

    animate();
  };

  const logoSets = [
    {
      title: 'Wave X',
      description: 'Company logo',
      icon: <WaveXLogo size={80} animated={true} />,
      full: <WaveXLogoFull size="medium" animated={true} />,
      iconComponent: <WaveXLogo size={500} animated={false} />,
      fullComponent: <WaveXLogoFull size="large" animated={false} />,
      iconAnimated: <WaveXLogo size={800} animated={true} />,
      fullAnimated: <WaveXLogoFull size="large" animated={true} />,
      iconName: 'wavex-icon',
      fullName: 'wavex-full',
    },
    {
      title: 'Wave I',
      description: 'AI Psychological Care Service',
      icon: <WaveLogo size={80} animated={true} />,
      full: <WaveLogoFull size="medium" animated={true} />,
      iconComponent: <WaveLogo size={500} animated={false} />,
      fullComponent: <WaveLogoFull size="large" animated={false} />,
      iconAnimated: <WaveLogo size={800} animated={true} />,
      fullAnimated: <WaveLogoFull size="large" animated={true} />,
      iconName: 'wavei-icon',
      fullName: 'wavei-full',
    },
    {
      title: 'Grounded',
      description: 'Architecture Law Q&A Service',
      icon: <WaveSpaceLogo size={80} animated={true} />,
      full: <GroundedLogoFull size="medium" animated={true} />,
      iconComponent: <WaveSpaceLogo size={500} animated={false} />,
      fullComponent: <GroundedLogoFull size="large" animated={false} />,
      iconAnimated: <WaveSpaceLogo size={800} animated={true} />,
      fullAnimated: <GroundedLogoFull size="large" animated={true} />,
      iconName: 'grounded-icon',
      fullName: 'grounded-full',
    },
    {
      title: 'TodayIs',
      description: 'Emotion-based Life Tracker',
      icon: <TodayIsLogo size={80} animated={true} />,
      full: <TodayIsLogoFull size="medium" animated={true} />,
      iconComponent: <TodayIsLogo size={500} animated={false} />,
      fullComponent: <TodayIsLogoFull size="large" animated={false} />,
      iconAnimated: <TodayIsLogo size={800} animated={true} />,
      fullAnimated: <TodayIsLogoFull size="large" animated={true} />,
      iconName: 'todayis-icon',
      fullName: 'todayis-full',
    },
  ];

  const resolutionInfo = {
    1: '500px (Web)',
    2: '1000px (Retina)',
    3: '1500px (HD)',
    4: '2000px (Print)',
    5: '2500px (Ultra HD)',
    6: '3000px (Premium)',
  };

  const videoResolutionInfo = {
    1280: '1280px (HD)',
    1920: '1920px (Full HD)',
    2560: '2560px (2K)',
    3840: '3840px (4K)',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl mb-4">Logo Download Center</h1>
            <p className="text-xl text-slate-600">
              Download Wave X brand logos in various formats
            </p>
            {isRecording && (
              <div className="mt-4 inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Recording video...
              </div>
            )}
          </div>

          {/* Resolution Settings */}
          <Card className="mb-12 bg-white">
            <CardHeader>
              <CardTitle>Export Settings</CardTitle>
              <CardDescription>Choose your preferred resolution for downloads</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="png-resolution">PNG Resolution</Label>
                <Select value={pngResolution.toString()} onValueChange={(value) => setPngResolution(Number(value))}>
                  <SelectTrigger id="png-resolution">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(resolutionInfo).map(([scale, label]) => (
                      <SelectItem key={scale} value={scale}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-slate-500">
                  Higher resolutions are better for print and large displays
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="video-resolution">Video Resolution</Label>
                <Select value={videoResolution.toString()} onValueChange={(value) => setVideoResolution(Number(value))}>
                  <SelectTrigger id="video-resolution">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(videoResolutionInfo).map(([res, label]) => (
                      <SelectItem key={res} value={res}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-slate-500">
                  4K recommended for professional presentations
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Logo Sets */}
          <div className="space-y-12">
            {logoSets.map((logoSet, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50">
                  <CardTitle className="text-3xl">{logoSet.title}</CardTitle>
                  <CardDescription className="text-lg">{logoSet.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Icon Version */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-center h-40 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg">
                        {logoSet.icon}
                      </div>
                      <div className="text-center mb-4">
                        <p className="text-sm text-slate-600">Icon Only</p>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadSVG(logoSet.iconComponent, `${logoSet.iconName}.svg`)}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          SVG
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadPNG(logoSet.iconComponent, `${logoSet.iconName}.png`, pngResolution)}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          PNG ({resolutionInfo[pngResolution as keyof typeof resolutionInfo]})
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadVideo(logoSet.iconAnimated, `${logoSet.iconName}-animated.webm`, videoResolution)}
                          disabled={isRecording}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Video ({videoResolutionInfo[videoResolution as keyof typeof videoResolutionInfo]})
                        </Button>
                      </div>
                    </div>

                    {/* Full Logo Version */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-center h-40 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg">
                        {logoSet.full}
                      </div>
                      <div className="text-center mb-4">
                        <p className="text-sm text-slate-600">Full Logo</p>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadSVG(logoSet.fullComponent, `${logoSet.fullName}.svg`)}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          SVG
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadPNG(logoSet.fullComponent, `${logoSet.fullName}.png`, pngResolution)}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          PNG ({resolutionInfo[pngResolution as keyof typeof resolutionInfo]})
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadVideo(logoSet.fullAnimated, `${logoSet.fullName}-animated.webm`, videoResolution)}
                          disabled={isRecording}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Video ({videoResolutionInfo[videoResolution as keyof typeof videoResolutionInfo]})
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Usage Guidelines */}
          <Card className="mt-12 bg-gradient-to-r from-blue-50 to-slate-50">
            <CardHeader>
              <CardTitle>Usage Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                <p className="text-slate-700">
                  <strong>SVG Format:</strong> Best for web and digital use. Scales infinitely without quality loss. Static version.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                <p className="text-slate-700">
                  <strong>PNG Format:</strong> High resolution raster image. Choose higher resolutions (4-6x) for print materials and large displays. Lower resolutions (1-3x) for web and digital use.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                <p className="text-slate-700">
                  <strong>Video (WebM):</strong> Animated version recorded at 60fps. 4K resolution recommended for professional presentations. Full HD suitable for most web use. 6 seconds duration with smooth wave animations.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                <p className="text-slate-700">
                  Maintain adequate clear space around logos and avoid distorting proportions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
