import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  @Post('sign-in')
  // signin(@Body() authDto: AuthDto) {
  signin(@Req() req: Request) {
    console.log(req.body);
    return { message: 'submitted', credential: '' };
    // console.log({ data: authDto });
    // return { message: 'submitted', credential: authDto };
  }
  @Post('change-password')
  changePassword() {
    return { message: 'password changed' };
  }
}
