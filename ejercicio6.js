const esPalindromo = (str) => {
    var re = /[\W_]/g;
    let myStr = str.toLowerCase().replace(re, '')
    let newStr = ''
    for(let i=myStr.length-1; i>=0; i--) {
        newStr += myStr[i]
    }

    console.log(myStr)

    if(myStr === newStr) {
        console.log('Es palindromo')
    }else{
        console.log('No es palindromo')
    }
}

let txt = 'ISaac no ronca asi'

esPalindromo(txt)