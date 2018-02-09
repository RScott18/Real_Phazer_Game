var mainState = {

    preload: function() {
        //load graphics
        game.load.image('cover', 'assets/blackcover.png');
        game.load.image('player', 'assets/New Piskel clone (1).png');
        game.load.image('block', 'assets/ground.png');
        game.load.image('baddy', 'assets/skeleton.png');
        game.load.image('door', 'assets/New Piskel.png');
        game.load.image('lava', 'assets/lava.png');
        game.load.image('key', 'assets/button.png');
        game.load.image('water', 'assets/Water Block.gif');
        game.load.image('fireball', 'assets/fireball.png')
     
    },
    
    create: function() {
        // set BG colour
        game.stage.backgroundColor = '#9907f5';
        game.physics.startSystem(Phaser.Physics.ARCADE); // start the physics engine
        
        //enemy group
        enemy = game.add.group();
        enemy.enableBody = true;
        
        //make maze
        this.buildMaze();
        
        block2=game.add.sprite(900,250,'block'); 
        game.physics.arcade.enable(block2);

        
        //create door
        door=game.add.sprite(50,100,'door');
        game.physics.arcade.enable(door);
       
        //loacked door
        door2=game.add.sprite(800,150,'door');
        game.physics.arcade.enable(door2);
        
        //plate
        plate=game.add.sprite(900,150,'key');
        game.physics.arcade.enable(plate);
        
        
        //create player
        player=game.add.sprite(900,50,'player');
        game.physics.arcade.enable(player);
        
        Cover=game.add.sprite(50,1400,'cover')
        
        // create baddy2
        baddy2=game.add.sprite(900,700,'baddy');
        enemy.add(baddy2);
        baddy2.body.velocity.setTo(150,0)
        baddy2.body.bounce.set(1);
        
        //create baddy3
        baddy3=game.add.sprite(800,800,'baddy');
        enemy.add(baddy3);
        baddy3.body.velocity.setTo(150,0)
        baddy3.body.bounce.set(1);
        
        baddy4=game.add.sprite(700,900,'baddy');
        enemy.add(baddy4);
        baddy4.body.velocity.setTo(150,0)
        baddy4.body.bounce.set(1);
        
        baddy5=game.add.sprite(900,600,'baddy');
        enemy.add(baddy5);
        baddy5.body.velocity.setTo(150,0)
        baddy5.body.bounce.set(1);
        
        baddy6=game.add.sprite(800,500,'baddy');
        enemy.add(baddy6);
        baddy6.body.velocity.setTo(150,0)
        baddy6.body.bounce.set(1);
        
        baddy7=game.add.sprite(50,50,'baddy');
        enemy.add(baddy7);
        baddy7.body.velocity.setTo(300,0)
        baddy7.body.bounce.set(1);
        
        baddy8=game.add.sprite(200,1200,'baddy');
        enemy.add(baddy8);
        baddy8.body.velocity.setTo(300,0)
        baddy8.body.bounce.set(1);
        
        Cover.anchor.setTo(0.5,0.5);
        
        //create baddy
        baddy=game.add.sprite(50,950,'baddy');
        enemy.add(baddy);
        
        baddy8=game.add.sprite(550,350,'baddy');
        enemy.add(baddy8);
        
        // initialise keyboard cursors
        cursors = game.input.keyboard.createCursorKeys();
        
               
    },
    
    update: function() {
        // set up collisions
        game.physics.arcade.collide(player,maze);
        game.physics.arcade.overlap(player,enemy,this.endGame,null,this);
        game.physics.arcade.collide(maze,enemy);
        game.physics.arcade.overlap(player,door,this.winGame,null,this);
        game.physics.arcade.collide(player,block2);
        game.physics.arcade.collide(block2,maze);
        game.physics.arcade.collide(plate,maze);
        game.physics.arcade.overlap(block2,plate,this.kill,null,this);
        Cover.x=player.x;
        Cover.y=player.y;
        
        
        this.movePlayer();
        this.moveBaddy(baddy);
        this.moveBaddy(baddy8);

    },
    
    buildMaze: function(){
        // make maze a group of objects
        maze = game.add.group();
        maze.enableBody = true; // add physics to the maze
        maze.setAll('body.immovable', true); // make the maze objects immovable
         
        
        var blockArray = [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1],
            [1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
            [1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
            [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1],
            [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1],
            [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
            [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
            [1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1],
            [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1],
            [1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1],
            [1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1],
            [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,0,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,3,0,0,1],
            [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,3,0,0,1],
            [1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1],
            [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            ];
        
        for (var r=0;r<blockArray.length;r++){
            
            for (var c=0; c<blockArray[r].length;c++){
                console.log("Column",c);
                console.log("Row",r);
                if(blockArray[r][c]==1){
                   var block=game.add.sprite(c*50,r*50,'block');
                    maze.add(block);
                }
            
            
    
                 if (blockArray[r][c]==2){
                     var lava=game.add.sprite(c*50,r*50,'lava');
                     enemy.add(lava);
                }
                
                      if (blockArray[r][c]==3){
                     var water=game.add.sprite(c*50,r*50,'water');
                     enemy.add(water);
                }
            }
             }
        
        maze.setAll('body.immovable', true);
    },
    
    movePlayer: function(){
        if (cursors.left.isDown){
             if (player.x>0){
                 player.body.velocity.x=-220;
             }
                       
        }else if (cursors.right.isDown){
            if (player.x<1000){
                player.body.velocity.x=220;
            }
            
        }else{
            player.body.velocity.x=0;
        }
        
        
        if (cursors.up.isDown){
             if (player.y>0){
                 player.body.velocity.y=-220;
             }
                       
        }else if (cursors.down.isDown){
            if (player.y<1500){
                player.body.velocity.y=220;
            }
            
        }else{
            
            player.body.velocity.y=0;
        }
        
        
    },
    
    moveBaddy: function(_baddy){
        
        if (player.x>_baddy.x){
            _baddy.body.velocity.x=10;
        }else if (player.x<_baddy.x){
            _baddy.body.velocity.x=-10;
        }
        
        if (player.y>_baddy.y){
            _baddy.body.velocity.y=10;
        }else if (player.y<_baddy.y){
            _baddy.body.velocity.y=-10;
        }
  
          
    },
    
     
    kill: function(){
         door2.kill();
        },
    
    endGame: function(){
        
        game.state.start('main');
    },
    
    winGame: function(){
        
        // display message
        messageLabel = game.add.text(500, 750, 'YOU HAVE DONE THE IMPOSSIBLE',{ font: '20px Arial', fill: '#ffffff' });
        
        player.kill();
    enemy.forEach(function(baddy){
        baddy.kill();
    });
    },

    
    
};


var game = new Phaser.Game(1000, 1500, Phaser.AUTO, 'gameDiv');
//change the size of the game here
var player, baddy, key, door,cursors,maze;

game.state.add('main', mainState);
game.state.start('main');
