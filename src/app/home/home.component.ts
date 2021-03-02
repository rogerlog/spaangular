import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  exibeSobre: boolean = false;
  exibeConquistas: boolean = false;
  exibeHabilidades: boolean = false;
  exibeProjetos: boolean = false;

  xp: number = 0;
  level: number = 0;

  ngOnInit(): void {
    this.xp = 22632;
    this.level = 17;
  }

  addXp(){
    this.xp +=40;
  }

  addLevel(){
    this.level++;
  }

  reiniciar(){
    this.level = 0;
    this.xp = 0;
  }

  exibirSobre(){
    if(this.exibeSobre){
      this.exibeSobre = false;
    } else {
      this.exibeSobre = true;
    }
  }

  exibirConquistas(){
    if(this.exibeConquistas){
      this.exibeConquistas = false;
    } else {
      this.exibeConquistas = true;
    }
  }

  exibirHabilidades(){
    if(this.exibeHabilidades){
      this.exibeHabilidades = false;
    } else {
      this.exibeHabilidades = true;
    }
  }

  exibirProjetos(){
    if(this.exibeProjetos){
      this.exibeProjetos = false;
    } else {
      this.exibeProjetos = true;
    }
  }
}
