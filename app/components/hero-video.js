import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HeroVideo extends Component {
  @tracked
  isPlaying = false;

  @action
  playpause() {
    /*
    let timer = null;
    let time = function() {
      console.log("User is AFK!");
    }
    document.onkeypress = () => {
      clearTimeout(timer);
      console.log("User is Typing...");
      timer = setTimeout(time, 2000);
    }*/

    const toggle = document.querySelector('#hero-video');
    if (this.isPlaying) {
      toggle.pause();
      this.isPlaying = false;
    } else {
      toggle.play();
      this.isPlaying = true;
    }
  }
}
