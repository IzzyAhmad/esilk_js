var menuState = {

	create: function(){
		//alert(game.world.width/2);

		this.logo = game.add.sprite(game.world.width/2,50, 'logo');
		//this.logo = game.sprite.anchor(0.5, 0.5);
		this.logo.anchor.x = 0.5;

		//var nameLabel = game.add.text(80, 80,'My first game', {font: '25px Arial', fill: '#fff'});

		var startLabel = game.add.text(80, game.world.height-80, 'Press the "W" key to start', {font: '25px Arial', fill: '#fff'});

		var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);

		wKey.onDown.addOnce(this.start, this);
	},

	start: function(){
		game.state.start('play');
	}
}