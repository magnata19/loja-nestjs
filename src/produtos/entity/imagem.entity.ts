import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProdutoEntity } from '../entity/produto.entity';

@Entity({ name: "imagem_produto" })
export class ProdutoImagemEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: "produto_url", length: 100, nullable: false })
  url: string;

  @Column({ name: "produto_descricao", length: 255, nullable: false })
  descricao: string;

  @ManyToOne(() => ProdutoEntity, (produto) => produto.imagens, { orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  produto: ProdutoEntity;
}
