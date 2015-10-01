import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function (controller, model) {
    this._super(controller, model);

    controller.setProperties({
        baseQuery: {
            filters: {type: "page"}
        },

        updateQuery: {
            joins: ["menuItem", "files", "attachedFiles", "tags"]
        },

    	columns: [
    		{field: "name", title: "Name"},
    		{field: "title", title: "Title"},
    		{field: "language", title: "Language"},
            {field: "published", title: "Published"}
    	]
    });

    // Implement your custom setup after
    this.controllerFor('application').setProperties({
    	pageTitle: "Pages",
    	breadcrumbs: [{label: "CMS"}, {label: "Pages"}]
    });
  }
});
