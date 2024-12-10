ig.module(
    'game.entities.scoreboard'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityScoreboard = ig.Entity.extend({
        scorePlayer: 0,
        scoreCpu: 0,
        font: new ig.Font('media/04b03.font.png'),
        
        init: function(x, y, settings) {
            this.parent(x, y, settings);
        },
        
        draw: function() {
            this.parent();
            this.font.scale = 2;
            this.font.draw('Player: ' + this.scorePlayer, 10, 10);
            this.font.draw('CPU: ' + this.scoreCpu, 728, 10);
        }
    });
});