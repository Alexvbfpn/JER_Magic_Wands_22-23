var timedEvent;
export class LoadingScreen extends Phaser.Scene
{

    constructor()
    {
        super({key: 'loadingScreen'});
    }

    preload()
    {
        this.load.image('loading_background', 'assets/img/loadingScreen/loading_background.png');
        this.load.image('glove', 'assets/img/loadingScreen/boxing_glove.png');
        this.load.image('star', 'assets/img/loadingScreen/loading_star.png');
    }

    create()
    {
        this.add.image(0, 0, 'loading_background').setOrigin(0, 0);
        this.input.setDefaultCursor('url(assets/img/mainMenu/cursor.cur), pointer');
        this.glove = this.add.image(960 , 725, 'glove').setScale(1.5);
        this.star = this.add.image(960, 725, 'star').setScale(1.5);
        var star = this.star;
        var glove = this.glove;
        this.loadingText = this.add.text(960-157.5 - 500, 625-157.5 - 250, "", {
            fontFamily: 'loadingFont',
            font: (200).toString() + "px loadingFont",
            color: 'white'});

        this.load.on('progress', this.updateLoading, this);
        this.load.on('complete', this.loaded, this);
        timedEvent = new Phaser.Time.TimerEvent({ delay: 4000 });
        this.time.addEvent(timedEvent);

        // ---- Pantalla inicial ----
        this.load.image('start_Background', 'assets/img/background_start.png');

        this.load.image('start_text', 'assets/img/start_text.png');

        //MENU PRINCIPAL
        this.load.image('controlsButton', 'assets/img/controls_buttonDef.png');
        this.load.image('controlsButton2', 'assets/img/pauseScreen/controlsButton2.png');
        this.load.image('creditsButton', 'assets/img/credits_buttonDef.png');
        this.load.image('playButton', 'assets/img/play_buttonDef.png');
        this.load.image('continueButton', 'assets/img/midScreen/continue_buttonDef.png');
        this.load.image('exitButton', 'assets/img/finalScreen/exit_buttonDef.png');
        this.load.image('backButton', 'assets/img/buttons/backButton.png');
        this.load.image('pauseButton', 'assets/img/buttons/pauseButton.png');
        this.load.image('backButtonCredits', 'assets/img/buttons/backButton.png');
        this.load.audio("onB", 'assets/sound/encimaBoton.wav');
        this.load.audio("pulsarB", 'assets/sound/clickBoton.wav');
        this.load.image('mainMenu_Background', 'assets/img/background_mainMenu.png');
        this.load.image('play_button', 'assets/img/play_buttonDef.png');
        this.load.audio("encimaB", 'assets/sound/encimaBoton.wav');
        this.load.audio('mainMenuMusic', 'assets/sound/mainTheme.ogg');
        this.load.image('local_button', 'assets/img/buttons/local_buttonDef.png');
        this.load.image('online_button', 'assets/img/buttons/online_buttonDef.png');
        this.load.image('resumeButton', 'assets/img/pauseScreen/resume_button.png');
        this.load.image('exitButton', 'assets/img/pauseScreen/exit_button.png');
        this.load.image('pause_background', 'assets/img/pauseScreen/pause_background.png');
        this.load.image('pauseText', 'assets/img/pauseScreen/pause_text.png');
        this.load.image('outWindow', 'assets/img/alert.png')
        // CONTROLES
        this.load.image('controls_Background', 'assets/img/controls/controls_background.png');
        // CREDITOS
        this.load.image('credits_Background', 'assets/img/credits/credits_background.png');
        // LOBBY
        this.load.image('lobby_background', 'assets/img/lobby/background_lobby.png');
        this.load.image('waitingText', 'assets/img/lobby/waitingText.png');
        this.load.image('foundText', 'assets/img/lobby/findText.png');
        this.load.image('confirm_button', 'assets/img/characterSelector/confirm_button.png');
        this.load.spritesheet('player_texts', 'assets/img/lobby/player_text.png', {
            frameWidth: 512,
            frameHeight: 80
        })
        this.load.spritesheet('states_texts','assets/img/lobby/spritesheet_lobby.png' , {
            frameWidth: 1304,
            frameHeight: 248
        })
        // Selector de personajes
        this.load.image('characterSelector_Background', 'assets/img/characterSelector/background_characterSelector.png');
        this.load.image('confirm_button', 'assets/img/characterSelector/confirm_button.png');
        this.load.audio("fightMusic", 'assets/sound/fightTheme.ogg');
        this.load.audio("crowdSound", 'assets/sound/crowdSound.wav');
        this.load.spritesheet('textP1', 'assets/img/characterSelector/spriteSheet_textP1Def.png', {
            frameWidth: 336,
            frameHeight: 428
        });
        this.load.spritesheet('textP2', 'assets/img/characterSelector/spriteSheet_textP2Def.png', {
            frameWidth: 336,
            frameHeight: 428
        });

        this.load.spritesheet('bolt', 'assets/img/characterSelector/sprites_bolt.png', {
            frameWidth: 168,
            frameHeight: 224
        });
        this.load.spritesheet('fire', 'assets/img/characterSelector/sprites_fire.png', {
            frameWidth: 168,
            frameHeight: 224
        });
        this.load.spritesheet('water', 'assets/img/characterSelector/sprites_water.png', {
            frameWidth: 168,
            frameHeight: 224
        });
        this.load.spritesheet('wind', 'assets/img/characterSelector/sprites_wind.png', {
            frameWidth: 168,
            frameHeight: 224
        });

        this.load.spritesheet('characters', 'assets/img/characterSelector/spriteSheet_characters.png', {
            frameWidth: 542,
            frameHeight: 620
        });

        // MATCH
        this.load.image('match_Background', 'assets/img/match/match_backgroundPublic.png');
        this.load.image('ring', 'assets/img/Ring.png');

        this.load.spritesheet("tiles", "assets/img/sprite_PlacaM.PNG", {
            frameWidth: 400,
            frameHeight: 400
        });
        this.load.spritesheet("openTiles0", "assets/img/sprite_PlacaN.PNG", {
            frameWidth: 400,
            frameHeight: 400
        });
        this.load.spritesheet("openTiles1", "assets/img/match/sprite_placaN1.PNG", {
            frameWidth: 400,
            frameHeight: 400
        });
        this.load.spritesheet("openTiles2", "assets/img/match/sprite_placaN2.PNG", {
            frameWidth: 400,
            frameHeight: 400
        });
        this.load.spritesheet("openTiles3", "assets/img/match/sprite_placaN3.PNG", {
            frameWidth: 400,
            frameHeight: 400
        });
        this.load.spritesheet("openTilesCol", "assets/img/match/sprite_placaTrans.PNG", {
            frameWidth: 400,
            frameHeight: 400
        });

        this.load.spritesheet('Azul', "assets/img/PantalladeJuego/Spritesheets/SpritesheetAgua.PNG", {
            frameWidth: 165,
            frameHeight: 124
        });
        this.load.spritesheet('Rojo', "assets/img/PantalladeJuego/Spritesheets/SpritesheetFuego.PNG", {
            frameWidth: 165,
            frameHeight: 124
        });
        this.load.spritesheet('Amarillo', "assets/img/PantalladeJuego/Spritesheets/SpritesheetRayo.PNG", {
            frameWidth: 165,
            frameHeight: 124
        });
        this.load.spritesheet('Verde', "assets/img/PantalladeJuego/Spritesheets/SpritesheetViento.PNG", {
            frameWidth: 165,
            frameHeight: 124
        });
        this.load.spritesheet("Collision", "assets/img/PantalladeJuego/Spritesheets/SpritesheetAgua.PNG", {
            frameWidth: 150,
            frameHeight: 125
        });

        this.load.spritesheet('iker', 'assets/img/match/spriteSheet_OnePoint.png', {
            frameWidth: 102,
            frameHeight: 105
        });
        this.load.spritesheet('carva', 'assets/img/match/spriteSheet_TwoPoints.png', {
            frameWidth: 102,
            frameHeight: 105
        });
        this.load.spritesheet('pepe', 'assets/img/match/spriteSheet_ThreePoints.png', {
            frameWidth: 102,
            frameHeight: 105
        });
        //Separamos los scorers del p2
        this.load.spritesheet('iker2', 'assets/img/match/spriteSheet_OnePoint.png', {
            frameWidth: 102,
            frameHeight: 105
        });
        this.load.spritesheet('carva2', 'assets/img/match/spriteSheet_TwoPoints.png', {
            frameWidth: 102,
            frameHeight: 105
        });
        this.load.spritesheet('pepe2', 'assets/img/match/spriteSheet_ThreePoints.png', {
            frameWidth: 102,
            frameHeight: 105
        });
        this.load.html('chat', "./chat.html");
        this.load.image("varaLaser", 'assets/img/varaLaser.png');
        this.load.spritesheet("bola", 'assets/img/bolaMagica.png',{ frameWidth: 46, frameHeight: 46 });
        this.load.audio("laserSound", 'assets/sound/laserSound.wav');

        this.load.image('bola', 'assets/img/bola.png');
        //MIDSCENE
        this.load.spritesheet('midScene_Background', 'assets/img/midScreen/background_midSheet.PNG', {
            frameWidth: 1920,
            frameHeight: 1080
        });
        this.load.spritesheet('midScene_Text', 'assets/img/midScreen/text_midScene.PNG', {
            frameWidth: 1686,
            frameHeight: 448
        });
        this.load.image('waiting', 'assets/img/midScreen/waitingText.PNG')
        //FINAL SCENE
        this.load.audio("winSound", 'assets/sound/winSound.wav');
        this.load.spritesheet('finalScene_Background', 'assets/img/finalScreen/background_finalSheet.PNG', {
            frameWidth: 1920,
            frameHeight: 1080
        });
        this.load.spritesheet('finalScene_Text', 'assets/img/finalScreen/text_finalScene.PNG', {
            frameWidth: 1067,
            frameHeight: 288
        });
        /*
        this.tweens.add({
            targets: star,
            //rotation: 200,
            ease: 'Quintic.easeInOut',
            duration: 1500,
            yoyo: true,
            repeat: -1,
            onUpdate: function ()
            {
                Phaser.Actions.RotateAroundDistance(star, glove.position, 0.3, 0);
            }
        });

         */
        this.load.start();

    }
    update()
    {
        this.star.setAngle(this.star.angle +1.5);
        //let progressPercent = this.load.progress.toFixed(2) * 100;
        //this.loadingText.setText('Loading: ' + progressPercent + '%');
        //this.star.setRotation(this.star.rotation - 0.01);
        //this.star.setAngle(this.star.angle + 0.1);





    }

    updateLoading(progress) {
        this.star.setAngle(this.star.angle +1.5);

        this.loadingText.setText('Cargando: ' + progress.toFixed(2)*100 + '%');
    }

    loaded() {
        this.scene.start('startScene');
    }

}