import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		logout() {
			this.session.invalidate();
		}
	}
});
