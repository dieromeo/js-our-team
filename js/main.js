'use strict';

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
    const membro = membriGruppo[i];
    console.log('membro', i);
    const memberImage = document.createElement('img');
    memberImage.src = 'img/' + membro['foto'];
    teamContainer.append(memberImage);

    for (let key in membro) { // per ogni membro stampa i valori delle key e le aggiunge al dom
        console.log(membro[key]);
        // const span = document.createElement('p');
        // teamContainer.append(span);
        // span.innerHTML = membro[key];
    }
}