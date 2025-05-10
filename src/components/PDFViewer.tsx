
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from '@/hooks/use-mobile';

interface PDFViewerProps {
  pdfUrl: string | null;
  title: string;
  isComingSoon?: boolean;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title, isComingSoon = false }) => {
  const isMobile = useIsMobile();
  
  // Convert Google Drive view link to direct embed link
  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com/file/d/')) {
      // Extract the file ID
      const fileIdMatch = url.match(/\/d\/([^\/]+)/);
      if (fileIdMatch && fileIdMatch[1]) {
        return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
      }
    }
    return url;
  };
  
  if (isComingSoon) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 shadow-xl overflow-hidden">
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-4 p-4 rounded-full bg-gray-700/50">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-medium text-white mb-2">{title} Coming Soon</h3>
          <p className="text-gray-300 text-center max-w-md px-4">
            We're working on bringing you the best learning materials. Stay tuned!
          </p>
        </div>
      </div>
    );
  }
  
  if (!pdfUrl) {
    return null;
  }
  
  const embedUrl = getEmbedUrl(pdfUrl);
  
  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 shadow-xl overflow-hidden">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <a 
          href={pdfUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center"
        >
          Open in new tab
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
      
      <div className={`w-full ${isMobile ? 'h-[500px]' : 'h-[800px]'}`}>
        <iframe
          src={embedUrl}
          title={title}
          width="100%"
          height="100%"
          allow="autoplay"
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default PDFViewer;
