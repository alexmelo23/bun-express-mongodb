import mongoose from 'mongoose';
import config from './config';

// Connecting to the database
export default (async () => {
    try {
      await mongoose.connect(
        config.DB_HOST,
        { useNewUrlParser: true }
      );
      // listen for requests
      console.log('The DB Conection is Ok');
    } catch (err) {
      console.log(`${err} Could not Connect to the Database. Exiting Now...`);
      process.exit();
    }
  })();