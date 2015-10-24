import Ember from 'ember';
import EditableList from "ember-cli-appkit/components/app-list-editable/component";

export default EditableList.extend({

  title: "Pages",
  modelName: "page",
  modelTitleField: "name",
  createFormComponent: "page-form",
  updateFormComponent: "page-form",

  actionColumnComponent: "page-list-actions",

  baseQuery: {
		filters: {type: "page"}
	},

	updateQuery: {
		joins: ["menuItem", "files", "tags"]
	},

	columns: [
		{field: "name", title: "Name"},
		{field: "title", title: "Title"},
		{field: "language", title: "Language"},
    {field: "published", title: "Published"}
	],

	appkit: Ember.inject.service("appkit"),

	actions: {
		publish(model) {
			this.appkit.method("cms.page.publish", {id: model.get("id")}).then(() => {
				model.set("published", true);
				bootbox.alert("Page was published");
			}, data => {
				bootbox.alert("Error while publishing");
				console.log("Publish error: ", data);
			});	
		},

		unpublish(model) {
			model.set("published", false)
			model.save().then(() => {
				bootbox.alert("Page unpublished.");
			}, data => {
				bootbox.alert("Error while unpublishing.")
				console.log("Unpublish error: ", data);
			});
		}
	}

});
