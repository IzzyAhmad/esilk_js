Esilk.loadState = function(game){};

Esilk.loadState.prototype ={
	preload: function(){
		//This function will load all game assets
        //Technie State
        game.load.image('technielogo', 'assets/image/stillimage/technie/technie.png');
        
        //Landing
        game.load.image('gamebg', 'assets/image/stillimage/background/gamebg.png');
        game.load.image('overlay', 'assets/image/stillimage/background/overlay.png');
        game.load.image('pressstart', 'assets/image/stillimage/mainmenu/press.png');
        game.load.image('esilklogo', 'assets/image/stillimage/mainmenu/title.png');
        
        //Vehicle
        game.load.spritesheet('vehicleleft', 'assets/image/spritesheets/vehicle/left.gif', 32, 32);
        game.load.spritesheet('vehicleright', 'assets/image/spritesheets/vehicle/right.gif', 32, 32);

        //Player
        

       	//Main Menu
       	game.load.image('playbuttit','assets/image/stillimage/menu/men.png');
       	game.load.image('abcbuttit','assets/image/stillimage/menu/alphabet.png');
       	game.load.image('morebuttit','assets/image/stillimage/menu/about.png');
       	game.load.image('marketbuttit','assets/image/stillimage/menu/pasar.png');
       	game.load.image('settingbuttit','assets/image/stillimage/menu/set.png');
       	game.load.image('leaderbuttit','assets/image/stillimage/menu/board.png');
       	game.load.image('menutit', 'assets/image/stillimage/mainmenu/menutit.png');
       	game.load.image('menubg', 'assets/image/stillimage/background/menu.png')
       	game.load.image('playbut', 'assets/image/stillimage/menu/play.png');
       	game.load.image('leaderbut', 'assets/image/stillimage/menu/leaderboard.png');
       	game.load.image('abcbut', 'assets/image/stillimage/menu/abc.png');
       	game.load.image('morebut', 'assets/image/stillimage/menu/learnmore.png');
       	game.load.image('marketbut', 'assets/image/stillimage/menu/market.png');
       	game.load.image('settingbut', 'assets/image/stillimage/menu/setting.png');
       	game.load.image('shapebut', 'assets/image/stillimage/menu/shape.png');
       	game.load.image('arabbut', 'assets/image/stillimage/menu/arab.png');

       	//Learn
       	game.load.image('learntit', 'assets/image/stillimage/mainmenu/learntit.png');
       	game.load.image('level1', 'assets/image/stillimage/level/lvl1.png');
       	game.load.image('level2', 'assets/image/stillimage/level/lvl2.png');
       	game.load.image('level3', 'assets/image/stillimage/level/lvl3.png');

       	//More
       	game.load.image('morebg', 'assets/image/stillimage/background/more.png');

       	//Leaderboard
       	game.load.image('leaderbg', 'assets/image/stillimage/background/leaderbg.png');

       },

       create: function(){
       	game.add.text(game.world.width/2, game.world.height/2,'Loading...',{font: '30px Arial', fill: '#fff'});
       },

       update: function(){
       	game.state.start('technie');
       }
   };