var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var Sofia; 
Sofia=createSprite(65,37,20,20);
Sofia.shapeColor="red";

  var wall1 = createSprite(80,10,10,90);
  var wall2 = createSprite(9,90,100,10);
  var wall3 = createSprite(99,52,90,10);
  var wall4 = createSprite(100,109,10,53);
  var wall5 = createSprite(35,150,10,70);
  var wall6 = createSprite(12,148,40,10);
  var wall7 = createSprite(87,130,20,10);
  var wall8 = createSprite(108,172,54,10);
  var wall9 = createSprite(97,202,10,50);
  var wall10 = createSprite(75,200,40,10);
  var wall11 = createSprite(140,130,10,94);
  var wall12 = createSprite(120,110,30,10);
  var wall13 = createSprite(48,148,20,10);
  var wall14 = createSprite(167,133,44,10);
  var wall15 = createSprite(173,76,10,60);
  var wall16 = createSprite(206,80,60,10);
  var wall17 = createSprite(123,4,10,35);
  var wall18 = createSprite(211,25,10,60);
  var wall19 = createSprite(97,225,10,50);
  var wall20 = createSprite(42,244,107,10);
  var wall21 = createSprite(231,135,10,120);
  var wall22 = createSprite(260,110,50,10);
  var wall23 = createSprite(280,30,10,103);
  var wall24 = createSprite(230,190,100,10);
  var wall25 = createSprite(275,235,10,80);
  var wall26 = createSprite(230,270,100,10);
  var wall27 = createSprite(232,301,10,70);
  var wall28 = createSprite(130,225,60,10);
  var wall29 = createSprite(285,331,100,10);
  var wall30 = createSprite(285,368,10,65);
  var wall31 = createSprite(340,250,10,80);
  var wall32 = createSprite(310,240,60,10);
  var wall33 = createSprite(345,76,120,10);
  var wall34 = createSprite(340,147,80,10);
  var wall35 = createSprite(60,360,10,80);
  var wall36 = createSprite(103,360,75,10);
  var wall37 = createSprite(115,297,10,50);
  var wall38 = createSprite(165,320,10,45);
  var wall39 = createSprite(140,303,40,10);
  var wall40 = createSprite(220,227,10,40);

  
  
var cup = createSprite(373,378,20,20);
  cup.shapeColor='black';
  
  
function draw() {
  background("pink");
  
  drawSprites();
  
  textSize(30);
  
  if (keyDown('i')) {
    iniciar();
      }
  
  if (keyDown('up')) {
    Sofia.y = Sofia.y-5;
  }
  
  if(keyDown("down")){
    Sofia.y = Sofia.y+5;
  }
  
  if (keyDown("left")){
    Sofia.x = Sofia.x-5;
  }
  
  if(keyDown("right")){
    Sofia.x = Sofia.x+5;
  }
  
  if(keyDown('w')) {
    Sofia.y = Sofia.y-5;
  }
  
  if (keyDown('s')) {
    Sofia.y = Sofia.y+5;
  }
  
   if (keyDown('d')) {
    Sofia.x = Sofia.x+5;
  }
  
  if (keyDown('a')) {
    Sofia.x = Sofia.x-5;
  }
  
  createEdgeSprites();
  
  Sofia.collide(wall1);
  Sofia.collide(wall2);
  Sofia.collide(wall3);
  Sofia.collide(wall4);
  Sofia.collide(wall5);
  Sofia.collide(wall6);
  Sofia.collide(wall7);
  Sofia.collide(wall8);
  Sofia.collide(wall9);
  Sofia.collide(wall10);
  Sofia.collide(wall11);
  Sofia.collide(wall12);
  Sofia.collide(wall13);
  Sofia.collide(wall14);
  Sofia.collide(wall15);
  Sofia.collide(wall16);
  Sofia.collide(wall17);
  Sofia.collide(wall18);
  Sofia.collide(wall19);
  Sofia.collide(wall20);
  Sofia.collide(wall21);
  Sofia.collide(wall22);
  Sofia.collide(wall23);
  Sofia.collide(wall24);
  Sofia.collide(wall25);
  Sofia.collide(wall26);
  Sofia.collide(wall27);
  Sofia.collide(wall28);
  Sofia.collide(wall29);
  Sofia.collide(wall30);
  Sofia.collide(wall31);
  Sofia.collide(wall32);
  Sofia.collide(wall33);
  Sofia.collide(wall34);
  Sofia.collide(wall35);
  Sofia.collide(wall36);
  Sofia.collide(wall37);
  Sofia.collide(wall38);
  Sofia.collide(wall39);
  Sofia.collide(wall40);

  
 if (Sofia.isTouching(cup))  
{
  finish();
  cup.shapeColor='yellow';
  }
  
}

function finish () {
  fill("white");
  textSize(40);
  stroke('black');
  text("Você Venceu,", 80,200);
  text('Parabéns!!!', 105,240);
  fill('black').textSize(25).text('Sofia adorou brincar com vc',50,375);
  fill('black').textSize(20).text('Começar novamente (i)',50,350);
}
  
function iniciar(){
  Sofia.y = 35;
  Sofia.x = 63;
  cup.shapeColor='black';
}

















// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
