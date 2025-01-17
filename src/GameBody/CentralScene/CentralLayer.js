/**
 * Created by CPU02302_LOCAL on 12/4/2018.
 */


var CentralLayer = cc.Layer.extend({

    nScale: 1.5,

    ctor:function () {
        this._super();
        this.init();
    },

    init: function(){

        //load Plist BG
        cc.spriteFrameCache.addSpriteFrames(res.mapLayer_plist);

        var winSize = cc.director.getWinSize();

        var label = new cc.LabelTTF("Central Layer", "Arial", 21);
        label.setColor(cc.color("#fff"));
        this.addChild(label);
        label.x = winSize.width  / 2;
        label.y = winSize.height / 2;

        this.initBackground();
        this.setScale(this.nScale);
        this.addKeyboardListener();
        this.addTouchListener();

        return true;
    },

    initBackground: function() {

        var winSize = cc.director.getWinSize();

        //load tiled map
        var tmxTiledMap = new cc.TMXTiledMap.create(res.map_tmx);
        tmxTiledMap.anchorX = 0.5;
        tmxTiledMap.anchorY = 0.5;
        tmxTiledMap.scale = 0.25;
        tmxTiledMap.setPosition(winSize.width/2,winSize.height/2);
        this.addChild(tmxTiledMap, 0);

        var bg1 = new cc.Sprite("#1_0000_Layer-3.png");
        bg1.anchorX = 1;
        bg1.anchorY = 0;
        bg1.setPosition(winSize.width/2,winSize.height/2);
        this.addChild(bg1, 1);

        var bg2 = new cc.Sprite("#1_0001_Layer-1.png");
        bg2.anchorX = 1;
        bg2.anchorY = 1;
        bg2.setPosition(winSize.width/2,winSize.height/2);
        this.addChild(bg2, 2);
        //
        var bg3 = new cc.Sprite("#1_0002_Layer-4.png");
        bg3.anchorX = 0;
        bg3.anchorY = 0;
        bg3.setPosition(winSize.width/2,winSize.height/2);
        this.addChild(bg3, 3);
        //
        var bg4 = new cc.Sprite("#1_0003_Layer-2.png");
        bg4.anchorX = 0;
        bg4.anchorY = 1;
        bg4.setPosition(winSize.width/2,winSize.height/2);
        this.addChild(bg4, 4);
    },

    addKeyboardListener: function () {
        var self = this;

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(key, event) {
                if (key == 40) {
                    if (self.nScale >= 1.1) {
                        self.nScale -= 0.1;
                    }
                }
                else if (key == 38) {
                    if (self.nScale <= 2.9) {
                        self.nScale += 0.1;
                    }
                }
            },
            onKeyReleased: function(key, event) {
                self.setScale(self.nScale);
            }
        }, this);
    },

    addTouchListener: function() {
        //Add code here
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event){
                var x = touch.getLocation().x;
                var y = touch.getLocation().y;
                cc.log(x, y);
                return true;
            }
        }, this);
    }

});

CentralLayer.scene = function() {
    var scene = new cc.Scene();
    var layer = new CentralLayer();
    scene.addChild(layer);
    return scene;
};