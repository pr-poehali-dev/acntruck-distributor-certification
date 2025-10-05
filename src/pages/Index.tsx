import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { toPng } from 'html-to-image';

const Index = () => {
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const [text1, setText1] = useState('The certificate certifies that «Agroresurs» Company (Chelyabinsk, Russia) is the official dealer on the premises of Russian Federation with the authorized rights for sale and maintenance service of retail equipment and food machinery of «Harbin Golden Happiness Commercial Machinery Co., Ltd.» Harbin, China under the contract 1 dated as of 09.06.2008 between «Giness Co., Ltd.» and «Harbin Golden Happiness Commercial Machinery Co., Ltd.». The certificate is issued on 01.01.2009');
  const [companyName, setCompanyName] = useState('Harbin Golden Happiness Commercial Machinery Co., Ltd');
  const [date1, setDate1] = useState('Jan 1, 2009');
  
  const [text2, setText2] = useState('本证书兹授权俄罗斯车里亚宾斯克 Agroresurs 公司为中国哈尔滨金美乐商业机械有限公司在俄罗斯联邦境内的官方销售服务商。授权该公司在双方于2008年6月9日签订的第一号合同框架下，在俄罗斯联邦境内销售和维修我公司所生产的系列产品。本证书生效日期：2009年1月1日。');
  const [companyName2, setCompanyName2] = useState('哈尔滨金美乐商业机械有限公司');
  const [date2, setDate2] = useState('2009年1月1日');

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
                    <h2 className="text-5xl font-bold mb-6 tracking-wide"
                      style={{ color: '#8B0000' }}
                    >
                      CERTIFICATE
                    </h2>
                    
                    <p className="text-sm leading-relaxed mb-6 px-8"
                      style={{ color: '#2C1810', textAlign: 'justify' }}
                    >
                      {text1}
                    </p>

                    <div className="mb-6">
                      <p className="text-base font-semibold" style={{ color: '#2C1810' }}>
                        {companyName}
                      </p>
                      <p className="text-base" style={{ color: '#2C1810' }}>
                        {date1}
                      </p>
                    </div>

                    <h3 className="text-4xl font-bold mb-4" style={{ color: '#000' }}>
                      证 书
                    </h3>

                    <p className="text-sm leading-relaxed mb-6 px-8"
                      style={{ color: '#2C1810', textAlign: 'justify' }}
                    >
                      {text2}
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <div className="text-right">
                      <p className="text-base font-semibold mb-1" style={{ color: '#2C1810' }}>
                        {companyName2}
                      </p>
                      <p className="text-base" style={{ color: '#2C1810' }}>
                        {date2}
                      </p>
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
