import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent{
  stringInterpolation:string='This is a string interpolation!';
  numberInterpolation:number=2;


  addBorder(){
    return false;
  }

  onClicked(value:string){
      alert(value)
  }
}
