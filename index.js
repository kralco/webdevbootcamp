import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static("src"));
app.use(express.static("node_modules"));





app.get("/", (req, res) =>{
    res.render("index.ejs", {posts:posts});
});

let posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
  },
];

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});

/*

Deliverables
One Node project for the function of the website

Including at least one EJS file for the structure of the website

Including at least one CSS file for the styling of the website



Features
1. Post Creation: Users should be able to create new posts.

2. Post Viewing: The home page should allow the user to view all their posts.

3. Post Update/Delete: Users should be edit and delete posts as needed.

3. Styling: The application should be well-styled and responsive, ensuring a good user experience on both desktop and mobile devices.



Technical Requirements
1. Node.js & Express.js: The application will be a web server built using Node.js and Express.js. Express.js will handle routing and middleware.

2. EJS: EJS will be used as the templating engine to generate dynamic HTML based on the application's state.



Timeline
         Hour 0: Planning

Gather content and design ideas, create wireframes and mockups. Plan out how the application will work, which routes might be necessary and which pages need to be made.



Hour 1:  Setup

Set up the project repository, initialize the Node.js application, and install necessary dependencies (Express.js, EJS).

Create the application structure, including routes, views, and static files.

Set up the Express.js server and define the necessary routes.



Hour 2-3: Implementing Features

Implement the post creation feature. This includes creating the form on the home page and handling the form submission in the server.

Implement the post viewing feature. This includes displaying all the posts on the home page.

Implement the post edit feature. This includes using a form to load the existing blog post and allowing the user to edit and save the post.

Implement the delete feature. This allows the user to click a button and remove the post from the home page.

Test the application to ensure that post creation and viewing are working correctly.



Hour 4-5: Styling and Polishing

Style the application. This includes creating a CSS file, linking it to your EJS templates, and writing CSS or using Bootstrap/Flexbox/Grid to style the application.

Test the application on different devices and browsers to ensure the styling works correctly.

Fix any bugs or issues that came up during testing.

*/