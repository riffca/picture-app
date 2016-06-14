import './style.scss';

//D E P E N D E C I E S
import vueRouter from 'vue-router';
Vue.use(vueRouter);

let rootComponent = Vue.extend(require('./root.vue'));

let router = new vueRouter({
    history: false
});

let routePath = './view/router';
router
    .map({
        '/': {
            name: 'index',
            component: require(routePath + '/index')
        },
        '/oil': {
            name: 'oil',
            component: require(routePath +  '/oil')
        },
        '/dry-brush': {
            name: 'dry-brush',
            component: require(routePath + '/dry-brush')
        },
        '/contacts': {
            name: 'contacts',
            component: require(routePath + '/contacts')
        }
    })
    .start(rootComponent, '#application', () => {
        console.log('Приложение работает');
    });
