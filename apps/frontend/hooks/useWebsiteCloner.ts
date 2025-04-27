import { useState } from 'react';

export function useWebsiteCloner() {
  const [jobId, setJobId] = useState<number | null>(null);
  const [jobStatus, setJobStatus] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const cloneWebsite = async (url: string) => {
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to create job');
      }

      const data = await response.json();
      setJobId(data.jobId);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchJobStatus = async (id: number) => {
    try {
      const response = await fetch(`/api/jobs/${id}`);

      if (!response.ok) {
        throw new Error('Failed to fetch job status');
      }

      const data = await response.json();
      setJobStatus(data.status);

      if (data.status === 'completed') {
        setDownloadUrl(`/api/download/${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const downloadClonedWebsite = async (id: number) => {
    try {
      const response = await fetch(`/api/download/${id}`);

      if (!response.ok) {
        throw new Error('Failed to download the cloned website');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `cloned-website-${id}.html`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    jobId,
    jobStatus,
    downloadUrl,
    cloneWebsite,
    fetchJobStatus,
    downloadClonedWebsite,
  };
}
