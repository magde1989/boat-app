import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBoatComponent } from './add-boat/add-boat.component';
import { BoatDetailComponent } from './boat-detail/boat-detail.component';
import { BoatListComponent } from './boat-list/boat-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { UpdateBoatComponent } from './update-boat/update-boat.component';

const routes: Routes = [
  {path: 'boats', component: BoatListComponent, canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'add-boat', component: AddBoatComponent, canActivate:[AuthGaurdService]},
  { path: 'update-boat/:id', component: UpdateBoatComponent, canActivate:[AuthGaurdService]},
  { path: 'boat-detail/:id', component: BoatDetailComponent, canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
