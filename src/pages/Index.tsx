import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { toPng } from 'html-to-image';

const Index = () => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const downloadCertificate = async () => {
    if (certificateRef.current) {
      try {
        const dataUrl = await toPng(certificateRef.current, {
          quality: 1,
          pixelRatio: 3,
          backgroundColor: '#ffffff',
        });
        
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const jpegBlob = new Blob([blob], { type: 'image/jpeg' });
        const url = URL.createObjectURL(jpegBlob);
        
        const link = document.createElement('a');
        link.download = 'distributor-certificate.jpeg';
        link.href = url;
        link.click();
        
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Failed to generate certificate:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Distributor Certificate</h1>
          <p className="text-slate-600">Official Authorization Document</p>
        </div>

        <div className="mb-6 flex justify-center">
          <Button onClick={downloadCertificate} size="lg" className="gap-2">
            <Icon name="Download" size={20} />
            Download as JPEG
          </Button>
        </div>

        <div className="flex justify-center">
          <Card className="p-0 shadow-2xl bg-white overflow-hidden">
            <div
              ref={certificateRef}
              className="w-[1400px] h-[1000px] relative bg-white"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50"></div>
              
              <div className="absolute inset-0 border-[30px] border-double m-6"
                style={{ 
                  borderColor: '#4A90A4',
                  borderImageSource: 'repeating-linear-gradient(45deg, #4A90A4 0, #4A90A4 10px, #6BA8BA 10px, #6BA8BA 20px)',
                  borderImageSlice: 1
                }}
              ></div>

              <div className="absolute inset-0 border-[8px] border-solid m-16"
                style={{ borderColor: '#2B6B7F' }}
              ></div>

              <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-20">
                <circle cx="64" cy="64" r="60" fill="#4A90A4" />
                <circle cx="64" cy="64" r="48" fill="#2B6B7F" />
              </svg>

              <div className="absolute top-8 left-8 w-64 h-full opacity-20">
                <svg viewBox="0 0 100 800" className="w-full h-full">
                  <path d="M 20,0 Q 60,100 20,200 Q 60,300 20,400 Q 60,500 20,600 Q 60,700 20,800" 
                    fill="none" stroke="#4A90A4" strokeWidth="2"/>
                  <path d="M 40,0 Q 80,100 40,200 Q 80,300 40,400 Q 80,500 40,600 Q 80,700 40,800" 
                    fill="none" stroke="#6BA8BA" strokeWidth="1.5"/>
                </svg>
              </div>

              <div className="absolute top-8 right-8 w-64 h-full opacity-20">
                <svg viewBox="0 0 100 800" className="w-full h-full">
                  <path d="M 80,0 Q 40,100 80,200 Q 40,300 80,400 Q 40,500 80,600 Q 40,700 80,800" 
                    fill="none" stroke="#4A90A4" strokeWidth="2"/>
                  <path d="M 60,0 Q 20,100 60,200 Q 20,300 60,400 Q 20,500 60,600 Q 20,700 60,800" 
                    fill="none" stroke="#6BA8BA" strokeWidth="1.5"/>
                </svg>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between p-24 pt-32">
                <div className="text-center">
                  <p className="text-lg mb-6" style={{ color: '#d4a5a5' }}>
                    acntruck vehicle & machinery (shanghai) co., ltd
                  </p>
                  
                  <h2 className="text-7xl font-bold mb-4 tracking-wide"
                    style={{ color: '#2B6B7F' }}
                  >
                    CERTIFICATE
                  </h2>
                  <p className="text-lg mb-12" style={{ color: '#d4a5a5' }}>official representative</p>

                  <p className="text-lg mb-8 leading-relaxed" style={{ color: '#d4a5a5' }}>
                    this certificate confirms that the company
                  </p>

                  <div className="mb-8">
                    <div className="inline-block border-b-2 border-slate-400 pb-2 px-12">
                      <p className="text-lg" 
                        style={{ fontFamily: 'Roboto, sans-serif', color: '#d4a5a5' }}
                      >
                        techglobal llc
                      </p>
                    </div>
                  </div>

                  <p className="text-lg mb-4 max-w-4xl mx-auto leading-relaxed" style={{ color: '#d4a5a5' }}>
                    has the status of an official representative of acntruck vehicle & machinery (shanghai) co., ltd
                  </p>
                  <p className="text-lg" style={{ color: '#d4a5a5' }}>
                    (acntruck vehicle & machinery (shanghai) co., ltd)
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex flex-col items-center">
                    <div className="w-48 h-48 flex items-center justify-center mb-4">
                      <img 
                        src="https://cdn.poehali.dev/files/811a4b75-439a-4352-903e-eb66e553653e.png" 
                        alt="Official Seal" 
                        className="w-44 h-44 object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-lg mb-1" style={{ color: '#d4a5a5' }}>date 14.03.2022</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="bg-white/60 rounded-lg p-6 mb-4 border-2 border-slate-200">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name="Award" size={32} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-lg font-bold" style={{ color: '#d4a5a5' }}>#1</p>
                          <p className="text-lg" style={{ color: '#d4a5a5' }}>official</p>
                          <p className="text-lg" style={{ color: '#d4a5a5' }}>distributor</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-lg" style={{ color: '#d4a5a5' }}>certificate № 027</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="mb-4">
                      <p className="text-lg mb-2" style={{ color: '#d4a5a5' }}>director</p>
                      <p className="text-lg mb-4" style={{ color: '#d4a5a5' }}>acntruck vehicle & machinery</p>
                      <div className="text-5xl leading-none mb-2" style={{ color: '#d4a5a5' }}>
                        <p style={{ writingMode: 'vertical-rl', fontFamily: 'Roboto, sans-serif', letterSpacing: '0.1em' }}>李明华</p>
                      </div>
                    </div>
                    <div className="border-t-2 border-slate-400 w-48 pt-2">
                      <p className="text-lg text-right" style={{ color: '#d4a5a5' }}>signature</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>Certificate generated by poehali.dev • Click download to save as JPEG</p>
        </div>
      </div>
    </div>
  );
};

export default Index;