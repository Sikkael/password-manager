import mongoose from "mongoose";

export async function connectToDb() {

    try{
          mongoose.connect();
    }
    catch(e) {
        
    }
    
}