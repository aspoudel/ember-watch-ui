import Component from '@glimmer/component';

export default class HeroVideo extends Component {
  constructor() {
    super(...arguments);
    console.log(this.args.title);
    this.args.title = 'Simple title.';
  }
}
