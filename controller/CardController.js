import {Card} from "../model/CardModel.js";


/*insert element*/
async function insert(req, res){
    let card = new Card(req.body);
    try{
        let savedCard = await card.save();
        res.status(200).json( {action: 'save one', data: savedCard} );
    }catch (err){
        res.status(500).json( {action: 'save', message: 'error saving card' } );
    }
}

/*list all elements*/
async function getAll(req, res){
    try{
        let cards = await Card.find();
        res.status(200).json( {action: 'get all products', data: cards} );
    }catch (err){
        res.status(500).json( {action: 'get all products', message: 'error listing all'} );
    }
}

/*list element by id*/
async function getById(req, res){
    let cardId = req.params.id;

    try{
        let card = await Card.findById(cardId);
        res.status(200).json( {action: 'get one', data: card} );
    }catch (err){
        res.status(500).json( {action: 'get one', message: 'error obtaining element'} );
    }
}

/*delete element by id*/
async function remove(req, res){
    let cardId = req.params.id;
    try{
        let deletedCard = await Card.findByIdAndDelete(cardId);
        res.status(200).json( {action: 'remove one element', data: deletedCard} );
    }catch (err){
        res.status(500).json( {action: 'remove', message: 'error deleting element' } );
    }
}

/*edit element by id*/
async function update(req, res){
    let data = req.body;
    let cardId = req.params.id;
    try{
        let cardUpdated = await Card.findByIdAndUpdate(cardId, data);
        res.status(200).json( {action: 'update one', data: cardUpdated} );
    }catch (err){
        res.status(500).json( {action: 'update', message: 'error  updating element' } );
    }
}

export {getAll, insert, update, getById, remove};