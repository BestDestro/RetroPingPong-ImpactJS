ig.module( 'game.levels.main' )
.requires( 'impact.image','game.entities.paddle-player','game.entities.paddle-cpu','game.entities.puck' )
.defines(function(){
LevelMain=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPaddlePlayer",
			"x": 88,
			"y": 188
		},
		{
			"type": "EntityPaddleCpu",
			"x": 672,
			"y": 196
		},
		{
			"type": "EntityPuck",
			"x": 392,
			"y": 204
		}
	],
	"layer": [
		{
			"name": "collision",
			"width": 16,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 48,
			"foreground": false,
			"data": [
				[1,1,23,23,23,23,23,23,23,23,23,23,23,23,1,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
				[1,1,12,12,12,12,12,12,12,12,12,12,12,12,1,1]
			]
		},
		{
			"name": "main",
			"width": 16,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tileset.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 48,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelMainResources=[new ig.Image('media/tileset.png')];
});