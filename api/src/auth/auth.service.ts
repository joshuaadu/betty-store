import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import * as argon from 'argon2';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/user/dto';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: CreateUserDto) {
    try {
      const password = await argon.hash(dto.password);

      const user = this.prisma.user.create({
        data: {
          username: dto.username,
          password,
          address: dto.username,
          first_name: dto.first_name,
          last_name: dto.last_name,
          telephone: dto.telephone,
        },
      });

      delete (await user).password;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }
}
