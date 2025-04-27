import React, { useEffect, useState } from 'react';
import { usePolling } from '../../hooks/usePolling';

interface StatusIndicatorProps {
  jobId: number;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ jobId }) => {
  const [status, setStatus] = useState<string>('');
  const { startPolling, stopPolling } = usePolling();

  useEffect(() => {
    const fetchStatus = async () => {
      const response = await fetch(`/api/jobs/${jobId}`);
      const data = await response.json();
      setStatus(data.status);
    };

    const pollingId = startPolling(fetchStatus, 5000);

    return () => {
      stopPolling(pollingId);
    };
  }, [jobId, startPolling, stopPolling]);

  return <div>Job Status: {status}</div>;
};

export default StatusIndicator;
