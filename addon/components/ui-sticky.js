import Ember from 'ember';
import Base from '../mixins/base';

export default Ember.Component.extend(Base, {
  module: 'sticky',
  classNames: [ 'ui', 'sticky' ]
});
