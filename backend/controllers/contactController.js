const req = require("express/lib/request"); // req
const res = require("express/lib/response"); // res
const asynchandler = require ('express-async-handler'); // async handler ıle a senkronu ımport ettık
const contactModel = require('../models/contactModel')

// get all orders
const get_contact = asynchandler(async (req, res) => {

    const orders = await contactModel.find();
    res.status(200).json(orders);

})

// create new sale(order)
const create_new_contact = asynchandler(async (req, res) => {

        
        if(!req.body.customerNameSurname && !req.body.customerPhonenumber && !req.body.customerQuestion && !req.body.customerMessage)
        {
            res.status(400)
            throw new Error("Lütfen mesaj göndermek için boş alan bırakmayınız")
        }
        else
        {
            
            const contact = await contactModel.create(
                {
                    customerNameSurname: req.body.customerNameSurname,
                    customerPhonenumber: req.body.customerPhonenumber,
                    customerQuestion: req.body.customerQuestion,
                    customerMessage: req.body.customerMessage
                })
               
                res.status(200).json(contact);
        }  
 
})


module.exports =
{
    get_contact,
    create_new_contact
}
