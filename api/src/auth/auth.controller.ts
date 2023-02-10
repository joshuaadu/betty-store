import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('sign-in')
  // signin(@Body() authDto: AuthDto) {
  signin(@Body() authDto: AuthDto) {
    console.log(authDto);
    return { message: 'submitted', credential: authDto };

    // console.log({ data: authDto });
    // return { message: 'submitted', credential: authDto };
  }

  @Post('signup')
  signup(@Body() dto: CreateUserDto) {
    return this.authService.signup(dto);
  }
  @Post('change-password')
  changePassword() {
    return { message: 'password changed' };
  }
}
