import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { ProdutoDTO } from './dto/produto.dto';
import { ProdutoEntity } from './entity/produto.entity';
import { v4 as uuid } from 'uuid';
import { ProdutoService } from './service/produto.service';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoService: ProdutoService) { }

  @Post()
  async salvarProduto(@Body() produto: ProdutoDTO): Promise<any> {
    const currentProduct = await this.produtoService.criaProduto(produto);
    return { message: 'Produto criado com sucesso.', produto: currentProduct }
  }

  @Get()
  public listarProdutos() {
    return this.produtoService.listarProdutos();
  }

  @Put("/:id")
  async atualizaProduto(@Param('id') id: string, @Body() produto: ProdutoDTO): Promise<{ message: string }> {
    await this.produtoService.atualizarProduto(id, produto)
    return { message: "Produto atualizado com sucesso!" }
  }

  @Delete("/:id")
  async deletarProduto(@Param('id') id: string): Promise<{ message: string }> {
    await this.produtoService.deletarProduto(id);
    return { message: "Produto deletado com sucesso." }
  }
}
