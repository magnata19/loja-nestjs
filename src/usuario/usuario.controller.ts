import { Body, Controller, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioDto } from './dto/Usuario.dto';
import { UsuarioEntity } from './entity/usuario.entity';
import { v4 as uuid } from 'uuid';
import { ListaUsuarios } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDto } from './dto/AtualizaUsuario.dto';

@Controller('/usuarios')
@Injectable()
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository,
  ) { }

  @Post()
  criaUsuario(@Body() dados: UsuarioDto) {
    const usuario = new UsuarioEntity;
    usuario.id = uuid();
    usuario.nome = dados.nome;
    usuario.email = dados.email;
    usuario.senha = dados.senha;
    this.usuarioRepository.salvarUsuario(usuario);
    return {
      usuario: new ListaUsuarios(usuario.id, usuario.nome),
      message: 'Usuário criado com sucesso!'
    };
  }

  @Get()
  listarUsuarios() {
    const usuarios = this.usuarioRepository.listarUsuarios();
    const usuario = usuarios.map((usr) => new ListaUsuarios(usr.id, usr.nome));
    return usuario;
  }

  @Put("/:id")
  async atualizaUsuario(@Param('id') id: string, @Body() usuario: AtualizaUsuarioDto) {
    const usuarioAtualizado = await this.usuarioRepository.atualizaUsuario(id, usuario);
    return {
      usuario: usuarioAtualizado,
      message: "Usuário atualizado com sucesso."
    };
  }
}
