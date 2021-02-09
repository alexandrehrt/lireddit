import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  created_at = new Date();

  @Column()
  updated_at = new Date();
}