import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Injectable } from "@nestjs/common";
import { ProdutoService } from "../service/produto.service";

@Injectable()
@ValidatorConstraint({ async: true })
export class ValidarProdutoNomeUnico implements ValidatorConstraintInterface {

    constructor(private produtoService: ProdutoService) { }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const nomeUnico = await this.produtoService.validarNomeProduto(value);
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