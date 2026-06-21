# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

# PROJECT OVERVIEW

The Chrome Extension for Time Tracking and Productivity Analytics is a full-stack application designed to monitor the time users spend on different websites and generate productivity insights. The extension automatically tracks browsing activity, classifies websites as productive or unproductive, stores usage data in MongoDB, and displays analytics through a dedicated dashboard.

This project demonstrates the integration of browser extension development, backend APIs, database management, and analytics visualization in a single application.

# OBJECTIVES

- Track user browsing activity in real time.
- Measure time spent on different websites.
- Classify websites into productive and unproductive categories.
- Store activity data in a database.
- Generate productivity analytics.
- Provide a user-friendly dashboard for monitoring usage patterns.

# FEATURES

- Real-Time Website Tracking
- Automatic Time Measurement
- Productive Website Classification
- Unproductive Website Classification
- Chrome Extension Integration
- Backend API Support
- MongoDB Data Storage
- Productivity Analytics Dashboard
- Weekly Productivity Report Foundation
- Responsive User Interface

# TECHNOLOGIES USED

## Frontend
- HTML5
- CSS3
- JavaScript

## Browser Extension
- Chrome Extension API
- Manifest V3

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

# WORKFLOW

1. User installs the Chrome Extension.
2. The extension monitors active browser tabs.
3. Time spent on websites is recorded automatically.
4. Websites are categorized as productive or unproductive.
5. Activity data is sent to the backend server.
6. The backend stores records in MongoDB.
7. The dashboard fetches analytics data from the backend.
8. Productivity statistics are displayed to the user.

# PRODUCTIVITY CLASSIFICATION

### Productive Websites

Examples:

- GitHub
- LeetCode
- Stack Overflow
- W3Schools
- GeeksforGeeks

### Unproductive Websites

Examples:

- Facebook
- Instagram
- YouTube (Entertainment Usage)
- Twitter/X
- TikTok

# HOW TO RUN THE PROJECT

## Step 1: Start MongoDB

Make sure MongoDB is installed and running.

```bash
mongod
```

## Step 2: Start Backend Server

```bash
cd backend

npm install

npm start
```

Server will run on:

```text
http://localhost:5000
```

## Step 3: Load Chrome Extension

1. Open Google Chrome.
2. Navigate to:

```text
chrome://extensions
```

3. Enable Developer Mode.
4. Click "Load Unpacked".
5. Select the extension folder.

## Step 4: Open Analytics Dashboard

Open:

```text
dashboard/index.html
```

The dashboard will display productivity statistics.

# OUTPUT

The application provides:

- Time spent on websites
- Productive time statistics
- Unproductive time statistics
- Usage analytics dashboard
- Website activity records

# FUTURE ENHANCEMENTS

- Weekly Productivity Reports
- Monthly Analytics
- Pie Charts and Graphs
- User Authentication
- Cloud Database Integration
- AI-Based Productivity Suggestions
- Export Reports as PDF

# CONCLUSION

The Chrome Extension for Time Tracking and Productivity Analytics successfully tracks browsing activity, categorizes websites based on productivity, stores user data in MongoDB, and provides meaningful analytics through an interactive dashboard. The project demonstrates full-stack development concepts including browser extension development, backend API creation, database integration, and data visualization.
