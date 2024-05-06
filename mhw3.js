/* DICHIARAZIONI COSTANTI */
const RIGHT_ARROW = 'img/forward-arrow.png';
const DOWN_ARROW = 'img/down-arrow.png';

/* IMPLEMENTAZIONI FUNZIONI */
function visualizzaDettagli(event){
    const content = document.querySelector('.content');
    const image = event.currentTarget.querySelector('img');
    const text = event.currentTarget.querySelector('span');

    isVisible = !isVisible;
    if(isVisible){
        content.classList.remove('hidden');
        image.src = DOWN_ARROW;
        text.textContent = 'Nascondi dettagli';
    }else{
        content.classList.add('hidden');
        image.src = RIGHT_ARROW;
        text.textContent = 'Visualizza dettagli';
    }
}

function createImage(src){
    const image = document.createElement('img');

    image.src = src;
    return image;
}

function onImageClick(event){
    console.log('Hai cliccato l immagine');
    const image = createImage(event.currentTarget.src);

    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
}

function onModalClick(){
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
}

function changeFavorite(event){
    const pref = event.currentTarget;
    const title1 = document.createElement('h3');
    const title2 = document.createElement('h4');
    const button = document.createElement('button');

    pref.classList.add('preferito');
    button.classList.add('reset');
    pref.innerHTML = '';

    title1.textContent = "Con doppio click hai attivato la classe preferito";
    title2.textContent = "Clicca sul bottone per resettare tutto come prima!";
    button.textContent = 'Cliccami';
        
    pref.appendChild(title1);
    pref.appendChild(title2);
    pref.appendChild(button);
    
    button.addEventListener('click', resetButton);
}

function resetButton(){
    preferito.innerHTML = '';
    preferito.classList.remove('preferito');

    preferito.appendChild(cover);
    preferito.appendChild(caption);
    preferito.appendChild(price);
}

function addEffects(event){
    const effects = event.currentTarget;
    
    isOver = !isOver;
    if(isOver){
        if(effects.dataset.name === 'one'){
            effects.classList.add('noName');
        }
    }else{
        effects.classList.remove('noName');
    }
}

function autoScroll(){
    //FUNZIONE CHE SERVE PER FAR GIRARE AUTOMATICAMENTE LE IMMAGINI PRESENTI NELLA SEZIONE (SECTION-IMG)
    document.querySelector('#radio' + counter).checked = true; //PRENDO TUTTI GLI ELEMENTI CHE HANNO ID RADIO E GLI CONCATENO UN NUMERO CHE VIENE INCREMENTATO FINO A 4. QUESTO PERCHE' GLI ID SONO RADIO1, RADIO2.. ECC.
    const buttons = document.querySelector('#radio' + counter);
    const home = document.querySelectorAll('.home-slider');
    const container = document.querySelector('.isVisible');

    counter++;
    
    if(counter > 4){
        counter = 1;
    }

    for(let i = 0; i < home.length; i++){
        if(buttons.dataset.index === 'primo' && home[0].dataset.index === 'primo'){
            home[0].classList.remove('hidden');
            
            home[1].classList.add('hidden');
            home[2].classList.add('hidden');
            home[3].classList.add('hidden');            
        }
        if(buttons.dataset.index === 'secondo' && home[1].dataset.index === 'secondo'){
            home[1].classList.remove('hidden');

            home[0].classList.add('hidden');
            home[2].classList.add('hidden');
            home[3].classList.add('hidden');
        }
        if(buttons.dataset.index === 'terzo' && home[2].dataset.index === 'terzo'){
            home[2].classList.remove('hidden');

            home[0].classList.add('hidden');
            home[1].classList.add('hidden');
            home[3].classList.add('hidden');
        }
        if(buttons.dataset.index === 'quarto' && home[3].dataset.index === 'quarto'){
            home[3].classList.remove('hidden');

            home[0].classList.add('hidden');
            home[1].classList.add('hidden');
            home[2].classList.add('hidden');
        }
    }
}
setInterval(autoScroll, 3000); //SETTO UN INTERVALLO DI 3S PER FAR SCORRERE LE IMMAGINI.

function slideInfo(event){
    const sliderInfo = event.currentTarget;
    const slide = document.querySelectorAll('.slide');
    const container = document.createElement('div');
    const info = document.createElement('div');
    const info2 = document.createElement('div');

    const titolo = document.createElement('h2');
    const button = document.createElement('span');
    const txt = document.createElement('p');

    const image0 = document.createElement('img');
    const image1 = document.createElement('img');
    const image2 = document.createElement('img');
    const image3 = document.createElement('img');

    container.classList.add('isVisible');
    button.classList.add('button');
    info.classList.add('info');
    info2.classList.add('info2');

    image0.src = 'https://comicscorner.b-cdn.net/wp-content/uploads/2024/03/Banner-2.png';
    image1.src = 'https://comicscorner.b-cdn.net/wp-content/uploads/2024/03/Senza-nome-1.png';
    image2.src = 'https://comicscorner.b-cdn.net/wp-content/uploads/2024/03/LOL-banner.png';
    image3.src = 'https://comicscorner.b-cdn.net/wp-content/uploads/2024/03/Banner-Sin-City-2.png';
    button.textContent = 'Guarda';    
    
    for(let i = 0; i < slide.length; i++){
        if(sliderInfo.dataset.index === 'primo' && slide[0].dataset.index === 'primo'){
            //0           
            titolo.textContent = 'The First Slam Dunk Re: Source';
            txt.textContent = "Scopri il dietro le quinte del premio per la miglior animazione dell'anno ai ''Japan Academy Awards 2023''";
            info.appendChild(titolo);
            info.appendChild(info2);
            info2.appendChild(txt);
            container.appendChild(info);
            container.appendChild(button);
            slide[0].appendChild(container);

            slide[1].innerHTML = '';
            slide[2].innerHTML = '';
            slide[3].innerHTML = '';

            slide[1].appendChild(image1);
            slide[2].appendChild(image2);
            slide[3].appendChild(image3);
        }
        
        if(sliderInfo.dataset.index === 'secondo' && slide[1].dataset.index === 'secondo'){
            //1           
            titolo.textContent = 'Make The Exorcist Fall In Love';
            txt.textContent = "Il nuovo manga di Paninni disponibile sia in versione regular che nella versione variant, in esclusiva per le fumetterie";
            info.appendChild(titolo);
            info.appendChild(info2);
            info2.appendChild(txt);
            container.appendChild(info);
            container.appendChild(button);
            slide[1].appendChild(container);

            slide[0].innerHTML = '';
            slide[2].innerHTML = '';
            slide[3].innerHTML = '';

            slide[0].appendChild(image0);
            slide[2].appendChild(image2);
            slide[3].appendChild(image3);
        }

        if(sliderInfo.dataset.index === 'terzo' && slide[2].dataset.index === 'terzo'){
            //2
            titolo.textContent = 'The Art Of Arcane - Deluxe Hardcover';
            txt.textContent = "Tutti i retroscena della serie TV di Netflix , in un fantastico volume";
            info.appendChild(titolo);
            info.appendChild(info2);
            info2.appendChild(txt);
            container.appendChild(info);
            container.appendChild(button);        
            slide[2].appendChild(container);

            slide[0].innerHTML = '';
            slide[1].innerHTML = '';
            slide[3].innerHTML = '';

            slide[0].appendChild(image0);
            slide[1].appendChild(image1);
            slide[3].appendChild(image3);
        }

        if(sliderInfo.dataset.index === 'quarto' && slide[3].dataset.index === 'quarto'){
            //3
            titolo.textContent = 'Sin City (Star Comics)';
            txt.textContent = "L'epopea neo-noir di Frank Miller ritorna con tre diverse edizioni";
            info.appendChild(titolo);
            info.appendChild(info2);
            info2.appendChild(txt);
            container.appendChild(info);
            container.appendChild(button);            
            slide[3].appendChild(container);

            slide[0].innerHTML = '';
            slide[1].innerHTML = '';
            slide[2].innerHTML = '';

            slide[0].appendChild(image0);
            slide[1].appendChild(image1);
            slide[2].appendChild(image2);
        }        
    }
}

function changeSliderRight(event){
    const btnR = event.currentTarget;

    for(let i = 0; i < carousel.length; i++){
        const firstCardWidth = carousel[i].querySelector('.card').offsetWidth;
        
        if(btnR.dataset.index === 'primo'){
            carousel[0].scrollLeft += firstCardWidth;
        }else if(btnR.dataset.index === 'secondo'){
            carousel[1].scrollLeft += firstCardWidth;
        }
        else if(btnR.dataset.index === 'terzo'){
            carousel[2].scrollLeft += firstCardWidth;
        }
        else if(btnR.dataset.index === 'quarto'){
            carousel[3].scrollLeft += firstCardWidth;
        }
    }
}
function changeSliderLeft(event){
    const btnL = event.currentTarget;

    for(let i = 0; i < carousel.length; i++){
        const firstCardWidth = carousel[i].querySelector('.card').offsetWidth;
        
        if(btnL.dataset.index === 'primo'){
            carousel[0].scrollLeft += -firstCardWidth;
        }else if(btnL.dataset.index === 'secondo'){
            carousel[1].scrollLeft += -firstCardWidth;
        }
        else if(btnL.dataset.index === 'terzo'){
            carousel[2].scrollLeft += -firstCardWidth;
        }
        else if(btnL.dataset.index === 'quarto'){
            carousel[3].scrollLeft += -firstCardWidth;
        }
    }
}
/* - - - - - - FUNZIONI INERENTTI ALLE REST-API - - - - - -  */

function onResponse(response){
    console.log('Risposta ricevuta');
    return response.json();
}

function onTokenJson(json){
    console.log(json);
    token = json.access_token;
}

function onTokenResponse(response){
    return response.json();
}

function onJesonMarvel(json){
    console.log('JSON fumetti Marvel:');
    console.log(json);

    const library = document.querySelector('#search-view');
    library.innerHTML = '';

    const results = json.data.results;
    isComics = !isComics;
    if(isComics){
        for(let i = 0; i < res; i++){
            const data = results[i];
            const title = data.title;
            const data_img = data.thumbnail.path + '/portrait_uncanny.' + data.thumbnail.extension;
            const album = document.createElement('div');
            const caption = document.createElement('span');
            const image = document.createElement('img');
    
            album.classList.add('album');
            caption.textContent = title;
            image.src = data_img;
            
            album.appendChild(caption);
            album.appendChild(image);
            library.appendChild(album);
        }
    }else{
        for(let i = 0; i < res; i++){
            const data = results[i];
            const title = data.name;
            const data_img = data.thumbnail.path + '/portrait_uncanny.' + data.thumbnail.extension;
            const album = document.createElement('div');
            const caption = document.createElement('span');
            const image = document.createElement('img');
    
            album.classList.add('album');
            caption.textContent = title;
            image.src = data_img;
    
            album.appendChild(caption);
            album.appendChild(image);
            library.appendChild(album);
        }
    }    
}

function onJsonGif(json){
    console.log('JSON delle gif:');
    console.log(json);

    const library = document.querySelector('#search-view');
    library.innerHTML = '';

    const results = json.data;
    for(let result of results){
        const album = document.createElement('div');
        const image = document.createElement('img');

        album.classList.add('album');
        image.classList.add('gif');
        image.src = result.images.downsized_medium.url;

        album.appendChild(image);
        library.appendChild(album)
    }
}

function onJsonMusic(json){
    console.log(json);
    const library = document.querySelector('#search-view');
    library.innerHTML = '';

    const results = json.albums.items;
    for(let i = 0; i < res; i++){
        const data = results[i];
        const titile = data.name;
        const data_image = data.images[0].url;
        const album = document.createElement('div');
        const caption = document.createElement('span');
        const image = document.createElement('img');

        album.classList.add('album');
        caption.textContent = titile;
        image.src = data_image;

        album.appendChild(caption);
        album.appendChild(image);
        library.appendChild(album);
    }
}

function search(event){
    event.preventDefault();

    //SALVO IL VALORE DEL CAMPO DI TESTO CHE VADO A SCRIVEWR NELLA BARRA DI RICERCA DEL FORM
    const text_content = document.querySelector('#text-content').value;

    if(text_content){
        const text = encodeURIComponent(text_content);
        const tipo = document.querySelector('#tipo').value; //PRENDO IL VALORE SELLA SELECT E NE LEGGO L'OPZIONE SCELTA
        console.log('Eseguo la ricerca su: ' + text);
        console.log('Ricerco elementi di tipo: ' + tipo);

        //IN BASE AL TIPO CHE HO SELEZIONATO, ESEGUO FUNZIONI DIVERSE
        if(tipo === 'GIF'){
            gif_request = gif_API_endpoint + '?api_key=' + key_gif + '&q=' + text + '&limit=' + res;
            fetch(gif_request).then(onResponse).then(onJsonGif);
        }else if(tipo === 'Musica'){
            console.log('Endpoint:');
            console.log(spotify_endpoint);

            fetch(spotify_endpoint + text,
                {
                    headers:
                    {
                        'Authorization': 'Bearer ' + token
                    }
                }
            ).then(onResponse).then(onJsonMusic);
        }
    }
}

function search2(event){
    event.preventDefault();
    const type = document.querySelector('input[name="button"]:checked').value;
    
    if(type === 'comics'){
        console.log('Hai selezionato il radio button: ' + type);
        marvel_request = marvel_endpoint_comics + '?ts=' + 1 + '&apikey=' +  key_marvel + '&hash=' + hash_marvel;
        fetch(marvel_request).then(onResponse).then(onJesonMarvel);
    }
    else if(type === 'characters'){
        console.log('Hai selezionato il radio button: ' + type);
        marvel_request = marvel_endpoint_characters + '?ts=' + 1 + '&apikey=' +  key_marvel + '&hash=' + hash_marvel;
        fetch(marvel_request).then(onResponse).then(onJesonMarvel);
    }
}
/* - - - - - -  - - - - - - - - - - - - - - - - - - - - - - */

/* - - - - - - DICHIARAZIONI GENERALI - - - - - - */
let isVisible = false;
let isClicked = false;
let isOver = false;
let isComics = false;
let i = 0;
let counter = 2;
let inc = 1;
const res = 10;

/* LA SEGUENTE PARTE DI CODICE L'HO PRESA SEGUENDO UN VIDEO IN QUANTO HO AVUTO DIFFICOLTA' CON LA REALIZZAZIONE DI UNO SLIDER PER IL CONTENUTO DELLA SEZIONE ALBUM-VIEW */
const carousel = document.querySelectorAll('.list');
for(let caro of carousel){
    const firstCardWidth = caro.querySelector('.card').offsetWidth;
    let cardPerView = Math.round(caro.offsetWidth / firstCardWidth);
    const carouselChildrens = [...caro.children];

    carouselChildrens.slice(-cardPerView).reverse().forEach(card =>{
        caro.insertAdjacentHTML('afterbegin', card.outerHTML);
    });
    carouselChildrens.slice(0, cardPerView).forEach(card =>{
        caro.insertAdjacentHTML('beforeend', card.outerHTML);
    });

    const infiniteScroll = () =>{
        if(caro.scrollLeft === 0){
            caro.classList.add('no-transition');
            caro.scrollLeft = caro.scrollWidth - (2 * caro.offsetWidth);
            caro.classList.remove('no-transition');
        }else if(caro.scrollLeft === caro.scrollWidth - caro.offsetWidth){
            caro.classList.add('no-transition');
            caro.scrollLeft = caro.offsetWidth;
            caro.classList.remove('no-transition');
        }
    }
    
    caro.addEventListener('scroll', infiniteScroll);
    //caro.addEventListener('touchmove', draggingTouch);
    //caro.addEventListener('touchmove', changeSliderLeft);
}
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  */

const details = document.querySelector('.show-details');
details.addEventListener('mouseover', visualizzaDettagli);

const sliderImage = document.querySelectorAll('.mdl-img');
for(let items of sliderImage){
    items.addEventListener('click', onImageClick);
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);

const preferito = document.querySelector('.pref');

const cover = preferito.querySelector('.slider-img');
const caption = preferito.querySelector('.caption');
const price = preferito.querySelector('.prezzo');

preferito.addEventListener('dblclick', changeFavorite);
preferito.addEventListener('touchstart', changeFavorite); //L'HO IMPLEMENTATO PER LA VERSIONE MOBILE

const effects = document.querySelectorAll('.underline');

for(let efx of effects){
    efx.addEventListener('mouseover', addEffects);
}

while(inc <= 4){
    const sliderInfo = document.querySelectorAll('#radio' + inc);
    
    for(let info of sliderInfo){
        info.addEventListener('click', slideInfo);    
    }

    inc++;
}

const btnsR = document.querySelectorAll('.right');
const btnsL = document.querySelectorAll('.left');
for(let btnR of btnsR){
    btnR.addEventListener('click', changeSliderRight);
}
for(let btnL of btnsL){
    btnL.addEventListener('click', changeSliderLeft);
}

/* - - - - - - - - DICHIARAZIONI PER LE FUNZIONI DELLE REST-API - - - - - - */ 
const key_img = '27050026-1f2868c0d5dba2074ec8831f3';
const key_gif = 'hxhOZmepQhoPnwoiEaTJK6qgZ66pjyMX';
const key_marvel = '7e2c0d10ccf3943d6225bc4bca547060';
const hash_marvel = '7414c614534d58d347175f92c85cc0d7';

const gif_API_endpoint= 'http://api.giphy.com/v1/gifs/search';
const img_API_endpoint= 'https://pixabay.com/api/';
const marvel_endpoint_comics = 'http://gateway.marvel.com/v1/public/comics';
const marvel_endpoint_characters = 'http://gateway.marvel.com/v1/public/characters';

//AUTENTICAZIONE OAuth2.0
const client_id = 'feaefc6fe526458886eeb885dbab1758';
const client_secret = '47fb69805a9344959d46335e945509ee';
const spotify_endpoint = 'https://api.spotify.com/v1/search?type=album&q=';
const spotify_api_token = 'https://accounts.spotify.com/api/token';
let token;

//RICHIEDO IL TOKEN APPENA LA PAGINA VIENE APERTA
fetch(spotify_api_token,
    {
        method: 'post',
        body: 'grant_type=client_credentials',
        headers:
        {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
        }
    }
).then(onTokenResponse).then(onTokenJson)

// Aggiungi event listener al form
const form = document.querySelector('form');
form.addEventListener('submit', search);

const formDiv = document.querySelector('#form-radio');
formDiv.addEventListener('submit', search2);