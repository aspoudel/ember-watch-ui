import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class WatchListings extends Component {
  @service('checkoutpage-id') product;

  @action
  checkoutIdChange1() {
    this.product.checkoutId = 1;
  }

  @action
  checkoutIdChange2() {
    this.product.checkoutId = 2;
  }

  @action
  checkoutIdChange3() {
    this.product.checkoutId = 3;
  }

  @action
  toBeCalled() {
    console.log('heer');
    this.name = this.username.name;
  }
}
