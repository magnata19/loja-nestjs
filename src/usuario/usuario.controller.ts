import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioDto } from './dto/Usuario.dto';
import { UsuarioEntity } from './entity/usuario.entity';
import { v4 as uuid } from 'uuid';
import { ListaUsuarios } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDto } from './dto/AtualizaUsuario.dto';
import { UsuarioService } from './user.service';

@Controller('/usuarios')
@Injectable()
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository,
    private usuarioService: UsuarioService
  ) { }

  @Post()
  criaUsuario(@Body() dados: UsuarioDto): Promise<{ message: string, usuario: UsuarioDto }> {
    return this.usuarioService.criarUsuario(dados);
  }

  @Get()
  async listarUsuarios(): Promise<Array<ListaUsuarios>> {
    const usuarios = await this.usuarioService.listaUsuarios()
    return usuarios;
  }

  @Put("/:id")
  async atualizaUsuario(@Param('id') id: string, @Body() usuario: AtualizaUsuarioDto): Promise<{ message: string }> {
    const user = await this.usuarioService.atualizaUsuario(id, usuario);
    return {
      message: `Usuário ${user.message.replace("Usuário", '')} atualizado com sucesso.`
    };
  }

  @Delete("/:id")
  async deletarUsuario(@Param("id") id: string): Promise<{ message: string }> {
    const user = await this.usuarioService.deletarUsuario(id);
    return { message: `Usuário${user.message.replace('Usuário', '')} foi removido con sucesso.` }
  }
}
