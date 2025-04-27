import React, { useState } from 'react';
import { useWebsiteCloner } from '../../hooks/useWebsiteCloner';

const UrlForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const { createJob } = useWebsiteCloner();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await createJob(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url">Enter URL to clone:</label>
      <input
        type="text"
        id="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Clone Website</button>
    </form>
  );
};

export default UrlForm;
