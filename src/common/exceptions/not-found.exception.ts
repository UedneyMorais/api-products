import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor(message = 'Recurso não encontrado') {
    super(
      {
        statusCode: HttpStatus.NOT_FOUND,
        error: 'Not Found',
        message: message,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
