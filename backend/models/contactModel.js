const mongoose = require('mongoose')

const contact_schema = mongoose.Schema({

    customerNameSurname: {
        type: String, // veri tipini belirtiyoruz
        required:[true, 'Mesajınız gönderilemez. Adınızı ve soyadınızı yazmanız gerek'] // boş geçilemez anlamına gelir
    },
    
    customerPhonenumber: {
        type: String, // veri tipini belirtiyoruz
        required:[true, 'Mesajınız gönderilemez,telefon numaranızı yazmanız gerek'] // boş geçilemez anlamına gelir
    },
    
     customerQuestion: {
        type: String, // veri tipini belirtiyoruz
        required: false
    },
    
     customerMessage: {
        type: String, // veri tipini belirtiyoruz
        required: false 
    }
},
    {timestamps: true} // mongo db de otomatık olusmasını ıstıyorsak bunu eklemelıyız.
);

module.exports = mongoose.model('Contact', contact_schema)
