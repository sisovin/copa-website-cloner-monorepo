import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WebsiteJob {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  status: string;

  @Column('text', { nullable: true })
  result: string;
}
