const buttons = document.querySelectorAll ('.btn');
const input = document.getElementById ("input");
const output = document.getElementById ("output");

// specials buttons
const btnTrash = document.getElementById ("btnTrash");
const btnDelete = document.getElementById ("btnDelete");
const btnEqual = document.getElementById ("btnEqual");

//keyboard
const keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", ".", "(", ")", "Enter", "Escape", "Backspace"];

document.addEventListener ('keydown', (e) =>{
     keys.forEach (key => {
        if(key === e.key){
            if(key=== "Enter"){
                equalContent();
            }
            else if(key === "Escape"){
                trashContent()
            }
            else if( key === "Backspace"){
                deleteContent();
            } else{
                input.value += key
            }
        }
     });
})
btnTrash.addEventListener('click', () =>  {
    trashContent();
});
btnDelete.addEventListener('click', () =>  {
    deleteContent();
});
btnEqual.addEventListener('click', () =>  {  
    equalContent();
});


function trashContent(){
    input.value = "";
    output.value = "";
};
function deleteContent(){
    let value = input.value.slice(0, -1);
    input.value = value;
    output.value = "";
}
function equalContent(){
    output.value = eval(input.value);
};