const fs = require('fs')
const { join } = require('path')

let filePath = './text.txt'
let typeFormat = 'utf8'

fs.readFile(filePath, typeFormat, (err, data) => {
    if(err) {
        console.log(err)
        return;
    }

    if(data.length < 0){
        console.log(`Insert a file that has text`)
        return
    }

    const splitWords = data.split(/\n\n/);
    const rendered = splitWords.map(word => {
        return word.trim();
    })
    let result = []

    const replaceDblSpace = rendered.join(' ')
    //console.log(data)
    //console.log(splitWords)
    let newFile = replaceDblSpace.replace(/\s{2}/g,'\n\n')
    let newnewFile = newFile.split('\n\n')
    let OMGRESULT = []

    //console.log(newnewFile)

    // let recentWhiteSpaceIndex;
    // let currentString = '';
    // let beginningIndexString = 0;

    newnewFile.forEach(string => {
        let recentWhiteSpaceIndex = 0;
        let currentString = '';
        let beginningIndexString = 0;

        for(let i = 0; i < string.length; i++){
            if(string[i] === ' '){
                recentWhiteSpaceIndex = i;
            }
            // checks to see at the 80 index
            if(Number.isInteger(i / 80) && i !== 0){
                // checks to see if index is a character
                if(string[i].match(/\S/)){
                    currentString = string.slice(beginningIndexString,recentWhiteSpaceIndex)
                    beginningIndexString = recentWhiteSpaceIndex + 1;
                    OMGRESULT.push((currentString + '\n').trim())
                }
                // checks to see if index is a space character
                else if(string[i].match(/\s/) ){
                    currentString = string.slice(beginningIndexString, i)
                    beginningIndexString = i;
                    OMGRESULT.push((currentString + '\n').trim())
                }
            }
            else if(i === string.length - 1){
                currentString = string.slice(beginningIndexString, i + 1)
                OMGRESULT.push((currentString).trim())
            }
        }
        OMGRESULT.push('\n')
    })

    //console.log(newnewFile[1])

    // for(let i = 0; i < newnewFile[1].length; i++){
    //         if(newnewFile[1][i] === ' '){
    //             recentWhiteSpaceIndex = i;
    //         }
    //         // checks to see at the 80 character
    //         if(Number.isInteger(i / 80) && i !== 0){
    //             // checks to see if i is a character
    //             if(newnewFile[1][i].match(/\S/g)){
    //                 currentString = newnewFile[1].slice(beginningIndexString,recentWhiteSpaceIndex)
    //                 beginningIndexString = recentWhiteSpaceIndex + 1;
    //                 OMGRESULT.push((currentString + '\n').trim())
    //             }
    //             // checks to see if i is a space
    //             else if(newnewFile[1][i].match(/\s/g) ){
    //                 currentString = newnewFile[1].slice(beginningIndexString, i)
    //                 beginningIndexString = i;
    //                 OMGRESULT.push((currentString + '\n').trim())
    //             }
                    
    //         }
    //         else if(i === newnewFile[1].length - 1){
    //             currentString = newnewFile[1].slice(beginningIndexString, i + 1)
    //             OMGRESULT.push((currentString + '\n').trim())
    //         }
    // }

    console.log((OMGRESULT.join('\n')).trim())
    // for(let i = 0; i < newnewFile.length; i++){

    //     for(let j = 0; newnewFile[i].length; j++){
    //         console.log(newnewFile[i])
    //     }
    // }
    // if(Number.isInteger(j / 80) && j !== 0){
    //     // checks to see if i is a character
    //     if(newnewFile[i][j].match(/\S/)){
    //         currentString = newnewFile[i][j].slice(beginningIndexString,recentWhiteSpaceIndex)
    //         beginningIndexString = recentWhiteSpaceIndex + 1;
    //         result.push(currentString + '\n')
    //     }
    //     // checks to see if i is a space
    //     else if(newnewFile[i][j].match(/\s/) ){
    //         currentString = newnewFile[i][j].slice(beginningIndexString, j)
    //         beginningIndexString = j + 1;
    //         result.push(currentString + '\n')
    //     }
    // }
    // else if(j === newnewFile[i].length - 1){
    //     currentString = newFile.slice(beginningIndexString, newnewFile[i].length - 1)
    //     result.push(currentString)
    // }
    // const finalArray = newFile.split(' ')
    
    // let iterationOfCharacters = 0;
    // let finalResult = [];
    // let i = 0;
    // for(i; i < finalArray.length; i++){
    //     if(finalResult[i].length === 0){
    //         finalResult.push('\n\n')
    //         break;
    //     }

    //     iterationOfCharacters += finalyArray[i].length

    //     if(iterationOfCharacters > 80){

    //     }

    //     finalResult.push(finalArray[i])
    // }


    // ATTEMPT 1
    // Iterating each letter and counting off by 80
    // .match(/\s){2}/)
    // let recentWhiteSpaceIndex = 0;
    // let currentString = '';
    // let beginningIndexString = 0;
    // let EIGHTY = 80;

    // for(i = 0; i < newFile.length; i++){
    //     if(newFile[i] === ' '){
    //         recentWhiteSpaceIndex = i;
    //         // if(newFile[i] + newFile[i+1] === '  ')  result.push('\r\n')
    //         //     result.push('\r\n'
    //         }
    
    //     // else if(newFile[i].match(/\n+/)){
    //     //     console.log('REEEE')
    //     // }
    //     // checks to see at the 80 character
    //     if(Number.isInteger(i / 80) && i !== 0){
    //         // checks to see if i is a character
    //         if(newFile[i].match(/\S/)){
    //             currentString = newFile.slice(beginningIndexString,recentWhiteSpaceIndex)
    //             beginningIndexString = recentWhiteSpaceIndex + 1;
    //             result.push(currentString + '\n')
    //         }
    //         // checks to see if i is a space
    //         else if(newFile[i].match(/\s/) ){
    //             currentString = newFile.slice(beginningIndexString, i)
    //             beginningIndexString = i + 1;
    //             result.push(currentString + '\n')
    //         }
    //     }
    //     else if(i === newFile.length - 1){
    //         currentString = newFile.slice(beginningIndexString, newFile.length - 1)
    //         result.push(currentString)
    //     }
    // }
    //console.log('WASHINGTON—Unable to rest their eyes on a colorful photograph or boldface'.length)
    //console.log(result.join(''))
    // const final = result.join('')

// fs.writeFile('final.txt', final, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// })











    // console.log('WASHINGTON—Unable to rest their eyes on a colorful photograph or boldface'.length)
    // console.log('WASHINGTON—Unable to rest their eyes on a colorful photograph or boldface heading that could be easily skimmed and forgotten about, Americans collectively'.length)
    // ATTEMPT 2
    // Splitting off into individual words into an array

    // my attempt to remove \n\n at the end of a word
    // let removeRepeatedReturns = splitWords.map(word => {
    //     if(word.match(/\n\n$/g)){
    //         word.replace('/\n/','#').trim();
    //         word.split('\n')
    //         //console.log(word)

    //     }

    //     return word
    // })

    // console.log(removeRepeatedReturns)






    // console.log(
    //     `WASHINGTON—Unable to rest their eyes on a colorful photograph or boldface\nheading that could be easily skimmed and forgotten about, Americans \n`
    // )
})

