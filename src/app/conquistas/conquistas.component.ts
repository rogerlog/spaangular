import { Component, OnInit } from '@angular/core';
import { conquistas } from '../model/conquistas';

@Component({
  selector: 'spa-conquistas',
  templateUrl: './conquistas.component.html',
  styleUrls: ['./conquistas.component.css']
})
export class ConquistasComponent implements OnInit {

  constructor() { }

  listaConquistas: conquistas[] = [
    { curso: 'Introdução ao Angular 8', datainicio: '02/02/2021', dataconclusao: '05/02/2021'},
    { curso: 'Desenvolvimento básico em Java', datainicio: '06/02/2021', dataconclusao: '10/02/2021'},
    { curso: 'Introdução ao Node.js com Express', datainicio: '10/02/2021', dataconclusao: '13/02/2021'},
    { curso: 'Aprenda a aplicar testes com Java', datainicio: '14/02/2021', dataconclusao: '20/02/2021'}
  ];

  displayedColumns: string[] = ['Curso', 'Data Inicio', 'Data Conclusao'];

  ngOnInit(): void {
  }

}