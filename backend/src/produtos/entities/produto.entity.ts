import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('produtos') // Garanta que está usando o nome plural
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;
}