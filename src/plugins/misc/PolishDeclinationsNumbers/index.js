import polishDeclinationComponent from './components/polishDeclinationNumbers.vue';


const polishDeclinationNumber = {

    install(Vue) {

        Vue.component(polishDeclinationComponent.name, polishDeclinationComponent)
    }
};

export default polishDeclinationNumber;