const input = document.getElementById('input');
const suggestion = document.getElementById('suggestion');

const frutas = ["banana", "maçã", "laranja", "uva", "morango", "palta", "abacaxi", "manga", "goiaba", "kiwi"]

input.addEventListener('input', () =>{
    const value= input.value.trim();

    if(value.length > 0){
        suggestion.innerHTML = '';
        const recomendaciones = frutas.filter(fruta => fruta.includes(value));

        recomendaciones.forEach(fruta => {
            const element = document.createElement('a');
            element.textContent = fruta;
            suggestion.appendChild(element)
            element.classList.add('item')
        })
    } else {
        suggestion.innerHTML = '';
    }
}); 