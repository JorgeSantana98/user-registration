import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class userEntity {
    @PrimaryGeneratedColumn()
    id: number;
}