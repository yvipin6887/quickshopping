import Categories from './Categories';


export default {
    parentRoutes: 'catalog',
    name:'Catalog',
    children: [
        Categories
    ]
};

// export default from './Dashboard';
// export * from './Setting';