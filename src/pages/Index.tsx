import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { toPng } from 'html-to-image';

const Index = () => {
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const [text1, setText1] = useState('The certificate confirms that TechGlobal (Yuzhno-Sakhalinsk, Russia) is the official distributor in the Russian Federation with the rights to sell and service products manufactured by AcnTruck Vehicle & Machinery (Shanghai) Co., Ltd. in accordance with Contract No. 126 dated 18.10.2022 between AcnTruck Vehicle & Machinery (Shanghai) Co., Ltd. and TechGlobal LLC. The certificate was issued on 19.10.2022.');
  const [companyName, setCompanyName] = useState('AcnTruck Vehicle & Machinery (Shanghai) Co., Ltd.');
  const [date1, setDate1] = useState('October 19, 2022');
  
  const [text2, setText2] = useState('本证书确认TechGlobal公司（俄罗斯联邦南萨哈林斯克）是俄罗斯联邦境内销售和服务由中国上海安川机械有限公司制造产品的官方经销商。根据2022年10月18日签订的第126号合同，安川机械（上海）有限公司与TechGlobal有限责任公司之间达成协议。本证书签发日期为2022年10月19日。');
  const [companyName2, setCompanyName2] = useState('安川机械（上海）有限公司');
  const [date2, setDate2] = useState('2022年10月19日');

  const downloadCertificate = async () => {
    if (certificateRef.current) {
      try {
        const dataUrl = await toPng(certificateRef.current, {
          quality: 1,
          pixelRatio: 3,
          backgroundColor: '#ffffff',
          skipFonts: true,
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
        alert('Error downloading certificate. Please try again.');
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
                className="w-[1000px] h-[720px] relative"
                style={{
                  fontFamily: 'Cambria, serif',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5B8 25%, #D4AF37 50%, #F4E5B8 75%, #D4AF37 100%)'
                }}
              >
                <svg className="absolute inset-0 w-full h-full opacity-10" style={{ mixBlendMode: 'overlay' }}>
                  <defs>
                    <pattern id="fish-scale" x="0" y="0" width="60" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="30" cy="40" r="30" fill="#C9A961" opacity="0.3"/>
                      <circle cx="60" cy="40" r="30" fill="#C9A961" opacity="0.3"/>
                      <circle cx="0" cy="40" r="30" fill="#C9A961" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#fish-scale)"/>
                </svg>

                <div 
                  className="absolute inset-0 m-8"
                  style={{
                    border: '20px solid',
                    borderImage: 'linear-gradient(45deg, #B8860B, #FFD700, #B8860B) 1',
                    boxShadow: 'inset 0 0 30px rgba(212,175,55,0.3)'
                  }}
                >
                  <div className="absolute inset-0 m-4" style={{ border: '3px solid #8B6914' }}>
                    <svg className="absolute top-0 left-0 w-32 h-32" viewBox="0 0 100 100">
                      <path d="M50,10 Q60,20 50,30 Q40,20 50,10" fill="#B8860B"/>
                      <circle cx="50" cy="25" r="8" fill="#FFD700"/>
                      <path d="M30,50 Q40,40 50,50 Q40,60 30,50" fill="#B8860B"/>
                    </svg>
                    
                    <svg className="absolute top-0 right-0 w-32 h-32" viewBox="0 0 100 100">
                      <path d="M50,10 Q60,20 50,30 Q40,20 50,10" fill="#B8860B" transform="rotate(90 50 50)"/>
                      <circle cx="50" cy="25" r="8" fill="#FFD700" transform="rotate(90 50 50)"/>
                      <path d="M30,50 Q40,40 50,50 Q40,60 30,50" fill="#B8860B" transform="rotate(90 50 50)"/>
                    </svg>

                    <svg className="absolute bottom-0 left-0 w-32 h-32" viewBox="0 0 100 100">
                      <path d="M50,10 Q60,20 50,30 Q40,20 50,10" fill="#B8860B" transform="rotate(270 50 50)"/>
                      <circle cx="50" cy="25" r="8" fill="#FFD700" transform="rotate(270 50 50)"/>
                      <path d="M30,50 Q40,40 50,50 Q40,60 30,50" fill="#B8860B" transform="rotate(270 50 50)"/>
                    </svg>

                    <svg className="absolute bottom-0 right-0 w-32 h-32" viewBox="0 0 100 100">
                      <path d="M50,10 Q60,20 50,30 Q40,20 50,10" fill="#B8860B" transform="rotate(180 50 50)"/>
                      <circle cx="50" cy="25" r="8" fill="#FFD700" transform="rotate(180 50 50)"/>
                      <path d="M30,50 Q40,40 50,50 Q40,60 30,50" fill="#B8860B" transform="rotate(180 50 50)"/>
                    </svg>
                  </div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between p-20 pt-24">
                  <div className="text-center bg-white/90 rounded-lg p-12 shadow-lg">
                    <h2 className="text-6xl font-bold mb-8 tracking-wide"
                      style={{ color: '#8B0000' }}
                    >
                      CERTIFICATE
                    </h2>
                    
                    {text1 && (
                      <p className="text-base leading-relaxed mb-8 px-6"
                        style={{ color: '#2C1810', textAlign: 'justify' }}
                      >
                        {text1}
                      </p>
                    )}

                    <div className="flex justify-center items-center gap-6 mb-8">
                      {companyName && (
                        <div className="text-center">
                          <p className="text-lg font-semibold mb-2" style={{ color: '#2C1810' }}>
                            {companyName}
                          </p>
                          {date1 && (
                            <p className="text-base" style={{ color: '#2C1810' }}>
                              {date1}
                            </p>
                          )}
                        </div>
                      )}
                      
                      <img 
                        src="https://cdn.poehali.dev/files/7321543c-55e5-4ca1-be2c-dcc77fa47b51.png" 
                        alt="Seal" 
                        className="w-32 h-32 object-contain"
                        crossOrigin="anonymous"
                      />
                    </div>

                    <h3 className="text-5xl font-bold mb-6" style={{ color: '#000' }}>
                      证 书
                    </h3>

                    {text2 && (
                      <p className="text-base leading-relaxed mb-6 px-6"
                        style={{ color: '#2C1810', textAlign: 'justify' }}
                      >
                        {text2}
                      </p>
                    )}

                    <div className="flex justify-end items-center gap-6 mt-8">
                      <div className="text-right">
                        {companyName2 && (
                          <p className="text-lg font-semibold mb-2" style={{ color: '#2C1810' }}>
                            {companyName2}
                          </p>
                        )}
                        {date2 && (
                          <p className="text-base" style={{ color: '#2C1810' }}>
                            {date2}
                          </p>
                        )}
                      </div>
                      
                      <img 
                        src="https://cdn.poehali.dev/files/7321543c-55e5-4ca1-be2c-dcc77fa47b51.png" 
                        alt="Seal" 
                        className="w-32 h-32 object-contain"
                        crossOrigin="anonymous"
                      />
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