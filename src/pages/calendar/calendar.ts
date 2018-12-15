import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  month: Array<any>;
  days31: Array<any>;
  days30: Array<any>;
  days28: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.days31 = [];
    this.days30 = [];
    this.days28 = [];
    this.month = [{
      id: 1,
      name: 'Jan',
      days: 31
    }, {
      id: 2,
      name: 'Feb',
      days: 28
    }, {
      id: 3,
      name: 'Mar',
      days: 31
    }, {
      id: 4,
      name: 'April',
      days: 30
    }, {
      id: 5,
      name: 'May',
      days: 31
    }, {
      id: 6,
      name: 'Jun',
      days: 30
    }, {
      id: 7,
      name: 'Jul',
      days: 31
    }, {
      id: 8,
      name: 'Aug',
      days: 31
    }, {
      id: 9,
      name: 'Sep',
      days: 30
    }, {
      id: 10,
      name: 'Oct',
      days: 31
    }, {
      id: 11,
      name: 'Nov',
      days: 30
    }, {
      id: 12,
      name: 'Dec',
      days: 31
    }]
  }

  ionViewDidLoad() {
    this.setMonth();
    console.log('ionViewDidLoad CalendarPage');
  }

  setMonth() {
    this.month.forEach(item => {
      if (item.days === 31) {
        this.days31.push(item);
      } else if (item.days === 30) {
        this.days30.push(item);

      } else {
        this.days28.push(item);
      }
    });
    console.log(this.days31);
    console.log(this.days30);
    console.log(this.days28);
  }
}
