import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('users');
  this.route('permissions', {path: "users/permissions"});
  this.route('roles', {path: "users/roles"});

  this.route('menus', {path: "cms/menus"});
  this.route('pages', {path: "cms/pages"});
  this.route('blogposts', {path: "cms/blogposts"});
});

export default Router;
