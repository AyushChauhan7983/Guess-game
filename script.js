var luckynumber = Math.floor(Math.random()*20);
var score = 10;
var i=0;

var userguess = document.getElementById('guessing');
var checkbutton = document.getElementById('check');
var mainsection = document.getElementById('main');
var marker = document.getElementById('marker');
var message = document.getElementById('message');
var scoresection = document.getElementById('score');
var highscore = document.getElementById('highscore');
var againbutton = document.getElementById('again');

function clicked(){
    console.log('Button clicked');
}

function checkyourguess(){
    var guessnumber = parseInt(userguess.value);
    
    if(guessnumber>20 || guessnumber<1)
    {
        message.innerText = "Please enter a number between 1 and 20😤";
    }
    else
    {
        if(guessnumber==luckynumber)
        {
            mainsection.style.backgroundColor='#1C6758';
            marker.innerText="😎";
            message.innerText = "YOU WON!!!!!!!";
            highscore.innerText=20-i;
        }
        else if(guessnumber>luckynumber)
        {
            mainsection.style.backgroundColor = '#CC3636';
            marker.innerText="😱";
            message.innerText = "TOO HIGH";
            i++;
            score--;
            scoresection.innerText=score;
        }
        else if(guessnumber<luckynumber)
        {
            mainsection.style.backgroundColor = '#ff4036';
            marker.innerText="🥱";
            message.innerText = "TOO LOW";
            i++;
            score--;
            scoresection.innerText = score;
        }
    }
}
checkbutton.addEventListener("click",checkyourguess);

againbutton.addEventListener("click",()=>{

    luckynumber = Math.floor(Math.random() * 20);
    score=10;
    i=0;
    scoresection.innerText=score
    highscore.innerText=0
    mainsection.style.backgroundColor="#333"
    message.textContent="Start Guessing..."
    userguess.value=""
})