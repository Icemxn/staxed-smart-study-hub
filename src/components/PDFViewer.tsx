
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title }) => {
  const isMobile = useIsMobile();
  
  // Extract Google Drive file ID from the URL
  const getGoogleDriveEmbedUrl = (url: string) => {
    const regex = /\/d\/([^/]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  const embedUrl = getGoogleDriveEmbedUrl(pdfUrl);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      
      <Card className="flex-grow bg-gray-900/50 border-gray-700">
        <CardContent className="p-1 sm:p-2 h-full">
          <ScrollArea className="h-[calc(100vh-180px)] w-full rounded-md">
            <div className="h-full w-full">
              <iframe 
                src={embedUrl}
                className="w-full h-full min-h-[600px] md:min-h-[800px] rounded-md"
                allow="autoplay"
                title={title}
              />
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default PDFViewer;
