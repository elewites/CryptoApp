# CryptoApp

This is a responsive web app built using React. The project makes use of the [CoinGecko API V3](https://www.coingecko.com/api/documentations/v3#/) to fetch real time data on crypto currencies. 

The app is deployed with Netlify and can be accessed here: [CryptoApp](https://crypt0-app.netlify.app/).


[![Netlify Status](https://api.netlify.com/api/v1/badges/9b56ce4a-00e8-407c-b862-181d3dc7ee53/deploy-status)](https://app.netlify.com/sites/crypt0-app/deploys)


# Purpose

I wanted to improve my skills with React; more specifically, learn how to work with APIs to fetch external data to then use it within a web app. The project turned out to be a great way to acheive the aforementioned objectives. 


## Installation

The app is already deployed so you can play around with the final product using this [link](https://crypt0-app.netlify.app/).

If you wish to run the app locally, clone this repo and install the dependencies. 

```
$ git clone https://github.com/elewites/CryptoApp.git
$ cd cryptoapp
$ npm install 
```

Once the dependencies install, run the following command on your terminal:

`npm start`

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Learn More 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## App Design

## User Stories
### The following user stories helped me organize the development of the app and visualize the end result. 

1. In this app the user is able to check the following stats for multiple crypto currencies.

- Market capital rank
- current price
- percentage price change within last 24h
- 24h total volume
- Market Capital

2. The user is also able to search for specific crypto currencies in a customized search bar.

3. In addition, the user has the ability to toggle between the currency in which the prices are displayed.

- e.g. Displaying the price of bitcoin in USD or EUR is the user's choice.

4. If the user wants to explore an individual coin more in depth, they can do this by clicking on the more info buttons.

There they will have access to additional information for each coin such as:

- Price range within last 24h (low and high)
- circulating supply, total supply, and max supply
- fully diluted valuation

5. As a user, one is able to toggle between dark theme mode and light mode.

6. The user is also able to use the app in a laptop or mobile device as all the CSS styling is responsive.
