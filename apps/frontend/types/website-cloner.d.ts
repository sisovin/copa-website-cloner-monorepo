export interface CreateWebsiteJobDto {
  url: string;
  status: string;
}

export interface WebsiteJobResponseDto {
  id: number;
  url: string;
  status: string;
  result: string;
}

export type JobStatus = 'pending' | 'in-progress' | 'completed' | 'failed';
