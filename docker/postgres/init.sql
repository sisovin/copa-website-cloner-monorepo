-- Create or alter database tables, indexes, or constraints
CREATE TABLE IF NOT EXISTS website_job (
    id SERIAL PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    result TEXT
);

-- Add or update initial data to be inserted into the database during initialization
INSERT INTO website_job (url, status, result) VALUES
('https://example.com', 'completed', '<html>Example content</html>'),
('https://example.org', 'pending', NULL);

-- Adjust database settings or configurations as needed
ALTER DATABASE postgres SET timezone TO 'UTC';
