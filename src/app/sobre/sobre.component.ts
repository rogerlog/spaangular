import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() xpInicial: number = 1;
  @Input() levelInicial: number = 1;

}
