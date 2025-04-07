import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProdutoEntity } from '../entity/produto.entity';
export class ImagemProdutoDTO {

  @IsString({ message: 'Nome não é válido.' })
  @IsNotEmpty({ message: 'Campo não pode ser vazio.' })
  url: string;

  @IsString({ message: 'Nome não é válido.' })
  @IsNotEmpty({ message: 'Campo não pode ser vazio.' })
  descricao: string;
}
