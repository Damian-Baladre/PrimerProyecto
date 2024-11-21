

let famosos = {
    "Brad Pitt": 50,
    "leonardo Di Caprio": 60,
    "Angelina Jolie": 55,
    "Tom Hanks": 58
};
let counter = 0;

let arraysKeys = Object.keys(famosos);

for (let i = 0;i < 3; i++){
    let pregunta = prompt(`cuantos anios tiene ${arraysKeys[i]}?`);
    pregunta = parseInt (pregunta);

    if (pregunta == famosos[arraysKeys[i]]){
        alert(`Coooorrecto! ${arraysKeys[i]} tiene ${pregunta}`);
    }
    else if (pregunta < famosos[arraysKeys[i]]){
        alert(`MAL! ${arraysKeys[i]} es mayor`)
    }else{
        alert(`MALISIMO! ${arraysKeys[i]} es menor`);
    }
}



