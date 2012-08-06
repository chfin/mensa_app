/**
	This is a slight modofication of an onyx.IconButton which toggles between two background images.
**/
enyo.kind({
	name: "IconButton",
	kind: onyx.IconButton,
	classes: "icon-button",
	published: {
		color: "",
		active: false
	},
	rendered: function() {
		this.inherited(arguments);
	},
	setIcon: function() {
		if (this.src) {
			this.applyStyle("background-image", "url(" + enyo.path.rewrite(this.src) + "_" + this.color + ".svg)");
		}
	},
	toggle: function() {
		if (this.active == true) {
			this.color = "green";
		}
		else {
			this.color = "silver";
		}
		this.setIcon();
	},
	activeChanged: function() {
		this.inherited(arguments);
		this.toggle();
	}
});