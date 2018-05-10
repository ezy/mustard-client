import Controller from '@ember/controller';
import { computed } from '@ember/object';
import moment from 'moment';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('isSaving', false);
  },
  upcoming: computed('model', function() {
    const thisSunday = moment().day(7).startOf('day');
    return this.get('model')
      .filter(item => {
        return moment(item.get('date')).isSameOrAfter(thisSunday);
      })
      .sort((a, b) => {
        return moment(a.get('updated')).isBefore(moment(b.get('updated'))) ? 1 : -1;
      });
  }),
  actions: {
    saveModel() {
      let model = this.get('model');
      this.set('isSaving', true);
      model.save()
        .then(() => {
          this.set('isSaving', false);
          this.get('flashMessages').success('Content successfully saved')
        })
        .catch(() => {
          this.set('isSaving', false);
          this.get('flashMessages').danger('Something went wrong - content not saved')
        });
    },
  }
});