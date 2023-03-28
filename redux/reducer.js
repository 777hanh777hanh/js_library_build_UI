// Giá trị state mặc định
let init = {
    animals: ['dog', 'cat', 'parrot'],
    persons: ['Lan', 'My', 'Phương']
}

let data = init;

if (localStorage.getItem('store'))
    data = JSON.parse(localStorage.getItem('store'));

// Hàm reducer nhận 
//      state: dữ liệu store
//      action: hành động quyết định việc xữ lí state
//      args: tham số đầu vào
function reducer(state = data, action, args) {
    // Tương ứng từng hành động sẽ xữ lí state tương ứng với từng hành động đó
    switch (action) {
        case 'ADD':
            // Trả về object mới
            return {
                // Rải tất cả các dữ liệu của state
                ...state,
                // Rải tất cả các thành phần của persons và thêm thành phần mới vào cuối mảng
                persons: [...state.persons, ...args]
            }
        case 'DELETE':
            state.persons.splice(args, 1)
            return {
                ...state,
            }
        case 'RESTART':
            return init
        default:
            return state;
    }
}

export default reducer;