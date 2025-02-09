import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  public salvarProduto(@Body() produto: string) {
    return this.produtoRepository.salvarProduto(produto);
  }

  @Get()
  public listarProdutos() {
    return this.produtoRepository.listarProdutos();
  }
}
