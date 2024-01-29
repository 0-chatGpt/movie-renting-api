"use strict";

const Movies = [];
const Users = [];
let movieCount = 0;
let userCount = 0;

class Movie {
  constructor(
    title,
    release_year,
    genre,
    duration,
    director,
    rentalPrice,
    rating,
    rentId
  ) {
    this.title = title;
    this.release_year = release_year;
    this.genre = genre;
    this.duration = duration;
    this.director = director;
    this.rentalPrice = rentalPrice;
    this.rating = rating;
    this.rentId = rentId;
  }

  show_info() {
    console.log(`
        Title: ${this.title}
        Release Year:  ${this.release_year}
        Genre:  ${this.genre}
        Duration:  ${this.duration}
        Director:   ${this.director}
        Rent Id: ${this.rentId}
        `);
  }

  updateRentalPrice(price) {
    this.rentalPrice = price;
  }

  // generateId
}

class User {
  constructor(member_id, surname, firstname, address, phone_no, email) {
    this.id = member_id;
    this.surname = surname;
    this.firstname = firstname;
    this.address = address;
    this.phone_no = phone_no;
    this.email = email;
    this.movies = [];
  }

  get userInfo() {
    return this;
  }

  get allUserMovies() {
    return this.movies;
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  remove(movie) {
    this.movies.splice(
      this.movies.findIndex((item) => item === movie),
      1
    );
  }
}

const addNewMovie = function (
  title,
  release_year,
  genre,
  duration,
  director,
  rentalPrice,
  rating,
  rentId
) {
  let newMovie = new Movie(
    title,
    release_year,
    genre,
    duration,
    director,
    rentalPrice,
    rating,
    rentId
  );
  Movies.push(newMovie);
  movieCount++;
};

const addNewUser = function (
  member_id,
  surname,
  firstname,
  address,
  phone_no,
  email
) {
  let newUser = new User(
    member_id,
    surname,
    firstname,
    address,
    phone_no,
    email
  );
  Users.push(newUser);
  userCount++;
};

const getMovie = function (movieId) {
  Movies.forEach((movie) => {
    if (movie.rentId === movieId) {
      return movie.show_info();
    }
  });
};

const getUser = function (id) {
  let client;
  Users.forEach((user) => {
    if (user.id === id) {
      client = user.userInfo;
    }
  });
  return client;
};

const editUser = function (userId, property, newValue) {
  Users.forEach((user) => {
    if (user.id === userId && property != "id") {
      if (user.hasOwnProperty(property.toLowerCase())) {
        user[property.toLowerCase()] = newValue;
      } else {
        console.error("Property does not exist");
      }
    }
  });
};

const rentMovie = function (rentId, userId) {
  let movie;
  Movies.forEach((_movie) => {
    if (_movie.rentId === rentId) {
      movie = _movie.id;
    }

    Users.forEach((user) => {
      if (user.id === userId && movie) {
        user.addMovie(movie);
      } else {
        console.log("Check if user exists, or the movie is in store");
      }
    });
  });
};

const returnMovie = function (userId, movieId) {
  let movie;
  Movies.forEach((_movie) => {
    if (_movie.id === movieId) {
      movie = _movie;
    }
  });
  Users.forEach((user) => {
    if (user.id === userId) {
      user.remove(movie.id);
    }
  });
};

const editMovie = function (id, property, newValue) {
  Movies.forEach((movie) => {
    if (movie.id === id && property != "id") {
      if (movie.hasOwnProperty(property.toLowerCase())) {
        movie[property.toLowerCase()] = newValue;
      } else {
        console.error("Property does not exist");
      }
    }
  });
};
addNewMovie(
  "The Social Network",
  2010,
  "Biograghy",
  "2hr",
  "David Fincher",
  500,
  5,
  movieCount
);

addNewUser(
  userCount,
  "Ezesinachi",
  "Jim",
  "4131 Faber Drive",
  8164990885,
  "ezesinachijim@gmail.com"
);

// editUser(0, 'phOnE_no', 9009999);
// console.log(Users[0]);
// console.log(getUser(0))
// console.log(Users);
