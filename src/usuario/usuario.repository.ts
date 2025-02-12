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

  async buscaEmailValido(email: string): Promise<any> {
    const emailEncontrado = await this.usuarios.find(
      (usuario: UsuarioDto) => usuario.email === email
    );

    return emailEncontrado !== undefined;
  }
}
