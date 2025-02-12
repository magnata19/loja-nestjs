import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioDto } from './dto/Usuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  criaUsuario(@Body() dados: UsuarioDto) {
    return this.usuarioRepository.salvarUsuario(dados);
  }

  @Get()
  listarUsuarios() {
    return this.usuarioRepository.listarUsuarios();
  }
}
