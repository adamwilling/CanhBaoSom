// Xử lý với header
window.addEventListener("scroll", () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})
//


// Khởi tạo danh sách users
let users_state = []
if (JSON.parse(localStorage.getItem("users")) == null) {
    window.localStorage.setItem("users","[]")
}