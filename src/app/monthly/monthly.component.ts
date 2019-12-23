import { Component, OnInit } from '@angular/core';
import { DateCalcService } from '../services/date-calc.service';
import * as moment from 'moment';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {
  selectedMonth;
  monthlyData = {
    title: '',
    days: {}
  };

  constructor(
    private dateCalc: DateCalcService
  ) { }

  ngOnInit() {
    this.selectedMonth = moment();
    this.monthlyData = this.dateCalc.getMonthly(this.selectedMonth);
    console.log(this.monthlyData.days);
  }

  nextMonth() {
    const month = this.selectedMonth.add(1, 'month');
    this.monthlyData = this.dateCalc.getMonthly(month);
  }

  previousMonth() {
    const month = this.selectedMonth.subtract(1, 'month');
    this.monthlyData = this.dateCalc.getMonthly(month);
  }
}
