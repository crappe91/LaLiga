const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partidosSchema = new Schema({
    local_name: String,
    visit_name: String,
    stadium_name: String,
    stadium_capacity: String,
    match_date: String,
    match_time: String,
    local_goals: String,
    visit_goals: String,
    local_img: String,
    visit_img: String
})

// //Creamos el modelo // DESCOMENTAR LUEGO
const Partidos = mongoose.model('futbol', partidosSchema, "partidos");


module.exports = Partidos;