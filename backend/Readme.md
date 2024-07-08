# Entertainment App

BlissBlitz-Backend is a comprehensive backend service designed to support a back-end application for browsing, managing, and tracking movies and TV shows. It includes functionalities for user authentication, managing bookmarks, and accessing detailed information about various entertainment media.

# Features

User Authentication: Secure registration and login processes with JWT for maintaining sessions.

Media Catalog: Access to a wide range of movies and TV shows, including search functionality and detailed media information.

Personal Bookmark: Users can create and manage a personal bookmarks for tracking their favorite movies and TV shows.

Trending Content: Endpoint to fetch trending content based on popularity or other criteria.
Prerequisites

#Prerequisites

Node.js (v14 or later)

npm (v6 or later)

MongoDB instance (local or remote)

TMDB API key for fetching media data

# Setup Instructions

Step 1: Clone the Repository

git clone https://github.com/vivekpathak4543/Entertainment-App-
cd backend

Step 2: Environment Configuration
.env and configure the environment variables:

MONGODB_URi: MongoDB connection string.
JWT_KEY: Secret key for JWT token generation and verification.

Step 3: Install Dependencies

npm install

Step 4: Running the Server Development Mode:

npm run dev (uses nodemon for hot reloads)
Production Mode: npm start

# Backend Technologies:-

Node js
Express js
jsonwebtoken
bcrypt
MongoDB
Mongoose
dotenv
cors
cookie-parser

# Backend Project Structure

Controllers: Contains logic for handling API requests.
DB:Contains the database connection configuration and setup.
Middleware: Includes middleware for authentication.
Models: Defines the schema for database collections.
Routes: API routes for handling requests to different endpoints.
Utils: Containers Helper Function to fetch media & to generate cookie.

## Project Structure

```
├─ src
│ ├─ controllers
│ │ └─ bookmark.controller.js
│ │ └─ media.controller.js
│ │ └─ mediaDetail.controller.js
│ │ └─ mediaImage.controller.js
│ │ └─ mediaSearch.controller.js
│ │ └─ user.controller.js
│ ├─ db
│ │ └─ index.js
│ ├─ middleware
│ │ └─ auth.middleware.js
│ ├─ models
│ │ └─ bookmark.model.js
│ │ └─ user.model.js
│ ├─ routes
│ │ └─ bookmark.route.js
│ │ └─ media.route.js
│ │ └─ user.route.js
├─ server.js
├─ .env
├─ .gitignore
├─ package-lock.json
├─ package.json
└─ Readme.md

# Additional Notes

Ensure MongoDB is running and accessible through the DATABASE_URL specified in the .env file.
All endpoints requiring authentication expect a JWT token to be provided in the Authorization header as a Bearer token.
```
