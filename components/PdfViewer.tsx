import React from 'react';
import { MbeChapter, BibleStudyLesson } from '../types';

interface PdfViewItem {
  title: string;
  pdfUrl: string;
}

interface PdfViewerProps {
  item: PdfViewItem | null;
  headerDescription?: React.ReactNode;
}


/**
 * Transforms a Google Drive sharing URL into a reliable embeddable URL.
 * @param url The original Google Drive sharing URL.
 * @returns A URL suitable for embedding in an iframe.
 */
function getGoogleDriveEmbedUrl(url: string): string {
    // Regex to extract the file ID from various Google Drive URL formats
    const fileIdMatch = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([^/&?]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
        const fileId = fileIdMatch[1];
        // The /preview endpoint is the most reliable for embedding
        return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    // Fallback for any unexpected URL formats, though unlikely with the current data
    return url;
}


function PdfViewer({ item, headerDescription }: PdfViewerProps) {
  if (!item) {
    return (
      <div className="h-[75vh] w-full bg-gray-900 flex items-center justify-center rounded-lg">
        <p className="text-gray-400">Select an item to begin.</p>
      </div>
    );
  }
  
  const embedUrl = item.pdfUrl ? getGoogleDriveEmbedUrl(item.pdfUrl) : '';

  return (
    <div className="bg-brand-dark/30 rounded-lg overflow-hidden border border-gray-800">
      <div className="p-4 sm:p-6 bg-brand-dark/50">
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-brand-gold">{item.title}</h3>
        {headerDescription && (
            <p className="mt-2 text-gray-300">
                {headerDescription}
            </p>
        )}
      </div>
       <div className="w-full h-[75vh]">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={item.title}
              frameBorder="0"
              allow="autoplay; fullscreen"
              className="w-full h-full"
            ></iframe>
          ) : (
             <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <p className="text-gray-400 font-serif text-xl">Lesson coming soon.</p>
            </div>
          )}
       </div>
    </div>
  );
}

export default PdfViewer;