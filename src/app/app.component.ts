import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clase3-c';

  valor: number = 0;

  operacion(e: any){
    console.log(e)
    this.valor += e;
  }
}
