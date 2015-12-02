Esilk.technieState = function (game){
};

Esilk.technieState.prototype ={ 
	create: function(){
		game.add.sprite(0,0,'technielogo');
	},

	update: function(){
		game.state.start('landing');
	}
};