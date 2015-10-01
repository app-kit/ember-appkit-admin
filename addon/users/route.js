import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function (controller, model) {
    this._super(controller, model);
    controller.setProperties({
      columns: [
        {field: "email", title: "Email"},
        {field: "roles", sort: false, title: "Roles", valueComponent: "app-list-relation-value"},
        {field: "createdAt", title: "Signup"}
      ],
      
      baseQuery: {
        joins: ["roles"]
      },
      updateQuery: {
        joins: ["roles"]
      }
    });

    this.controllerFor('application').setProperties({
    	pageTitle: "Users",
    	breadcrumbs: [{label: "Users"}]
    })
  }
});
