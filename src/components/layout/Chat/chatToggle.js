import { reactive } from "vue";

const chatWindow = reactive({
    open: false,
    toggle(){
        this.open = !this.open;
    }
})

export default chatWindow;