import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UsuarioDto {
  @IsString({ message: 'Nome não pode ser nulo.' })
  @IsNotEmpty({ message: 'Nome não pode ser nulo.' })
  nome: string;

  @IsEmail(undefined, { message: 'Email informado é inválido.' })
  email: string;

  @MinLength(6, { message: 'Senha precisa ter o mínimo de 6 caracteres.' })
  senha: string;
}
