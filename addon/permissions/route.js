import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function (controller, model) {
    this._super(controller, model);

    controller.setProperties({
    	baseQuery: {
    		order: "name"
    	}
    });

    // Implement your custom setup after
    this.controllerFor('application').setProperties({
    	pageTitle: "Permissions",
    	breadcrumbs: [{label: "Users"}, {label: "Permissions"}]
    })
  }
});
