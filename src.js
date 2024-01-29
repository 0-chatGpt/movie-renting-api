"use strict";

const Movies = [];
const Users = [];

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

  get userInfo(){
    return this;
  }

  get allUserMovies(){
    return this.movies;
  }
}
