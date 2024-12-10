ig.module(
    'game.entities.paddle'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityPaddle = ig.Entity.extend({
        size: {x: 8, y: 48},
        collides: ig.Entity.COLLIDES.FIXED,
        animSheet: new ig.AnimationSheet('media/paddle.png', 8, 48),
        bounciness: 1,
        friction: {x: 0, y: 0},
        maxVel: {x: 400, y: 400},
        init: function( x, y, settings ) {
            this.parent( x, y, settings );
            this.addAnim( 'idle', 1, [0] );
        },
        update: function() {
            this.parent();
        },
    });
});