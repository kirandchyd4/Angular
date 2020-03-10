import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnboardComponent } from './onboard/onboard.component';
import { ArchwizardModule } from 'ng2-archwizard';
//import { DialogContentExampleDialog } from './dashboard/dialog-content-example-dialog';

import { BarComponent } from './bar/bar.component';
//import { ChartModule, ColumnSeriesService, LegendService, CategoryService, TooltipService, LineSeriesService, DataLabelService  } from '@syncfusion/ej2-ng-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
//import {NgbdModalOptionsModule} from './modal/modal-options.module';
//import { MatDialogModule } from '@angular/material/dialog';
//import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import {ModalOptionsComp} from './modal/modal-options';
//import { NgbdModalOptions } from './modal-options';
//import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        ArchwizardModule,      
        NgxChartsModule,
    BrowserAnimationsModule,
    AgGridModule,
    FormsModule,
   // NgbModule,
   // MatDialogModule

      
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        OnboardComponent,
        BarComponent,
       // ModalOptionsComp,
       // NgbdModalOptionsModule
        //DialogContentExampleDialog,
         //AlertDialogComponent,

    ],
   // exports: [NgbModule],
    
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }