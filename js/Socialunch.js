enyo.kind({
	name: "Socialunch",
	kind: enyo.FittableRows,
	classes: "onyx",
	components: [
		{kind: "onyx.Toolbar", components: [
			{content: "Socialunch"}
		]},
		{kind: "enyo.Scroller", fit: true, components: [
			{kind:"Register", style:"padding:25px;"}
		]}
	]
});