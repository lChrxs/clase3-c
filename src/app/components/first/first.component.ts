import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  @ViewChild('inputText') inputText?: ElementRef

  bActivo: boolean = true;

  constructor(public renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggle(){
    this.bActivo = !this.bActivo;
  }

  onHover(){
    console.log('Hover event')
  }

  validation(e: any){
    console.log(e)
    console.log(e.target.value)
    console.log((e.target as HTMLInputElement).value)
    let result = ((e.target as HTMLInputElement).value).replace(/[^A-Za-zá-úÁ-Ú ]|[*÷×]/g, '')
    console.log(result);
    (e.target as HTMLInputElement).value = result
  }

}
