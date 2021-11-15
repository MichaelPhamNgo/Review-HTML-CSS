const slideShows = [
    {
        src : 'https://www.w3schools.com/w3images/ny.jpg',
        title : 'New York',
        description : 'The atmosphere in New York is lorem ipsum.'
    },
    {
        src : 'https://www.w3schools.com/w3images/chicago.jpg',
        title : 'Chicago',
        description : 'Thank you, Chicago - A night we won\'t forget.'
    },
    {
        src : 'https://www.w3schools.com/w3images/la.jpg',
        title : 'Los Angeles',
        description : 'We had the best time playing at Venice Beach!'
    },
]

const slideShow = document.querySelector(".slider");
let i = 0;
slideShow.style.backgroundImage = `url(${slideShows[i].src})`;
slideShow.style.backgroundImage = `url(${slideShows[i].src})`;
slideShow.innerHTML = 
`<div class="slider__content">
    <h1 class="slider__content_title">${slideShows[i].title}</h1>
    <p class="slider__content_description">${slideShows[i].description}</p>
</div>`;
setInterval(function(){    
    i++;
    if(i >= slideShows.length) {
        i = i - slideShows.length;
    }
    slideShow.style.backgroundImage = `url(${slideShows[i].src})`;
    slideShow.innerHTML = 
    `<div class="slider__content">
        <h1 class="slider__content_title">${slideShows[i].title}</h1>
        <p class="slider__content_description">${slideShows[i].description}</p>
    </div>`;    
}, 5000);

document.querySelector("#nav__menu_bars").addEventListener('click', function(){
    const navMenuChildren = document.querySelector(".nav__menu").children;
    if(navMenuChildren[1].style.display === '' || navMenuChildren[1].style.display === 'none') {
        for(let i = 1; i < 5; ++i) {
            navMenuChildren[i].style.display = 'block';
        }
    } else if (navMenuChildren[1].style.display === 'block') {
        for(let i = 1; i < 5; ++i) {
            navMenuChildren[i].style.display = '';
        }
    }
    
});