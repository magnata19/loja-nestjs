import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "produto_imagem" })
export class ImagemProdutoDTO {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString({ message: 'Nome não é válido.' })
  @IsNotEmpty({ message: 'Campo não pode ser vazio.' })
  @Column({ name: "produto_url", length: 100, nullable: false })
  url: string;

  @IsString({ message: 'Nome não é válido.' })
  @IsNotEmpty({ message: 'Campo não pode ser vazio.' })
  @Column({ name: "produto_descricao", length: 255, nullable: false })
  descricao: string;
}
