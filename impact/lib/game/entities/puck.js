ig.module(
    'game.entities.puck'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityPuck = ig.Entity.extend({
        size: {x: 21, y: 30},
        
        //Colisión contra entidades 
        collides: ig.Entity.COLLIDES.ACTIVE,

        animSheet: new ig.AnimationSheet('media/puck.png', 21, 30),
        bounciness: 1,
        
        maxVel: {x: 400, y: 400},
        init: function(x, y, settings) {
            this.parent(x, y, settings);
            
            //Con Frames
            this.addAnim('idle', 0.1, [0,1,2,3,4,5,6,7,7,6,5,4,3,2,1,0]);
           
            //Sin Frames
            //this.addAnim('idle', 1, [0]);

            this.vel.x = 200;
            this.vel.y = 200;
        },
        
        update: function() {
            this.parent();
            if (this.pos.x <= 0) {
                ig.game.getEntitiesByType(EntityScoreboard)[0].scoreCpu += 1;
                this.resetPosition();
            } else if (this.pos.x + this.size.x >= 768) {
                ig.game.getEntitiesByType(EntityScoreboard)[0].scorePlayer += 1;
                this.resetPosition();
            }
        },
        
        resetPosition: function() {
            this.pos.x = 384;
            this.pos.y = 232;
            this.vel.x = 0;
            this.vel.y = 0;
            
            
            // Esperar 3 segundos antes de volver a moverse
            setTimeout(() => {
                this.vel.x = 200;
                this.vel.y = 200;
            }, 3000);
        }
    });
});