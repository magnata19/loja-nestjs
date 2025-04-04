import { Module } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { ProdutoController } from './produto.controller';
import { ValidarProdutoNomeUnico } from './validator/produto-unico.validator';
import { ProdutoService } from './service/produto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoEntity } from './entity/produto.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([ProdutoEntity])
  ],
  controllers: [ProdutoController],
  providers: [ProdutoRepository, ValidarProdutoNomeUnico, ProdutoService],
})
export class ProdutoModule { }
