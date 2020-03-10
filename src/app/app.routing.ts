import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnboardComponent } from './onboard/onboard.component';

import { BarComponent } from './bar/bar.component';
//import { ChartModule, ColumnSeriesService, LegendService, CategoryService, TooltipService, LineSeriesService, DataLabelService  } from '@syncfusion/ej2-ng-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgGridModule } from 'ag-grid-angular';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
//import {NgbdModalOptionsModule} from './modal/modal-options.module';
//import {ModalOptionsComp} from './modal/modal-options';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'onboard', component: OnboardComponent },
    { path: 'board', component: BarComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);