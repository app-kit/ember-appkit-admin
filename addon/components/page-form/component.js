import Ember from 'ember';
import AppForm from "ember-cli-appkit/components/app-form/component";
import layout from "./template";

export default AppForm.extend({

	layout: layout,

	// Page type. Will be added to default values in buildDefault()
	type: "page",

	allowFiles: true,
	allowTags: false,
	allowMenuItem: true,
	allowListSummary: false,

	submitMethod: "saveWithRelations",

	languageOptions: [
		{id: "de", name: "Deutsch"},
		{id: "en", name: "English"}
	],

	defaults: {type: "page"},

	buildDefault: Ember.on("init", function() {
		var type = this.get("type");
		if (type) {
			this.get("defaults").type = type;
		}
	})
});
