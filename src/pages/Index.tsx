import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { toPng } from 'html-to-image';

const Index = () => {
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const [text1, setText1] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [date1, setDate1] = useState('');
  
  const [text2, setText2] = useState('');
  const [companyName2, setCompanyName2] = useState('');
  const [date2, setDate2] = useState('');

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
        link.download = 'certificate.jpeg';
        link.href = url;
        link.click();
        
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Failed to generate certificate:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-primary mb-2">Certificate Editor</h1>
          <p className="text-slate-600">Edit text and download</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">English Section</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Main Text</label>
                  <textarea
                    value={text1}
                    onChange={(e) => setText1(e.target.value)}
                    className="w-full p-3 border rounded-lg min-h-[200px] text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="text"
                    value={date1}
                    onChange={(e) => setDate1(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Chinese Section (证书)</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Main Text</label>
                  <textarea
                    value={text2}
                    onChange={(e) => setText2(e.target.value)}
                    className="w-full p-3 border rounded-lg min-h-[150px] text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    value={companyName2}
                    onChange={(e) => setCompanyName2(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="text"
                    value={date2}
                    onChange={(e) => setDate2(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
              </div>
            </Card>

            <Button onClick={downloadCertificate} size="lg" className="w-full gap-2">
              <Icon name="Download" size={20} />
              Download Certificate
            </Button>
          </div>

          <div className="flex justify-center items-start">
            <Card className="p-0 shadow-2xl bg-white overflow-hidden">
              <div
                ref={certificateRef}
                className="w-[800px] h-[580px] relative"
                style={{
                  backgroundImage: 'url(https://cdn.poehali.dev/files/fc12112b-65b4-4648-8c91-e33aa410b54d.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  fontFamily: 'Cambria, serif'
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-12 pt-16">
                  <div className="text-center">
                    {text1 && (
                      <p className="text-sm leading-relaxed mb-6 px-8"
                        style={{ color: '#2C1810', textAlign: 'justify' }}
                      >
                        {text1}
                      </p>
                    )}

                    {companyName && (
                      <p className="text-base font-semibold mb-2" style={{ color: '#2C1810' }}>
                        {companyName}
                      </p>
                    )}
                    
                    {date1 && (
                      <p className="text-base mb-6" style={{ color: '#2C1810' }}>
                        {date1}
                      </p>
                    )}

                    {text2 && (
                      <p className="text-sm leading-relaxed mb-6 px-8"
                        style={{ color: '#2C1810', textAlign: 'justify' }}
                      >
                        {text2}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <div className="text-right">
                      {companyName2 && (
                        <p className="text-base font-semibold mb-1" style={{ color: '#2C1810' }}>
                          {companyName2}
                        </p>
                      )}
                      {date2 && (
                        <p className="text-base" style={{ color: '#2C1810' }}>
                          {date2}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;