const productModel = require("../models/productModel")

module.exports={
    getAll: async function(req,res,next){
        try {
            const products = await productModel.find()
            res.status(200).json(products)
        } catch (err) {
            console.log(err)
        }
    },

    getById: async function(req,res,next){
        try {
            const product = await productModel.findById(req.params.id)
            res.status(200).json(product)
        } catch (err) {
            console.log(err)
        }
    },

    create: async function(req,res,next){
        try {
            const product = new productModel({
                name:req.body.name,
                price:req.body.price,
                description: req.body.description,
                quantity:req.body.quantity
            });

            const document = await product.save()
            res.status(201).json(document)
        } catch (err) {
            console.log(err)
        }
    },
    update: async function(req,res,next){
        try {
            const document = await productModel.updateOne({_id:req.params.id},req.body)
            
            res.status(200).json(document)
        } catch (err) {
            console.log(err)
        }
    },
    delete: async function(req,res,next){
        try {
            const document = await productModel.deleteOne({_id:req.params.id})
            res.status(200).json(document)
        } catch (err) {
            console.log(err)
        }
    }
}