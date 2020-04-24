# REMEDY CLOTHING

## ABOUT

An e-commerce project built according to the course [Complete React Developer in 2020 (w / Redux, Hooks, GraphQL)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/) by Andrei Neagoie and Yihua Zhang.

Live preview [here.](https://remedy-clth.herokuapp.com/) (Be patient - the site may load quite slowly)

## Requirements

- [Yarn](https://yarnpkg.com/)\* installed.
- Free [Firebase](https://firebase.google.com) account
- Free [Stripe](https://stripe.com/) account

\*Because of some known issues of Poetic package with NPM (Poetic is used for linter setup), Yarn is required for installation and running the app.

### Installation

Using terminal clone this repository and run npm install.

```
git clone https://github.com/m-zaremba/remedy-clothing.git
cd remedy-clothing
yarn install
```

## Configuring firebase

Configure your own firebase database (you can follow the instructions in [this](https://css-tricks.com/intro-firebase-react/) tutorial - sections from #Creating our Firebase Database) and paste your values into /src/firebase/firebase.utils.js file.

## Configuring Stripe

1. Obtain publishable key from your [Dashboard](https://dashboard.stripe.com/account/apikeys)
2. Create '.env' file in the root folder of the project
3. Paste into your '.env' file: REACT_APP_STRIPE_PUBLISHABLE_KEY='[Your publishable api key here]'

### Starting the app

After installation and initial setup start the app with:

```
yarn start
```

## Technologies used

As of 19th of April 2020:

```
technologies: {
  ...previouslyUsedTechnologies,
  Redux-Saga
}
```

As of 6th of April 2020:

- React
- React Router
- Redux
- Reselect
- Firebase (for user authentication)
- Stripe (front-end part)
- SASS