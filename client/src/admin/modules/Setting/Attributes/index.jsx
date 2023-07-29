import AttributeRouter from "./routes/routing";

export default {
  routeProps: {
      path: 'attributes',
      exact: true,
  },
  router: [
    AttributeRouter
  ],
  name: 'Attributes',    
};