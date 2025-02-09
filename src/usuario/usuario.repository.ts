import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioRepository {
  private usuarios: any = [];

  public salvarUsuario(usuario) {
    this.usuarios.push(usuario);
    console.log(this.usuarios);
  }

  public listarUsuarios(): unknown {
    return this.usuarios;
  }
}
