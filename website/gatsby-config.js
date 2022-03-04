module.exports = {
  siteMetadata: {
      title: `Wyatt Walsh's Personal Website`,
    siteUrl: `https://www.wwalsh.io`
  },
  plugins: [
    // "gatsby-plugin-twitter",
    // "gatsby-plugin-material-ui",
    // "gatsby-plugin-sass",
    // "gatsby-plugin-image",
    // "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",



    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-transformer-json",
    // {
    //   resolve: "gatsby-source-wikipedia",
    //   options: {
    //     // For each query, the plugin will go to Wikipedia's API and search for the query
    //     // and fetch the top articles to the specified limit.
    //     queries: [
    //       {
    //         query: `progressive web app`,
    //         limit: 5,
    //       },
    //       {
    //         query: `cheese`,
    //         limit: 10,
    //       },
    //       {
    //         query: `developers`,
    //         limit: 10,
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    "gatsby-plugin-twitter",
    {
      resolve: "gatsby-plugin-social-cards",
      options: {
        // ommit to skip
        authorImage: "./static/img/coffee-art.jpg",
        // image to use when no cover in frontmatter
        backgroundImage: "./static/img/hvitserkur.JPG",
        // author to use when no auth in frontmatter
        defaultAuthor: "Wyatt Walsh",
        // card design
        design: "card", // 'default' or 'card'
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: ``, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
          
        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-preload-fonts",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Serif`,
          },
          {
            family: 'Abel',
            subsets: ['sans-serif'],
            // variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#6a9fb5`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        "extensions": [".mdx"],
        "defaultLayouts": {},
        "gatsbyRemarkPlugins": [
          "gatsby-remark-autolink-headers",
          "gatsby-remark-embed-video",
          "gatsby-remark-images",
          "gatsby-remark-katex",
          "gatsby-remark-prismjs",
          "gatsby-remark-reading-time",
          "gatsby-remark-responsive-iframe",
          "gatsby-remark-smartypants",
          "gatsby-remark-use-frontmatter-path",
        ],
        "remarkPlugins": [
          "remark-attr",
          "remark-frontmatter",
          "remark-github",
          "remark-heading-id",
          "remark-hint",
          "remark-jargon",
          "remark-math",
          "remark-mdx",
          "remark-mermaidjs",
          "remark-pdf",
          "remark-toc",
        
        ],
        "rehypePlugins": [
          "rehype-attr",
          "rehype-autolink-headings",
          "rehype-citation",
          "rehype-figure",
          'rehype-katex',
          'rehype-mathjax',
          // 'rehype-meta',
        ],
      }
    },
    "gatsby-plugin-material-ui",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-FJCYWXT2WF",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.wwalsh.io`,
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `Root`,
        // exclude: optional, include this array to exclude paths you don't want to
        // generate breadcrumbs for (see below for details).
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`
        ],
        // isMatchOptions: optional, include this object to configure the wildcard-match library.
        excludeOptions: {
          separator: '.'
        },
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        // crumbLabelUpdates: [
        //   {
        //     pathname: '/book',
        //     crumbLabel: 'Books'
        //   }
        // ],
        // trailingSlashes: optional, will add trailing slashes to the end
        // of crumb pathnames. default is false
        trailingSlashes: true,
        // usePathPrefix: optional, if you are using pathPrefix above
        // usePathPrefix: '/blog',
      },
    },
    {
      resolve: "@jsdevtools/rehype-toc",
      options: {
        "nav": true,
        "position": "afterbegin",
        "headings": ["h1", "h2", "h3", "h4", "h5", "h6"],
        "cssClasses.toc": "toc",
        "cssClasses.list": "toc-level",
        "cssClasses.listItem": "toc-item",
        "cssClasses.link": "toc-link",
      }
    },
    {
      resolve: "@jsdevtools/rehype-inline-svg",
      options: {
        "maxImageSize": 3000,
        "maxOccurrences": "Infinity",
        "maxTotalSize": "10000",
        "optimize": true,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              // offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              // className: `custom-class`,
              // maintainCase: true,
              // removeAccents: true,
              enableCustomId: true,
              isIconAfterHeader: true,
              // elements: [`h1`, `h4`],
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650,
              linkImagesToOriginal: true,
              showCaptions: true,
              markdownCaptions: false,
              // wrapperStyle:
              // backgroundColor
              quality=100,
              withWebp: true,
              srcSetBreakpoints: [320, 480, 768, 1024, 1200],
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: true,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
          "gatsby-remark-reading-time",
          "gatsby-remark-responsive-iframe",
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool",
            },
          },
          'gatsby-remark-use-frontmatter-path',
          "remark-attr",
          "remark-frontmatter",
          {
            resolve: "remark-github",
            options: {
              "repository": "wyattowalsh/website"
            }
          },
          "remark-heading-id",
          "remark-hint",
          "remark-jargon",
          "remark-math",
          "remark-mdx",
          {
            resolve: "remark-mermaidjs",
            options: {
              "theme": "neutral",
            }
          },
          "remark-pdf",
          "remark-toc",
        ],
      },
    },
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        // Condition for selecting an existing GrapghQL node (optional)
        // If not set, the transformer operates on file nodes.
        filter: node => node.internal.type === `GhostPost`,
        // Only needed when using filter (optional, default: node.html)
        // Source location of the html to be transformed
        source: node => node.html,
        // Additional fields of the sourced node can be added here (optional)
        // These fields are then available on the htmlNode on `htmlNode.context`
        contextFields: [],
        // Fragment mode (optional, default: true)
        fragment: true,
        // Space mode (optional, default: `html`)
        space: `html`,
        // EmitParseErrors mode (optional, default: false)
        emitParseErrors: false,
        // Verbose mode (optional, default: false)
        verbose: false,
        // Plugins configs (optional but most likely you need one)
        plugins: [
          {
            resolve: 'rehype-attr',
            options: {
              "properties": "data"
            }
          },
          {
            resolve: 'rehype-autolink-headings',
            options: {
              // "behavior": "prepend",
              // "properties": {ariaHidden: true, tabIndex: -1},
            }
          },
          {
            resolve: 'rehype-citation',
            options: {
              "bibliography": "data/bibliography.bibtex",
              "csl": "data/institute-for-operations-research-and-the-management-sciences.csv",
            }
          },
          {
            resolve: 'rehype-figure',
            options: {
            }
          },
          {
            resolve: 'rehype-katex',
          },
          {
            resolve: 'rehype-mathjax',
          },
          // {
          //   resolve: 'rehype-meta',
          //   options: {
          //     twitter: true,
          //     og: true,
          //     copyright: true,
          //     type: 'article',
          //     origin: 'https://www.nytimes.com',
          //     pathname: '/interactive/2019/12/02/nyregion/nyc-subway-map.html',
          //     name: 'The New York Times',
          //     siteTags: [
          //       'US Politics',
          //       'Impeachment',
          //       'NATO',
          //       'London',
          //       'Food',
          //       'Poverty',
          //       'Climate Change',
          //       'Global Warming'
          //     ],
          //     siteAuthor: 'The New York Times',
          //     siteTwitter: '@nytimes',
          //     author: 'Jane Doe',
          //     authorTwitter: '@jane',
          //     authorFacebook: 'janedoe',
          //     title: 'The New York City Subway Map as You’ve Never Seen It Before',
          //     separator: ' | ',
          //     description:
          //       'The city has changed drastically over the past 40 years, yet the M.T.A. map designed in 1979 has largely endured.',
          //     section: 'New York',
          //     tags: [
          //       'Subway',
          //       'Map',
          //       'Public Transit',
          //       'Design',
          //       'MTA',
          //       'Massimo Vignelli',
          //       'NYC'
          //     ],
          //     image: {
          //       url: 'https://static01.nyt.com/images/2019/12/02/autossell/mta-promo-image/mta-crop-facebookJumbo.jpg',
          //       alt: 'M.T.A. map designed in 1979',
          //       width: '1050',
          //       height: '550'
          //     },
          //     published: '2019-12-02T10:00:00.000Z',
          //     modified: '2019-12-03T19:13:00.000Z',
          //     readingTime: 11.1
          //   }
          // }
          {

          }
        ],

      },
    },
//     },
//     {
//       resolve: 'gatsby-plugin-manifest',
//       options: {
//         "icon": "src/images/icon.png"
//       }
//     },
//     "gatsby-plugin-mdx",
//     "gatsby-plugin-sharp",
//     "gatsby-transformer-sharp",
//     {
//       resolve: 'gatsby-source-filesystem',
//       options: {
//         "name": "pages",
//         "path": "src/pages/"
//       },
//       __key: "pages"
//     },
//     {
//       resolve: `gatsby-plugin-typography`,
//       options: {
//         pathToConfigModule: `src/utils/typography`,
//       },
//     },
//   {
//     resolve: "gatsby-plugin-social-cards",
//     options: {
//       // ommit to skip
//       authorImage: "./static/img/coffee-art.jpg",
//       // image to use when no cover in frontmatter
//       backgroundImage: "./static/img/hvitserkur.JPG",
//       // author to use when no auth in frontmatter
//       defaultAuthor: "Wyatt Walsh",
//       // card design
//       design: "card", // 'default' or 'card'
//     },
// },
// {
//     resolve: `gatsby-plugin-scroll-reveal`,
//     options: {
//         threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
//         once: true, // Defines if animation needs to be launched once
//         disable: false, // Flag for disabling animations
        
//         // Advanced Options
//         selector: '[data-sal]', // Selector of the elements to be animated
//         animateClassName: 'sal-animate', // Class name which triggers animation
//         disabledClassName: 'sal-disabled', // Class name which defines the disabled state
//         rootMargin: '0% 50%', // Corresponds to root's bounding box margin
//         enterEventName: 'sal:in', // Enter event name
//         exitEventName: 'sal:out', // Exit event name
//     }
// },
// {
//     resolve: `gatsby-plugin-nprogress`,
//     options: {
//       // Setting a color is optional.
//       color: "#6a9fb5",
//       // Disable the loading spinner.
//       showSpinner: false,
//     },
// },
// // {
// //       resolve: `gatsby-plugin-prefetch-google-fonts`,
// //       options: {
// //         fonts: [
// //           {
// //             family: "Roboto Serif",
// //             // subsets: [`latin`],
// //           },
// //         ],
// //       },
// // },
//   `gatsby-transformer-json`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         path: `./src/data/`,
//       },
// },
//   {
//     resolve: `gatsby-transformer-remark`,
//     options: {
//       plugins: [
//         'gatsby-remark-use-frontmatter-path',
//         "gatsby-remark-reading-time",
//         "gatsby-remark-prismjs",
//         {
//           resolve: `gatsby-remark-prismjs`,
//           options: {
//             // Class prefix for <pre> tags containing syntax highlighting;
//             // defaults to 'language-' (e.g. <pre class="language-js">).
//             // If your site loads Prism into the browser at runtime,
//             // (e.g. for use with libraries like react-live),
//             // you may use this to prevent Prism from re-processing syntax.
//             // This is an uncommon use-case though;
//             // If you're unsure, it's best to use the default value.
//             classPrefix: "language-",
//             // This is used to allow setting a language for inline code
//             // (i.e. single backticks) by creating a separator.
//             // This separator is a string and will do no white-space
//             // stripping.
//             // A suggested value for English speakers is the non-ascii
//             // character '›'.
//             inlineCodeMarker: null,
//             // This lets you set up language aliases.  For example,
//             // setting this to '{ sh: "bash" }' will let you use
//             // the language "sh" which will highlight using the
//             // bash highlighter.
//             aliases: {},
//             // This toggles the display of line numbers globally alongside the code.
//             // To use it, add the following line in gatsby-browser.js
//             // right after importing the prism color scheme:
//             //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
//             // Defaults to false.
//             // If you wish to only show line numbers on certain code blocks,
//             // leave false and use the {numberLines: true} syntax below
//             showLineNumbers: false,
//             // If setting this to true, the parser won't handle and highlight inline
//             // code used in markdown i.e. single backtick code like `this`.
//             noInlineHighlight: false,
//             // This adds a new language definition to Prism or extend an already
//             // existing language definition. More details on this option can be
//             // found under the header "Add new language definition or extend an
//             // existing language" below.
//             languageExtensions: [
//               {
//                 language: "superscript",
//                 extend: "javascript",
//                 definition: {
//                   superscript_types: /(SuperType)/,
//                 },
//                 insertBefore: {
//                   function: {
//                     superscript_keywords: /(superif|superelse)/,
//                   },
//                 },
//               },
//             ],
//             // Customize the prompt used in shell output
//             // Values below are default
//             prompt: {
//               user: "root",
//               host: "localhost",
//               global: false,
//             },
//             // By default the HTML entities <>&'" are escaped.
//             // Add additional HTML escapes by providing a mapping
//             // of HTML entities and their escape value IE: { '}': '&#123;' }
//             escapeEntities: {},
//           }
//         },
//         {
//             resolve: "gatsby-remark-embed-video",
//             options: {
//               width: 800,
//               ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
//               height: 400, // Optional: Overrides optional.ratio
//               related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
//               noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
//               loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
//               urlOverrides: [
//                   {
//                     id: "youtube",
//                     embedURL: videoId =>
//                       `https://www.youtube-nocookie.com/embed/${videoId}`,
//                   },
//                 ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
//               containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
//               iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
//             },
//           },
//       {
//             resolve: `gatsby-remark-autolink-headers`,
//             options: {
//               offsetY: `100`,
//               icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
//               className: `custom-class`,
//               maintainCase: true,
//               removeAccents: true,
//               isIconAfterHeader: true,
//               elements: [`h1`, `h4`],
//             },
//           },,
//       {
//           resolve: "gatsby-remark-smartypants",
//           options: {
//             dashes: "oldschool",
//           },
//         },
      
//       ],
//     },
//     },
//   ],
}