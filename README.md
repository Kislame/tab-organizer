# Tab Organizer Chrome Extension

#### Video Demo: [https://youtu.be/mAR_ZMTjHIg]

## Project Overview

The Tab Organizer Chrome Extension is a productivity tool designed to help users manage their browser tabs more effectively. With the increasing complexity of web browsing, managing multiple tabs can become cumbersome. This extension provides several features to streamline tab management, helping users organize, save, and restore their browsing sessions with ease.

## Features

1. **Save Tab Groups**:

   - This feature allows users to save all open tabs into a named group. By providing a group name, users can categorize their tabs for future use. This is especially useful for users who work on multiple projects or research topics and want to keep their tabs organized.

2. **Load Saved Tab Groups**:

   - Users can easily restore a previously saved group of tabs by entering the group name and clicking 'Load Tab Group'. This feature helps users quickly get back to their work without having to manually reopen each tab.

3. **Group Tabs by Domain**:

   - Automatically groups all open tabs based on their domain. This feature organizes tabs from the same website into a single group, making it easier for users to manage and navigate through their tabs.

4. **List All Open Tabs**:

   - Displays a list of all open tabs in the popup window. This feature provides an overview of all active tabs, allowing users to quickly identify and switch between them.

5. **Show Saved Groups**:
   - Allows users to view a list of all saved tab groups. This feature provides a quick way to access and manage saved tab collections.

## Files and Their Functions

1. **`popup.html`**:

   - This file defines the structure and layout of the extension’s popup window. It includes input fields, buttons for various actions, and a section to display output. The HTML layout provides a user-friendly interface for interacting with the extension’s features.

2. **`popup.js`**:

   - Contains the JavaScript code that powers the functionality of the popup window. This file handles user interactions, such as saving and loading tab groups, grouping tabs by domain, listing all open tabs, and displaying saved groups. It communicates with Chrome’s extension APIs to perform these tasks.

3. **`manifest.json`**:

   - This configuration file is essential for any Chrome extension. It defines the extension’s metadata, including its name, version, description, permissions, and the scripts it uses. It also specifies the background scripts and the popup HTML file.

4. **`background.js`**:
   - Handles background operations and persistent data management. This file interacts with Chrome’s storage API to save and retrieve tab group information. It ensures that data persists across browser sessions and provides the necessary functionality for saving and loading tab groups.

## Design Choices

When designing this extension, several considerations were made:

1. **User Interface**:

   - The interface is kept simple and intuitive to ensure ease of use. The buttons are clearly labeled, and the features are straightforward to access. This design choice helps users quickly learn and utilize the extension without a steep learning curve.

2. **Functionality vs. Complexity**:

   - Features were selected based on their practical utility and ease of implementation. Complex features were avoided to maintain a focus on core functionalities that address common tab management needs. This approach ensures that the extension remains lightweight and efficient.

3. **Storage and Data Management**:

   - Data is stored using Chrome’s local storage API to ensure that saved tab groups persist across sessions. This choice was made to provide a seamless experience for users who need to save and restore their browsing sessions without relying on external services.

4. **Grouping by Domain**:
   - The decision to group tabs by domain was made to simplify tab management and improve organization. This feature helps users keep similar tabs together, reducing clutter and making navigation more efficient.

## Installation and Usage

1. **Installation**:

   - To install the extension, go to the Chrome Extensions page (`chrome://extensions/`), enable "Developer mode," and click "Load unpacked." Select the folder containing the extension files, and the extension will be added to your browser.

2. **Usage**:
   - Open the extension by clicking on its icon in the browser toolbar. Use the provided buttons to save tab groups, load saved groups, group tabs by domain, list all open tabs, and view saved groups.

## Future Enhancements

Future updates may include features such as:

- **Deleting Saved Groups**: Allow users to remove saved tab groups.
- **Editing Group Names**: Provide functionality to rename saved tab groups.
- **Improved UI/UX**: Enhance the interface for better usability and aesthetics.

## Conclusion

The Tab Organizer Chrome Extension is designed to enhance productivity by providing efficient tab management tools. With features to save, load, and organize tabs, users can streamline their browsing experience and focus on their work. Thank you for checking out this project, and feel free to explore the source code and provide feedback!

For more information, visit my GitHub repository or connect with me on edX.

Happy browsing!
