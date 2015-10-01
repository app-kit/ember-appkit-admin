import Ember from 'ember';
import layout from "ember-cli-appkit/components/app-form/template";
import NestedAppForm from "ember-cli-appkit/components/app-form-nested/component"

export default NestedAppForm.extend({
	layout: layout,

	fields: [
	  {field: "name"},
	  {field: "title"},
	  {field: "description"},
	  {field: "enabled"},
	  {field: "isPlaceholder", label: "Is placeholder"},
	  {field: "url"},
	  {field: "route"},
	  {field: "routeArgs", label: "Route arguments"},
	]
});
