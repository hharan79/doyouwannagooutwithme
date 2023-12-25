function nextpage(){
    window.location.href="yes.html"
}

function move(){
    var x=math.random()*(window.innerWidth-document.getElementById('noButton').offsetWidth)
    var y=math.random()*(window.innerHeight-document.getElementById('noButton').offsetHeight)
    
    document.getElementById('noButton').style.left= `${x}px`;
    document.getElementById('noButton').style.left= `${y}px`;
}