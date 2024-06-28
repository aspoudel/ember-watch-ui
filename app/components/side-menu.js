import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SideMenu extends Component {
  @tracked username;

  @action
  showMenu() {
    document.querySelector('#sidebar').classList.toggle('active');
    let urlString = window.location.href.toString();
    for (let i = 0; i < urlString.length; i++) {
      if (urlString.charAt(i) == 'e') {
        this.username = urlString.substring(i + 2, urlString.length);
      }
    }
  }
/*
  @action
  async logoutRequest() {
    fetch('http://localhost:3000/logout', {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ response }) => {
        console.log(response);
      })
      .catch((e) => {
        console.error(e.error);
      });
  }
*/
  @action
  async sessionCheck() {
    console.log('cliked');
    /*fetch('http://localhost:3000/session-id', {
      method: 'GET',
    });*/
  }
}
