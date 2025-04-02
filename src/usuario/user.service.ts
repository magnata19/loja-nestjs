import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { EntityNotFoundError, Repository } from "typeorm";
import { UsuarioEntity } from "./entity/usuario.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ListaUsuarios } from "./dto/ListaUsuario.dto";
import { NotFoundError } from "rxjs";
import { AtualizaUsuarioDto } from "./dto/AtualizaUsuario.dto";

@Injectable()
export class UsuarioService {
  constructor(@InjectRepository(UsuarioEntity) private usuarioRepository: Repository<UsuarioEntity>) { }

  async listaUsuarios(): Promise<Array<any>> {
    const user = await this.usuarioRepository.find();
    const users = await user.map((usuario) => new ListaUsuarios(usuario.id, usuario.nome))
    return users;
  }

  async criarUsuario(usuario: UsuarioEntity): Promise<{ message: string, usuario: UsuarioEntity }> {
    try {
      const user = await this.usuarioRepository.save(usuario);
      return { message: "Usuário criado com sucesso!", usuario: user }
    } catch (err) {
      throw new BadRequestException("Erro ao criar usuário", err.message);
    }
  }

  async atualizaUsuario(id: string, usuario: AtualizaUsuarioDto): Promise<{ message: string }> {
    try {
      const user = await this.usuarioRepository.update(id, usuario)
      return { message: "Usuário atualizado com sucesso." }
    } catch (err) {
      throw new NotFoundException("Usuário não encontrado.")
    }
  }

  async deletarUsuario(id: string): Promise<{ message: string }> {
    const user = await this.usuarioRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new BadRequestException("Usuário não encontrado.")
    }
    await this.usuarioRepository.delete(id);
    return { message: `Usuário ${user.nome} deletado com sucesso.` }
  }
}