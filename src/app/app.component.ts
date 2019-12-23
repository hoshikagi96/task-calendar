import { Component, OnInit } from '@angular/core';
import { DateCalcService } from './services/date-calc.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task-calendar';
  // monthlyData = {};

  constructor(
    private dateCalc: DateCalcService
  ) { }

  ngOnInit() {
    // const today = moment();
    // this.monthlyData = this.dateCalc.getMonthly(today);
    // console.log(this.monthlyData);
  }
}
