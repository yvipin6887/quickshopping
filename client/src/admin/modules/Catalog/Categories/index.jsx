import CategoryRouter from "./routes/routing";

export default {
  routeProps: {
      path: 'categories',
      exact: true,
  },
  router: [
    CategoryRouter
  ],
  name: 'Categories',    
};