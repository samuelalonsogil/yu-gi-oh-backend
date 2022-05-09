import mongoose from "mongoose";

const {Schema} = mongoose;

let cardSchema = new Schema(
    {
        _id: {type: Schema.ObjectId, auto: true},
        name: String,
        type: String,
        desc: String,
        atk: Number,
        def: Number,
        level: Number,
        race: String,
        attribute: String,
        archetype: String,
        card_sets: [],
        image: String,
        card_prices: []
    }
)
const Card = mongoose.model('Card', cardSchema);
export {Card};