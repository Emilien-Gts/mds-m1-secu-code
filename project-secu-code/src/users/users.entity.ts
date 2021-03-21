import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  naissance: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @Column()
  adresse: string;
}
