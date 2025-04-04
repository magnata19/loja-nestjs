import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProdutoEntity } from "../entity/produto.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoDTO } from "../dto/produto.dto";

@Injectable()
export class ProdutoService {

  constructor(@InjectRepository(ProdutoEntity) private productRepository: Repository<ProdutoEntity>) { }

  async criaProduto(produto: ProdutoDTO): Promise<{ message: string, produto: ProdutoDTO }> {
    try {
      const currentProduct = await this.productRepository.save(produto);

      return { message: "Produto criado com sucesso", produto: currentProduct };
    } catch (err) {
      throw new UnprocessableEntityException("Erro ao criar produto", err);
    }
  }

  async listarProdutos(): Promise<ProdutoDTO[]> {
    try {
      const produtos = await this.productRepository.find();
      return produtos;
    } catch (err) {
      throw new UnprocessableEntityException("Erro ao listar produtos", err);
    }
  }

  async atualizarProduto(id: string, produto: ProdutoDTO): Promise<{ message: string }> {
    const produtoExistente = await this.productRepository.findOne({ where: { id: id } })
    if (!produtoExistente) {
      throw new UnprocessableEntityException("Produto não encontrado.");
    }
    try {
      await this.productRepository.update(id, produto);
      return { message: "Produto atualizado com sucesso." };
    } catch (err) {
      throw new UnprocessableEntityException("Erro ao atualizar produto", err);
    }
  }

  async deletarProduto(id: string): Promise<{ message: string }> {
    const produtoExistente = await this.productRepository.findOne({ where: { id: id } });
    if (!produtoExistente) {
      throw new UnprocessableEntityException("Produto não encontrado.");
    }
    await this.productRepository.delete(id);
    return { message: `${produtoExistente.nome} foi deletado com sucesso.` };
  }
}