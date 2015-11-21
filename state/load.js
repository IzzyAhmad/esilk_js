
var loadState ={

	preload: function(){

		var loadingLabel = game.add.text(80, 150, 'Loading...', {font: '30px Courier', fill: '#fff'});

		game.load.image('logo', 'assets/img/assets/logo.png');
		game.load.image('player','assets/img/assets/taxi.png');
		game.load.image('win','assets/img/assets/tile_road_1.png');
	},

	create: function(){
		game.state.start('menu');
	},
}