import Ember from 'ember';
import AppForm from "ember-cli-appkit/components/app-form/component"
import layout from "./template";

export default AppForm.extend({
	layout: layout,

	languageOptions: [
		{id: "de", name: "Deutsch"},
		{id: "en", name: "English"}
	],

	menuItemColumns: [
		{field: "name", title: "Name"},
		{field: "title", title: "Title"},
		{field: "enabled", title: "Enabled"},
		{field: "url", title: "Url"},
		{field: "route", title: "Route"}
	]
});
