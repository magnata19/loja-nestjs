import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
export class CaracteristicaProdutoDTO {

  @IsString({ message: 'Nome não é válido.' })
  @IsNotEmpty({ message: 'Campo não pode ser vazio.' })
  nome: string;

  @IsString({ message: 'Nome não é válido.' })
  @IsNotEmpty({ message: 'Campo não pode ser vazio.' })
  descricao: string;
}
