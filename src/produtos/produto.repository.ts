import { Injectable } from '@nestjs/common';
import { ProdutoDTO } from './dto/produto.dto';

@Injectable()
export class ProdutoRepository {
  private produtos: any = [];

  salvarProduto(produto: any) {
    this.produtos.push(produto);
    console.log(this.produtos);
  }

  listarProdutos(): unknown {
    return this.produtos;
  }

  async validarNomeProduto(nome: string) {
    const nomeValido = await this.produtos.find((prod: ProdutoDTO) => prod.nome === nome)
    return !nomeValido;
  }
}
