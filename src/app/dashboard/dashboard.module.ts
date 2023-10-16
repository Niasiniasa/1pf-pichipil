import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule as FormsPageModule } from './pages/forms/forms.module';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FormsPageModule,
    UsersModule,
    SharedModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [
    DashboardComponent
    
  ],
})
export class DashboardModule { }
