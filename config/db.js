const mongoose = require("mongoose");

module.exports = connectDb = async () => {
  try {
    // Db connection using string defined in /config/.env
    await mongoose.connect(process.env.MONGODB_URI, {
      // Required for MongoDB to not yell at us
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected!`);
  } catch (error) {
    console.log(`Error: ${error}`);
    // Exit with a failure code
    process.exit(1);
  }
};
