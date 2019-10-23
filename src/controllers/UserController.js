const mongoose = require('mongoose')


const User = mongoose.model('User')

module.exports = {
    async find_ALL(req,res){
        const users = await User.find();
        
        return res.json(users)
    },
    async find_ONE(req,res){
        const users = await User.findById(req.params.id)

        return res.json(users)
    },
    async create_USER(req,res){
        const users = await User.create(req.body)
        
        return res.json(users)
    },
    async update_USER(req,res){
        const users = await User.findByIdAndUpdate(req.params.id, req.body , { new : true })
        
        return res.json(users)
    },
    async destroy_USER(req,res){
        const users = await User.findByIdAndRemove(req.params.id)
        
        return res.status(200).send("Usuário removido com sucesso!")
    }

}
