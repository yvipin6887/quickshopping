import AnalysticRoute from "./routes/routing";


export default {
    routeProps: {
        path: 'analystics',
        exact: true,
    },
    router: [
        AnalysticRoute
    ],
    name: 'Analystics'
};