import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../models/sever.model';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input() 
  element:Server;

  constructor() { }

  ngOnInit() {
  }

}
