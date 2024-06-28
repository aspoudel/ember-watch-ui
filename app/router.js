import EmberRouter from '@ember/routing/router';
import config from 'watch-store/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('checkout', { path: 'checkout/:id' });
  this.route('home-page', { path: 'home' });
  this.route('home-page', { path: 'home/:id' });
  this.route('about-us');
  this.route('terms-of-use');
  this.route('cookies');
  this.route('privacy-notice');
});
