import {
    Column, CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { CaracteristicaProdutoDTO } from "../dto/caracteristica.produto.dto";
import { ImagemProdutoDTO } from "../dto/imagem.produto.dto";
import { ProdutoCaracteristicaEntity } from "./caracteristica.entity";
import { ProdutoImagemEntity } from "./imagem.entity";
import { ValidaNome } from "../validator/produto-unico.validator";

@Entity({ name: 'produtos' })
export class ProdutoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    // @Column({ name: 'usuario_id', nullable: false })
    // usuarioId: string;

    @Column({ name: "nome", length: 100, nullable: false })
    nome: string;

    @Column({ name: "valor", nullable: false })
    valor: number;

    @Column({ name: "quantidade_disponivel", nullable: false })
    quantidadeDisponivel: number;

    @Column({ name: 'descricao', length: 255, nullable: false })
    descricao: string;

    @Column({ name: "categoria", length: 100, nullable: false })
    categoria: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @OneToMany(() => ProdutoCaracteristicaEntity, (caracteristica) => caracteristica.produto, { cascade: true, eager: true })
    caracteristicas: ProdutoCaracteristicaEntity[];

    @OneToMany(() => ProdutoImagemEntity, (imagem) => imagem.produto, { cascade: true, eager: true })
    imagens: ProdutoImagemEntity[];

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: string;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: string;
}