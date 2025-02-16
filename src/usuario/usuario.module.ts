import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { ValidarEmail } from "./validacao/email-unico.validator";
import { UsuarioEntity } from "./entity/usuario.entity";

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioRepository, ValidarEmail, UsuarioEntity]
})
export class UsuarioModule { }
