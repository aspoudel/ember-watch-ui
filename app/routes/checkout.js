import Route from '@ember/routing/route';
import { watchList } from '../models/watchList';
import { service } from '@ember/service';

export default class CheckoutRoute extends Route {
  @service checkoutpageId;
  async model() {
    let watch_id_data = watchList.filter(
      (obj) => obj.id == this.checkoutpageId.checkoutId
    );
    return watch_id_data;
  }
}
