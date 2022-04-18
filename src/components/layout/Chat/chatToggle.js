import { reactive } from "vue";

const chatToggle = reactive({
    open: false,
    toggle(){
        this.open = !this.open;
    }
})

export default chatToggle;