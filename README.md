<p align="center">
  <a href="https://next.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Wordpress - Base Project
</h1>

This is a base project with Gatsby and the wordpress plugin integration, ready to change the Wordpress URL and authentication and start querying the Wordpress Rest API, using Wordpress as a Headless CMS.
  
## 🚀 Quick start

1.  **Requirements**

    To start the development build locally run:

    ```sh
    npm install
    gatsby develop
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!
    
    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*
    
    Open the the directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!
    
    ## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── gatsby-config.js
    ├── Utils
    ├── Styles
    ├── Shared
    ├── Layouts
    ├── Components
    ├── Assets


  1.  **`/gatsby-config.js`**: The wordpress configuration goes here. Please check the comments.
  
  2.  **`/Utils`**: This is where you are going to manage the data to normalize it and return it how you need it.
  
  3.  **`/Styles`**: Where you are going to manage all the styles.

  4.  **`/Shared`**: All shared components, that are going to be used in the entire project. (Buttons, labels)

  5.  **`/Layouts`**: Layouts components, where you have menus, footers that are going to be here. Layouts to use on pages.

  6.  **`/Components`**: All the components that the site are going to use.

  7.  **`/Assets`**: Where all the assests goes.


## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://next.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://next.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples head [to our documentation](https://next.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
