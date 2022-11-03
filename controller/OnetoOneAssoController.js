const Service=require("../services")

module.exports={
    getUser: async ()=>{
        let users= await Service.Assocition.getUser()
        return users;
    },
    getUserbelongsto: async ()=>{
        let users= await Service.Assocition.getUserbelongsto()
        return users;
    },
    getUserhasmany: async ()=>{
        let users= await Service.Assocition.getUserhasmany()
        return users;
    }
}