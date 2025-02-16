import { Module } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { ProdutoController } from './produto.controller';
import { ValidarProdutoNomeUnico } from './validator/produto-unico.validator';
@Module({
  imports: [],
  controllers: [ProdutoController],
  providers: [ProdutoRepository, ValidarProdutoNomeUnico],
})
export class ProdutoModule { }
