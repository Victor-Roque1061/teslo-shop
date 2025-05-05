import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true})
    title: string;

    /* 
    
    @Column('number')
    price: number;

    @Column('text')
    array:tru,

    @Column('int', {default: 0,})
    stock: number;

    @Column('text',{array:true})
    sizes: string[];

    */
}
