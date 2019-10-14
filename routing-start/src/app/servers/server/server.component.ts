import {Component, Input, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input()
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const param: number = +params['id'];
        if (param) {
          this.server = this.serversService.getServer(param);
        }
      }
    );
  }

  onEdit() {
    this.router.navigate(['/servers', this.server.id, 'edit']
      , {
        queryParams: {allowEdit: true}
        , fragment: 'loading'
      }
    );
  }

}
