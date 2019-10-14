import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Server } from '../models/sever.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()
  itemCreated: EventEmitter<Server> = new EventEmitter<Server>();

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.itemCreated.emit( new Server( this.newServerName, this.newServerContent, 'server'));
  }

  onAddBlueprint() {
    this.itemCreated.emit( new Server( this.newServerName, this.newServerContent, 'blueprint'));
  }

  constructor() { }

  ngOnInit() {
  }

}
