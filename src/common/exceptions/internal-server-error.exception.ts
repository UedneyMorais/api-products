import { HttpException, HttpStatus } from '@nestjs/common';

export class InternalServerError extends HttpException {
  constructor(message = 'Ocorreu um erro interno no servidor.') {
    super(
      {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Internal Server Error',
        message: message,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
