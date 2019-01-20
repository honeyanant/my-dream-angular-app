import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  name:string ='';

  setName(name:string){
    this.name = name;

    console.log(event);
  }
  constructor() { }

  ngOnInit() {

  }

}
