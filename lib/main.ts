import type {App} from 'vue';
import {Accordion, Button, Card, Checkbox, Chips, GradiantSlider, InputSwitch, MenuBar, Slider} from './index'
import PrimeVueUnstyled from 'primevue/config';

const SemanticPrime = {
    install: (app: App) => {
        app.use(PrimeVueUnstyled);
        app.component('Button', Button);
        app.component('InputSwitch', InputSwitch)
        app.component('Card', Card)
        app.component('MenuBar', MenuBar)
        app.component('Slider', Slider)
        app.component('GradiantSlider', GradiantSlider)
        app.component('Checkbox', Checkbox)
        app.component('Chips', Chips)
        app.component('Accordion', Accordion)
    }
};

export {SemanticPrime, InputSwitch, Card, Slider, GradiantSlider, Button, Checkbox, Chips, Accordion};