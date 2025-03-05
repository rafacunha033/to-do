import mongoose from 'mongoose';
import 'dotenv/config';

const connect = async () => {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.MONGODB_URL!)
    } catch(err) {
        console.log(err)
    }
}

export default connect