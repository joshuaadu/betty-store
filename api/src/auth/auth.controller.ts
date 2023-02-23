import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin(@Body() authDto: AuthDto) {
    console.log(authDto);
    return this.authService.signin(authDto);
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
