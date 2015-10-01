import Ember from 'ember';
import AppForm from "ember-cli-appkit/components/app-form/component";

function validatePassword(pw) {
	if (!pw) {
		return "Password may not be empty.";
	}

	if (pw.length < 5) {
		return "Password must be at least 5 characters long."
	} 

	return "";
}

export default AppForm.extend({
	password: "",

	appkit: Ember.inject.service("appkit"),

	actions: {
		// Need a custom submit function due to password handling.
		submit: function() {
			var model = this.get("model");

			var that = this;

			if (!model.get("isNew")) {
				// Not new, so we can just save the model.
				model.save().then(data => {
					this.set("loading", false);
					this.sendAction("formSubmitted");
				}, data => {
					this.setProperties({
						loading: false,
						errors: data.errors
					});
				})
			} else {
				// Model is new, so do custom  save with password data.
				var pw = this.get("password");
				var err = validatePassword(pw);
				if (err !== "") {
					this.set("errors", [{message: "Invalid password: " + pw}]);
					return;
				}

				var data = model.serialize();

				data.meta = {
					adaptor: "password",
					"auth-data": {
						password: pw
					}
				};

				this.set("loading", true);

				var apiUrl = this.appkit.get("apiUrl");

				var that = this;
				Ember.$.ajax({
					method: "POST",
					url: apiUrl + "/users",
					data: JSON.stringify(data),
					contentType: "application/json",
				}).then(function() {
					that.set("loading", false);
					that.sendAction("formSubmitted");
				}, function(data) {
					that.setProperties({
						loading: false,
						errors: data.errors
					});
				});
			}

		},

		changePassword: function() {
			var pw = this.get("password");
			var err = validatePassword(pw);
			if (err !== "") {
				bootbox.alert("Invalid password: " + err);
				return;
			}

			var data = {
				password: pw,
				userId: this.get("model").get("id")
			};

			this.set("loading", true);

			this.get("appkit").method("users.change-password", data).then(data => {
				this.set("loading", false);
				bootbox.alert("Password was changed");
			}, function(data, xhr) {
				var err = data.errors[0];
				var msg = err.message || err.code;
				bootbox.alert("Error while changing password: " + msg);
			});
		}
		
	}



});
