import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('sign-in')
  login() {
    return { message: 'submitted' };
  }
  @Post('change-password')
  changePassword() {
    return { message: 'password changed' };
  }
}
