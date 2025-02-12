import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidatorOptions,
} from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class ValidarEmail implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: UsuarioRepository) { }

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const emailValido = await this.usuarioRepository.buscaEmailValido(value);
    return !emailValido;
  }
}

export const EmailValido = (opcoesDeValidacao: ValidationOptions) => {
  return (obj: Object, props: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: props,
      options: opcoesDeValidacao,
      constraints: [],
      validator: ValidarEmail
    });
  }
}
