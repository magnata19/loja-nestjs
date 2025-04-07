import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProdutoEntity } from '../entity/produto.entity';

@Entity({ name: 'caracteristica_produto' })
export class ProdutoCaracteristicaEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: "caracteristica_nome", length: 100, nullable: false })
  nome: string;

  @Column({ name: "nome", length: 255, nullable: false })
  descricao: string;

  @ManyToOne(() => ProdutoEntity, (produto) => produto.caracteristicas, { orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  produto: ProdutoEntity;
}
