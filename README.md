# Mastery Coding Challenge: LTL Assignment

## Available Scripts

Install the project by running:

### `yarn install`

In the project directory, you can run:

### `yart start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Goal

Given 4 trucks, each with different available capacity, write an algorithm to distribute shipments as evenly as possible, trying to ship all goods and minimize wasted space.

## Assumptions

There is no priority for which shipment or truck needs to be loaded first. An optimized solution is one where the most amount of loads are sent out and the least amount of truck space is wasted.

## Pre-Solution Thoughts

My initial thoughts are to arrange the shipments and trucks from lowest to highest capacity. Shipments will then be placed into each available truck until there is no more space. The theory here is that by loading the smaller shipments into the small trucks, it will leave the larger shipments for the larger trucks and fit more of the loads than if the smaller loads were loaded first unto the larger trucks.

## Process

I created a React app to quickly set up visual representation of the algorithm. Because it is simply a client framework, I decided to create Javascript prototypes for models, and used an array as a "database". Again this allowed me quick setup and functionality. In an actual production setting, a database would make it easier to manipulate the data. I would also go as far as create a table for Scenarios, in order to provide more in-depth analysis.

## Directory

All of code is housed in the `src` directory.

The `Components` directory holds the React components as well as the models and initial data for truck and shipment (separated accordingly).

The `utils` directory contains the file `load_shipments.js` with the algorithm.

Also each directory contains the tests for the respective component or utility.

The `App.js` is the outer most React component, that's where I decided to use React hooks to maintain state in order to easily incorporate the algorithm.

## Observations

By changing the sorting step of the algorithm, I was able to get different results or scenarios. In a couple scenarios, the amount of space left on the trucks was exactly the same but spread out differently among the trucks. There was one scenario where the space left on the trucks (again being the same as another scenario), had one truck unused. This could be useful in situations were minimizing costs is a priority. However, I did notice that upon manual rearraging I was able to get a more optimized solution. This leads me to believe that a better solution is one with perhaps a mathematical algorithm that is out of the realm of my knowledge. But I imagine being able to produce different scenarios and have another algorithm analyze the results for optimized results based on selected criteria (costs, space, number of loads, etc.) could be another possible step towards solving this problem.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
