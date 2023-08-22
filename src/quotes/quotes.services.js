//? Import controllers-quotes
const quotesControllers = require('./quotes.controllers')

//? Service para obtener todas las citas
const getAllQuotes = (req, res) => {
    const data = quotesControllers.findAllQuotes()
    if(data){
        res.status(200).json(data)
    }else{
        res.status(400).json({message: 'Invalid Data'})
    }
}

//? Service para obtener las citas por ID
const getQuoteById = (req, res) => {
    const id = req.params.id
    const data = quotesControllers.findQuoteById(id)

    if(data){
        res.status(200).json(data)
    }else{
        res.status(404).json({message: 'Invalid ID'})
    }
}

//? Service para crear citas
const postNewQuote = (req, res) => {
    const {author, quote, year} = req.body;
    if(author, quote, year){
        const data = quotesControllers.createNewQuote({author, quote, year})
        res.status(201).json(data)
    }else{
        res.status(400).json({message: 'Invalid Data'})
    }
}

//? Service para obtener citas random
const getRandomQuote = (req, res) => {
    const data = quotesControllers.findQuoteRandom()
    if(data){
        res.status(200).json(data)
    }else{
        res.status(400).json({message: 'Invalid Data'})
    }
}


module.exports = {
    getAllQuotes,
    getQuoteById,
    postNewQuote,
    getRandomQuote
}