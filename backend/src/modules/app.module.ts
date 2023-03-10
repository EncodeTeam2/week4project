import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

// Validation rules for .env file.
const validateConfig = Joi.object({
  CONTRACT_TOKEN: Joi.string().required(),
  CONTRACT_BALLOT: Joi.string().required(),
  INFURA_API_KEY: Joi.string().required(),
  INFURA_API_SECRET: Joi.string().required(),
  ALCHEMY_API_KEY: Joi.string().required(),
  ETHERSCAN_API_KEY: Joi.string().required(),
  NETWORK: Joi.string().required(),
  PRIVATE_KEY: Joi.string().required(),
});

@Module({
  imports: [ConfigModule.forRoot({ validationSchema: validateConfig, isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
