import Store from './Store';
import Attributes from './Attributes';
import AttributeGroups from './AttributeGroups';


export default {
    parentRoutes: 'setting',
    name:'Setting',
    children: [
        Store,
        Attributes,
        AttributeGroups,
    ]
};

// export default from './Dashboard';
// export * from './Setting';