import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { envs } from 'src/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[
    JwtModule.register({
      global:true,
      secret: envs.jwtSercet,
      signOptions: {expiresIn:'3h'}
    })
  ]
})
export class AuthModule {}
