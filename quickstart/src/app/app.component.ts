import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: `/app/Template/AppComponent.html`
})
export class AppComponent {
  name = "shahram";
  age = 29;
  // colors: string[] = ["red", "green", "blue"];
  // count:number=10;

  // changeCount(num:number){
  //   this.count=num;
  // }

  numRoot: number = 0;
  myName:string='hossein'
}
