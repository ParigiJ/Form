** 🚀 Feedback Form**
- A feedback submission application built with Next.js, React, and MongoDB Atlas, utilizing Prisma as the ORM.

**✨ Features**
- Stores and updates feedback in MongoDB Atlas.
- Built using Next.js, React, and Fetch API.
- Uses Prisma for database interactions.
- Styled with Tailwind CSS.
- Validates that at least one hashtag is added before submission.
- Includes skeleton loaders for better user experience.

🛠 **Technologies Used**
- ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
- ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
- ![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)

**📌 Installation**
- Clone the repository
- Install dependencies 
  - npm install # or yarn install
- Set up the environment variables 
  - Create a .env file in the root directory and add your MongoDB connection string
- Run database migrations
  - npx prisma migrate dev --name init
- Start the development server
  - npm run dev # or yarn dev 

**🚀 Usage**
- Enter feedback in the form.
- Ensure at least one hashtag is included before submitting.
- Submitted feedback is stored in MongoDB Atlas.
- Skeleton loaders provide a smooth user experience.

🤝 Contributing
- Feel free to fork the repository and submit pull requests.

📜 License
- This project is open-source and available under the MIT License.
