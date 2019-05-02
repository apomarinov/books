export default {
    mode: "history",
    linkActiveClass: 'font-bold',
    routes: [
        {
            path: '*',
            component: require('./views/NotFound').default
        },
        {
            path: "/",
            component: require('./views/Home').default
        },
        {
            path: "/favorites",
            component: require('./views/Favorites').default
        }
    ]
}
