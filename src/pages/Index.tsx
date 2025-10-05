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
        const link = document.createElement('a');
        link.download = 'distributor-certificate.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Failed to generate certificate:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
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
              className="w-[1200px] h-[900px] bg-white p-16 relative"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              <div className="absolute inset-0 border-[20px] border-double border-primary m-8"></div>
              
              <div className="absolute top-12 left-12 w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center">
                <div className="text-primary">
                  <Icon name="Award" size={48} />
                </div>
              </div>
              
              <div className="absolute top-12 right-12 w-24 h-24 bg-destructive/5 rounded-full flex items-center justify-center">
                <div className="text-destructive">
                  <Icon name="Building2" size={48} />
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <div className="mb-8">
                  <div className="inline-block bg-primary/10 px-6 py-3 rounded-full mb-6">
                    <Icon name="Award" size={40} className="text-primary mx-auto" />
                  </div>
                  <h2
                    className="text-6xl font-bold mb-4 tracking-wide text-slate-800"
                    style={{ fontFamily: 'Cormorant, serif' }}
                  >
                    DISTRIBUTOR CERTIFICATE
                  </h2>
                  <div className="w-48 h-1 bg-gradient-to-r from-primary via-destructive to-primary mx-auto"></div>
                </div>

                <div className="max-w-3xl space-y-8 text-slate-700">
                  <p className="text-xl leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    This is to certify that
                  </p>

                  <div className="py-6 px-8 bg-slate-50 border-l-4 border-primary rounded-r-lg">
                    <h3
                      className="text-4xl font-bold text-primary mb-2"
                      style={{ fontFamily: 'Cormorant, serif' }}
                    >
                      Acntruck Vehicle & Machinery
                    </h3>
                    <p className="text-2xl text-slate-600">(Shanghai) Co., Ltd</p>
                  </div>

                  <p className="text-xl leading-relaxed px-4">
                    hereby authorizes
                  </p>

                  <div className="py-6 px-8 bg-destructive/5 border-l-4 border-destructive rounded-r-lg">
                    <h3
                      className="text-4xl font-bold text-destructive mb-2"
                      style={{ fontFamily: 'Cormorant, serif' }}
                    >
                      TechGlobal
                    </h3>
                    <p className="text-2xl text-slate-600">Yuzhno-Sakhalinsk</p>
                  </div>

                  <p className="text-xl leading-relaxed px-4">
                    to act as an official distributor of products manufactured by{' '}
                    <span className="font-semibold text-primary">
                      Acntruck Vehicle & Machinery (Shanghai) Co., Ltd
                    </span>{' '}
                    throughout the territory of the{' '}
                    <span className="font-semibold text-slate-800">Russian Federation</span>.
                  </p>
                </div>

                <div className="mt-12 flex justify-between items-end w-full max-w-3xl px-8">
                  <div className="text-center">
                    <div className="w-48 h-24 flex items-center justify-center mb-2">
                      <div className="w-20 h-20 border-4 border-primary rounded-full flex items-center justify-center bg-primary/5">
                        <Icon name="Stamp" size={32} className="text-primary" />
                      </div>
                    </div>
                    <div className="border-t-2 border-slate-300 pt-2">
                      <p className="text-sm font-semibold text-slate-600">Official Seal</p>
                      <p className="text-xs text-slate-500">Shanghai, China</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-48 h-24 flex items-center justify-center mb-2">
                      <p
                        className="text-4xl text-primary"
                        style={{ fontFamily: 'Cormorant, serif', fontStyle: 'italic' }}
                      >
                        Authorized
                      </p>
                    </div>
                    <div className="border-t-2 border-slate-300 pt-2">
                      <p className="text-sm font-semibold text-slate-600">Signature</p>
                      <p className="text-xs text-slate-500">Director</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
                  <Icon name="Calendar" size={16} />
                  <p>Issued: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>

              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-12 opacity-30">
                <Icon name="Award" size={24} className="text-primary" />
                <Icon name="Shield" size={24} className="text-primary" />
                <Icon name="CheckCircle2" size={24} className="text-primary" />
                <Icon name="Building2" size={24} className="text-destructive" />
                <Icon name="Globe" size={24} className="text-destructive" />
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
