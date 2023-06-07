![Banner](https://github.com/AlinaDorosh-dev/Food_delivery_App/blob/main/frontend/public/images/Screenshot.png)

# Food delivery App

## **Description**

This is a food delivery web-app designed as a personal project to enhance my practical skills in [GraphQL](https://graphql.org/) API development  with [Apollo Server](https://www.apollographql.com/) and [MongoDB](https://www.mongodb.com/).

The frontend of the app is developed using
[NextJS](https://nextjs.org/) version 13.4,
[Typescript](https://www.typescriptlang.org/),
[Tailwind CSS](https://tailwindcss.com/) for styling, [Framer motion](https://www.framer.com/motion/) for animations and Apollo Client for efficient data fetching using [GraphQL](https://graphql.org/)and [Formik](https://formik.org/) for streamlined form management.

### **Key Features:**

:large_orange_diamond: Landing Page with captivating parallax scrolling effect to engage users from the start.

:large_orange_diamond: *Menu:* Explore a wide variety of food items categorized for easy navigation. Users can filter dishes by category, add them to the cart, and access detailed information about each dish through statically generated pages.

:large_orange_diamond:*Ordering:* Seamless ordering experience where users provide their delivery details and confirm their orders.          

      

:large_orange_diamond:    *Authentication:* User-friendly authentication system that enables users to sign up and log in using their email and password.

:large_orange_diamond:   *User room:* Dedicated user section where users can conveniently view their order history, access personal information and delivery details, and easily log out from the app.

### **Advantages of Using this Stack:**

:rocket: GraphQL API Design: Efficient and flexible data fetching, allowing for precise queries and reducing unnecessary data transfer.

:rocket: Apollo Server: Simplifies the setup and management of the GraphQL server, providing features like caching, error handling, and real-time subscriptions.

:rocket: MongoDB: Allows scalable and flexible data storage, making it easy to adapt to changing requirements and handle large amounts of data.

:rocket: Next.js: Provides server-side rendering, static site generation, and other performance optimizations, resulting in faster page loading times and improved SEO.

:rocket: Typescript: By leveraging Typescript, the app benefits from static typing, enhanced code readability, and improved developer productivity through better code navigation and error detection.

:rocket: Tailwind CSS: Offers a utility-first approach to styling, enabling rapid and consistent UI development with pre-defined utility classes and easy customization.

:rocket: Framer Motion: Simplifies the implementation of smooth and engaging animations, enhancing the user experience and adding a polished look and feel to the app.

:rocket: Apollo Client: Provides a powerful and intuitive GraphQL client that efficiently manages data fetching, caching, and state management in the frontend, resulting in a seamless and responsive user interface.

:rocket: Formik: Simplifies form management by handling form state, validation, and submission logic. It streamlines the development process, improves form usability, and provides robust error handling.

By developing this food delivery app with this stack, I not only gained practical experience in GraphQL API development but also leveraged the advantages of each technology to deliver a high-performance, feature-rich, and user-friendly application for food enthusiasts.

## **Installation** :building_construction:	

### Backend :construction_worker_woman:

Inside folder `backend/` run following command:

```bash
npm install
```
create `.env` file with following environment variables: 
```bash
DB_URL=[your mongodb string (ex.mongodb://localhost:27017/FOODAPP or scrting connecting to your MongoDB Atlas cluster)]
SECRET=[your token secret (can be generated using node crypto module)]
```

:pizza: You can find mocked *menuitems* collection inside the folder `mocked_menu` in JSON format

run the following command and the Apollo server will be listening on the PORT `4000`:
```bash
npm run start
```

### Frontend :woman_artist:
Inside folder `frontend/` run following commands:

```bash
npm install
```
```bash
npm run build
```
```bash
npm run start
```
### Styles :art: and layout :pencil:

All styles and layout created with Tailwind CSS and animations with Framer motion

### Project structure :package:

```
📦backend
 ┣ 📂config
 ┃ ┗ 📜db.config.js
 ┣ 📂db
 ┃ ┣ 📜resolvers.js
 ┃ ┗ 📜schema.js
 ┣ 📂lib
 ┃ ┗ 📜jwt.js
 ┣ 📂models
 ┃ ┣ 📜Customer.js
 ┃ ┣ 📜MenuItem.js
 ┃ ┣ 📜Order.js
 ┃ ┣ 📜address.js
 ┃ ┗ 📜index.js
 ┣ 📜.env
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┗ 📜package.json

 📦frontend
 ┣ 📂app
 ┃ ┣ 📂UI
 ┃ ┃ ┣ 📜BackToMenu.tsx
 ┃ ┃ ┣ 📜FormSection.tsx
 ┃ ┃ ┣ 📜InfoAlert.tsx
 ┃ ┃ ┗ 📜Spinner.tsx
 ┃ ┣ 📂about
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜About.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂api
 ┃ ┣ 📂cart
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜CartItem.tsx
 ┃ ┃ ┃ ┣ 📜ConfirmationModal.tsx
 ┃ ┃ ┃ ┣ 📜Total.tsx
 ┃ ┃ ┃ ┗ 📜UsersCart.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜LandingPage.tsx
 ┃ ┃ ┣ 📜LandingSection.tsx
 ┃ ┃ ┣ 📜LandingSectionTwo.tsx
 ┃ ┃ ┣ 📜Navbar.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂contact
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜Contact.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜LoginForm.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂menu
 ┃ ┃ ┣ 📂[itemId]
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📜SingleItem.tsx
 ┃ ┃ ┃ ┣ 📜not-found.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜AddToCart.tsx
 ┃ ┃ ┃ ┣ 📜Menu.tsx
 ┃ ┃ ┃ ┣ 📜MenuItem.tsx
 ┃ ┃ ┃ ┗ 📜ToolTip.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂order
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜Confirmation.tsx
 ┃ ┃ ┃ ┣ 📜DeliveryForm.tsx
 ┃ ┃ ┃ ┣ 📜ErrorMessage.tsx
 ┃ ┃ ┃ ┣ 📜OrderConfirmationModal.tsx
 ┃ ┃ ┃ ┗ 📜SuccessMessage.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂register
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜SignUpForm.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂unautorized
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂user
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜HistoryItem.tsx
 ┃ ┃ ┃ ┣ 📜LogoutModal.tsx
 ┃ ┃ ┃ ┣ 📜OrderHistory.tsx
 ┃ ┃ ┃ ┣ 📜PersonalInfo.tsx
 ┃ ┃ ┃ ┣ 📜UserDrawer.tsx
 ┃ ┃ ┃ ┗ 📜UserRoom.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜error.tsx
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜loading.tsx
 ┃ ┣ 📜not-found.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂context
 ┃ ┣ 📜AuthContext.tsx
 ┃ ┣ 📜CartContext.tsx
 ┃ ┣ 📜MenuContext.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂graphql
 ┃ ┣ 📜mutations.ts
 ┃ ┗ 📜queries.ts
 ┣ 📂hooks
 ┃ ┣ 📜useAuth.ts
 ┃ ┣ 📜useCart.ts
 ┃ ┗ 📜useMenu.ts
 ┣ 📂lib
 ┃ ┣ 📜apollo-wrapper.tsx
 ┃ ┗ 📜client.ts
 ┣ 📂mocked_menu
 ┃ ┗ 📜menu.json
 ┣ 📂public
 ┃ ┗📂images
 ┣ 📜.eslintrc.json
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┣ 📜tailwind.config.js
 ┣ 📜tsconfig.json
 ┗ 📜types.d.ts

 ```