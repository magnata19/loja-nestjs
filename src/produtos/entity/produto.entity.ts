import { CaracteristicaProdutoDTO } from "../dto/caracteristica.produto.dto";
import { ImagemProdutoDTO } from "../dto/imagem.produto.dto";

export class ProdutoEntity {
    id: string;
    nome: string;
    valor: number;
    quantidadeDisponivel: number;
    descricao: string;
    caracteristicas: CaracteristicaProdutoDTO[];
    imagens: ImagemProdutoDTO[];
    categoria: string;
}