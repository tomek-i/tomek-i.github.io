let gurmukhi = "੧੨੩੪੫੬੭੮੯੦ੳਅਰਤਯਪਸਦਗਹਜਕਲਙੜਚਵਬਨਮੲਥਫਸ਼ਧਘਝਖਲ਼ੜ੍ਹਛਭਣ";
let sanskrit = "१२३४५६७८९अरतयपसदगहजकलङषचवबनमआथय़फशधघझखळक्षछभणऒ";
let hanzi = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑呂";
let katakana = "゠クタハムヰアケチヒモヲィコッャンイツヤウゥサフュヵテユヶェショワエトヘヨォスラヱオナリカセニホル・ヌレーキソネヽノマヮミ";
let hex = "ABCDEF"
let lines = "│┃║";
let squares = "■□▢○●";
let geo = "◌◐◑◒◓◖◗◙◎▣▤▥▦▨▧";
let shade = "█░▒▓";

let drops = []

let letters = (hanzi + katakana + sanskrit + gurmukhi + hex +lines + squares + geo+ shade)

const MAX_DROPS = 150;
const MIN_FONT_SIZE = 5;
const MAX_FONT_SIZE = 21;

function setup(){
    createCanvas(innerWidth,innerHeight)
    background(0)
    frameRate(20)
    
    for(let i=0;i<MAX_DROPS;i++){
        drops.push(new Drop())
    }
}

function draw(){

    if(Math.random()>0.4){
		background(0,50);
		
	}
    for(let i=0;i<drops.length;i++){
        drops[i].draw()
        drops[i].update();
    }
}

class Drop{
    constructor(){
        this.size = rand(MIN_FONT_SIZE,MAX_FONT_SIZE)
        this.x = rand(0,width)
        this.y = rand(-80,height+80)
        this.text = getRandomText()
        this.uTime = rand(1)//update time
        this.update();
		//this.speed = rand(this.size, MAX_FONT_SIZE)*0.5
    }
    
    draw(){
        textSize(this.size)
        if(Math.random()>0.1)
            fill(50,150,50)
		else if (Math.random()<0.05){
			fill(255,255,255);
			
		}
        else
            fill(170,250,170)
        text(this.text,this.x,this.y)
    }
    
    update(){
		
		if(Math.random()>0.9)
		{
			this.y += rand(this.size,this.size*5);
		}
		
		if(Math.random()>0.7)
		{
			this.y+= 0;
		}
		else {
			this.y+= this.size;
		}
        
		//this.y+= this.size;
		
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
