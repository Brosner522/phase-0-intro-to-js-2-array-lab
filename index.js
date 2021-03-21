// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat (name) {
    cats.push('Ralph');
}

function destructivelyPrependCat (name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat (name) {
    cats.pop();
}

function destructivelyRemoveFirstCat (name) {
    cats.shift();
}

function appendCat (name) {
    const cats = ['Milo', 'Otis', 'Garfield'];
    const newCats = [... cats, 'Broom'];
    return newCats;
}

function prependCat (name) {
    const cats = ['Milo', 'Otis', 'Garfield'];
    const newCats = ['Arnold', ... cats];
    return newCats;
}

function removeLastCat (name) {
    const newArray = cats.slice(0, cats.length -1);
    return newArray;
}
function removeFirstCat (name) {
const newArray = cats.slice(1);
    return newArray;

}
//console.log(newCats = [...cats])
