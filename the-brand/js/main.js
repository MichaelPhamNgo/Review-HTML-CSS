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
`<h1 class="slider-place">${slideShows[i].title}</h1>
 <h3 class="slider-brief">${slideShows[i].description}</h3>`;
setInterval(function(){    
    i++;
    if(i >= slideShows.length) {
        i = i - slideShows.length;
    }
    slideShow.style.backgroundImage = `url(${slideShows[i].src})`;
    slideShow.innerHTML = 
       `<h1 class="slider-place">${slideShows[i].title}</h1>
        <h3 class="slider-brief">${slideShows[i].description}</h3>`;    
}, 5000);

document.querySelector("#nav-menu-bars").addEventListener('click', function(){
    const navMenuChildren = document.querySelector(".nav-menu ul").children;
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

document.querySelector(".modal").addEventListener('click', function(){    
    document.querySelector(".modal").style.display = 'none';
});

document.querySelector(".modal-container").addEventListener('click', function(e){    
    e.stopPropagation();
});

document.querySelector(".modal-footer > a").addEventListener('click', function(){    
    document.querySelector(".modal").style.display = 'none';
});

document.querySelector(".modal-header a").addEventListener('click', function(){    
    document.querySelector(".modal").style.display = 'none';
});

const buyTickets = document.querySelectorAll(".buy-ticket");
for(let i = 0; i < buyTickets.length; ++i) {
    buyTickets[i].addEventListener("click", function(){
        document.querySelector(".modal").style.display = "flex";
    });
}