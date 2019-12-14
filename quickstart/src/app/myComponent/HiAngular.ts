import { Component } from "@angular/core";

@Component({
  selector: "HiAngular",
  templateUrl: "/app/Template/HiAngular.html",
  styleUrls: ["app/Content/HiAngular.css"]
})
export class HiAngular {
  myStyle:string ='blue';
  customeClass:string='class2';
isActive:boolean=false;
count:number=0;
people: any[];

constructor(){
  this.people=[
    {name:'shahram',fname:'afshar', age:'30'},
    {name:'ali',fname:'moghadam', age:'29'},
    {name:'reza',fname:'alinial', age:'34'},
  ];
}

  active(){
    this.isActive=!this.isActive;
  }
}
