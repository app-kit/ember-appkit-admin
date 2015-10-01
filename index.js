/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-appkit-admin',

  afterInstall: function() {
  	this._super(arguments);

    return this.addBowerPackagesToProject([
      "admin-lte",
      "bootstrap"
    ]);
  },

  included: function(app) {
  	this._super.included(app);

  	// Bootstrap styles, javascript and fonts.
	  app.import("bower_components/bootstrap/dist/js/bootstrap.js");

	  app.import("bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot", {
	    destDir: "fonts"
	  });
	  app.import("bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg", {
	    destDir: "fonts"
	  });
	  app.import("bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf", {
	    destDir: "fonts"
	  });
	  app.import("bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff", {
	    destDir: "fonts"
	  });
	  app.import("bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2", {
	    destDir: "fonts"
	  });

	  // AdminLTE styles and fonts.
	  app.import("bower_components/AdminLTE/dist/js/app.js")
	  app.import("bower_components/AdminLTE/dist/css/AdminLTE.css")
	  app.import("bower_components/AdminLTE/dist/css/skins/skin-blue.css")
  }
};
