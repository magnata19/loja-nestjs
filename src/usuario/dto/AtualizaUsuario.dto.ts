import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { EmailValido } from '../validacao/email-unico.validator';

export class AtualizaUsuarioDto {
  @IsString({ message: 'Nome não pode ser nulo.' })
  @IsNotEmpty({ message: 'Nome não pode ser nulo.' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'Email informado é inválido.' })
  @EmailValido({ message: "Já existe um usuário com este e-mail." })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'Senha precisa ter o mínimo de 6 caracteres.' })
  @IsOptional()
  senha: string;
}
