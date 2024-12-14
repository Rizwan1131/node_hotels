const express = require('express')
const router = express.Router();
const Person = require('../models/Person');


router.get('/',async (req,res)=>{
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data)

    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server Error'});
    }
} )

router.post('/', async (req , res)=>{
   
    try {
        const data = req.body
        const newPerson = new Person(data);
        const respons = await newPerson.save();
        console.log('data saved');
        res.status(200).json(respons)

    } 
    catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server Error'});
    }
   
})

router.get('/:workType', async (req, res)=>{
    try {
     const workType =req.params.workType;
     if(workType== 'chef' || workType=='manager' || workType =='waiter'){
         const response = await Person.find({work:workType})
         res.status(200).json(response)
         
     }else{
        res.status(404).json({error:'Invalid work type'});
     }
    } catch (err) {
     console.log(err);
     res.status(404).json({error:'Invalid work type'}); 
    }
 })

// updation dacument
router.put('/:id', async (req,res)=>{
    try {
        const personId = req.params.id;
        const upadatedPersonData = req.body;
        const respones = await Person.findById(personId, upadatedPersonData, {
            new:true,
            runValidators:true,
        });

        if(!respones){
            return res.status(404).json({error:"person not found"})
        }
        console.log('person data updated')
        res.status(200).json(respones)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal server Error'})
    }
})


// deleting

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if (!response) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log('Person data deleted');
        res.status(200).json({ message: 'Person data deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});


 module.exports = router;