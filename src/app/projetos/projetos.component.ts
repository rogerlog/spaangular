import { Component, OnInit } from '@angular/core';
import { projetos } from '../model/projetos';

@Component({
  selector: 'spa-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  constructor() { }

  listaProjetos: projetos[] = [
    { nome: 'Construindo sexy APIs', github: 'https://github.com/rogerlog/api-serverless-node'},
    { nome: 'API Cidades Brasil', github: 'https://github.com/rogerlog/api-cidades-brasil'},
    { nome: 'Gerenciamento de Salas de reunioes', github: 'https://github.com/rogerlog/gerenciamentoSalas'},
    { nome: 'Previsão do Tempo', github: 'https://github.com/rogerlog/previsao-tempo-api.git'}
  ];

  displayedColumns: string[] = ['Nome', 'Github'];


  ngOnInit(): void {
  }

}
