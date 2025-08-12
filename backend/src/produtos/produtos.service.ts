import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {

  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>
  ){}

  create(dto: CreateProdutoDto) {
    const produtos = this.repository.create(dto);
    return this.repository.save(produtos);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({id});
  }

  async update(id: number, dto: UpdateProdutoDto) {
  const produto = await this.repository.preload({ id, ...dto });
  if (!produto) return null;
  return this.repository.save(produto);
}

 async remove(id: number) {
    const produto = await this.repository.findOneBy({ id });
    if (!produto) return null;
    return this.repository.remove(produto);
  }

  async debugDatabase() {
  return {
    connection: await this.repository.query('SELECT DATABASE() as db'),
    tables: await this.repository.query('SHOW TABLES'),
    products: await this.repository.query('SELECT * FROM produtos')
  };
}


}
