let str = "aaa@bbb@ccc"
console.log(
    str.replace("@bbb@", "!bbb!")
);
let strTwo = "HELLOWORLD"
console.log(
    strTwo.slice(strTwo.search('H'), strTwo.search('H') + 1) +
    strTwo.slice(strTwo.search('ELLO'), strTwo.search('ELLO') + 4).toLowerCase() + (" ") + strTwo.slice(strTwo.search('W'), strTwo.search('D') + 5).toLowerCase()
);
let strThree = "Hello, it is HTML"
console.log(
    strThree.slice(strThree.search('Hello'), strThree.search('Hello') + 5) + strThree.slice(strThree.search(' it is'), strThree.search('it is') + 5) + " not JS"
);
let a = 'alex'
console.log(
    a[0].charAt(0).toUpperCase() + a.slice(1)
);
let num = Math.random()
console.log(
    Math.round(num)
)
let text = "Lex Luter has a big suit"
console.log(
    text.slice(text.search('a'), text.search('a') + 1).toUpperCase() + text.slice(text.search('Lex'), text.search('Lex') + 3))