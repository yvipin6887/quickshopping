import StoreRouter from "./routes/routing";

export default {
    routeProps: {
        path: 'store',
        exact: true,
    },
    router: [
      StoreRouter
    ],
    name: 'Store',    
};