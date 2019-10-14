import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService
    , private route: ActivatedRoute
    , private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const param: number = +params['id'];
        if (param) {
          this.server = this.serversService.getServer(param);
          this.serverName = this.server.name;
          this.serverStatus = this.server.status;
        }
      }
    );
  }

  onUpdateServer() {
    this.serversService.updateServer(
      this.server.id, {
        name: this.serverName
        , status: this.serverStatus
      }
    );
    this.router.navigate(['/servers', this.server.id]);
  }

}
