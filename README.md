# Restoran Website Backend Development

## Project Overview
The "Restoran" project aims to strengthen the presence of the "Restoran" chain in the restaurant market by creating a comprehensive website. This website will enhance the marketing strategy of the restaurants across the country by allowing customers to view meals, reserve tables, and access essential information to encourage visits.

## Features
- **Easy to Find:** Improve the restaurant chain's online visibility.
- **Reservation System:** Provide an online table reservation system.
- **Brand Values and Cuisine:** Showcase the values and cuisine of the restaurant chain.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MySQL**: Relational database management system.
- **Prisma**: ORM (Object-Relational Mapping) tool.
- **EJS**: Template engine for rendering dynamic content.
- **Nodemailer**: Module for sending emails.
- **Email Marketing Service**: Integration with services like Mailchimp or SendGrid.
- **express-validator**: Middleware for validating and sanitizing request data.

## Project Setup

### Prerequisites
- Node.js (v12.x or higher)
- MySQL (v5.7 or higher)

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/restoran-backend.git
    cd restoran-backend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up the database:**
    - Create a MySQL database.
    - Configure the database connection in the `.env` file (copy from `.env.example`).

    ```sh
    cp .env.example .env
    ```

4. **Run database migrations:**
    ```sh
    npx prisma migrate dev
    ```

5. **Start the server:**
    ```sh
    npm start
    ```

## API Endpoints

## Dynamic Sections
- **Meals**: Dynamically render meals on the frontend using EJS.
- **Teams**: Dynamically render team members on the frontend using EJS.
- **Restaurant Info**: Dynamically render restaurant information on the frontend using EJS.

## Email Functionality
- Set up using Nodemailer.
- Integrated with Mailchimp/SendGrid for email marketing.
- Sends thank you email to new newsletter subscribers.

## Logging
- Middleware to log incoming requests.
- Logs saved to a text file using fs promises API.

## Data Validation
- **express-validator**: Used for validating and sanitizing request data.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or additions.

## License
This project is licensed under the MIT License.

## Contact
For any questions or inquiries, please contact (aboulouafareda@gmail.com).
