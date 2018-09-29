import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p>Привет {{name}}</p>
              <input type="text" [(ngModel)]="name" /> `
  })
  export class AppComponent { 
      name:string="Tom";
  }
