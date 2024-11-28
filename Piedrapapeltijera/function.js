const select = document.getElementById('option');
const elements = document.getElementById('elements');

let winPC = 0, winUser = 0;

select.addEventListener('change', () => {

    if(select.value != ''){
        let selectUSer = select.value;

        selectUser = selectUser == "piedra" ? 0 : selectUser == "papel" ? 1 : 2;

        const selectPC = Math.floor(Math.random() * 3);
        const resultado = quienGana(selectUser, selectPC);

        const item = docuemnt.creatElement('a');
        item.textContent = transcribir(selectUser);
        elements.appendChild(item);

        const item1 = docuemnt.creatElement('a');
        item1.textContent = transcribir(selectPc);
        elements.appendChild(item1);

        const item2  = docuemnt.creatElement('a');
        item2.textContent = resultado;
        elements.appendChild(item2);
    }
});

function transcribir(a){
    let value;
    switch (a){
        case 0: value = "Piedra"; break;
        case 1: value = "Papel"; break;
        case 2: value = "Tijera"; break;
    }

    return value;
}

function quienGana(user, pc){
   if(user === pc){ return "empate";}

   let value;

   switch(user){
    case 0: if (pc == 2){ return "Gano el usuario";} else { return "Gano la"}; break;
    case 1: if (pc == 0){ return "Gano el usuario";} else { return "Gano la"}; break;
    case 2: if (pc == 1){ return "Gano el usuario";} else { return "Gano la"}; break;
    }

    if(value.includes('PC')) {winPC++;}
        else{ WinUser++;}

    return value
}