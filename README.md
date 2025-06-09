
# MERN Resume Download Example

## Setup Instructions

### MongoDB Setup
1. Make sure MongoDB is installed and running locally.
2. Open MongoDB Compass and connect to your local MongoDB server.
3. Create a database named `portfolio`.
4. Create a collection named `resumes`.
5. Import the `resume.json` file (provided) into the `resumes` collection.

### Backend Setup
1. Navigate to the `backend` folder in terminal/command prompt.
2. Run `npm install` to install dependencies.
3. Run `node server.js` to start the backend server on port 5000.

### Frontend Setup
1. Navigate to the `frontend` folder in terminal/command prompt.
2. Run `npm install` to install dependencies.
3. Run `npm start` to launch the React app on port 3000.

### Usage
- Open your browser at http://localhost:3000.
- Click the "Download Resume PDF" button to download the PDF stored in MongoDB.

---

### resume.json

This JSON file contains a sample base64 encoded PDF file. Import it in MongoDB Compass as explained above.
