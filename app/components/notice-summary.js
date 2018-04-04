import Component from '@ember/component';
import { sort } from '@ember/object/computed';

export default Component.extend({

  noticeSortingDesc: Object.freeze(['date:desc']),
  sortedNotices: sort('notices', 'noticeSortingDesc')

});
