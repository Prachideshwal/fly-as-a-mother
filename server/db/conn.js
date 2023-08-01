const mongoose=require('mongoose');

const db=process.env.MONGO_URI;

mongoose.connect("mongodb+srv://prachideshwal15:115599@cluster0.pvuywmc.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("DB Connected!")).catch((err)=>console.log(err));