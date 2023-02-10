import {
  IsMobilePhone,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsMobilePhone()
  @IsNotEmpty()
  telephone: number;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  //   @IsStrongPassword()
  @IsString()
  password: string;
}
