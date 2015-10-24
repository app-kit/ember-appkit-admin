import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
	// Bubble up actions.
	target: Ember.computed.alias("targetObject"),
	
  layout: layout
});
