# Codelitt Challenge


Welcome to my project created for the Codelitt challenge! This project aims to simplify the initial structure and setup when starting a new React project using `create-react-app`. The approach here is to provide clear and modular code organization, making maintenance and ongoing development straightforward.


## Run Locally

1. **Install Node.js:**

   Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

2. **Install Yarn (if not already installed):**

   If you don't have Yarn installed, you can install it using the following command:

   ```bash
   npm install -g yarn

3. **Install Dependencies:**

   ```bash
   yarn install

4. **Start project:**

   ```bash
   yarn start

  Open http://localhost:3000 in your browser to view the application.

## Project Structure
    /src
      /assets
        - *Directory for storing project assets*
      /components
        - *Directory for React components*
      /constants
        - *Empty directory for storing constant values*
      /context
        - *Directory to store application contexts for state management*
      /hooks
        - *Directory of hooks that in this case were used for context selectors*
      /pages
        - *Directory of pages, but in this case it is just to export the component of our single home page*
      /routes 
        - *Empty directory for structural purposes only, not used in this project*
      /services
        - *Empty directory for structural purposes only, not used in this project*
      /utils
        - *Directory for global things*
      /styles
        - *Global style configuration directory*
      /validations
        - *Directory to centralize validations such as the form*
      App.tsx
        - *File to import Home and global settings/contexts*
      index.tsx

## Features

Add a New Reminder:
  - Reminders include user-entered day and time information.
  - When entering the mode to add a new reminder, the input date will appear in the form header.


Display Reminders on Calendar:
  - Indicators are displayed in the calendar view indicating an event in the day.
  - Reminders appear in the correct time order in the reminder list.


Color Selection for Reminders:
  - Users can select a color when creating a reminder.
  - The selected color is displayed appropriately in the List of reminders.


Overflow Handling:
  - Proper handling of overflow when multiple reminders appear on the same date.
  - Ensures a clear and user-friendly display even with multiple reminders.


Edit Reminders:
  - Users can edit existing reminders.
  - Editing capabilities include changing text, day, time, and color of the reminder.
  - By editing the reminder date, it will be removed from the previous date and added to the new date.


Delete Reminders:
  - Users can delete reminders they no longer need.
  - Deletion functionality ensures the calendar is updated accordingly.


Expand Calendar to Support More Months:

  - The calendar is expandable to support months beyond the current month.
  - Users can navigate through different months to view and manage reminders.

## Applied behaviors

  - The default calendar date is the current day.
  - When the user clicks to add a reminder, it already has the default date selected in the calendar.
  - When the user modifies the date when creating the reminder and submits the form, if the current selected date does not have any reminder, it changes the selected date to the one provided in the form. If the current date already has a reminder, it just adds it and indicates it in the calendar, but continues to show the list of the previously selected day.
  - By clicking on the • symbol in the calendar navigation, you will select the current date.

## Could be better

  - Confirmation modal for Delete the reminder.
  - Show a number on the calendar with the number of events on the day, not just an indicator.
  - Persist with localstorage.
  - Feedbacks with Toast.
  - Seek solutions for responsiveness.
  
## Authors

[@igorambonatti](https://www.linkedin.com/in/igorambonatti/)

