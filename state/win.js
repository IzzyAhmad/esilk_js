var winState = {

	create: function(){
		var winLabel =  game.add.text(80,80,'You won!', {font: '50px Arial', fill: '#fff'});
		var startLabel =  game.add.text(80, game.world.height-80,'Press the "W" key tp restart', {font: '20px Arial', fill: '#fff'});

		var wkey =  game.input.keyboard.addKey(Phaser.Keyboard.W);

		wkey.onDown.addOnce(this.restart, this);
	},

	restart: function(){
		game.state.start('menu');
	}
}