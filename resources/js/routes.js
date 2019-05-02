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
            component: require('./views/Logo').default
        }
    ]
}
