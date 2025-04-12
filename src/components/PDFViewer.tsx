
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { FileQuestion } from 'lucide-react';

interface PDFViewerProps {
  pdfUrl: string | null;
  title: string;
  isComingSoon?: boolean;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title, isComingSoon = false }) => {
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

  const embedUrl = pdfUrl ? getGoogleDriveEmbedUrl(pdfUrl) : '';

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      
      <Card className="flex-grow bg-gray-900/50 border-gray-700">
        <CardContent className="p-1 sm:p-2 h-full">
          {isComingSoon ? (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] w-full rounded-md">
              <div className="bg-staxed-darkBlue/40 p-8 rounded-2xl flex flex-col items-center max-w-md text-center">
                <FileQuestion size={isMobile ? 60 : 80} className="text-purple-400 mb-6" />
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">Coming Soon</h3>
                <p className="text-gray-300 md:text-lg">
                  We're currently preparing {title.toLowerCase()} for this subject. 
                  Check back soon for updates!
                </p>
              </div>
            </div>
          ) : (
            <ScrollArea className="h-[calc(100vh-180px)] w-full rounded-md">
              <div className="h-full w-full">
                <iframe 
                  src={embedUrl}
                  className="w-full h-full min-h-[calc(100vh-200px)] rounded-md"
                  allow="autoplay"
                  title={title}
                />
              </div>
            </ScrollArea>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PDFViewer;
