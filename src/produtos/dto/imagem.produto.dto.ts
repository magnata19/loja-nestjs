import { IsNotEmpty, IsString } from 'class-validator';

export class ImagemProdutoDTO {
  @IsString({ message: 'Nome não é válido.' })
  @IsNotEmpty({ message: 'Campo não pode ser vazio.' })
  url: string;

  @IsString({ message: 'Nome não é válido.' })
  @IsNotEmpty({ message: 'Campo não pode ser vazio.' })
  descricao: string;
}
