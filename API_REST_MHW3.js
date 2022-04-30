
//Definisco uan variabile globale per il numero max di risultati
const numResults = 10;

//Definisco il comportamento che deve assumere il codice una volta ricevuta la risposta dal server
function onResponse(response){
    //Converto la risposta in json con il metodo json()
    return response.json();
}

function onTokenResponse(response) {
    return response.json();
}

function getToken(json)
{
	token_data = json.acces_token;
	console.log(json);
    console.log(token_data);
}

function prevent(event) {
	event.preventDefault();
}

//Definisco la funzione per la ricerc delle immagini
function onJson_img(json){
    //Stampo in console il json per vedere com'è fatto e per vedere cosa può servire
    console.log(json);

    //Svuoto la librerya 
    const library = document.querySelector('#album-view');
    library.innerHTML = '';

    const results= json.hits;
    for(result of results){
        const album = document.createElement('div');
        album.classList.add('album');
        const img= document.createElement("img");

        img.src= result.largeImageURL;
        //Aggiungo l'immagine all'interno dell'album_view
        album.appendChild(img);
        library.appendChild(album);

    }
}

function onJson_gif(json){
    //Stampo in console il json per vedere com'è fatto e per vedere cosa può servire
    console.log(json);

    //Svuoto la librerya 
    const library = document.querySelector('#album-view');
    library.innerHTML = '';

    const results= json.data;
    for(result of results){
        const album = document.createElement('div');
        album.classList.add('album');
        const img= document.createElement("img");

        img.src= result.images.downsized.url;
        //Aggiungo l'immagine all'interno dell'album_view
        album.appendChild(img);
        library.appendChild(album);

    }
}

function onJsonMusic(json){
    const library= document.querySelector("#album_view");
    library.innerHTML = '';
    const results= json.albums.items;
    for(let i= 0; i<numResults; i++){
        const album_data= results[i];
        const title= album_data.name;
        const selected_image= album_data.images[0].url;
        const album= document.createElement("div");
        album.classList.add("album");
        const img= document.createElement("img");
        img.src= selected_image;
        const caption= document.createElement("span");
        caption.textContent= title;
        album.appendChild(img);
        album.appendChild(caption);
        library.appendChild(album);
    }
}

function search(event){
    //Impedisco che si verifichi il submit del form
    event.preventDefault();

    //Salvo il valore del campo di testo che vado a scrivere e faccio la codifica del testo in modo che sia compresibile nel URl
    const content= document.querySelector("#content").value;
    if(content) {
	    const text = encodeURIComponent(content);
		console.log('Eseguo ricerca elementi riguardanti: ' + text);
  
		// Leggi l'opzione scelta
		const tipo = document.querySelector('#tipo').value;
		console.log('Ricerco elementi di tipo: ' +tipo);
  

		//in base al tipo selezionato, eseguo funzioni diverse
		if(tipo === "immagine") {
	  		// Esegui fetch
			img_request = img_API_endpoint + '?key='  + key_img + '&q=' + text + '&per_page=' + numResults;
			fetch(img_request).then(onResponse).then(onJson_img);
        }else if(tipo === "gif") {
			gif_request = gif_API_endpoint + '?api_key='  + key_gif + '&q=' + text + '&limit=' + numResults;
			fetch(gif_request).then(onResponse).then(onJson_gif);
        }else if(tipo === "musica"){
            console.log(music_endpoint)
            fetch(music_endpoint,
                {
                    headers:
                    {
                        'Authorization': 'Bearer' + token_data,
                    }
                }    
            ).then(onResponse).then(onJsonMusic);
        }
    }    
}

//Definisco le API KEYS ed anche gli endpoints
const key_gif= "hxhOZmepQhoPnwoiEaTJK6qgZ66pjyMX";
const key_img= "27050026-1f2868c0d5dba2074ec8831f3";
const gif_API_endpoint= "http://api.giphy.com/v1/gifs/search";
const img_API_endpoint= "https://pixabay.com/api/";


//Definisco le keys e le secret per OAuth2.0
const key_music= "05c18ca056544ba287084cf1ac53834d"; //clientID
const secret_music= "58966e840009444e9b8037dffff2f2e4"; //clientSecret
const music_api_endpoint_token= "https://accounts.spotify.com/api/token";
const music_endpoint= "https://api.spotify.com/v1/search";

//Quando la pagina viene aperta, richiedo il token
let token_data;
fetch(music_api_endpoint_token,
    {
        method: 'post',
        body: 'grant_type=client_credentials', 
        headers:
        {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic' + btoa(key_music + ':' + secret_music)
        }
    }
).then(onTokenResponse).then(getToken);

//Aggiungo l'event listener al form per la ricerca
const form= document.querySelector("#search_content");
form.addEventListener("submit", search);

/*
Premetto che purtroppo non sono riuscito a correggere l'errore per il quale  non
funziona l'API OAuth2.0 di spotify. Chiedo scusa per la consegna incompleta dell'homework.
*/