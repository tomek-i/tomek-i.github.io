# CareerHub

CareerHub is a dynamic and interactive personal or organizational website built using React and Typescript.

With a minimalist design, CareerHub allows you to showcase your career path in a timeline format, providing detailed information about your education, work history, and professional achievements. With the ability to add case studies, contact information, and links to your social media profiles, CareerHub gives you the tools to create a comprehensive online portfolio that reflects your professional identity.

It is hosted directly from your Github repository, and its use of Markdown files makes editing and customization simple and easy.

**Key features:**

- Timeline format to showcase your career path
- Ability to add case studies, contact information, and links to social media profiles
- Hosted directly from your Github repository
- Use of Markdown files for easy editing and customization

With CareerHub, you can create a professional, dynamic, and engaging online presence to showcase your career path and professional accomplishments.

## Screenshots

![App Screenshot](./doc/assets/images/application-demo.jpg)

# Getting Started

## Run Locally

Clone the project

```bash
  git clone https://github.com/tomek-i/tomek-i.github.io
```

Go to the project directory

```bash
  cd tomek-i.github.io
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

> **_NOTE:_** You will need to setup your environent variables in a `.env` file. Please see the [Environment Variables](#environment-variables) section of this document.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](#tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run check`

runs dependency check to filter out unused packages

### `npm run plop`

runs templates, currently only component setup to quickly create new components, stories and test.

### `npm run deploy`

deploys to your github account

### `npm run format`

runs prettier on the files, needs to have prettier installed globaly (test? maybe make npx dependency) and check if npx will read the local config file

### `npm run lint`

runs linter to check the code

### `npm run coverage`

runs tests (see test) and create coverage report (see test-coverage)

## Tests

write something about tests

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file.

| Key                      | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| `REACT_APP_CONTENT_PATH` | The path to the content folder containign all the `\*.md` files. |

There are some optional environment variables that are used with 3rd party ntegrations. To find out more about these please see the [3rd Party integration](#3rd-party-integrations) section.

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## 3rd Party integrations

### EmailJS

This service is used to send out emails using the "contact me" form. For more information please visit [EmailJS](https://www.emailjs.com)

You will need to add the following envrionment variables to your `.env` file if you want to use email as a contact option.

| Key                                 | Description                                                               |
| ----------------------------------- | ------------------------------------------------------------------------- |
| `REACT_APP_API_EMAILJS_PUBLIC`      | The public key provided by EmailJS service.                               |
| `REACT_APP_API_EMAILJS_SERVICE_ID`  | The service ID provided by EmailJS service.                               |
| `REACT_APP_API_EMAILJS_TEMPLATE_ID` | The template to use when an email is being sent / forwarded from EmailJS. |
