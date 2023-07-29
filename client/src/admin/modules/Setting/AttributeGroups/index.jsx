import AttributeGroupRouter from "./routes/routing";

export default {
  routeProps: {
      path: 'attribute-group',
      exact: true,
  },
  router: [
    AttributeGroupRouter
  ],
  name: 'Attribute Groups',    
};