import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { ValidarEmail } from "./validacao/email-unico.validator";
import { UsuarioEntity } from "./entity/usuario.entity";
import { UsuarioService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuarioController],
  providers: [UsuarioRepository, ValidarEmail, UsuarioService]
})
export class UsuarioModule {
}
