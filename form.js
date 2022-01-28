class Form {

    constructor() {
        this.input = createInput("").attribute("placeholder","enter name");
        //this.input2 = createInput("").attribute("placeholder","enter name");
        this.button = createButton('fight');
        this.greeting = createElement('h1');
        this.i1=""
    }
        display() {
       // this.input2.position(displayWidth / 2 +200, 100);
        this.input.position(displayWidth / 2 -200, 100);
        this.button.position(displayWidth / 2 +50, 150);
        this.button.mousePressed(() => {
          //  this.input2.hide();
            this.input.hide();   
            this.button.hide();
            this.i1=this.input.value();
            this.greeting.html("min"+ this.i1);
            //this.greeting2.html("Hello"+i2);
            this.greeting.position(displayWidth/2 - 100, displayHeight/2);
             //this.i2=this.input2.value();
            //this.time=this.input.value();
           // date=this.input2.value();

        })
        

    }
}