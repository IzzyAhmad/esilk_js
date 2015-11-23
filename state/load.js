
var loadState ={

	preload: function(){

		var loadingLabel = game.add.text(80, 150, 'Loading...', {font: '30px Courier', fill: '#fff'});

		//global
		//player
		game.load.image('player','assets/img/assets/player.png');
		//sign
		game.load.image('crossing', 'assets/img/assets/signpost/crossing.png');
		//vehicle
		game.load.image('bus', 'assets/img/assets/vehicle/bus.png');

		//landing
		game.load.image('title', 'assets/img/assets/title.png');
		game.load.image('start', 'assets/img/assets/press.png');
		game.load.image('landingbg', 'assets/img/assets/landing.png');
		game.load.image('menudeco' , 'assets/img/assets/menudeco.png');

		//mainmenu
		//buttons
		game.load.image('menubg', 'assets/img/assets/mainmenu.png');
		game.load.image('playbut', 'assets/img/assets/menu/play.png');
		game.load.image('leaderbut', 'assets/img/assets/menu/leaderboard.png');
		game.load.image('marketbut', 'assets/img/assets/menu/market.png');
		game.load.image('learnbut', 'assets/img/assets/menu/abc.png');
		game.load.image('morebut', 'assets/img/assets/menu/learnmore.png');
		game.load.image('seetingbut', 'assets/img/assets/menu/setting.png');

		game.load.image('win','assets/img/assets/tile_road_1.png');
	},

	create: function(){
		game.state.start('landing');
	},
}  