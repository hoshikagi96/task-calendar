import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { format } from 'url';

@Injectable({
  providedIn: 'root'
})
export class DateCalcService {

  constructor(
  ) { }

  getMonthly(date: moment.Moment) {
    const daysNum = date.daysInMonth();
    const monthly = [];
    let weekly = [];
    const firstDate = moment(date.startOf('month'));
    const lastDate = moment(date.endOf('month'));
    const firstDayOfWeek = Number(firstDate.format('d'));
    // while (firstDayOfWeek && firstDayOfWeek < 7) {
    //   weekly.push('');
    //   firstDayOfWeek -= 1;
    // }
    let day = moment(firstDate.subtract(firstDayOfWeek, 'day'));
    while (day.isSameOrBefore(lastDate)) {
      weekly.push({
        moment: day,
        date: day.format('D'),
      });
      day = day.add(1, 'day');
      if (weekly.length === 7) {
        monthly.push(weekly);
        weekly = [];
      }
    }
    // for (let d = 1; d <= daysNum; d++) {
    //   const day = moment(date.date(d));
    //   weekly.push({
    //     moment: day,
    //     date: day.format('D'),
    //   });
    //   if (weekly.length === 7 || d === daysNum) {
    //     monthly.push(weekly);
    //     weekly = [];
    //   }
    // }
    const monthlyData = {
      title: firstDate.format('YYYY年MM月'),
      days: monthly
    }
    return monthlyData;
  }
}
