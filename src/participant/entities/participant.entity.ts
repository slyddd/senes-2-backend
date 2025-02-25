import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Participant {
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column({})
  firstName: String;

  @Column({})
  middleName: String;

  @Column({})
  lastName: String;

  @Column({})
  secondLastName: String;

  @Column({})
  gender: String;

  @Column({})
  birthDate: Date;
}
