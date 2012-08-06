enyo.kind({
	name: "Login",
	kind: "enyo.Control",
	classes: "login enyo-fit",
	components : [
		{tag:"img", src:"assets/logo.png", classes:"logo", alt:"Socialunch"},
		{kind: "onyx.Groupbox", components: [
			{kind: "onyx.GroupboxHeader", content: "Login", name:"gbHeader"},
			{kind: "onyx.InputDecorator", name:"usernameInput", components: [
				{kind: "onyx.Input", placeholder: "Username", name: "username"}
			]},
			{kind: "onyx.InputDecorator", components: [
				{kind: "onyx.Input", placeholder: "your@email.com", name: "email"}
			]},
			{kind: "onyx.InputDecorator", components: [
				{kind: "onyx.Input", placeholder: "Password", name: "pwd", type:"password"}
			]}
		]},
		{tag: "p", name:"error"},
		{classes:"submit", defaultKind: "onyx.Button", components: [
			{content: "Login", classes: "button-green", ontap: "login", name:"loginButton"},
			{content: "Sign Up", classes: "button-green", ontap: "register", name:"registerButton" }
		]},
		{tag:"p", name:"registerText", components: [
			{tag:"", content:"If you don't have an account, you can "},
			{tag:"strong", content:"register"},
			{tag:"", content:" one here."}
		],  ontap: "showRegister"},
		{tag:"p", name:"loginText", components: [
			{tag:"", content:"Go back and "},
			{tag:"strong", content:"log in"},
			{tag:"", content:"."}
		],  ontap: "showLogin"}
	],
	create: function() {
		this.inherited(arguments);
		this.showLogin();
	},
	showRegister: function() {
		this.$.gbHeader.setContent("Sign Up");
		this.$.loginButton.hide();
		this.$.registerText.hide();
		this.$.registerButton.show();
		this.$.loginText.show();
		this.$.usernameInput.show();
		this.$.error.setContent("");
	},
	showLogin: function() {
		this.$.gbHeader.setContent("Login");
		this.$.loginButton.show();
		this.$.registerText.show();
		this.$.registerButton.hide();
		this.$.loginText.hide();
		this.$.usernameInput.hide();
		this.$.error.setContent("");
	},
	register: function() {
		var username = this.$.username.hasNode().value;
		var email = this.$.email.hasNode().value;
		var pwd = this.$.pwd.hasNode().value;
		
		// TODO: do request here
		this.$.error.setContent("Request not implemented yet.");
	},
	login: function() {
		var email = this.$.email.hasNode().value;
		var pwd = this.$.pwd.hasNode().value;

		//TODO do verification request here
		createCookie("socMail", email, 1);
		createCookie("socPwd", pwd, 1);

		this.$.error.setContent("Cookie created please reload.");
	}
});