
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';

interface TextbookViewerProps {
  url: string;
  title: string;
}

const TextbookViewer: React.FC<TextbookViewerProps> = ({ url, title }) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      
      <Card className="flex-grow bg-gray-900/50 border-gray-700">
        <CardContent className="p-1 sm:p-2 h-full">
          <ScrollArea className="h-[calc(100vh-180px)] w-full rounded-md">
            <iframe 
              src={url}
              className="w-full h-full min-h-[calc(100vh-200px)] rounded-md"
              title={title}
              sandbox="allow-scripts allow-same-origin"
            />
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default TextbookViewer;
