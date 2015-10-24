import Ember from 'ember';
import PageList from "../page-list/component";

export default PageList.extend({
	
	title: "Blogposts",
  createFormComponent: "blog-form",
  updateFormComponent: "blog-form",

  baseQuery: {
		filters: {type: "blog"}
	},
});
