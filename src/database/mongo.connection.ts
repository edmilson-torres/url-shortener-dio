import mongoose from 'mongoose';

class MongoConnection {
  public async connect(): Promise<void> {
    try {
      await mongoose.connect(process.env.MONGO_URI, {});
      console.log('Database connected');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  }
}

export default MongoConnection;
