Esilk.mainmenuState = function (game){};

Esilk.mainmenuState.prototype = {
	create: function(){
		game.add.sprite(0,0,'menubg');

		logo = game.add.sprite(30,50, 'menutit');
		logo.scale.setTo(0.8, 0.8);

		play = game.add.button(200,game.world.height/2,'playbut');
		play.scale.setTo(0.7, 0.7);
		play.anchor.x= 0.5;

		title = game.add.button(200,game.world.height/2 + 100,'playbuttit');
		title.anchor.x= 0.5;

		leader = game.add.button(game.world.width/2,game.world.height/2,'leaderbut', this.bod);
		leader.scale.setTo(0.7, 0.7);
		leader.anchor.x= 0.5;

		title = game.add.button(game.world.width/2,game.world.height/2 + 100,'leaderbuttit');
		title.anchor.x= 0.5;

		learn = game.add.button(game.world.width-200,game.world.height/2,'abcbut', this.belajar);
		learn.scale.setTo(0.7, 0.7);
		learn.anchor.x= 0.5;

		title = game.add.button(game.world.width -200,game.world.height/2 + 100,'abcbuttit');
		title.anchor.x= 0.5;


		market = game.add.button(200,game.world.height/2+160,'marketbut');
		market.scale.setTo(0.7, 0.7);
		market.anchor.x= 0.5;

		title = game.add.button(200,game.world.height/2 + 100 +160,'marketbuttit');
		title.anchor.x= 0.5;

		more = game.add.button(game.world.width/2,game.world.height/2+160,'morebut', this.more);
		more.scale.setTo(0.7, 0.7);
		more.anchor.x= 0.5;

		title = game.add.button(game.world.width/2,game.world.height/2 + 100 +160,'morebuttit');
		title.anchor.x= 0.5;

		setting = game.add.button(game.world.width-200,game.world.height/2+160,'settingbut');
		setting.scale.setTo(0.7, 0.7);
		setting.anchor.x= 0.5;

		title = game.add.button(game.world.width-200,game.world.height/2 + 100 +160,'settingbuttit');
		title.anchor.x= 0.5;
	},

	game: function(){
		//game.state.start('game');
	},

	more: function(){
		game.state.start('more');
	},

	belajar: function(){
		game.state.start('learn');
	},

	bod: function(){
		game.state.start('leader');
	}
};