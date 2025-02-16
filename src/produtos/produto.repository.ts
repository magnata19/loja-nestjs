import { Injectable } from '@nestjs/common';
import { ProdutoDTO } from './dto/produto.dto';
import { ProdutoEntity } from './entity/produto.entity';

@Injectable()
export class ProdutoRepository {
  private produtos: Array<ProdutoEntity> = [];

  salvarProduto(produto: ProdutoEntity) {
    this.produtos.push(produto);
    console.log(this.produtos);
  }

  async listarProdutos() {
    return this.produtos;
  }

  async validarNomeProduto(nome: string) {
    const nomeValido = await this.produtos.find((prod: ProdutoEntity) => prod.nome === nome);
    return nomeValido;
  }

  async atualizaProduto(id: string, produto: ProdutoDTO) {
    const produtoId: any = this.produtos.find((prod) => prod.id === id);
    Object.entries(produto).forEach(([key, value]) => {
      if (key === 'id') {
        return
      }
      produtoId[key] = value;
    })
    return produtoId;
  }

  async deletarProduto(id: string) {
    const produtoId = await this.produtos.find((prod) => prod.id === id);
    this.produtos = this.produtos.filter(
      prod => prod.id !== id
    );
    return produtoId;
  }
}
