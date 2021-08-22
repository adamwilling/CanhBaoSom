// Xử lý với header
window.addEventListener("scroll", () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})
//


// Khởi tạo danh sách users
let users_default = [
    {
        company: "Ký Túc Xá Cỏ May",
        name: "Võ Thành Phú",
        date: "08/02/2001",
        email: "thanhphums10@gmail.com",
        phone: "0775074059",
        password: "Abc123456",
        department: "Đội sửa chữa",
        position: "Thành viên",
        set: "member"
    },
    {
        company: "Ký Túc Xá Cỏ May",
        name: "Nguyễn Võ Song Toàn",
        date: "08/02/2001",
        email: "adamwilling.2002@gmail.com",
        phone: "0369572542",
        password: "Abc123456",
        department: "Tầng trệt",
        position: "Trưởng phòng 018",
        set: "admin"
    }
]
if (JSON.parse(localStorage.getItem("users")) == null) {
    localStorage.setItem("users",JSON.stringify(users_default))
}