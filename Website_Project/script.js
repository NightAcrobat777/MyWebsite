//default look of website
//create variable for the mario video
const eventButton = document.getElementById("booButton");
const vid = document.getElementById("marioSlider");
const vid2 = document.getElementById("hauntedHouse"); 

//set variable for playing vid function
let playVid = () => vid.play();
//same for pausing video
let pauseVid = () => vid.pause();

//have a reset video action
let resetVid = () => 
{
    vid.pause();
    vid.currentTime = 0;

}

const webFooter = document.getElementById("footnotes");
webFooter.style.color = "#742607";
webFooter.style = "font-weight: bold";

//change clash of clans table
const armyHeader = document.getElementsByClassName("armyHeaders");
const army1 = document.getElementsByClassName("troop1");

//iterate through headers
for(let i = 0; i < armyHeader.length; i++)
{
    armyHeader[i].style.color = "#FFFFFF";
    armyHeader[i].style.backgroundColor = "#FF0000";
    armyHeader[i].style.fontSize = "1.5rem";
    armyHeader[i].style.lineHeight = "1rem";
    armyHeader[i].style.padding = "1rem";
    armyHeader[i].style.fontFamily = "MedievalSharp", "DotGothic16"
}
//iterate through army1 array
for(let i = 0; i < army1.length; i++)
{
    army1[i].style.color = "black";
    army1[i].style.backgroundColor = "#90EE90";
    army1[i].style.width = "fit-content";
    army1[i].style.borderRadius = "15px";
    army1[i].style.fontSize = "1rem";
    army1[i].style.lineHeight = "1rem";
    army1[i].style.padding = "0.50rem";
    army1[i].style.fontFamily = "MedievalSharp", "DotGothic16"
}

//function for my boo world
const magic = () =>{
    //variables
    //change all the npcs to boos
    const kingBoo = document.getElementById("profile");
    const boo3 = document.getElementById("specialBoo");
    const boo1 = document.getElementsByClassName("boosStyle1");
    const boo2 = document.getElementsByClassName("boosStyle2");
    const footnotes = document.getElementById("footnotes");

    //change my theme to boo's world while keeping all the settings.
    //document.body.style.backgroundImage = 'url("https://static.wikia.nocookie.net/sm64-conspicaries/images/9/90/BBH_skybox.png/revision/latest/scale-to-width-down/256?cb=20201009231138")';
    document.body.style.backgroundImage = 'url("https://i.redd.it/lpmuqhpq30v51.png")';
    //document.body.style.backgroundImage = 'url("https://static.wikia.nocookie.net/sm64-conspicaries/images/9/90/BBH_skybox.png/revision/latest/scale-to-width-down/250?cb=20201009231138")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    //change footer to make it appear more clearer in the change of image
    footnotes.style.color = "white";

    //loop through classes to change npcs
    for(let i = 0; i < boo1.length; i++)
    {
        boo1[i].src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc25ec3f-b1c8-4630-91e9-1e260b289f2d/d91zy67-424b516e-5eee-416e-94a8-cc5cb5eb718a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjMjVlYzNmLWIxYzgtNDYzMC05MWU5LTFlMjYwYjI4OWYyZFwvZDkxenk2Ny00MjRiNTE2ZS01ZWVlLTQxNmUtOTRhOC1jYzVjYjVlYjcxOGEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Qr0N9B4Rk1sgjiO7aP9b1VB25B2Cl6C9QLYrFMBTl48';
    }

    for(let i = 0; i < boo2.length; i++)
    {
        if(i % 2 == 0)
            boo2[i].src = 'https://64.media.tumblr.com/31bacc44ea05d530d6542c6e74e7fc18/076809f4b52d40f8-28/s540x810/ca2c948b8ce0eaf6735f0e7afc205b597573a22a.gif';
        else
            boo2[i].src= 'https://66.media.tumblr.com/7b331cb0eea3e56a4f0f0968f284b39c/tumblr_mxj0ca8Adz1rfjowdo1_500.gif';
    }



    kingBoo.src = 'https://i.pinimg.com/originals/0c/3a/14/0c3a146cf1cb9d6bcb8cd1df8b657b7a.gif';
    boo3.src = 'https://i.makeagif.com/media/2-08-2016/VWP5Ex.gif';
    //pause current vid
    vid.pause();
    //change the music
    //change background
    vid.hidden = true;
    vid2.hidden = false;
    //set variable for playing vid function
    //set variable for playing vid function
    playVid = () => vid2.play();
    //same for pausing video
    pauseVid = () => vid2.pause();

    //have a reset video action
    resetVid = () => 
    {
        vid2.pause();
        vid2.currentTime = 0;

    }


}

//add click button for my div in my html file
eventButton.addEventListener("click", magic);



