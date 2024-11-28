//MAP
    //const ejemplo = ["ejemplo", "otro ejemplo", "1", "2",]
    //const ejemplo2 = ejemplo.map(item => item *3)
    //                 
    //console.log(ejemplo2);

//filteeer
    //const elementos = [20, 40, 30, 50, 25];
    //const otrosElementos = elementos.filter(item => item > 45)
    //console.log(otrosElementos);

//FOREACH

const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', () => {
        //console.log(item.textContent);
    });
});

// GET ELEMENT BY ID
const content = document.getElementById ('content');
const listItem = content.children;
//querySelector  - querySelectorAll getElementById
//:last-child

const firstItem = content.firstElementChild;
const lastItem = content.lastElementChild;
const previusBrother = content.previousElementSibling;
const brother = content.nextElementSibling;

console.log(previusBrother)







