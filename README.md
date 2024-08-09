# Pest Scheduler
This project runs on Rails v7.1.3.4 and ruby v3.3.4.

## Setup

1. **Cloning the Repo**:
   ```bash
   git clone https://github.com/Sonof9aija/PestScheduler
   cd PestScheduler
   ```
2. **Setup and Rake Tasks**:
   First, install dependencies:
   ```bash
   bundle install
   ```

   Second, setup the database by running the following:
   ```bash
   rails db:create
   rails db:migrate
   ```

   Finally, run the rake task:
   ```bash
   rake data:all
   ```

#Running the Website

If you have done all the above tasks without issue then you should be ready to run the website. Here's how.

1. **Running the Server**
   To run the server run the following from inside the **PestScheduler** folder:
   ```bash
   rail s
   ```

2. **Opening the Website**
   Once the server is running go to a browser and go the following link
   ```bash
   http://localhost:3000
   ```
   That should take you to the website and show you the schedule of Pest Control agents.

The above steps should help you utilize the Pest Scheduler RoR app.
