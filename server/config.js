module.exports = {
  port: process.env.PORT || 8080,
  db: {
    prod: process.env.DATABASE_URL || "mongodb+srv://UserDB:To7gWlphCNf1sk4J@mongodbcb.xoor2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    test: 'mongodb+srv://UserDB:To7gWlphCNf1sk4J@mongodbcb.xoor2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
