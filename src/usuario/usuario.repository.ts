import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/Usuario.dto';
import { UsuarioEntity } from './entity/usuario.entity';
import { AtualizaUsuarioDto } from './dto/AtualizaUsuario.dto';

@Injectable()
export class UsuarioRepository {
  private usuarios: Array<UsuarioEntity> = [];

  public salvarUsuario(usuario: UsuarioEntity) {
    this.usuarios.push(usuario);
    console.log(this.usuarios);
  }

  public listarUsuarios(): Array<UsuarioEntity> {
    return this.usuarios;
  }

  async buscaEmailValido(email: string): Promise<any> {
    const emailEncontrado = await this.usuarios.find(
      (usuario: UsuarioDto) => usuario.email === email
    );

    return emailEncontrado !== undefined;
  }

  async atualizaUsuario(id: string, usuario: Partial<UsuarioEntity>) {
    const usuario_id: any = this.usuarios.find(usuarioSalvo => usuarioSalvo.id === id);
    if (!usuario_id) {
      throw new Error("Usuário não encontrado");
    }
    Object.entries(usuario).forEach(([key, value]) => {
      if (key === "id") {
        return;
      }
      usuario_id[key] = value;
    })
    return usuario_id;
  }
}
