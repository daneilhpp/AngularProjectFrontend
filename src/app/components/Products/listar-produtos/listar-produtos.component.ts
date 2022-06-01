import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaStrings: string[] = ['Primeiro','Segundo','Terceiro'];
  listaNumeros: number[] = [15,15.8,100];
  objetoModelo={
    nome: 'Daniel',
    idade: 18,
    altura: 1.70,
    graduado: true
  };

  listaProdutos: any[]=[
    {nome: 'Curso Angular', precoProduto: 35.56, validade: '2022-05-31', id:1},
    {nome: 'Curso Ionic', precoProduto: 400.44, validade: '2021-09-05', id:2, promocao: true},
    {nome: 'Curso Design UX', precoProduto: 222.22, validade: '2022-02-22', id:3}
  ];

  constructor() {
    for(let item of this.listaStrings){
      console.log(item);
    }
    for(let item of this.listaNumeros){
      console.log(item);
    }
    console.log(this.objetoModelo);
  }

  ngOnInit(): void {
  }

}
