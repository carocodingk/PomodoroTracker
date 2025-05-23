# Pomodoro timer and to-do list

Welcome to the Pomodoro timer and to-do list Web App. This application was built using Next.js for time management. It uses the Pomodoro technique, which was developed by Francesco Cirillo in the 1980's. It was designed to improve productivity by breaking work into manageable intervals, called *Pomodoros*, followed by short breaks. Tipically, a Pomodoro consists of 25 minutes of work and 5 minutes of rest. 

## Getting started

### Prerequisites

Ensure you have installed:
- Node.js
- npm or yarn (package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:carocodingk/PomodoroTracker.git
   cd time-management-app
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. Open your browser and go to `http://localhost:3000` to access the application.


## Use
- **Add Tasks**: On the bottom part of the app, enter the description of the task and the number of expected cycles that it would take to complete it (default is 1 cycle). Then click on the **+** button to add task to list. If the description is empty, it will show an error message.

- **Select a task**: Click on the task to work on. The selection will be displayed at the top of the app. This is the current task. 

- **Start timer**: Click on the *START* button to start the *Pomodoro* timers (Work time and break time).

- **Reset timer**: Click on the *RESET* button to reset the timers. The time elased dduring this cycle will not count towards the time taken by the task.  

- **Edit a Task**: Click on the *3 dots* button to edit a task's details.

- **Delete list of tasks**: Click on the *Trash Can* button to delete all tasks on the list. 

- The app has a preloaded list of tasks that the user can delete by using the *trash can* icon at the bottom.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes.
4. Push to your branch.
5. Open a pull request.