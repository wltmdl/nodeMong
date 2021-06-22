import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    title:{type:String, require:true },
    createAt: {type:Date, default:Date.now},
    description: String
});

const imageModel = mongoose.model("Image",imageSchema);

export default imageModel;