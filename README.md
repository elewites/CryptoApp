# CryptoApp

This is a responsive web app built using React that makes use of the [CoinGecko API V3](https://www.coingecko.com/api/documentations/v3#/) to fetch, organize, and visualize real time data on crypto currencies.

The app is deployed with Netlify and can be accessed here: [CryptoApp](https://unruffled-hugle-cfd73a.netlify.app/).


[![Netlify Status](https://api.netlify.com/api/v1/badges/9b56ce4a-00e8-407c-b862-181d3dc7ee53/deploy-status)](https://app.netlify.com/sites/unruffled-hugle-cfd73a/deploys)


# Purpose

I wanted to improve my skills with React, more specifically learn how to work with APIs to fetch data and then create an interface to display it. The project turned out to be a great way to acheive both of the aforementioned objectives. 


## Installation

The app is already deployed so you can play around with the final product using this [link](https://unruffled-hugle-cfd73a.netlify.app/).

If you wish to run this app locally, clone this repo and install the dependencies. 

```
$ git clone https://github.com/elewites/CryptoApp.git
$ cd cryptoapp
$ npm install 
```

Once the dependencies install, run the following command

`npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Learn More 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## User Stories

1. In this app the user able to check the following stats for multiple crypto currencies.

- Market capital rank
- current price
- percentage price change within last 24h
- 24h total volume
- Market Capital

2. The user is also able to search for specific crypto currencies in a customized search bar.

3. In addition, the user has the ability to toggle between the currency in which the prices are displayed.

- e.g. Displaying the price of bitcoin in USD or EUR is the user's choice.

4. If the user wants to explore an individual coin more in depth, they can do this by clicking on the more info buttons.

There they will have access to additional information for each coin such as

- Price range within last 24h (low and high)
- circulating supply, total supply, and max supply
- fully diluted valuation

5. As a user, one is able to toggle between dark theme mode and light mode.

6. The user is also able to use the app in a laptop or mobile device as all the CSS styling is responsive.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
