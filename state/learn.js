Esilk.learnState = function(game){};

Esilk.learnState.prototype ={
	create: function(){
		game.add.sprite(0,0, 'menubg');

		logo = game.add.sprite(0,50, 'learntit');
		logo.scale.setTo(0.8, 0.8);

		abc = game.add.button(200, game.world.height/2, 'abcbut');
		abc.scale.setTo(0.8, 0.8);
		abc.anchor.x=0.5;

		arab = game.add.button(game.world.width/2, game.world.height/2, 'arabbut');
		arab.scale.setTo(0.8, 0.8);
		arab.anchor.x=0.5;

		shape = game.add.button(game.world.width - 200, game.world.height/2, 'shapebut');
		shape.scale.setTo(0.8, 0.8);
		shape.anchor.x=0.5;

	},
};