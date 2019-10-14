import { Component } from '@angular/core';
import { Server } from './models/sever.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  
  onItemCreated( item:Server){
    this.serverElements.push(item);
  }
}
