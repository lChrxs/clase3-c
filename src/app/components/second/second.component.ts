import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  @Input('hijo1') hijo1: number = 0;

  constructor() { }

  ngOnInit(): void {
  }



}
