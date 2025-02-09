import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  criaUsuario(@Body() dados: string) {
    return this.usuarioRepository.salvarUsuario(dados);
  }

  @Get()
  listarUsuarios() {
    return this.usuarioRepository.listarUsuarios();
  }
}
