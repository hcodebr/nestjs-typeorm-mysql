import { Role } from 'src/enums/role.enum';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity({
    name: 'users'
})
export class UserEntity {

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id: number;

    @Column({
        length: 63
    })
    name: string;

    @Column({
        length: 127,
        unique: true
    })
    email: string;

    @Column({
        length: 127
    })
    password: string;

    @Column({
        type: 'date',
        nullable: true
    })
    birthAt: Date;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedtAt: string;
    
    @Column({
        default: Role.User
    })
    role: number;

}