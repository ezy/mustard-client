import Route from '@ember/routing/route';
import SetChurchController from 'newseed/mixins/church-set-controller';

export default Route.extend(SetChurchController, {
  model() {
    return this.get('store').findAll('audio');
  }
});
