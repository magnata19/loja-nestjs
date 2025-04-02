import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'produto_caracteristica' })
export class CaracteristicaProdutoDTO {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString({ message: 'Nome não é válido.' })
  @IsNotEmpty({ message: 'Campo não pode ser vazio.' })
  @Column({ name: "nome", length: 100, nullable: false })
  nome: string;

  @IsString({ message: 'Nome não é válido.' })
  @IsNotEmpty({ message: 'Campo não pode ser vazio.' })
  @Column({ name: "nome", length: 255, nullable: false })
  descricao: string;
}
