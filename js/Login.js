enyo.kind({
	name: "Login",
	kind: "enyo.Control",
	components : [
		{kind: "onyx.Groupbox", components: [
			{kind: "onyx.GroupboxHeader", content: "Login or Register"},
			{kind: "onyx.InputDecorator", components: [
				{kind: "onyx.Input", placeholder: "your@email.com", name: "email"}
			]},
			{kind: "onyx.InputDecorator", components: [
				{kind: "onyx.Input", placeholder: "Password", name: "pwd", type:"password"}
			]}
		]},
		{classes:"submit", style:"margin: 25px auto;text-align:center", defaultKind: "onyx.Button", components: [
			{content: "Login", classes: "onyx-affirmative", ontap: "login"},
			{content: "Register", classes: "onyx-blue", ontap: "register", }
		]},
		{tag: "p", name:"error"}
	],
	// functions
	register: function() {
		email = this.$.email.hasNode().value;
		pwd = this.$.pwd.hasNode().value;
		
		// TODO: do request here
		this.$.error.setContent("You have been successfully registered. Please check your mails and click on the confirmation link to activate your account.");
		
	}
});