import Analystics from "./Analystics";

export default {
    parentRoutes: 'dashboard',
    name: 'Dashboard',
    element: Analystics.routeProps.element,
    children: [
        Analystics
    ]
};