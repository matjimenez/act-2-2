import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'actividad_2-2';
  public resultado: number = 1000;
  public restar(){
    this.resultado = this.resultado - 5;
  }
}
