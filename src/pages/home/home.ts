import { Component } from '@angular/core';
import { NavController, Item } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  traffic: Array<any>;
  time: any;
  constructor(public navCtrl: NavController) {
    this.time = this.setTime();
    this.traffic = [{
      color: 'green',
      switch: 'on'
    }, {
      color: 'yellow',
      switch: 'on'
    }, {
      color: 'red',
      switch: 'on'
    }]
  }
  ionViewDidLoad() {
    this.setData();
  }

  setData() {
    if (this.time >= '07:00' && this.time <= '12:00') {
      this.traffic.forEach(item => {
        if (item.color === 'green') {
          item.switch = 'on';
        } else {
          item.switch = 'off';
        }
      });
    } else if (this.time >= '12:01' && this.time <= '13:00') {
      this.traffic.forEach(item => {
        if (item.color === 'yellow') {
          item.switch = 'on';
        } else {
          item.switch = 'off';
        }
      });
    } else if (this.time >= '13:01' && this.time <= '18:00') {
      this.traffic.forEach(item => {
        if (item.color === 'red') {
          item.switch = 'on';
        } else {
          item.switch = 'off';
        }
      });
    } else {
      this.traffic.forEach(item => {
        item.switch = 'off';
      })
    }
  }

  setTime() {
    let d = new Date();
    let n = d.getHours();
    let m = d.getMinutes();
    return n + ':' + m;
  }
}
