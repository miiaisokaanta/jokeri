// Haetaan elementit
const button= document.querySelector('button'); // Haetaan painike
const pElement = document.querySelector('p'); // Haetaan p-elementti, eli paikka riville
const table = document.querySelector('table'); // Haetaan taulukko

// Alustetaan muuttuja rivien laskemiseen

let rivienMaara= 0;

// Lisätään kuuntelija buttoniin
button.addEventListener('click', () => {
    //Kutsutaan funktiota joka lisää uuden rivin taulukkoon
    lisaaJokeriRivi();

    //Päivitetään rivien lukumäärä p-elementtiin
    rivienMaara++;
    pElement.textContent = `Valmiita rivejä ${rivienMaara}`;  // HOX!  ` -merkit jotta funktio toimii eikä lue kokonaan tekstinä! --- TAI::: pElement.textContent = 'Arvottuja rivejä: ' + rivienMaara;
})  

//Funktio joka luo uuden jokeririvin taulukkoon
function lisaaJokeriRivi() {
    //Luodaan uusi rivi
    const tr = document.createElement('tr');

    //Toistolause, joka suoritetaan 7 kertaa (luodaan 7 satunnaista numeroa)
    for (let i = 0; i < 7; i++) {
        //Luodaan solu (td)
        const td = document.createElement('td');

        //Asetetaan satunnaisluku 0-9 välillä soluun
        td.textContent = Math.floor(Math.random() * 10);

        //Lisätään solu riville
        tr.appendChild(td);
    }

    //Lisätään rivi taulukkoon
    table.appendChild(tr);
}