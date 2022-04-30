

/*QUESTO E' TUTTO IL CPDICE DEL MHW2*/
//Definisco le variabili globali e gli metto dentro gli url delle immagini dei checkbox
const check_box_url = "images/checked.png"
const uncheck_box_url = "images/unchecked.png"

//Definiszione Array per poter mappare le risposte
const choose = {one: null, two: null, three: null};

//Definizione del vettore delle checkbpx
const checkbox_vector = document.querySelectorAll(".choice-grid div");

// 1) Definisco la function per il check e l'uncheck delle checkbox
function check_box(event){
  //catturo l'evento appena cliccato
  const check_box_event = event.currentTarget;

  //inizializzo un'indice che mi servira' per il confronto e per la mappa
  let index=check_box_event.dataset.questionId;
  /*Con il sewguente ciclo for itero il controllo su tutte le check box per
  essere sicuri che il click aggiunga o rimuova il check con il corrispettivo index*/
  for (const check_box_1 of checkbox_vector){
    const image = check_box_1.querySelector(".checkbox");
    if(check_box_1.dataset.questionId===index){
      if(check_box_1.dataset.choiceId===check_box_event.dataset.choiceId){
        //rimuovo la classe unchecked sostituendola con quella checked.
        check_box_1.classList.remove("unchecked");
        check_box_1.classList.add("checked");
        //sostituisco anche l'immagine con quella checkata
        image.src=check_box_url;
        choose[index]=check_box_event.dataset.choiceId;
      }
      else{
        //faccio lo stesso procedimento ma con la versione uncheked
        check_box_1.classList.remove("checked");
        check_box_1.classList.add("unchecked");
        image.src=uncheck_box_url;
      }
    }
  }

  //Definisco un flag booleano che mi serve per verificare se e scelte sono ancora nulle o meno
  let flag= 0;
  for(let index in choose){
    //procedo al controllo scorrendo nell'indice che le scelte non siano nulle
    if(choose[index] === null) flag=1;
  }

  //Dunque in questo caso se il flag torna a 0 le scelte sono state effettuate.
  //posso quindi richiamare la funzione result quiz per far vedere il risultato.

  if(flag === 0){
    console.log("Flag= 0");
    result_quiz();
  }
}

//2) Restart del quiz: resetto le variabili per poter ricominciare il quiz
function reset_quiz(){
  //devo iterar gli elementi della pagina per resettarli
  for(const check_box_2 of checkbox_vector){
    check_box_2.classList.remove("checked");
    check_box_2.classList.remove("unchecked");

    //aggiungo l'evento click
    check_box_2.addEventListener("click",check_box);
    check_box_2.querySelector(".checkbox").src="images/unchecked.png";
  }
  const result = document.querySelector(".result");
  result.remove();
  //posso resettare le scelte
  choose.one= null;
  choose.two= null;
  choose.three= null;
  window.scroll(0,0); //scrolla in alto di colpo
}

//3) Definsco la funzione per il risultato del quiz
function result_quiz(){
  //Prototipo per la costruziione dinamica del quiz reset
  const div = document.createElement("div");
  const title = document.createElement("h1");
  const text = document.createElement("p");
  const button = document.createElement("button");
  const restart = document.createElement("div");

  //Inizio effettivamente con la costruzione dinamica.
  //Creo le classi per identificare il costrutto per poi pterlo mdificare nel css
  div.classList.add("result");
  button.classList.add("reset_button");
  restart.textContent= "Ricomincia il quiz!";

  if (choose.two === choose.three){
    title.textContent = RESULTS_MAP[choose.two].title;
    text.textContent = RESULTS_MAP[choose.two].contents;
  }
  else{
    title.textContent = RESULTS_MAP[choose.one].title;
    text.textContent = RESULTS_MAP[choose.one].contents; 
  }
  //adesso aggiungo gli elementi all'intrno della pagina.
  button.appendChild(restart);
  div.appendChild(title);
  div.appendChild(text);
  div.appendChild(button);
  document.querySelector("article").appendChild(div);
  //Aggiungo il reset al button e disattivo quello delle scelte delle check box
  button.addEventListener("click", reset_quiz);
  for(const check_box_3 of checkbox_vector) check_box_3.removeEventListener("click",check_box);

  window.scrollTo(0,document.body.scrollHeight);
}

for(const check_box_3 of checkbox_vector) check_box_3.addEventListener("click",check_box);
