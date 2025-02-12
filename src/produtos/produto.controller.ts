import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { ProdutoDTO } from './dto/produto.dto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  public salvarProduto(@Body() produto: ProdutoDTO) {
    return this.produtoRepository.salvarProduto(produto);
  }

  @Get()
  public listarProdutos() {
    return this.produtoRepository.listarProdutos();
  }
}
