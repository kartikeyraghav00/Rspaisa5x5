//if we click on the start/reset
var playing=false;
var score=0;
var timeremaining;
var answers=[];
var b=[];
var levelscore=0;
var maxcount=25;
var i, j, k, l, m, n, tr, kr, z;
var count=0;
var count2=0;
var coinvalue=0;
var coinvalue2=0;
var clickanswer=[];
var image_name;




document.getElementById("startreset").onclick=function(){
    //if we are playing
    hide("guidelines");
    console.log("game is started");
    if(playing==true){
        
       location.reload();//reloading page 
        }
    else{//if we are not playing
        
        //change mode to playing
        playing=true;
        
        score=0;//set score to zero
        document.getElementById("scorevalue").innerHTML=score;
        show("timeremaining");
        show("instruction");
        show("submit");
        show("choices");
        show("score");
        
            timeremaining=180;          //-------------set starting point of timer here----------//
        
        
        hide("GameOver");
        //change button to reset
        document.getElementById("startreset").innerHTML="Reset Game";
        
        startCountdown();
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        //generate a new Q&A

        generateQA();
        
        
        
        }
}

for(i=1 ; i<26 ;i++)
            {
                    document.getElementById("box"+i).onclick = function(event){
//                    console.log(event.srcElement.id);
                    
                        tr = event.srcElement.id;
                        kr = event.srcElement.style.backgroundImage;
                        
                        if (kr == 'url("images/1coin.png")'){
                        count++;
                        console.log("count for 1 coin"+count);
                        }
                
                        else if(kr== 'url("images/10coin.png")'){
                        count+=10;
                        
                        }
                        else if(kr== 'url("images/20note.png")'){
                        count+=20;
                        
                        }
                        else if(kr== 'url("images/50note.png")'){
                        count+=50;
                        
                        }
                        else if(kr== 'url("images/5coin.png")'){
                        count+=5;
                        
                        }
                        else if(kr== 'url("images/2coin.png")'){
                        count+=2;
                        
                        }
                        else if(kr== 'url("images/25paisacoin.png")'){
                            count2+=25;
                            if(count2==100){
                                count++;
                                count2=0;
                            }
                            
                            
                        }
                        else if(kr== 'url("images/50paisacoin.png")'){
                            count2+=50;
                            if(count2==100){
                                count++;
                                count2=0;
                            }
                            
                        
                        }
                    checkMyAnswer(this.id)};
                
    
            }
    //if we are playing
        //reload page
    
        //show countdown box
        //reduce time by 1 sec in loops
        //timeleft?
            //yes->continue
            //no->gameover
        
        //generate new Q&A




        //correct?
            //yes
                //increse score
                //show correct box for 1sec
                //generate new Q&A
            //no
                //show try again box for 1sec

//function

//start Counter
function startCountdown(){
    action=setInterval(function(){
        
        timeremaining-=1;
        
    document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining==0)//game over
        {console.log("timer ends at:"+ timeremaining);

            stopCountdown(); 
            colorwhite();
            show("GameOver");
            document.getElementById("GameOver").innerHTML="<p>Game Over</p><p>Your score is "+ score + ".</p>";
            
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("startreset").innerHTML="Start Game";
            
        }
    },1000);
    
}



//stop Counter
function stopCountdown(){
    console.log("timer is stopped");
    clearInterval(action);
}

//hide an element
function hide(Id)
{
//    console.log("hide function called on screen")
    document.getElementById(Id).style.display="none";
}

//show element
function show(Id)
{
//    console.log("show function called on screen")
    document.getElementById(Id).style.display="block";
}

//generate question and multiple answers
function generatecoinvalue(){
    
    coinvalue=1+Math.floor(237*Math.random());
    document.getElementById("coinvalue").innerHTML=coinvalue;
    if(coinvalue>0 && coinvalue<=50)
    {c=1;}
    else if(coinvalue>50 && coinvalue<=100)
    {c=2;}
    else if(coinvalue>100 && coinvalue<=150)
    {c=3;}
    else if(coinvalue>150 && coinvalue<=238)
    {c=4;}    
        
        
        
        
    var value;
    value=1+Math.floor(3*Math.random());
    if(value==1){
        coinvalue2=00;
    }
    else if(value==2){
        coinvalue2=25;
    }
    else if(value==3){
        coinvalue2=50;
    }
    else if(value==4){
        coinvalue2=75;
    }
    document.getElementById("coinvalue2").innerHTML=coinvalue2;
    
}

document.getElementById("submit").onclick = function(){
                        
                        console.log("Answer is submitted");
                        console.log("the answer array contain "+ answers.length);
                        console.log("count: " + count);
                        console.log("count2: " + count2);
                        console.log("coinvalue: " + coinvalue);
                        console.log("coinvalue2: " + coinvalue2);
                        if (count == coinvalue && count2 == coinvalue2)                                
                            {   show("correct");
                                console.log("count=coinvalue");

                                setTimeout(function(){scoreIncrease();},150);

            
                            }
                        else if (count != coinvalue || count2 != coinvalue2)
                            {
                                console.log("count!=coinvalue");
                                show("wrong");
                                setTimeout(function(){
                                hide("wrong");
                                },500);
                                
                                
                            }
                        colorwhite();
                        generateQA();
                        count=0;
                        count2=0;
                      }

function generateQA(){
    console.log("generatequestion")
    generatecoinvalue();

    var x;
    for(i=1;i<=maxcount;i++)                         
    {
        do{
            
            x =1+Math.round(24*Math.random());
 
         }
        while(answers.indexOf("box"+x)>-1);
        colorBox(x);
        answers.push("box"+x);
    }
    

}
            

//function to show coin
function colorBox(x)
{                       if(c==1){
                        
                        if(i<=9){      
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                        image_name="images/1coin.png";
                    }
                    else if(i>=10 && i<=17){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/2coin.png";
                    }
                    else if(i>17 && i<=22){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/5coin.png";
                    }
                    else if (i==23){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/50paisacoin.png";
                    }
                    else if (i>23){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/25paisacoin.png";
                    } 
                        
                        
                    }
                    else if(c==2){
                        if(i<=5){      
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                        image_name="images/1coin.png";
                    }
                    else if(i>5 && i<=10){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/2coin.png";
                    }
                    else if(i>10 && i<=16){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/5coin.png";
                    }
                    else if(i>16 && i<=22){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/10coin.png";
                    }
                    else if (i==23){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/50paisacoin.png";
                    }
                    else if (i>23){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/25paisacoin.png";
                    }    
                        
                        
                        
                    }
                    else if(c==3){
                        if(i<=5){      
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                        image_name="images/1coin.png";
                    }
                    else if(i>5 && i<=10){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/2coin.png";
                    }
                    else if(i>10 && i<=14){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/5coin.png";
                    }
                    else if(i>14 && i<=18){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/10coin.png";
                    }
                    else if(i>18 || i<=22){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/20note.png";
                    }
                    else if (i==23){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/50paisacoin.png";
                    }
                    else if (i>23){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/25paisacoin.png";
                    }    
                        
                        
                        
                    }
                    else if(c==4){
                        if(i<=5){      
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                        image_name="images/1coin.png";
                    }
                    else if(i>=6 && i<=9){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/2coin.png";
                    }
                    else if(i>9 && i<=13){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/5coin.png";
                    }
                    else if(i>13 && i<=16){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/10coin.png";
                    }
                    else if(i>=17 && i<=20){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/20note.png";
                    }
                    else if(i==21 || i==22){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/50note.png";
                    }
                    else if (i==23){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/50paisacoin.png";
                    }
                    else if (i>23){
                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
                    image_name="images/25paisacoin.png";
                    }    
                        
                        
                        
                    }
                    
            
            
//            
//                    if(i<=5){      
//                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
//                        image_name="images/1coin.png";
//                        }
//                    else if(i>5 && i<=7){
//                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
//                    image_name="images/5coin.png";
//                    }
//                    else if(i>7 && i<=10){
//                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
//                    image_name="images/2coin.png";
//                    }
//                    else if(i>10 && i<=20){
//                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
//                    image_name="images/10coin.png";
//                    }
//                    else if(i==21){
//                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
//                    image_name="images/20note.png";
//                    }
//                    else if(i==22){
//                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
//                    image_name="images/50note.png";
//                    }
//                    else if (i==23){
//                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
//                    image_name="images/50paisacoin.png";
//                    }
//                    else if (i>23){
//                        document.getElementById("box"+x).style = "background-image:url("+image_name+")";
//                    image_name="images/25paisacoin.png";
//                    }
//        
}


function checkMyAnswer(Id){
    
    
    var flag=0;
    var j=0;
    
            
console.log("count"+ count);
     if(clickanswer.indexOf(Id)==-1)
         
    {
        
        console.log("clickanswer"+clickanswer);
        clickanswer.push(Id);
            console.log("flag"+ flag);
            console.log("answers"+ answers);
            console.log("tr"+ tr);
        
        if(answers.indexOf(tr)>-1){
            
            
            document.getElementById(Id).style.opacity=0.2 ;
            
            flag=1;
            
        }

    if(flag==0){

        document.getElementById(Id).style.backgroundColor ="white";
    }
    flag=0;
    
    }
    
}
    
    
    

function colorwhite()
{
   console.log("game screen flushed");
    var temp = answers.length;
      
   for(i=1;i<=temp;i++)           
                {
                    answers.pop();
                    
                    console.log("answers popped from box no:"+ tr);
                }
    var temp3 = clickanswer.length;
      
   for(i=1;i<=temp3;i++)
                {
                    
                    clickanswer.pop();
                }
    
    
    for(j=1;j<26;j++)
        {  
           
            document.getElementById("box"+j).style.backgroundImage = "none";
            
            
        }
    console.log("the answer array contain "+ answers.length);
   

}



function scoreIncrease(){
    
    
    score+=10;
    console.log("current game score is" + score);        
    document.getElementById("scorevalue").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            
            count=0;


}



function wrongAnswer(){
    console.log("you have chosen wrong answer");
    document.getElementById("scorevalue").innerHTML=score;
    show("wrong");
    hide("correct");

            setTimeout(function(){
                hide("wrong");
            },1000);
    

}



function showCorrect()
{       
    console.log("you have chosen right answer");
        document.getElementById("scorevalue").innerHTML=score;
    show(correct);
    
            hide("wrong");
           show("correct");
            setTimeout(function(){hide("correct");},1000);
           
}


////function to add sound
//function soundPlay(src){
//var audioElement = document.getElementById('player-src');
//audioElement.src =src ; //src for the player
//var myAudio = document.getElementById("player");
//myAudio.load();
//myAudio.play();
//}
//

        


