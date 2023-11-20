'use strict';

// function

function createElement(tag, className, content) { // funzione per creare elementi html
    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    newElement.innerText = content;
    return newElement;
}

const membriGruppo = [ // array con i membri del gruppo
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
];

const teamContainer = document.querySelector('.team-container'); // div container

for (let i = 0; i < membriGruppo.length; i++) { // cicla tutti i membri dell'array
    const membro = membriGruppo[i]; // salvo il singolo membro
    console.log('membro', i);
    const card = createElement('div', 'card', '');
    const imageContainer = createElement('div', 'image-container', '');
    const teamInfo = createElement('div', 'team-info', '');
    const memberImage = createElement('img', 'immagine', '');
    memberImage.src = 'img/' + membro['foto'];
    teamContainer.append(card);
    card.append(imageContainer);
    card.append(teamInfo);
    imageContainer.append(memberImage);
    const name = createElement('p', 'name', `Nome:  ${membro['nome']}`);
    const role = createElement('p', 'role', `Ruolo: ${membro['ruolo']}`);
    teamInfo.append(name);
    teamInfo.append(role);

    for (let key in membro) { // per ogni membro stampa i valori delle key e le aggiunge al dom
        console.log(membro[key]);
    }
}