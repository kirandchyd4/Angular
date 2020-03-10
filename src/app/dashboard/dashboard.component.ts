import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi, ColumnApi } from 'ag-grid-community';
//import { Http } from '@angular/http';
//import {Observable} from 'rxjs/Observable';
 
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//mport { NgbdModalOptions } from './modal-options';
//import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
//import demodata from './test.json';



//import { MatDialogModule } from '@angular/material/dialog';
//import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import {ConfirmationDialog} from './confirmation-dialog.component';
//import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';





@Component({
  selector: 'app-dashboard',
  
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
 
})
export class DashboardComponent implements OnInit {
  //constructor(public dialog: MatDialogModule) {}

  console = console;
  constructor(private httpService: HttpClient) { }
  
  private api: GridApi;
  private columnApi: ColumnApi;




  title = 'app';


    columnDefs = [
        {headerName: 'ApiName', field: 'name' },
        {headerName: 'Id', field: 'id' },
        {headerName: 'ApiAuthor', field: 'ownerName' },
        {headerName: 'ApiHits', field: 'hits'},
        {headerName: 'Email', field: 'ownerEmail'},
        {headerName: 'Catgoery', field: 'category'},
         {headerName: 'Revenue', field: 'revenue'},
      //  {headerName: 'Rating', field: 'rating'},
        {headerName: 'Description', field: 'description'},
        {headerName: 'Url', field: 'baseURL'},
        {headerName: 'Organization', field: 'apiOrganization'}
    ];
  //  rowData=[{}];
//console.log(rowData);
    /*rowData = this.httpService.get('http://localhost:8585/v1/onboarding/apis');
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(rowData);*/
 
    //rowData = this.httpService.get('http://localhost:8585/v1/onboarding/apis');
   // alert("HIIIII");
    data = this.httpService.get('http://localhost:8585/v1/onboarding/apis');

    //alert(rowData);
/*
    if (!environment.production) {
      console.log(rowData);
    }*/
    
   // console.log("REEE"+rowData);

  /*  rowData = [
        { name: 'Facial Recognition', author: 'Celica', hits: 35000 ,year:2020,cat:'channels',revenue:2000,rating:4.8, description:'API endpoint to detect and recognize the face of the person in the image',url:'http://bgl-flywheel-4:5959/safsdf4245fsv',apiOrganization:'cisco1'},
        { name: 'Sentiment Analysis', author: 'parma@cisco.com', hits: 32000 ,year:2020,cat:'channels',revenue:2000 ,rating:4.8,description:'Text analysis and find the sentiment of the customer raising the incident',url:'http://bgl-flywheel-4:5959/safsdf4245fsv',apiOrganization:'cisco1'},
        { name: 'Intent Identification', author: 'tulkundu@cisco.com', hits: 72000,year:2020,cat:'channels',revenue:2000 ,rating:4.8,description:'Identify the intent from the given text. general repository of intents related to Cisco Order Management',url:'https://toyoto.com',apiOrganization:'cisco1'},
        { name: 'Toyota', author: 'Celica', hits: 35000 ,year:2020,cat:'channels',revenue:2000,rating:4.8, description:'japaneese Builder',url:'http://bgl-flywheel-4:5959/opadcaR4234fdgr',apiOrganization:'cisco1'},
        { name: 'Ford', author: 'Mondeo', hits: 32000 ,year:2020,cat:'channels',revenue:2000 ,rating:4.8,description:'japaneese Builder',url:'https://toyoto.com',apiOrganization:'cisco1'},
        { name: 'Porsche', author: 'Boxter', hits: 72000,year:2020,cat:'channels',revenue:2000 ,rating:4.8,description:'japaneese Builder',url:'https://toyoto.com',apiOrganization:'cisco1'},
        { name: 'Toyota', author: 'Celica', hits: 35000 ,year:2020,cat:'channels',revenue:2000,rating:4.8, description:'japaneese Builder',url:'https://toyoto.com',apiOrganization:'cisco1'},
        { name: 'Ford', author: 'Mondeo', hits: 32000 ,year:2020,cat:'channels',revenue:2000 ,rating:4.8,description:'japaneese Builder',url:'https://toyoto.com',apiOrganization:'cisco1'},
        { name: 'Porsche', author: 'Boxter', hits: 72000,year:2020,cat:'channels',revenue:2000 ,rating:4.8,description:'japaneese Builder',url:'https://toyoto.com',apiOrganization:'cisco1'},
        { name: 'Toyota', author: 'Celica', hits: 35000 ,year:2020,cat:'channels',revenue:2000,rating:4.8, description:'japaneese Builder',url:'https://toyoto.com',apiOrganization:'cisco1'},
        { name: 'Ford', author: 'Mondeo', hits: 32000 ,year:2020,cat:'channels',revenue:2000 ,rating:4.8,description:'japaneese Builder',url:'https://toyoto.com',apiOrganization:'cisco1'},
        { name: 'Porsche', author: 'Boxter', hits: 72000,year:2020,cat:'channels',revenue:2000 ,rating:4.8,description:'japaneese Builder',url:'https://toyoto.com',apiOrganization:'cisco1'}
    ];

*/
  //constructor() { }

  //rowData=this.getData();//[{},{}];

  rowData = [];

  
  selectedObject = null;
  details = {
    'facialRecognition':{
      'name':'Facial Recognition',
      'contact':'rasriniv@cisco.com',
      'description':'API endpoint to detect and recognize the face of the person in the image',
      'endpoint':"http://bgl-flywheel-4:5959/safsdf4245fsv",
      "sample_input":"{ \n 'group': 'test', \n 'base64Content':<<Base64 encoded image>>  \n }",
      "access_token":"None"
  },
  'sentimentAnalysis':{
    'name':'Sentiment Analysis',
    'contact':'parma@cisco.com',
    'description':'Text analysis and find the sentiment of the customer raising the incident',
    'endpoint':"http://bgl-flywheel-4:5959/eeravdhtgebdsd32d",
    "sample_input":"{  \n 'text':<<text message>>  \n}",
    "access_token":"3eD4F5wqGBQ1"
},
'intentIdentification':{
  'name':'Intent Identification',
  'contact':'tulkundu@cisco.com',
  'description':'Identify the intent from the given text. general repository of intents related to Cisco Order Management',
  'endpoint':"http://bgl-flywheel-4:5959/opadcaR4234fdgr",
  "sample_input":"{ \n 'text':<<text message>>  \n }",
  "access_token":"None"
},
}



apiName: String = "Facial recognitions system";
apiOwner: String = "srinivasan";
apiDescription="This is used to identifiy the resources with their configured masters";
apiEmail="kchollan@cisco.com";
apiOrganization="cisco.com";
intentIdentification="Identify the intent from the given text. general repository of intents related to Cisco Order Management";

apiEndPoint=" http://bgl-flywheel-4:5003/faceDetected";

  ngOnInit() {
    this.selectedObject = this.details['facialRecognition']
  }

  onRowClicked(event: any) { 
    console.log('row', event)
  
    this.apiEndPoint=event.data.baseURL;
    this.apiName=event.data.name;
    this.apiOwner=event.data.ownerName;
    this.apiDescription=event.data.description;
    this.apiOrganization=event.data.apiOrganization;
    //alert(event.data.url+event.data.apiName+event.data.author+event.data.description+event.data.apiOrganization);

  }; 

 gridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    
    onGridReady: function(params) {
        params.api.sizeColumnsToFit();
    }
};



  onGridReady(params){
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.api.sizeColumnsToFit();
    console.log(">>>>>>"+this.httpService.get('http://localhost:8585/v1/onboarding/apis'));
    console.log((this.httpService.get('http://localhost:8585/v1/onboarding/apis')));
    this.httpService.get('http://localhost:8585/v1/onboarding/apis'
    ).subscribe((data: any) => {
      data=JSON.parse(JSON.stringify(data));
     // data.forEachNode((node: any) => this.console.log(node) //this.rowData.push(node) 
     //this.rowData.push(node) 
     this.console.log("DATA:::");
     this.console.log(data);
     
    
      // this.rowData.push(data[0]);

      data.forEach((node: any) => this.console.log(node)); //this.rowData.push(node) 

      this.rowData = data;
     // alert(">>>RR"+this.rowData[0].name);
     /// rowData=JSON.parse(JSON.stringify(data));
    // this.gridOptions.api.redrawRows({rowNodes: data}); 
      });
     // event.api.sizeColumnsToFit();
     
    
    /*
    .pipe(tap(res => {
    this.console.log(res);  
    alert("res>>>"+res);
    }));
/*
    
    /*.success(function(data) {


      rowData=JSON.parse("["+JSON.stringify(data)+"]");
          console.log($scope.rowData);
      });*/
   // alert(">>>"+this.httpService.get('http://localhost:8585/v1/onboarding/apis'));
   
  }


        



  itemSelected = function(item)
  {
    this.selectedObject = this.details[item]
    console.log(this.s); 
    console.log("Hiiiii"); 

 
 
  }
 data2  =function(){

   console.log(this.httpService.get('http://localhost:8585/v1/onboarding/apis'));
    this.httpService.get('http://localhost:8585/v1/onboarding/apis');
    alert(">>>"+this.httpService.get('http://localhost:8585/v1/onboarding/apis'));
   // this.console.log(data2);
    //return data2;
  }

 /* openAlertDialog() {
    const dialogRef = this.dialog.alert('<app-alert-dialog></app-alert-dialog>',{
      data:{
        message: 'HelloWorld',
        buttonText: {
          cancel: 'Done'
        }
      },
    });
  }*/



myFunc(){
  alert("Re directing to the ApI Link....");
}
myFunc2(){
  alert("Re directing to the Feed Back Page....")
}

deleteSelectedRows(){
  const selectRows = this.api.getSelectedRows();
  this.httpService.delete('http://localhost:8080/v1/onboarding/apis/'+selectRows[0].id).subscribe(response => {  
    console.log(response);  alert(selectRows[0].id);
  });
  

}

rowsSelected() {
  return true;
}

 

}
