var gurmukhi = "੧੨੩੪੫੬੭੮੯੦ੳਅਰਤਯਪਸਦਗਹਜਕਲਙੜਚਵਬਨਮੲਥਫਸ਼ਧਘਝਖਲ਼ੜ੍ਹਛਭਣ"
var sanskrit = "१२३४५६७८९अरतयपसदगहजकलङषचवबनमआथय़फशधघझखळक्षछभणऒ"
var hanzi = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑呂"
var katakana = "゠クタハムヰアケチヒモヲィコッャンイツヤウゥサフュヵテユヶェショワエトヘヨォスラヱオナリカセニホル・ヌレーキソネロヽノマヮミ"
var hex = "ABCDEF01234567890"


let drops = []
let letters = (hanzi + katakana + sanskrit + gurmukhi + hex)

function setup(){
    createCanvas(innerWidth,innerHeight)
    background(0)
    frameRate(20)
    
    for(let i=0;i<110;i++){
        drops.push(new Drop())
    }
}

function draw(){

    if(Math.random()>0.4)
    background(0,100);
    for(let i=0;i<drops.length;i++){
        drops[i].draw()
        drops[i].update();
    }
}

class Drop{
    constructor(){
        this.size = rand(7,25)
        this.x = rand(0,width)
        this.y= rand(-80,height+80)
        this.text = getRandomText()
        this.uTime = rand(1)//update time
        
        this.update();
    }
    
    draw(){
        textSize(this.size)
        if(Math.random()>0.1)
            fill(50,150,50)
        else
            fill(170,250,170)
        text(this.text,this.x,this.y)
    }
    
    update(){
        this.y+=this.size
        
        if(this.y>height+80){
            this.y = rand(-80,this.size)
            this.x = rand(0,width)
        }
        
        this.text = getRandomText()     
        this.draw()
    }
}

function rand(min,max){
    return floor(random(min,max));
}

function getRandomText(){
    return letters[rand(0,letters.length)]
}
