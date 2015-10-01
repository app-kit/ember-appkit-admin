import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function (controller, model) {
    this._super(controller, model);

    controller.setProperties({
    	updateQuery: {
    		joins: ["permissions"]
    	},
        
        baseQuery: {
            order: "name"
        }
    });

    // Implement your custom setup after
    this.controllerFor('application').setProperties({
    	pageTitle: "Roles",
    	breadcrumbs: [{label: "Users"}, {label: "Roles"}]
    })
  }
});
