import {
  IsAlpha,
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ERole } from '../../shared/enums/role.enum';
import { UserProps } from '../entities/users.entity';

export class UserRules {
  @IsAlpha()
  @Length(2, 64)
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @Length(8, 128)
  @IsNotEmpty()
  email: string;

  @IsString()
  @Length(6, 32)
  @IsNotEmpty()
  password: string;

  @IsEnum(ERole)
  @IsOptional()
  role?: ERole;

  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @IsDate()
  @IsOptional()
  updatedAt?: Date;

  constructor({
    name,
    email,
    password,
    role,
    createdAt,
    updatedAt,
  }: UserProps) {
    Object.assign(this, { name, email, password, role, createdAt, updatedAt });
  }
}
