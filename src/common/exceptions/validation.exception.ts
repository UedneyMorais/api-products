import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationException extends HttpException {
  constructor(errors: string[] | string) {
    super(
      {
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        message: errors,
        error: 'Validation Error',
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }
}
