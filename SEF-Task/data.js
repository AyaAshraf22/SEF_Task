const fs=require("fs")
const addData=(id,fname,lname,city,age)=>{
    const allData=loadInfo()
    const dublicatedData=allData.filter((obj)=>{
        return obj.id===id
    })
    if(dublicatedData.length===0)
    {
        allData.push({
            id,
            fname,
            lname,
            city,
            age
        })
        saveData(allData)
    }
}
const deleteData=(id)=>{
    const allData=loadInfo()
    const keepData=allData.filter((obj)=>{
        return obj.id !== id
    })
    saveData(keepData)
}
const readData=(id)=>{
    const allData=loadInfo()
    const neededData=allData.find((obj)=>{  
        return obj.id===id
    })
    if(neededData){
        console.log(neededData)
    }
    else{
        console.log("This Is Id Not Found")
    }
}
const listData=()=>{
    const allData=loadInfo()
    allData.forEach((obj) => {
        console.log(obj.fname,obj.city)
    });
}
const loadInfo=()=>{
   try{
   const dataJson= fs.readFileSync("data.json")
   return JSON.parse(dataJson)
   }
   catch{
    return[]
   }
}
const saveData=(allData)=>{
    const dataObj=JSON.stringify(allData)
    fs.writeFileSync("data.json",dataObj)
}
module.exports={
    addData,
    deleteData,
    readData,
    listData
}