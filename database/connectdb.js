import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URL);
    console.log("😎 db conectada 😎");
} catch (error) {
    console.log("😒😒" + error);
}
