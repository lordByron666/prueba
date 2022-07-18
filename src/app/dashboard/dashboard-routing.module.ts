import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventComponent } from './event/event.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';

const routes: Routes = [
  { path: 'event', component: EventComponent },
  { path: 'profile-user', component: ProfileUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
