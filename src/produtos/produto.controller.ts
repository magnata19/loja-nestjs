import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { ProdutoDTO } from './dto/produto.dto';
import { ProdutoEntity } from './entity/produto.entity';
import { v4 as uuid } from 'uuid';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) { }

  @Post()
  public salvarProduto(@Body() produto: ProdutoDTO) {
    const produtoEntity = new ProdutoEntity;
    produtoEntity.id = uuid();
    produtoEntity.nome = produto.nome;
    produtoEntity.valor = produto.valor;
    produtoEntity.descricao = produto.descricao;
    produtoEntity.caracteristicas = produto.caracteristicas;
    produtoEntity.imagens = produto.imagens;
    produtoEntity.categoria = produto.categoria;
    this.produtoRepository.salvarProduto(produtoEntity);
    return { produto: produtoEntity, message: 'Produto criado com sucesso.' }
  }

  @Get()
  public listarProdutos() {
    return this.produtoRepository.listarProdutos();
  }

  @Put("/:id")
  async atualizaProduto(@Param('id') id: string, @Body() produto: ProdutoDTO) {
    const produtoAtualizado = await this.produtoRepository.atualizaProduto(id, produto);
    return { produto: produtoAtualizado, message: "Produto atualizado com sucesso!" }
  }

  @Delete("/:id")
  async deletarProduto(@Param('id') id: string) {
    const produtoId = await this.produtoRepository.deletarProduto(id);
    return { message: `${produtoId?.nome} foi deletado com sucesso.` }
  }
}
