import mongoose from "mongoose";

const connectDb = (url: string) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log("database connected"))
        .catch(e => console.log(e))
}

export default connectDb;