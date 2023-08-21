# Google Drive Clone

![Google Drive Clone](https://github.com/shivendra8004/GoogleDriveClone/blob/64f4bfeb71e716594199781eeedcbd46e558e5ca/src/media/gdriveIcon.png)

Google Drive Clone is a web application built using React and Firebase that mimics the functionality of Google Drive. Users can upload, view, and delete files, as well as access their profile details and log out. The application is deployed and can be accessed [here](https://googledrive-eta.vercel.app/).

## Features

-   **File Upload:** Users can add single or multiple files at a time to their virtual drive.
-   **File Listing:** Uploaded files are fetched and displayed using `useEffect` to update the UI.
-   **File View:** Users can view uploaded files directly in the browser.
-   **File Deletion:** Users have the ability to delete unwanted files.
-   **User Profile:** Clicking on the user profile displays user details.
-   **Logout:** Users can securely log out of the application.

## Deployment

The Google Drive Clone application is deployed using Vercel and can be accessed at [https://googledrive-eta.vercel.app/](https://googledrive-eta.vercel.app/).

## Technologies Used

-   React: A JavaScript library for building user interfaces.
-   Firebase: A cloud-based platform for building web and mobile applications.
-   Vercel: A platform for deploying web applications.
-   CSS: Used for styling the user interface.
-   [react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks): A library for integrating Firebase with React hooks.

## Usage

1. Visit [https://googledrive-eta.vercel.app/](https://googledrive-eta.vercel.app/) in your web browser.
2. Sign up or log in to your account.
3. Use the "Upload" button to add files to your virtual drive.
4. The uploaded files will be listed on the main page.
5. Click on a file to view its contents.
6. To delete a file, click on the "Delete" button next to the file.
7. Click on your user profile to see your details.
8. To log out, click on the "Logout" button.

## Local Development

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/shivendra8004/GoogleDriveClone.git`

2. Navigate to the project directory: `cd GoogleDriveClone`

3. Install dependencies: `npm install`

4. Create a Firebase project and set up authentication and storage.

5. Create a `.env` file in the project root and add your Firebase configuration:
   ###Sample `.env` file is
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id

6. Start the development server: `npm start`

7. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions are welcome! If you find any issues or want to improve the application, please submit a pull request.

## License

This project is licensed under the [MIT License](https://github.com/shivendra8004/GoogleDriveClone/blob/main/LICENSE).

---

Feel free to explore the code and use the Google Drive Clone application for managing your files in a user-friendly way. If you have any questions or feedback, please don't hesitate to get in touch. Happy coding! 🚀
