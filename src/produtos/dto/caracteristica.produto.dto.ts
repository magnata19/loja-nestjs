import { IsNotEmpty, IsString } from 'class-validator';

export class CaracteristicaProdutoDTO {
  @IsString({ message: 'Nome não é válido.' })
  @IsNotEmpty({ message: 'Campo não pode ser vazio.' })
  nome: string;

  @IsString({ message: 'Nome não é válido.' })
  @IsNotEmpty({ message: 'Campo não pode ser vazio.' })
  descricao: string;
}
