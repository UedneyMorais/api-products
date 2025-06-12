import { HttpException, HttpStatus } from '@nestjs/common';

export class BadRequestException extends HttpException {
  constructor(message = 'Requisição inválida') {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        error: 'Bad Request',
        message: message,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
