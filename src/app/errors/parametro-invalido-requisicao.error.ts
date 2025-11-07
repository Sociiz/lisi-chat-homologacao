export class ParametroInvalidoRequisicaoError extends Error {
  constructor(message: string, public context?: any) {
    super(message);
    this.name = 'ParametroInvalidoRequisicaoError';

    Object.setPrototypeOf(this, ParametroInvalidoRequisicaoError.prototype);
  }
}
