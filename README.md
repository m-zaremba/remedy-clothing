# REMEDY CLOTHING

## ABOUT

An e-commerce project built according to the course [Complete React Developer in 2020 (w / Redux, Hooks, GraphQL)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/) by Andrei Neagoie and Yihua Zhang.

Live preview [here.](https://remedy-clth.herokuapp.com/) (Be patient - first load might take a while)

## Requirements

- [Yarn](https://yarnpkg.com/)\* installed.
- Free [Firebase](https://firebase.google.com) account
- Free [Stripe](https://stripe.com/) account

\*Because of some known issues of Poetic package with NPM (Poetic is used for linter setup), Yarn is required for installation and running the app.

### Installation

1. Using terminal clone this repository.

```
git clone https://github.com/m-zaremba/remedy-clothing.git
```

2. Modify 'root' package.json with your node and npm versions e.g.:

```
"engines": {
    "node": "13.13.0",
    "npm": "6.14.4"
  }
```

3. From the terminal run yarn install:

```
cd remedy-clothing
yarn install
cd client
yarn install
```

## Configuring firebase

Configure your own firebase database (you can follow the instructions in [this](https://css-tricks.com/intro-firebase-react/) tutorial - sections from #Creating our Firebase Database) and paste your values into /src/firebase/firebase.utils.js file.

## Configuring Stripe

1. Obtain publishable and secret key from your [Dashboard](https://dashboard.stripe.com/account/apikeys)
2. Create '.env' file in the root folder of the project
3. Paste into your '.env' file:

STRIPE_SECRET_KEY=[Your secret api key here]

4. Create another '.env' file in the 'client' folder
5. Paste into your '.env' file:

REACT_APP_STRIPE_PUBLISHABLE_KEY=[Your publishable api key here]

### Starting the app

After installation and initial setup start the app with:

```
yarn dev
```

## Technologies used

As of 30th of August 2020 - Master Branch:

```
technologies: {
...previouslyUsedTechnologies,
- Enzyme
}

```

As of 25th of Jun 2020 - Master Branch:

```
technologies: {
...previouslyUsedTechnologies,
- PWA code update
}

```

As of 22nd of Jun 2020 - Master Branch:

```
technologies: {
...previouslyUsedTechnologies,
- React Lazy + Suspense
}

```

As of 21th of May 2020 - Redux Branch:

```

technologies: {
- React
- React Hooks
- React Router
- Context
- Firebase (for user authentication)
- Stripe (front-end part)
- SASS
  }

```

As of 25th of April 2020 - Master Branch:

```

technologies: {
...previouslyUsedTechnologies,
Axios,
Express,
Node.js
}

```

As of 19th of April 2020 - Master Branch:

```

technologies: {
...previouslyUsedTechnologies,
Redux-Saga
Styled Components (SASS removed)
}

```

As of 6th of April 2020 - Master Branch:

- React
- React Router
- Redux
- Reselect
- Firebase (for user authentication)
- Stripe (front-end part)
- SASS

```

```
