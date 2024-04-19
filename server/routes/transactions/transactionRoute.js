const express = require("express");
const { createTransactionCtrl,getTransactionCtrl,getTransactionsCtrl,deleteTransactionCtrl,updateTransactionCtrl, } = require("../../controllers/transactions/transactionCtrl");
const transactionRoute = express.Router();

   
transactionRoute.post('/',async(req,res) =>{
    try {
        res.json({msg: "create transaction route"});
    } catch (error) {
        res.json(error);
    }
});


transactionRoute.get('/:id',async(req,res) =>{
    try {
        res.json({msg: "get transaction route"});
    } catch (error) {
        res.json(error);
    }
});

transactionRoute.get('/',async(req,res) =>{
    try {
        res.json({msg: "get transaction route"});
    } catch (error) {
        res.json(error);
    }
});
// GET/api/v1/users/profile/:id
transactionRoute.delete('/:id',async(req,res) =>{
    try {
        res.json({msg: "delete transaction route"});
    } catch (error) {
        res.json(error);
    }
});

// DELETE/api/v1/users/:id
transactionRoute.put("/:id",async(req,res) =>{
    try {
        res.json({msg: "update transaction route"});
    } catch (error) {
        res.json(error);
    }
});

// PUT/api/v1/users/:id
transactionRoute.put("/:id",async(req,res) =>{
    try {
        res.json({msg: "Update route"});
    } catch (error) {
        res.json(error);
    }
});

module.exports = transactionRoute;
