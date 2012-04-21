enyo.kind({
	name: "Register",
	kind: "enyo.Control",
	components : [
		{kind: "onyx.Groupbox", components: [
			{kind: "onyx.GroupboxHeader", content: "Register"},
			{kind: "onyx.InputDecorator", components: [
				{kind: "onyx.Input", placeholder: "your@email.com", name: "email"}
			]},
			{kind: "onyx.InputDecorator", components: [
				{kind: "onyx.Input", placeholder: "Password", name: "pwd"}
			]}
		]},
		{kind: "onyx.Button", content: "Register", style:"margin: 25px auto;display:block;", classes: "onyx-affirmative", ontap: "register"}
	],
	// functions
	register: function() {
		email = this.$.email.hasNode().value;
		pwd = this.$.pwd.hasNode().value;
		
		alert(email+ " : "+pwd);
	}
});