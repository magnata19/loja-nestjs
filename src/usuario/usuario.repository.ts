import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/Usuario.dto';

@Injectable()
export class UsuarioRepository {
  private usuarios: any = [];

  public salvarUsuario(usuario: UsuarioDto) {
    this.usuarios.push(usuario);
    console.log(this.usuarios);
  }

  public listarUsuarios(): unknown {
    return this.usuarios;
  }
}
