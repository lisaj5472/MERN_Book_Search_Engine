# Book Search Engine (MERN + GraphQL) – LJ

## Description

This full-stack **Book Search Engine** is a refactored MERN application enhanced with a **GraphQL API** using Apollo Server and Client. It allows users to search for books through the Google Books API, save favorites to their account, and manage saved books — all while using secure authentication.

The project was built as part of a coding challenge to convert a RESTful app into a GraphQL-powered one, improving both performance and developer experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lisaj5472/MERN_Book_Search_Engine.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd MERN_Book_Search_Engine
   ```

3. **Install all dependencies:**

   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

4. **Set up environment variables (if needed):**
   Create a `.env` file in `/server` for your MongoDB URI or use connection defaults.

5. **Run the development servers:**

   ```bash
   npm run dev
   ```

6. **Access the app locally:**
   Visit `http://localhost:3000` in your browser.

## Usage

- **Search for Books** using the Google Books API.
- **Sign Up / Log In** to create an account.
- **Save favorite books** to your personal profile.
- **View saved books** under the “Saved Books” page.
- **Remove saved books** from your list anytime.
- All data is stored securely in MongoDB Atlas.

## Technologies Used

- **Frontend:**

  - React
  - TypeScript
  - Vite
  - Apollo Client

- **Backend:**

  - Node.js
  - Express.js
  - Apollo Server
  - MongoDB Atlas
  - Mongoose

- **Authentication:**
  - JWT (JSON Web Token)
  - bcrypt

## Features

- Google Books API search.
- Save and manage favorite books.
- Secure login and signup with JWT.
- Apollo Client + Server for efficient GraphQL queries and mutations.
- Deployed on Render with MongoDB Atlas.

## Deployment

- **Live URL:** [https://mern-book-search-engine-20fb.onrender.com/](https://mern-book-search-engine-20fb.onrender.com/)
- **GitHub Repo:** [https://github.com/lisaj5472/MERN_Book_Search_Engine](https://github.com/lisaj5472/MERN_Book_Search_Engine)

## Contributing

This project was created as part of a coding bootcamp assignment. Contributions are welcome and appreciated, though no additional development is currently planned.

## License

This project is licensed under the **MIT License**.

## Acknowledgements

Thank you to the **University of Denver Coding Bootcamp** for providing the starter code and challenge framework.

## Contact

**GitHub:** [lisaj5472](https://github.com/lisaj5472)  
**Email:** lisaj5472@gmail.com
