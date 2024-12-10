ig.module(
    'game.entities.paddle-player'
)
.requires(
    'game.entities.paddle',
    'game.entities.puck'
)
.defines(function(){
    EntityPaddlePlayer = EntityPaddle.extend({
        update: function() {
            if (ig.input.state('up')) {
                this.vel.y = -100;
            }
            else if (ig.input.state('down')) {
                this.vel.y = 100;
            }
            else {
                this.vel.y = 0;
            }
            this.parent();
        },
    });
}
);