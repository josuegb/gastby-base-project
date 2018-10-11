module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/gatsby-icon.png' // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        //Wordpress URL without the trailing slash and protocols.
        //Example: www.facebook.com
        baseUrl: '127.0.0.1:8080/wordpress',
        // The protocol. This can be http or https.
        protocol: 'http',
        // If false, if the site is self hosted.
        // If true, if the site is on wordpress.com.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        useACF: true,
        auth: {
        //If there is any htaccess configure, need these credentials to access to the Wordpress to access to the URL.
          htaccess_user: '',
          htaccess_pass: '',
          htaccess_sendImmediately: false,

        // If hostingWPCOM is true then you will need to communicate with wordpress.com API
        // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
        // then add your clientId, clientSecret, username, and password here
        wpcom_app_clientSecret: "",
        wpcom_app_clientId: "",
        wpcom_user: "",
        wpcom_pass: "",
        },
        // True to display a verbose output on terminal. Helps to debug specific API Endpoints problems.
        verboseOutput: true,
      },
    },
    'gatsby-plugin-offline',
  ],
}
