#! #! /usr/bin/env node

console.log(
    'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0"'
  );

  const userArgs = process.argv.slice(2);

  const Book = require("./models/book");
  const Author = require("./models/author");
  const Genre = require("./models/genre");
  const BookInstance = require("./models/bookinstance");

  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);
  
  const mongoDB = userArgs[0];
  
  main().catch((err) => console.log(err));

  async function main() {
    await mongoose.connect(mongoDB);

  }
  
  
  async function genreCreate(index, name) {
    genre = new Genre({name: name})
    await genre.save()
  }

  async function createGenre({}) {
    Promise.all([
        genreCreate("fantasy"),
        genreCreate("fantasy"),
    ])
  }

