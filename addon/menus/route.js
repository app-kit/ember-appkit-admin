import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function (controller, model) {
    this._super(controller, model);

    controller.setProperties({
        updateQuery: {
            joins: ["items"]
        },

    	columns: [
    		{field: "name", title: "Name"},
    		{field: "title", title: "Title"},
    		{field: "language", title: "Language"},
    	]
    });

    // Implement your custom setup after
    this.controllerFor('application').setProperties({
    	pageTitle: "Menus",
    	breadcrumbs: [{label: "CMS"}, {label: "Menus"}]
    })
  }
});
