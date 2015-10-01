import Ember from "ember";

export default Ember.Controller.extend({
	pageTitle: "",
	pageSubTitle: "",

	// Format: [{
	//   label: "Page",
	//   route: "ember.route"
	// }]
	breadcrumbs: []
});
