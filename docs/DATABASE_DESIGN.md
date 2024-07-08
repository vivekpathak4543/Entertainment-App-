Database Design for Entertainment App

# Overview

This document outlines the database design for the entertainment app. The app uses MongoDB as its database to store user information, bookmarks, and media metadata fetched from the TMDB API.

# Collections and Schemas

# User Collection

Stores user information.

Schema
name: String, required
email: String, required, unique
password: String, required
createdAt: Date, default: Date.now
updatedAt: Date, default: Date.now

Example Document:

{
"name": "John Doe",
"email": "john.doe@example.com",
"password": "hashedpassword",
"createdAt": "2023-07-01T00:00:00.000Z",
"updatedAt": "2023-07-01T00:00:00.000Z"
}

# Bookmark Collection

Stores bookmarks for each user.

Schema
user: ObjectId, reference to User collection, required
id: Number, required (TMDB ID of the media)
title: String, required
image: String, required
isAdult: Boolean, required
mediaType: String, enum: ["movie", "tv"], required
releaseDate: Date, required
createdAt: Date, default: Date.now
updatedAt: Date, default: Date.now

Example Document:
{
"user": "60c72b2f5f1b2c001c8e4e61",
"id": 12345,
"title": "Inception",
"image": "https://image.tmdb.org/t/p/w500/aiueo.jpg",
"isAdult": false,
"mediaType": "movie",
"releaseDate": "2010-07-16T00:00:00.000Z",
"createdAt": "2023-07-01T00:00:00.000Z",
"updatedAt": "2023-07-01T00:00:00.000Z"
}

# Media Collection

Stores media metadata fetched from the TMDB API.

Schema
id: Number, required, unique (TMDB ID of the media)
title: String, required
overview: String
image: String
isAdult: Boolean
mediaType: String, enum: ["movie", "tv"], required
releaseDate: Date
createdAt: Date, default: Date.now
updatedAt: Date, default: Date.now

{
"id": 12345,
"title": "Inception",
"overview": "A thief who steals corporate secrets...",
"image": "https://image.tmdb.org/t/p/w500/aiueo.jpg",
"isAdult": false,
"mediaType": "movie",
"releaseDate": "2010-07-16T00:00:00.000Z",
"createdAt": "2023-07-01T00:00:00.000Z",
"updatedAt": "2023-07-01T00:00:00.000Z"
}
