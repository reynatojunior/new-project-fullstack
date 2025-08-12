import { Component, OnInit } from '@angular/core';
import { ProdutoService, Produto } from '../../services/produto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view',
  imports: [CommonModule, FormsModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
   produtos: Produto[] = [];
  produtoSelecionado: Produto | null = null;
  novoProduto: Omit<Produto, 'id'> = { nome: '', preco: 0, estoque: 0 };

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  selecionarProduto(id: number): void {
    this.produtoService.getProduto(id).subscribe(produto => {
      this.produtoSelecionado = produto;
    });
  }

  salvarProduto(): void {
    if (this.produtoSelecionado) {
      this.atualizarProduto();
    } else {
      this.criarProduto();
    }
  }

  criarProduto(): void {
    this.produtoService.criarProduto(this.novoProduto).subscribe(() => {
      this.carregarProdutos();
      this.novoProduto = { nome: '', preco: 0, estoque: 0 };
    });
  }

  atualizarProduto(): void {
    if (this.produtoSelecionado && this.produtoSelecionado.id) {
      this.produtoService
        .atualizarProduto(this.produtoSelecionado.id, this.produtoSelecionado)
        .subscribe(() => {
          this.carregarProdutos();
          this.produtoSelecionado = null;
        });
    }
  }

  deletarProduto(id: number): void {
    this.produtoService.deletarProduto(id).subscribe(() => {
      this.carregarProdutos();
    });
  }
}