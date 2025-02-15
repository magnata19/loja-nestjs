import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { ProdutoRepository } from "../produto.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class ValidarProdutoNomeUnico implements ValidatorConstraintInterface {

    constructor(private produtoRepository: ProdutoRepository) { }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const nomeUnico = await this.produtoRepository.validarNomeProduto(value);
        return !nomeUnico;
    }
}

export const ValidaNome = (validationOptions: ValidationOptions) => {
    return (obj: Object, props: string) => {
        registerDecorator({
            target: obj.constructor,
            propertyName: props,
            options: validationOptions,
            constraints: [],
            validator: ValidarProdutoNomeUnico
        });
    }
}