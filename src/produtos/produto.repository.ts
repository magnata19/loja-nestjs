import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository {
  private produtos: any = [];

  salvarProduto(produto) {
    this.produtos.push(produto);
    console.log(this.produtos);
  }

  listarProdutos(): unknown {
    return this.produtos;
  }
}
