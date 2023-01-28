import { initReserve } from "./components/initReserve.js";
import { initService } from "./components/initService.js";
import { initSlider } from "./components/initSlider.js";


const init = () => {
    initSlider();
    initService();
    initReserve();
}

window.addEventListener('DOMContentLoaded', init)