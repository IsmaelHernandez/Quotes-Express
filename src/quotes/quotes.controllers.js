//? BD ficticia
const quotesDB = []
let id = 1

// {
//     id: 1,
//     author: 'Ismael',
//     quote: 'Dudas',
//     year: '2023'
// }

// ?Controller obtener todas las citas
const findAllQuotes = () => {
    return quotesDB
}

//? Controller obtener cita mediante id
const findQuoteById = (id) => {
    const data = quotesDB.find((item) => item.id == id)
    return data
}

//? Controller crear un cita nueva
//? Obj como parametro
const createNewQuote = (obj) => {
    const newQuote = {
        id: 1++,
        author: obj.author,
        quote: obj.quote,
        year: obj.year
    }
    //? Se agrega el nuevo obj al array con el  metodo push de array
    quotesDB.push(newQuote)

    return newQuote
}

//? Controller obtener cita de manera aleatoria
const findQuoteRandom = (id) => {
    const quoteIndex = Math.floor(Math.random() * quotesDB.length)
    return quotesDB[quoteIndex]
}


module.exports = {
    findQuoteById,
    findAllQuotes,
    findQuoteRandom,
    createNewQuote
}