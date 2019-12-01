This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Hosted on [geekabhinav.github.io](https://geekabhinav.github.io)

## Assumptions
* In the Sketch file that was given, there are two statuses for approvals - `Approved` & `Pending`. However, in the `request.json` file, the statuses were different. I have mapped `accepted` status from JSON file to `approved`, and `created` to `pending`. Any other statuses, if applicable, will show in UI as it.
* The text between table and approve/deny buttons had no relevant fields in the JSON file, and has been hardcoded
* Annual cost was not present in JSON and is being calculated in frontend using `cost_cents` & `renewal_frequency_in_months`
* I have simulated an API call while displaying the request approval page - users will see loading animation for 3 seconds, and then see the actual data
## How to run the app locally
1. Clone the repository on your machine
2. Go to project folder
3. Run `npm install`
4. Run `npm start`

## How to try different JSON files for response structure
While running the app locally, replace the contents of `/src/containers/requestApproval/data.json` with the new JSON structure to try different sets of data

## Libraries used
* MomentJS
* FontAwesome
* Normalize.css
* React-Content-Loader

No CSS frameworks used

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
