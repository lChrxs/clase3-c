import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  @Output('hijo2') hijo2: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.hijo2.emit(1)
  }

  restar(){
    this.hijo2.emit(-1)
  }

}
