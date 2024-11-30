const Ziggy = {
    url: 'http:\/\/127.0.0.1:8000',
    port: 8000,
    defaults: {},
    routes: {
        'sanctum.csrf-cookie': {
            uri: 'sanctum\/csrf-cookie',
            methods: ['GET', 'HEAD'],
        },
        'user.dashboard.index': { uri: 'dashboard', methods: ['GET', 'HEAD'] },
        'user.dashboard.movie.show': {
            uri: 'dashboard\/movie\/{movie}',
            methods: ['GET', 'HEAD'],
            parameters: ['movie'],
            bindings: { movie: 'slug' },
        },
        'prototype.login': {
            uri: 'prototype\/login',
            methods: ['GET', 'HEAD'],
        },
        'prototype.register': {
            uri: 'prototype\/register',
            methods: ['GET', 'HEAD'],
        },
        'prototype.dashboard': {
            uri: 'prototype\/dashboard',
            methods: ['GET', 'HEAD'],
        },
        'prototype.subcriptionPlan': {
            uri: 'prototype\/subcriptionPlan',
            methods: ['GET', 'HEAD'],
        },
        'prototype.movie.show': {
            uri: 'prototype\/movie\/{slug}',
            methods: ['GET', 'HEAD'],
            parameters: ['slug'],
        },
        'profile.edit': { uri: 'profile', methods: ['GET', 'HEAD'] },
        'profile.update': { uri: 'profile', methods: ['PATCH'] },
        'profile.destroy': { uri: 'profile', methods: ['DELETE'] },
        register: { uri: 'register', methods: ['GET', 'HEAD'] },
        login: { uri: 'login', methods: ['GET', 'HEAD'] },
        'password.request': {
            uri: 'forgot-password',
            methods: ['GET', 'HEAD'],
        },
        'password.email': { uri: 'forgot-password', methods: ['POST'] },
        'password.reset': {
            uri: 'reset-password\/{token}',
            methods: ['GET', 'HEAD'],
            parameters: ['token'],
        },
        'password.store': { uri: 'reset-password', methods: ['POST'] },
        'verification.notice': {
            uri: 'verify-email',
            methods: ['GET', 'HEAD'],
        },
        'verification.verify': {
            uri: 'verify-email\/{id}\/{hash}',
            methods: ['GET', 'HEAD'],
            parameters: ['id', 'hash'],
        },
        'verification.send': {
            uri: 'email\/verification-notification',
            methods: ['POST'],
        },
        'password.confirm': {
            uri: 'confirm-password',
            methods: ['GET', 'HEAD'],
        },
        'password.update': { uri: 'password', methods: ['PUT'] },
        logout: { uri: 'logout', methods: ['POST'] },
        'storage.local': {
            uri: 'storage\/{path}',
            methods: ['GET', 'HEAD'],
            wheres: { path: '.*' },
            parameters: ['path'],
        },
    },
};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
