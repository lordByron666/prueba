import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

import { EventComponent } from './event/event.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';

@NgModule({
  declarations: [
    ProfileUserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CKEditorModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    GoogleMapsModule,
  ],
})
export class DashboardModule {}
