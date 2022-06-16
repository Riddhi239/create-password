import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-validator';

  data:any;
  msg:any;
  boolean:boolean=false;

  validation(input:any){
    this.data=input.value;
    this.boolean=true;
  }

  get_data(output_data:string){
    this.msg=output_data;
    
  }
  
}
