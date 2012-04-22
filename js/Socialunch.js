enyo.kind({
	name: "Socialunch",
	kind: enyo.FittableRows,
	classes: "onyx",
	components: [
		{kind: "onyx.Toolbar", components: [
			{kind:"onyx.Button", content:"Options", name:"prefButton", style:"margin-right:20px", ontap:"changeView", view: "loginView"},
			{kind:"onyx.Button", content:"Back", name:"backButton", style:"margin-right:20px", ontap:"changeView", view: "home"},
			{content: "Socialunch"}
		]},
		{kind: "enyo.Scroller", fit: true, components: [
			{kind: "Book", name: "Views", components: [
				{content: "Hello World", name:"home"},
				{kind:"Login", style:"padding:15px;", name:"loginView"}
			]}
		]},
		{kind: "onyx.Toolbar", style:"text-align:center", components: [
			{kind: "onyx.RadioGroup", style:"margin:0 auto; display:block; width: 300px", components: [
				{content: "Alpha", active: true},
				{content: "Beta"},
				{content: "Gamma"}
				]}
		]}
	],
	create: function() {
		this.inherited(arguments);
		this.$.backButton.hide();
	},
	changeView: function(inSender){
		this.$.Views.pageName(inSender.view);
		
		// toggle between "Back" and "options"
		if (inSender.view === "loginView") {
			this.$.prefButton.hide();
			this.$.backButton.show();
		}
		else {
			this.$.backButton.hide();
			this.$.prefButton.show();
		}
	}
});