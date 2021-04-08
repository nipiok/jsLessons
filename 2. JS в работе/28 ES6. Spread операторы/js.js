let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejornal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
    /* (...) - перед названием переменной содержащей массива 
        разворачивает массив */
console.log(internet); // 'youtube', 'vimeo', 'rutube', wordpress'.

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
let numbers = [2, 5, 7];

log(...numbers); // функция принимает массив в развернутом виде