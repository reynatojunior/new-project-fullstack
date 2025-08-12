import { Controller, Get } from '@nestjs/common';
import { Connection } from 'typeorm';

@Controller()
export class AppController {
  constructor(private connection: Connection) {}

  @Get('check-db')
  async checkDb() {
    try {
      await this.connection.query('SELECT 1');
      return { status: 'OK', message: 'Conexão com MySQL estabelecida com sucesso' };
    } catch (error) {
      return { status: 'ERROR', message: error.message };
    }
  }

  

}