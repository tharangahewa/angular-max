import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {Page404Component} from './page404/page404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'users', component: UsersComponent,
    children: [{path: ':id/:name', component: UserComponent}]
  },
  {
    path: 'servers', component: ServersComponent,
    children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent}
    ]
  },
  {path: 'page-not-found', component: Page404Component},
  {path: '**', redirectTo: '/page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
