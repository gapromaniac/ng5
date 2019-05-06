import { Component, OnInit } from '@angular/core';
import {trigger,style, transition} from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount : number = 5;
  btnText : string = 'Add an item';
  goalText : string = 'Test string';
  goals : string[] = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.goal.subscribe(res => this.goals = res)
    this.itemCount = this.goals.length;
    this.data.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.itemCount = this.goals.length;
    this.data.changeGoal(this.goals);
  }

  removeItem(i: number) {
    this.goals.splice(i, 1);
    this.data.changeGoal(this.goals);
  }
}
