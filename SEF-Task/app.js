const fs=require("fs")
const data=require("./data")
const yargs=require("yargs")
yargs.command({
    command:"add",
    describe:"add item",
    builder:{
        fname:{
            describe:"first name",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"last name",
            demandOption:true,
            type:"string" 
        }
    },
    handler:(x)=>{
       data.addData(x.id,x.fname,x.lname,x.city,x.age)   
    }
})
yargs.command({
    command:"delete",
    describe:"delete item",
    builder:{
        id:{
            describe:"delete by id",
            demandOption:true,
            type:"number"
        } 
    },
    handler:(x)=>{
      data.deleteData(x.id)  
    }
})
yargs.command({
    command:"read",
    describe:"read item",
    builder:{
        id:{
            describe:"read by item",
            demandOption:true,
            type:"number"
        }
     
    },
    handler:(x)=>{
       data.readData(x.id) 
    }
})
yargs.command({
    command:"list",
    describe:"list of item",
    handler:()=>{
       data.listData() 
    }
})

yargs.parse()