import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("login")
export class loginEntity {
    @PrimaryGeneratedColumn()
    id: number;


}