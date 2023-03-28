import createStore from "../core/createStore.js";
import reducer from "./reducer.js";

// Tạo createStore với reducer
// Lấy ra các hàm attach, connect, dispatch
const { attach, connect, dispatch } = createStore(reducer)

// Gán hàm dispatch vào biến dispatch thuộc phạm vi window
window.dispatch = dispatch

export {
    attach,
    connect
}
