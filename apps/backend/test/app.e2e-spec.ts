import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WebsiteJob } from '../src/database/entities/website-job.entity';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let repository: Repository<WebsiteJob>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    repository = moduleFixture.get<Repository<WebsiteJob>>(getRepositoryToken(WebsiteJob));
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    await repository.query('DELETE FROM website_job;');
  });

  it('/clone (POST)', async () => {
    const url = 'https://example.com';
    const response = await request(app.getHttpServer())
      .post('/website-cloner/clone')
      .send({ url })
      .expect(201);

    expect(response.text).toContain('<html');
  });

  it('should save the job to the database', async () => {
    const url = 'https://example.com';
    await request(app.getHttpServer())
      .post('/website-cloner/clone')
      .send({ url })
      .expect(201);

    const jobs = await repository.find();
    expect(jobs.length).toBe(1);
    expect(jobs[0].url).toBe(url);
  });
});
