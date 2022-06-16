import { Component, Input, OnInit, Output ,EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit , OnChanges{

  @Input() password:any;
  @Output() validationstatus:EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(_changes: SimpleChanges): void {
    if(typeof this.password=="string"){
      if(this.password.length==0){
        this.validationstatus.emit("Password is mandatory and cannot be left bank");
      }
      else if(this.password.length<8){
        this.validationstatus.emit("Invalid ,length should not be lass than 8");
      }
      else if(this.password.length>20){
        this.validationstatus.emit("Invalid,length should not be greater than 20");
      }
      else{
        this.validationstatus.emit("Valid");
      }
    }
    
  
}

}
