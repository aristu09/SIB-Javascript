import _, {map} from 'underscore';

const arrayOfWord = ['cucumber', 'tomatoes', 'avocado'];

const complicatedArray = ['cucumber', 44 , true];

/*
    Buatlah sebuah fungsi dengan nama makeAllCaps yang menerima sebuah parameter 
    yang adalah array dan me-return promise baru 
    yang membuat semua komponen array menjadi huruf kapital semua.
    Gunakan fungsi map untuk membuat fungsi makeAllCaps.
    Buat satu buah fungsi lagi dengan nama sortWords,
    yang menerima sebuah parameter dalam bentuk array 
    yang akan me-return promise baru
    yang mensortir array tersebut.
*/

function makeAllCaps (arrayOfWord) {
    return new Promise((resolve, reject) => {

        let newWords = arrayOfWord.map(f => {
            return f.toUpperCase();
        });

        if(newWords)
            resolve(newWords)
        else
            reject('error')
    })
}

function sortWord (arrayOfWord) {
    return new Promise((resolve, reject) => {
        let newWords = arrayOfWord.sort((a, b) => a.localCompare(b))
        if(newWords)
            resolve(newWords)
        else 
            reject("error")
    })
}

async function callCaps(){
    
    let resultCaps = await makeAllCaps(arrayOfWord)
    console.log("caps lock : " + resultCaps)

    let resultSort = await sortWord (resultCaps)
    console.log ("caps lock with sort words : " + resultSort);
}