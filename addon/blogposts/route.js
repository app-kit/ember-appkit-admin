import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function (controller, model) {
    this._super(controller, model);

    // Implement your custom setup after
    this.controllerFor('application').setProperties({
    	pageTitle: "Blogposts",
    	breadcrumbs: [{label: "CMS"}, {label: "Blogposts"}]
    });
  }
});
