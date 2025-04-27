import React from 'react';
import { useWebsiteCloner } from '../../hooks/useWebsiteCloner';

interface DownloadButtonProps {
  jobId: number;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ jobId }) => {
  const { downloadWebsite } = useWebsiteCloner();

  const handleDownload = async () => {
    await downloadWebsite(jobId);
  };

  return (
    <button onClick={handleDownload}>
      Download Cloned Website
    </button>
  );
};

export default DownloadButton;
