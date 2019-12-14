import {Component,Input} from '@angular/core'


@Component({
  selector:'test',
  templateUrl:'/app/Template/MyComponent.html',
  styleUrls:['app/Content/MyComponent.css'],
})
export class MyComponent {
  @Input () message:string;
  @Input () mycolor:string[];
 compony:string;
 names:string[]=['shahram','afshar'];

constructor(){
  this.compony='Merkid'

}

}
