export class RespostaBackendError extends Error {
  context: {
    resposta: any;
    url: string;
  };

  constructor(message: string, resposta: any, url: string) {
    super(message);
    this.name = 'RespostaBackendError';
    this.context = {
      resposta,
      url
    };
  }
}
