import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HomePageRoute extends Route {
  async model() {
    let urlString = window.location.href.toString();
    for (let i = 0; i < urlString.length; i++) {
      if (urlString.charAt(i) == 'e') {
        return urlString.substring(i + 2, urlString.length);
      }
    }
    return null;
  }
}
