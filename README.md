# React App Portfolio

## Description
Portfolio created using React.

## Links
https://github.com/MissyStiner/react-portfolio<br>
https://missystiner.github.io/react-portfolio/

## Screenshot
![image](https://user-images.githubusercontent.com/85651869/142980378-bec790a4-f6c8-4c4e-a035-c2ed25a95e6d.png)
![image](https://user-images.githubusercontent.com/85651869/142980416-d8de1409-1afa-4cdd-bb98-c841b799e9aa.png)
![image](https://user-images.githubusercontent.com/85651869/142980438-f8ffc64f-4b5b-41b6-89df-3a6caedf6c8b.png)


## User Story
AS AN employer looking for candidates with experience building single-page applications<br>
I WANT to view a potential employee's deployed React portfolio of work samples<br>
SO THAT I can assess whether they're a good candidate for an open position

## Acceptance Criteria
GIVEN a single-page application portfolio for a web developer<br>
WHEN I load the portfolio<br>
THEN I am presented with a page containing a header, a section for content, and a footer<br>
WHEN I view the header<br>
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio<br>
WHEN I view the navigation titles<br>
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted<br>
WHEN I click on a navigation title<br>
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted<br>
WHEN I load the portfolio the first time<br>
THEN the About Me title and section are selected by default<br>
WHEN I am presented with the About Me section<br>
THEN I see a recent photo or avatar of the developer and a short bio about them<br>
WHEN I am presented with the Portfolio section<br>
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository<br>
WHEN I am presented with the Contact section<br>
THEN I see a contact form with fields for a name, an email address, and a message<br>
WHEN I move my cursor out of one of the form fields without entering text<br>
THEN I receive a notification that this field is required<br>
WHEN I enter text into the email address field<br>
THEN I receive a notification if I have entered an invalid email address<br>
WHEN I am presented with the Resume section<br>
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies<br>
WHEN I view the footer<br>
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 

## Mock-Up
https://courses.bootcampspot.com/courses/715/files/723672/preview

## Getting Started
The application that you built for this module will help you know where to start when building your portfolio. You’ll use Create React App just as you did with your module project, but you should be aware of a few structural differences in the component hierarchy. Your portfolio should include the following:
- A single Header component that appears on multiple pages
- A single Navigation component within the header that will be used to conditionally render the different sections of your portfolio
- A single Project component that will be used multiple times in the Portfolio section
- A single Footer component that appears on multiple pages
- The contact form should be similar to the one you built in the module project. Because this application doesn’t include a back end or connect to an API, you can set up this functionality the same way you did in the module project and add in back-end functionality after you’ve covered it in the next few weeks.
- In the meantime, consider adding your email address and phone number on the Contact page.

## Projects
For each project you feature in your portfolio, you should include the following:
- An image of the deployed application (either a GIF or a screenshot)
- The title of the project
- A link to the deployed application
- A link to the corresponding GitHub repository

## Design
As with the previous portfolio homework, remember that "good" design is subjective; however, your site should look polished. Here are a few guidelines on what that means:
- Use mobile-first design.
- Choose a color palette so that your site doesn't just look like the default Bootstrap theme or an unstyled HTML site. Look into resources like Coolors (https://coolors.co/) or another color scheme generator to help you create something that will stand out.
- Make sure the font size is large enough to read and that the colors don't cause eye strain.
- Consider using animations and React component libraries. Note that this will not affect your grade, but it may impact how potential employers gauge your knowledge.

# React App Documentation
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
