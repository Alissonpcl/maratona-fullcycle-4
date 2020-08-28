import {Entity, Column, CreateDateColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'categories'})
export class Category {

    @PrimaryGeneratedColumn()

    id: number;

    @Column()
    name: string;

    @CreateDateColumn({type: 'datetime'})
    created_at: Date
}
