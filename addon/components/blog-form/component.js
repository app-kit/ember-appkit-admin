import Ember from 'ember';
import PageForm from "../page-form/component"
import layout from "../page-form/template"

export default PageForm.extend({
	layout: layout,
	type: "blog",

	allowTags: true,

});
