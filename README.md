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

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

# Getting Started

TODO: refer to contribution / license information

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

TODO: runs dependency check to filter out unused packages

### `npm run plop`

TODO: runs templates, currently only component setup to quickly create new components, stories and test.

### `npm run deploy`

TODO: deploys to your github account

### `npm run format`

TODO: runs prettier on the files, needs to have prettier installed globaly (test? maybe make npx dependency) and check if npx will read the local config file

### `npm run lint`

TODO: runs linter to check the code

### `npm run coverage`

TODO: runs tests (see test) and create coverage report (see test-coverage)

## Tests

TODO: write something about tests

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

TODO: this is incomplete, needs more information and steps to deploy to github pages using `gh-pages` npm package.

## 3rd Party integrations

### EmailJS

This service is used to send out emails using the "contact me" form. For more information please visit [EmailJS](https://www.emailjs.com)

You will need to add the following envrionment variables to your `.env` file if you want to use email as a contact option.

| Key                                 | Description                                                               |
| ----------------------------------- | ------------------------------------------------------------------------- |
| `REACT_APP_API_EMAILJS_PUBLIC`      | The public key provided by EmailJS service.                               |
| `REACT_APP_API_EMAILJS_SERVICE_ID`  | The service ID provided by EmailJS service.                               |
| `REACT_APP_API_EMAILJS_TEMPLATE_ID` | The template to use when an email is being sent / forwarded from EmailJS. |

## Sources

TODO: mention some helpful sources that helped creating the different features
TODO: maybe it belongs to appendix section

## Roadmap

Below is a collection of ideas and or other features to extend the functionality of this little app.

TODO: add additional items of things that need to be done.

TODO: cleanup this todo list with prefixes like ♻️ icon for refactoring, ✨ for features etc.

- change the favicon to some appropiate logo eg. the TK initial signature
- change the title of the page, maybe allow different title per page visiting
- add google meta information (SEO) and open graph tags: https://ahrefs.com/blog/open-graph-meta-tags/ and https://developers.google.com/search/docs/crawling-indexing/special-tags
- Add contribution section into readme file
- Add `Buy me a coffee` or `buy me a beer` and other support information into readme file
- Add licence information and add a link back (footer?) on the page in case other people use it to get a link back on the build page as well as in the readme when people for the repo
- Write tests for the different components using enzyme / jest or some other framework as well as functionality
- add storybooks to the repo and configure the components
- Add some analytics functionality that can be configured to on / off via the settings
  - AppInsights
  - Sentry.io
  - Note: need to add user consent popup??
  - add then a page to view stats and render some nice graphs
- From the work experienece create a keyword cloud of tags / responsibilities
- create a filter based of responsibilities that filters out work experience and or projects?
- add github reopos maybe through API call and then render it and use the above filter maybe ??
- integrate maybe contribution graph from github somehow and or some other coding stats (code:stats / waka time) similiar like the hooks to in github pages readme for the profile and render some cool graphs?
