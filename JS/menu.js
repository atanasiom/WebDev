function showLunchDinner(){
	console.log('hi');
    document.getElementById("lunch-dinner-menu").style.display = "block";
    document.getElementById("wine-menu").style.display = "none";
    document.getElementById("bar-menu").style.display = "none";
    document.getElementById("lunch-dinner").style.textDecoration = "underline";
    document.getElementById("wine").style.textDecoration = "none";
    document.getElementById("bar").style.textDecoration = "none";
}

function showWine(){
    document.getElementById("lunch-dinner-menu").style.display = "none";
    document.getElementById("wine-menu").style.display = "flex";
    document.getElementById("bar-menu").style.display = "none";
    document.getElementById("lunch-dinner").style.textDecoration = "none";
    document.getElementById("wine").style.textDecoration = "underline";
    document.getElementById("bar").style.textDecoration = "none";
}

function showBar(){
    document.getElementById("lunch-dinner-menu").style.display = "none";
    document.getElementById("wine-menu").style.display = "none";
    document.getElementById("bar-menu").style.display = "block";
    document.getElementById("lunch-dinner").style.textDecoration = "none";
    document.getElementById("wine").style.textDecoration = "none";
    document.getElementById("bar").style.textDecoration = "underline";
}