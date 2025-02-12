import {
  ArrayMinSize,
  arrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaProdutoDTO } from './caracteristica.produto.dto';
import { ImagemProdutoDTO } from './imagem.produto.dto';
import { Type } from 'class-transformer';

export class ProdutoDTO {
  @IsString({ message: 'Nome inválido.' })
  @IsNotEmpty({ message: 'Campo nome não pode ser vazio.' })
  nome: string;

  @IsNotEmpty({ message: 'Valor não poder estar vazio.' })
  @IsNumber(undefined, { message: 'Valor inválido, tente novamente!' })
  @Min(0, { message: 'Valor mínimo definido é 0.' })
  valor: number;

  @IsNumber(undefined, { message: 'Valor inválido, tente novamente!' })
  quantidadeDisponivel: number;

  @IsNotEmpty({ message: 'Descrição não pode estar vazia.' })
  @IsString({ message: 'Descrição inválida.' })
  @MaxLength(1000, { message: 'Descrição com limite excedido.' })
  descricao: string;

  @ValidateNested()
  @IsArray()
  @Type(() => CaracteristicaProdutoDTO)
  @ArrayMinSize(3, {
    message: 'Forneça pelo menos 3 características para o produto.',
  })
  caracteristicas: CaracteristicaProdutoDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => ImagemProdutoDTO)
  @ArrayMinSize(1, { message: 'Insira no mínimo uma imagem válida.' })
  imagens: ImagemProdutoDTO[];

  @IsNotEmpty({ message: 'Categoria do produto não pode estar vazia.' })
  @IsString({ message: 'Categoria inválida.' })
  categoria: string;
}
