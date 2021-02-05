


// Allez vers la page selectionnée
function allezApage(e){
    var pg = document.querySelector(`.${e}`);
    var comd = document.getElementsByClassName('comd');
    for(var i =0; i<comd.length; i++){
        comd[i].classList.remove('activePage');
    }
    pg.classList.add('activePage');
    
};

// colorer les icons du menu
function colorIconeMenu(ev){
    var link2 = document.querySelector(`#${ev} i`);
var linkNav = document.querySelectorAll('.linkNav i');
for(var j =0; j<linkNav.length; j++){
    linkNav[j].classList.remove('iconActive');
}
link2.classList.add('iconActive');


}

// progresse bar
function remplirSkils(){
    var prg = document.getElementsByClassName('progress');
    
    for( var n =0; n<prg.length ; n++){
        prg[n].style.width = prg[n].parentElement.parentElement.getElementsByTagName('h3')[0].textContent;
    }
}
remplirSkils();



// changer la coleur des links portfolio
function changeColLinkP(event){
    var mylnk = document.getElementById(`${event}`);
    var linkp = document.getElementsByClassName('linkP');
    for(var i = 0; i<linkp.length; i++){
        linkp[i].classList.remove('iconActive');
    }
    mylnk.classList.add('iconActive')

}
// afficher les images portfolio
function afficheimages(event){
    
    var imghide = document.querySelectorAll('.img');
    for(var i = 0; i<imghide.length; i++){
        imghide[i].style.display = "none";
    };
    var myimgs = document.querySelectorAll(`.${event}`);
    for(var j = 0; j<myimgs.length; j++){
        myimgs[j].style.display = "block";
    }

}


// next page

function nextPage(){
    var win = document.querySelector('.iconActive');
    if(win.parentElement.nextElementSibling){
        win.parentElement.nextElementSibling.click();
        
       
    }else{
        win.click();
        
    }  
}

// previous page

function previousPage(){
    var win = document.querySelector('.iconActive');
    if(win.parentElement.previousElementSibling){
        win.parentElement.previousElementSibling.click();
    }else{
        win.click();
    }  
}



// changerMode
function changerMode(e){
    var jour = document.querySelector('.jour'),
        nuit = document.querySelector('.nuit'),
        linkCssChangeColor = document.getElementById('changeColor');
    linkCssChangeColor.setAttribute('href', `css/${e}.css`);
    jour.classList.toggle('activePage');
    nuit.classList.toggle('activePage');
        
        



}



document.addEventListener('mousemove', Mmouse);

var mymouse = document.getElementById('mouse');
function Mmouse(e){
    
    let x = e.clientX;
    let y = e.clientY;
    mymouse.style.top     =  y  +'px';
    mymouse.style.left    =  x +'px';

} 



var navbar = document.querySelector('.nav');
var downloasSpan = document.querySelector('.donloawdCv span');
var btnsBox = document.querySelector('.btnsBox');
var mediaIcons = document.querySelectorAll('.media i');



// debut mouse changed color

    navbar.onmousemove = chMouseColor;
    navbar.onmouseout = chMouseColorNone;

    downloasSpan.onmousemove = chMouseColor;
    downloasSpan.onmouseout = chMouseColorNone;

    btnsBox.onmousemove = chMouseColor;
    btnsBox.onmouseout = chMouseColorNone;

    for(var i = 0; i<mediaIcons.length; i++){
        mediaIcons[i].onmousemove = chMouseColor;
        mediaIcons[i].onmouseout = chMouseColorNone;
    }
    
    // change mouse color on
    function chMouseColor(){
        var ms = document.getElementById('mouse');
        ms.classList.add('chMousecol');
    }
    // change mouse color off
    function chMouseColorNone(){
        var ms = document.getElementById('mouse');
        ms.classList.remove('chMousecol');
    }
// fin mouse changed color





function AfficheMasqueLogoInfos(){
    var logoInfos = document.querySelector('.logoInfos');

    logoInfos.classList.toggle('affichelogoInfos');
}

function masqueLogoInfos(){
    var logoInfo = document.querySelector('.logoInfos');

    logoInfo.classList.remove('affichelogoInfos');



}
function afficheLogoInfos(){
    var logoInfo = document.querySelector('.logoInfos');

    logoInfo.classList.add('affichelogoInfos');



}





 


















function hideHost(){
    var host = document.body.lastElementChild.previousElementSibling;
    host.setAttribute('style', 'display:none !important;');

}
// document.addEventListener('load', setTimeout(hideHost, 100));


//document.addEventListener('load', setTimeout(hideHost, 100));













