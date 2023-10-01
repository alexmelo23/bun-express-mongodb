export default {
    APP: process.env.APP || "development",
    PORT: process.env.PORT || 8000,
    // db config
    DB_HOST: process.env.DB_HOST || "mongodb://localhost:27017/demoDB",
  
  };