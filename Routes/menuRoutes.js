const express = require('express');
const ManuItem = require('../models/MenuItem');
const router = express.Router()

router.get('/', async(req, res)=>{
    try {
        const data = await ManuItem.find();
        console.log("get Manu item fetch");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server Error'});
    }
})

router.post('/', async (req, res)=>{
    try {
        const data = req.body;
        const newManuItem = new ManuItem(data);
        const respones = await newManuItem.save();
        console.log('menu  data saved');
        res.status(200).json(respones);

    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server Error'});
    }
})


router.get('/:tasteType', async (req, res)=>{
    try {
     const tasteType = req.params.tasteType;
     if(tasteType== 'sweet' || tasteType=='spicy' || tasteType =='Sour'){
         const response = await ManuItem.find({taste:tasteType})
         res.status(200).json(response)
         
     }else{
        res.status(404).json({error:'Invalid work type'});
     }
    } catch (err) {
     console.log(err);
     res.status(404).json({error:'Invalid work type'}); 
    }
 })


module.exports = router;