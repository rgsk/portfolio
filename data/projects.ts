export interface ProjectType {
  name: string;
  thumbnail: string;
  description: string;
  frontend: {
    github: string;
    deployed: string;
  };
  backend?: {
    github: string;
    deployed: string;
  };
}
export const projects: ProjectType[] = [
  {
    name: "Whatsapp-clone",
    thumbnail: "/projects/whatsapp.PNG",
    description: `
      used graphql server, queries, mutations, resolvers for api. Redis pubsub, gql subscriptions for realtime messaging. Frontend in nextjs
    `,
    frontend: {
      github: "https://github.com/rgsk/whatsapp-web",
      deployed: "https://whatsapp-web-olive.vercel.app",
    },
    backend: {
      github: "https://github.com/rgsk/whatsapp-server",
      deployed: "https://whatsapp-server123.herokuapp.com",
    },
  },
  {
    name: "Client Mehndi Website",
    thumbnail: "/projects/client-mehndi-website.PNG",
    description: `Made with Next js, learnt SEO, Google Search Console, improved
page ranking, fully responsive design, added google analytics and
running google ads campaign for the business. Optimized images,
lazy loading, swipe detection, image view and zoom. Used
nodemailler, fast2sms, twillo service on node API to send messages on contact form.`,
    frontend: {
      github: "https://github.com/rgsk/subhash-mehndi",
      deployed: "https://www.subhashguptamehndi.in/home",
    },
  },
  {
    name: "Facebook-clone",
    thumbnail: "/projects/facebook-clone.PNG",
    description: `used nodejs, apollo-server graphql api and mongoose to build crud, authentication and authorization using jwt tokens, cloudinary for
image upload, web sockets for chat, build facebook UI with dark
and light themes, animations in react.`,
    frontend: {
      github: "https://github.com/rgsk/facebook-web",
      deployed: "https://facebook-web.netlify.app/",
    },
    backend: {
      github: "https://github.com/rgsk/facebook-server",
      deployed: "https://facebook-server-123.herokuapp.com",
    },
  },
  {
    name: "Nagarro Clone",
    thumbnail: "/projects/nagarro-clone.PNG",
    description: `Used React, learnt complex animations with react-transition- group, how to plan UI, spaced design`,
    frontend: {
      github: "https://github.com/Rahul987725800/nagarro-clone",
      deployed: "https://nagarro-clone.vercel.app/",
    },
  },
  {
    name: "Burger Point",
    description: `A burger ordering app made in Svelte, managed custom form input and validation, editing, responsive design. Applied longest common substring
algorithm for address matching.`,
    thumbnail: "/projects/burger-point.PNG",
    frontend: {
      github: "https://github.com/Rahul987725800/burger-point",
      deployed: "https://burger-point.netlify.app/",
    },
  },
  {
    name: "PDF Reader with Dictionary",
    thumbnail: "/projects/pdf-reader.PNG",
    description: `Used React and Firebase, applied concepts of debouncing, dom
events, responsive design, lazy loading, fetching data from api. `,
    frontend: {
      github: "https://github.com/rgsk/pdf-reader-react",
      deployed: "https://pdf-reader-react.netlify.app/",
    },
  },
  {
    name: "Algo Visualizer",
    thumbnail: "/projects/algo-vizualizer.PNG",
    description: `Made a React project to visualize different algorithms, sorting, searching, recursion, graphs bfs, dfs, topological sort, dijkstra, heapsort, backtracking.`,
    frontend: {
      github: "https://github.com/rgsk/algo-visualizer",
      deployed: "https://algo-visualizer-123.netlify.app",
    },
  },
];
