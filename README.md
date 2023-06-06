![Banner](https://github.com/AlinaDorosh-dev/Food_delivery_App/blob/main/frontend/public/images/Screenshot.png)

# Food delivery App

## **Description**

This is a food delivery web-app. Built as a personal project to improve my practical skills in [GraphQL](https://graphql.org/) API design with [Apollo Server](https://www.apollographql.com/) and [MongoDB](https://www.mongodb.com/).

Frontend development with
[NextJS](https://nextjs.org/) version 13.4,
[Typescript](https://www.typescriptlang.org/),
[Tailwind CSS](https://tailwindcss.com/) for styling, [Framer motion](https://www.framer.com/motion/) for animations and Apollo Client for data fetching with [GraphQL](https://graphql.org/).

### Features:

:large_orange_diamond: Landing page with parralax scrolling effect

:large_orange_diamond: *Menu:* Present menu with categorized food items and
            prices. Allow users to filter dishes by category, add them to the cart, check extended information about the dishes on statically generated pages.

:large_orange_diamond:*Ordering:* Requieres from  user to provide their delivery details and confirm the order          

      

:large_orange_diamond:    *Authentication:* Allow users to sign up and log in with email and
            password.  

:large_orange_diamond:   *User room:* Allow users to view their orders history, check their personal info and delivery details, as well as log out from the app              

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

You can find mocked menu collection inside the folder `mocked_menu` in JSON format

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