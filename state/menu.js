var menuState = {

	create: function(){

		game.add.sprite(0,0, 'menubg');

		this.playbut = game.add.button(0,0, 'playbut', this.opengame, this);
	},

	opengame: function(){
		game.state.start('play');
	},
	
}