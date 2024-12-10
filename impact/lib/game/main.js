ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	
	'game.entities.puck',
	'game.entities.paddle-cpu',
	'game.entities.paddle-player',
	'game.entities.scoreboard',
	'game.levels.main'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	// Variables de puntuación
	scorePlayer: 0,
	scoreCpu: 0,
	
	init: function() {
		// Initialize your game here; bind keys etc.

		//Bindeamos ls teclas necesarias
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down' );
		ig.input.bind( ig.KEY.UP_ARROW, 'up' );

		//Cargamos el nivel
		this.loadLevel( LevelMain );

		this.spawnEntity(EntityScoreboard, 0, 0);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
	}
});

ig.main( '#canvas', MyGame, 60, 768, 480, 1);

});
