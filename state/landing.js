var landingState = {

	create: function(){
		//alert(game.world.width/2

			game.add.sprite(0,0, 'landingbg');

			//this.menudeco = game.add.sprite(0, 200, 'menudeco');


			this.logo = game.add.sprite(-90,0, 'title');
			//this.logo.anchor.x = 0.5;
			this.logo.scale.setTo(0.7, 0.7);

			//this.tap = game.add.sprite(game.world.width/2, game.world.height - 150, 'start');
			//this.tap.anchor.x = 0.5;
			
			this.crossing = game.add.sprite(game.world.width - 300,240,'crossing');
			this.crossing.scale.setTo(0.1,0.1);

			this.bus = game.add.sprite(game.world.width,game.world.height - 180, 'bus');
			this.bus.scale.setTo(0.2,0.2);
			
			this.player = game.add.sprite(game.world.width - 250,game.world.height - 110,'player');
			this.player.scale.setTo(0.12,0.12);
			
			this.button = game.add.button(game.world.width/2, game.world.height - 90, 'start', this.start, this);
			this.button.anchor.x = 0.5;
			this.button.scale.setTo(0.5, 0.5);


		//var nameLabel = game.add.text(80, 80,'My first game', {font: '25px Arial', fill: '#fff'});
		//var startLabel = game.add.text(80, game.world.height-80, 'Press the "W" key to start', {font: '25px Arial', fill: '#fff'});

		var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);

		wKey.onDown.addOnce(this.start, this);
	},

	update: function(){
		this.bus.x -= 1;

		if (this.bus.x < -150){
			this.bus.x = game.world.width;
		}
	},

	start: function(){
		game.state.start('menu');
	},
}