import { Component, OnInit } from '@angular/core';
import { ArchwizardModule } from 'ng2-archwizard';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html'
})
export class OnboardComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  apiName: String = "Facial recognitions system";
  apiOwner: String = "srinivasan";
  apiDescription="This is used to identifiy the resources with their configured masters";
  apiEmail="kchollan@cisco.com";
  apiOrganization="cisco.com";

  apiEndPoint=" http://bgl-flywheel-4:5003/faceDetected";



  ngOnInit() {
  }
  endpoint = false;
  automl = false;
  modelfile = false;
  showdiv = true;

/*
  get selectedOptions() {
    return this.orderService.order.Products
        .filter(opt => opt['checked'])
        .map(opt => opt.Id);
}
*/
  submitted =function()
  {
    console.log("in submitted")
    this.showdiv = false;
  }
  modelTypeSelected = function(type)
  {
    console.log(type)
    if(type=='endpoint')
    {
      this.endpoint = true;
      this.automl = false;
      this.modelfile = false;
    }
    else if(type=='modelfile')
    {
      this.endpoint = false;
      this.automl = false;
      this.modelfile = true;
    }
    else if (type=='automl')
    {
      this.endpoint = false;
      this.automl = true;
      this.modelfile = false;
    }
  }

  finishFunction(){


let dataObjectActual= {
  "authHeaderName": "string",
  "authHeaderReq": true,
  "baseURL": this.apiOrganization,
  "category": "string",
  "description": this.apiDescription,
  "endPoints": [
    {
      "bodyParams": [
        {
          "defaultValue": "string",
          "description": "string",
          "name": "string",
          "optional": true,
          "type": "string"
        }
      ],
      "description": "string",
      "headers": [
        {
          "defaultValue": "string",
          "description": "string",
          "name": "string",
          "optional": true,
          "type": "string"
        }
      ],
      "method": "string",
      "name": "string",
      "path": "string",
      "queryParams": [
        {
          "defaultValue": "string",
          "description": "string",
          "name": "string",
          "optional": true,
          "type": "string"
        }
      ],
      "sampleResponse": "string"
    }
  ],
  
  "name":this.apiName,
  "ownerBusinessUnit": "string",
  "ownerEmail": "sures",
  "ownerName": this.apiOwner,
  "proxyHeaderValue": "string"
};

//alert(dataObjectActual);
this.httpService.post("http://localhost:8080/v1/onboarding/apis",dataObjectActual)
.subscribe(
data  => {
console.log("POST Request is successful ", data);

alert("POST Request is successful");

},
error  => {

console.log("Error", error);

}

);




}
}