# API Design for Entertainment App

# Overview

This document outlines the API design for the entertainment app. The app uses the TMDB API to fetch media content and includes features for user management, bookmarks, and media content browsing.

# Base URL

All API endpoints are prefixed with /api.

# Authentication

JWT Token: The app uses JSON Web Tokens (JWT) for user authentication.
Middleware: The isAuthenticated middleware is used to protect routes that require authentication.

# User Routes

POST /user/register: Register a new user (No Authentication required)
POST /user/login: Login a user (No Authentication required)
GET /user/logout: Logout a user (Authentication required)
GET /user/profile: Get logged-in user profile (Authentication required)
GET /user/: Get user by ID (Authentication required)

# Bookmark Routes

GET /media/bookmark/check/: Check if a media is bookmarked (Authentication required)
POST /media/bookmark/add: Add a media to bookmarks (Authentication required)
DELETE /media/bookmark/delete/: Remove a media from bookmarks (Authentication required)
GET /media/bookmark/get: Get all bookmarked media for user (Authentication required)
GET /media/bookmark/search/: Search bookmarked media by title (Authentication required)

# Media Routes

GET /media/trending/: Get trending media (No Authentication required)
GET /media/movie/: Get movies (No Authentication required)
GET /media/tv/: Get TV shows (No Authentication required)
GET /media/movie/detail/: Get movie details by ID (No Authentication required)
GET /media/tv/detail/: Get TV show details by ID (No Authentication required)
GET /media/movie/image/: Get movie image by ID (No Authentication required)
GET /media/tv/image/: Get TV show image by ID (No Authentication required)
GET /media/movie/search/: Search for movies by title (No Authentication required)
GET /media/tv/search/: Search for TV shows by title (No Authentication required)
GET /media/all/search/: Search for all media types by title (No Authentication required)
