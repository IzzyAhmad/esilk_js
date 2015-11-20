var menuState = {

	create: function(){
		var nameLabel = game.add.text(80, 80,'My first game', {font: '25px Arial', fill: '#fff'});

		var startLabel = game.add.text(80, game.world.height-80, 'Press the "W" key to start', {font: '25px Arial', fill: '#fff'});

		var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);

		wKey.onDown.addOnce(this.start, this);
	},

	start: function(){
		game.state.start('play');
	}
}