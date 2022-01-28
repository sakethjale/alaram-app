const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var backgroundImg;
var form
var min, hour
var bg = "sprites/back.png";
var gameState = 0

function preload() {
    getBackgroundImg()
    alaram = loadSound("alaram.mp3")
}
function setup() {
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;

    input = createInput("").attribute("placeholder", "hour");
    input2 = createInput("").attribute("placeholder", "min");
    button = createButton('set');
    button2 = createButton('stop alaram');
    greeting = createElement('h1');
    i1 = ""
    i2 = ""
    if (hour === i1 && min === i2) {
        alaram.play()
        alaram.framecount
        alaram.framecount

    }
}
function draw() {
    Engine.update(engine);

    i1 = input.value();
    i2 = input2.value();
    if (backgroundImg)
        background(backgroundImg);

    fill(random(0, 255), random(0, 255), random(0, 255))
    textSize(40)

    if (hour >= 12) {
        text("Time : " + hour % 12 + ":" + min % 60 + " PM", width / 2, height / 2);
    }
    else if (hour == 0) {
        text("Time : 12 AM", 100, 100);
    }
    else {
        text("Time : " + hour % 12 + " : " + min % 59 + " AM", 50, 100);
    }


    input.position(displayWidth / 2 - 50, 100);
    input2.position(displayWidth / 2 + 50, 100);
    input.size(50,20)
    input2.size(50,20)

    button.position(displayWidth / 2, 150);
    //console.log(mouseX,mouseY)
    
    if (hour === i1 && min === i2) {
        alaram.play()
        alaram.endframecount = framecount+10

    }
    if (gameState === 1) {
        alaram.stop()
    }
    button.mousePressed(() => {

        input.hide();
        input2.hide()
        button.hide();
        button2.position(displayWidth / 2, 150);
        greeting.html("you have keep your alaram for  " + i1+":"+i2);
        greeting.position(displayWidth / 2 , displayHeight / 2+200);
        gameState = 2
    })

    button2.mousePressed(() => {
        alaram.stop()
        gameState = 1
        window.location.reload()
    })


}
async function getBackgroundImg() {
    var respon = await fetch("https://worldtimeapi.org/api/timezone/asia/kolkata");
    var responJSON = await respon.json();
    var day = responJSON.datetime;
    hour = day.slice(11, 13)
    min = day.slice(14, 16);
    console.log(responJSON)
    if (hour >= 02 && hour <= 04) {
        bg = "sunrise1.png"
    }
    if (hour >= 04 && hour <= 06) {
        bg = "sunrise2.png"
    }
    else if (hour >= 06 && hour <= 08) {
        bg = "sunrise3.png"
    }
    else if (hour >= 08 && hour <= 10) {
        bg = "sunrise4.png"
    }
    else if (hour >= 10 && hour <= 12) {
        bg = "sunrise5.png"
    }
    else if (hour >= 0 && hour <= 14) {
        bg = "sunrise6.png"
    }
    else if (hour >= 14 && hour <= 16) {
        bg = "sunset7.png"
    }
    else if (hour >= 16 && hour <= 18) {
        bg = "sunset8.png"
    }
    else if (hour >= 18 && hour <= 20) {
        bg = "sunset9.png"
    }
    else if (hour >= 20 && hour <= 22) {
        bg = "sunset10.png"
    }
    else if (hour >= 22 && hour <= 24) {
        bg = "sunset11.png"
    }
    else if (hour >= 24 && hour <= 02) {
        bg = "sunset12.png"
    }

    backgroundImg = loadImage(bg)
}
// function mousePressed(button){
  
// }
