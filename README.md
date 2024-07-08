# Entertainment App

Welcome to the Entertainment App project! This repository hosts both the frontend and backend components of an application designed for browsing, managing, and tracking movies and TV shows.

## Frontend

### Overview

The BlissBlitz-frontend part of the Entertainment App interacts with the backend API to provide users with features like media browsing, personalized bookmarking, and more.

### Key Features

- **Dynamic Media Catalog:** Access an extensive library of movies and TV shows, dynamically loaded and presented with high-quality visuals and essential information.
- **Adaptive Search:** Utilize powerful search functionality to swiftly navigate through the vast media library, finding your favorite content with ease.
- **Responsive Layout:** Enjoy a seamless experience across various devices, thanks to the responsive design principles implemented with Tailwind CSS.
- **State Management:** Experience consistent and reliable interactions with the application's features, underpinned by the robust state management capabilities of context API.
- **Personalized Bookmark:** Curate your own bookmark, adding or removing media according to your preference, for a tailored browsing experience.
- **Intuitive User Interface:** Navigate through the application with an intuitive and elegant interface, designed for an optimal user experience.

### Installation

To set up the frontend project locally, follow these steps:

1. **Clone the repository:**

git clone https://github.com/vivekpathak4543/Entertainment-App-

2. **Navigate to the frontend directory:**
cd Entertainment-App-/frontend

3. **Install the dependencies:**
npm install

4. **Start the development server:**
npm start

### Contributing

Contributions are welcome! To contribute to the frontend:

1. Fork the project repository.
2. Create a new feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some YourFeature'`).
4. Push the branch to your fork (`git push origin feature/YourFeature`).
5. Open a pull request against the main project.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

## Backend

### Overview

BlissBlitz-Backend is a comprehensive backend service designed to support the Entertainment App. It includes functionalities for user authentication, managing bookmarks, accessing detailed media information, and more.

### Features

- **User Authentication:** Secure registration and login processes with JWT for maintaining sessions.
- **Media Catalog:** Access a wide range of movies and TV shows, including search functionality and detailed media information.
- **Personal Bookmark:** Users can create and manage personal bookmarks to track their favorite movies and TV shows.
- **Trending Content:** Endpoint to fetch trending content based on popularity or other criteria.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB instance (local or remote)
- TMDB API key for fetching media data

### Setup Instructions

1. **Clone the Repository:**
```
git clone https://github.com/vivekpathak4543/Entertainment-App-
cd backend
```

2. **Environment Configuration:**
- Create a `.env` file and configure the environment variables:
  ```
  MONGODB_URI=your_mongodb_connection_string
  JWT_KEY=your_secret_key_for_jwt
  ```

3. **Install Dependencies:**
```
npm install
````

4. **Running the Server:**
  ```
  npm run dev
  ```

### Backend Technologies

- Node.js
- Express.js
- jsonwebtoken
- bcrypt
- MongoDB
- Mongoose
- dotenv
- cors
- cookie-parser

### Additional Notes

- Ensure MongoDB is running and accessible through the `MONGODB_URI` specified in the `.env` file.
- All endpoints requiring authentication expect a JWT token provided in the Authorization h
