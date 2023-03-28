import html from "../core/html.js";
import { connect } from "../redux/store.js";

// const selector = state => state
const selector = state => state.persons
const connector = connect(selector);

function App(store) {
    let body = ``
    // body = `
    // <ul>
    //     ${store.persons.map((person, index) => `<li>${person} <span onclick="dispatch('DELETE', ${index})">&times;</span</li>`).join('')}
    // </ul >

    // <button onclick="dispatch('ADD', 'Trà My')">Add</button>
    // `
    // Khi store là Object
    body = `
    <ul>
        ${Object.values(store).map((person, index) => `<li>${person} <span onclick="dispatch('DELETE', ${index})">&times;</span</li>`).join('')}
    </ul >

    <button onclick="dispatch('RESTART')">Restart</button>
    <button onclick="dispatch('ADD', 'Trà My')">Add</button>
    `
    return html`${body} `
}
App = connector(App);

const temp = {
    a: 1,
    b: 2
}

export default App