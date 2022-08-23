const { Post } = require("../models");

const postData = [
  {
    title: "What is an MVC? ",

    text: "An MVC or Model View Controller, is a software design pattern for developing web applications. It divides a given application into three interconnected parts in order to separate internal representations",

    user_id: 1,
  },

  {
    title: "How to use different CSS selectors",

    text: 'CSS selectors are used to "select" the content you want to style. Selectors are patterns that match against elements in a tree structure',

    user_id: 2,
  },

  {
    title: "Getting Started with HTML",

    text: "HTML is the standard markup language for Web pages. HTML describes the structure of a Web page semantically and originally included cues for the appearance of the document.",

    user_id: 3,
  },

  {
    title: "Why you should learn JS",

    text: "JavaScript is a programming language that adds interactivity to your website (for example games, responses when buttons are pressed or data entered in forms).",

    user_id: 4,
  },

  {
    title: "Responsive Web Design with Bootstrap",

    text: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation",

    user_id: 5,
  },

  {
    title: "Getting Started with Git",

    text: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",

    user_id: 6,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
