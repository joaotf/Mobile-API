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
    async create(req,res){
        const clients = await Client.create(req.body)
        
        return res.json(clients)
    },
    async update(req,res){
        const clients = await Client.findByIdAndUpdate(req.params.id, req.body , { new : true })
        
        return res.status(200).json({message:"Usuário atualizado com sucesso!",clients })
    },
    async destroy(req,res){
        const clients = await Client.findByIdAndRemove(req.params.id)
        
        return res.status(200).json({message:"Usuário removido com sucesso!",clients})
    }

}
