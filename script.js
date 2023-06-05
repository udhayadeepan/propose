mess=['will you be my valentine?','please!','Fuck you']
i=0
function changemsg(){
    
    if(i<mess.length){
        
        let ms=document.getElementById("mes")
        ms.innerHTML=mess[i]
        i++;
    }
    else{
        document.getElementById('mes').innerHTML="YOU MISSED THE DIAMOND"
        document.getElementById("mes").style.color="red"
        document.getElementById("mes").style.fontSize="3em"
        document.getElementById("yes").style.display='none'
        document.getElementById("no").style.display='none'
    }
}


function op(){
    document.body.style.backgroundImage = 'url(bg.gif)';  
    document.getElementById('mes').innerHTML="LOVE YOU TOO"
    document.getElementById("mes").style.color="red"
    document.getElementById("mes").style.fontSize="3em"
    document.getElementById("yes").style.display='none'
    document.getElementById("no").style.display='none'
    setInterval(bg,1000);

}
