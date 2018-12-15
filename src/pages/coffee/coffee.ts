import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoffeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coffee',
  templateUrl: 'coffee.html',
})
export class CoffeePage {
  cof: any;
  babigon: number;
  amizon: number;
  mk: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cof = {
      "coffee": [{
        "brand": "babigon",
        "orders": [{
          "size": "s",
          "total": 40
        }, {
          "size": "m",
          "total": 5
        }, {
          "size": "l",
          "total": 3
        }, {
          "size": "xl",
          "total": 1
        }]
      }, {
        "brand": "amizon",
        "orders": [{
          "size": "s",
          "total": 4
        }, {
          "size": "m",
          "total": 10
        }, {
          "size": "l",
          "total": 7
        }, {
          "size": "xl",
          "total": 2
        }]
      }, {
        "brand": "mk",
        "orders": [{
          "size": "s",
          "total": 80
        }, {
          "size": "m",
          "total": 12
        }, {
          "size": "l",
          "total": 6
        }, {
          "size": "xl",
          "total": 3
        }]
      }]
    }

    this.babigon = 0;
    this.amizon = 0;
    this.mk = 0;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CoffeePage');
    this.calculate();
  }
  calculate() {
    this.cof.coffee.forEach(item => {
      if (item.brand === 'babigon') {
        item.orders.forEach(itm => {
          this.babigon += itm.total;
        });
      } else if (item.brand === 'amizon') {
        item.orders.forEach(itm => {
          this.amizon += itm.total;
        });

      } else if (item.brand === 'mk') {
        item.orders.forEach(itm => {
          this.mk += itm.total;
        });

      }
    });
    const best = this.bestSeller();
    const best2 = this.bestSeller2();
    console.log(best);
    console.log(best2);

  }

  bestSeller() {
    if (this.babigon > this.amizon) {
      if (this.babigon > this.mk) {
        return 'babigon';
      } else {
        return 'mk';
      }

    } else if (this.amizon > this.mk) {
      return 'amizon';

    } else {
      return 'mk';
    }
  }
  bestSeller2() {
    if (this.babigon > this.amizon && this.babigon > this.mk) {
      return 'babigon';

    } else if (this.amizon > this.mk && this.amizon > this.babigon) {
      return 'amizon';

    } else if (this.mk > this.amizon && this.mk > this.babigon) {
      return 'mk';
    }
  }
}
