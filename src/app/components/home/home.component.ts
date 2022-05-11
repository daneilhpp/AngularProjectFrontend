import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção!`;
  idProduto: number = 3;
  precoProduto: number = 2.59;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png'
  dataValidade = '2021-12-31'

  constructor() {
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('ID: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);

    var var1;
    let var2;
    const var3 = 1;

    /*var variavel1;
    let variavel2;

    var idade = 18;
    console.log('Minha idade é: ',idade)

    function imprimeIdade()
    {
      for(let idade = 30; idade <= 40; idade++)
      {
        console.log('Idade dentro do for: ',idade)
      }
      console.log('Idade fora do for: ',idade)
    }
    imprimeIdade();*/
  }

  ngOnInit(): void {
  }

}
