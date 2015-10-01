import Ember from 'ember';
import layout from "./template";

export default Ember.Component.extend({
	layout: layout,
	
	actions: {
		logout() {
			this.session.invalidate();
		}
	}
});
