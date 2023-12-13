import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtGuard } from '../../guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(JwtGuard)
  @Post('/login')
  login() {
    return this.authService.login();
  }
}
