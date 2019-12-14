import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "conter",
  templateUrl: "/app/Template/conter.html",
  styleUrls: ["app/Content/conter.css"]
})
export class myConter {
  // @Input()Counter:number;
  // @Output() sendCount=new EventEmitter();
  @Input() myNumber: number;
  @Output() myNumberChange = new EventEmitter();
  // increament(){
  // this.Counter++;
  // this.sendCount.emit(this.Counter);
  // }

  increament() {
    this.myNumber++;
    this.myNumberChange.emit(this.myNumber);
  }
}
