import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { ValidarEmail } from "./validacao/email-unico.validator";

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioRepository, ValidarEmail],
})
export class UsuarioModule { }
