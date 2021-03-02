import { Component, OnInit } from '@angular/core';
import { habilidades } from '../model/habilidades';

@Component({
  selector: 'spa-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  constructor() { }

  listaHabilidades: habilidades[] = [
    { nome: 'Angular', exp: 624},
    { nome: 'Arquitetura de Sistemas', exp: 504},
    { nome: 'Java', exp: 1380},
    { nome: 'JavaScript', exp: 460}
  ];

  displayedColumns: string[] = ['Nome', 'EXP'];

  ngOnInit(): void {
  }
}
