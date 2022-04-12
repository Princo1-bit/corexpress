document.querySelector(".burgerMenu").addEventListener('click', ()=> {
    document.querySelector('.open').classList.toggle("close");
    document.querySelector('.menu').classList.toggle("show");
});



let counter = 1;

document.querySelector(".right").addEventListener("click", ()=> {
    counter++;
    console.log(counter);


    if(counter == 1){
        document.querySelector('.header').style.backgroundImage = "url(./img/pexels-quintin-gellar-2199293.jpg)";
        document.querySelector(".info h1").innerHTML = "International delivery";
        document.querySelector(".info h3").innerHTML = "4 days - 150 countries";

    } else if(counter == 2){
        document.querySelector('.header').style.backgroundImage = "url(./img/pexels-martin-damboldt-799091.jpg)";
        document.querySelector(".info h1").innerHTML = "We are proud to";
        document.querySelector(".info h3").innerHTML = "be always on demand";
    } else if(counter ==3){
        document.querySelector('.header').style.backgroundImage = "url(./img/pexels-pixabay-163771.jpg)";
        document.querySelector(".info h1").innerHTML = "Providing the highest quality";
        document.querySelector(".info h3").innerHTML = "service 24 hours a day";
    } else if(counter > 3) {
        counter = 0;
    };


    
    
});

document.querySelector(".left").addEventListener("click", ()=> {
    counter--;
    console.log(counter);
    
    
    if(counter == 1){
        document.querySelector('.header').style.backgroundImage = "url(./img/pexels-quintin-gellar-2199293.jpg)";
        document.querySelector(".info h1").innerHTML = "International delivery";
        document.querySelector(".info h3").innerHTML = "4 days - 150 countries";

    } else if(counter == 2){
        document.querySelector('.header').style.backgroundImage = "url(./img/pexels-martin-damboldt-799091.jpg)";
        document.querySelector(".info h1").innerHTML = "We are proud to";
        document.querySelector(".info h3").innerHTML = "be always on demand";
    } else if(counter ==3){
        document.querySelector('.header').style.backgroundImage = "url(./img/pexels-pixabay-163771.jpg)";
        document.querySelector(".info h1").innerHTML = "Providing the highest quality";
        document.querySelector(".info h3").innerHTML = "service 24 hours a day";
    } else if(counter < 1) {
        counter = 4;
    };

});
