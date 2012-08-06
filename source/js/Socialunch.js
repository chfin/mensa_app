enyo.kind({
	name: "Socialunch",
	kind: "FittableRows", 
	classes: "enyo-fit onyx",
	components: [
		{kind: "FittableColumns", classes:"top-bar", name:"topbar", components: [
			{fit:true, noStretch: true, classes:"logo", components: [
				{tag:"img", src:"assets/logo.svg", alt:"Socialunch"}
			]},
			{kind:"onyx.Icon", src: "assets/icons/playback_reload_silver.svg", classes:"icon-button last-icon" }
		]},
		{kind: "Panels", name:"samplePanels", classes:"paper-grain", fit:true, realtimeFit: true, classes: "paper-grain", onTransitionFinish:"panelChanged", components: [ 
			{content:0}, 
			{content:1}, 
			{content:2}, 
			{content:3}, 
			{content:4}
		]},
		{kind: "onyx.Toolbar", classes:"bottom-bar", components: [ 
			{kind: "Group", name:"bottomBar", tag: null, ontap:"changePanel", onActivate:"iconGroupActivated", defaultKind: "IconButton", components: [
				{src: "assets/icons/home", classes:"first-icon", active: true},
				{src: "assets/icons/eye"},
				{src: "assets/icons/pin_map"},
				{src: "assets/icons/user"},
				{src: "assets/icons/jam", classes:"last-icon"}
			]},
		]},
	],
	create: function() {
		this.inherited(arguments);
		this.$.samplePanels.setArrangerKind("CarouselArranger");
	},
	// switches between panels depending on what iconbutton is pressed
	changePanel: function (inSender, inEvent) {
		this.$.samplePanels.setIndex(inEvent.originator.indexInContainer());
	},
	panelChanged: function (inSender, inEvent) {
		var index = this.$.samplePanels.getIndex();
		//this.$.bottomBar[index].active = true;
		this.$.bottomBar.getControls()[index].setActive(true);
	}
});