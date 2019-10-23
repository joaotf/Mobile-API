const mongoose = require('mongoose')

const Client = mongoose.model('Client')

module.exports = {
    async find_ALL(req,res){
        const clients = await Client.find();
        
        return res.json(clients)
    },
    async find_ONE(req,res){
        const clients = await Client.findById(req.params.id)

        return res.json(clients)
    },

    async register(req,res){
        const { name } = req.body;
        try{
            if(await Client.findOne({name}))
                return res.status(400).send({error:"Cliente já está cadastrado!"})            
            const client = await Client.create(req.body)
        }
        catch{
            return res.status(400).send({error:"Falha no registro!"});
        }
    },

    async update(req,res){
        const clients = await Client.findByIdAndUpdate(req.params.id, req.body , { new : true })
        
        return res.json(clients)
    },
    async destroy(req,res){
        const clients = await Client.findByIdAndRemove(req.params.id)
        
        return res.status(200)
    }

}
