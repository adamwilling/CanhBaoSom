// Xử lý với header
window.addEventListener("scroll", () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})
//


// Danh sách users mặc định
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


// Khởi tạo danh sách users mặc định
if (JSON.parse(localStorage.getItem("users")) == null) {
    localStorage.setItem("users", JSON.stringify(users_default))
}


// Xử lý khi load trang
window.onload = () => {
    userLogin = localStorage.getItem("userLogin")
    if (userLogin) {
        window.location = "./app"
    }
}
var users = JSON.parse(localStorage.getItem("users"))


// Xử lý khi Login
const LoginElement = document.querySelector("#login form")
const MessagesLoginElement = document.querySelectorAll("#login form .form-message")
let EmailLoginElement = document.querySelector("#email--login")
EmailLoginElement.oninput = () => {
    EmailLogin = EmailLoginElement.value
    userLogin = users.find(user => user.email == EmailLogin)
    if (!userLogin) {
        MessagesLoginElement[0].innerHTML = `<span style="color: red; font-size: 0.8rem">Email không tồn tại.</span>`
    } else {
        MessagesLoginElement[0].innerHTML = ""
    }
}
let PasswordLoginElement = document.querySelector("#password--login")
PasswordLoginElement.oninput = () => {
    PasswordLogin = PasswordLoginElement.value
    if (userLogin && userLogin.password != PasswordLogin) {
        MessagesLoginElement[1].innerHTML = `<span style="color: red; font-size: 0.8rem">Mật khẩu không chính xác.</span>`
    } else if (userLogin && userLogin.password == PasswordLogin) {
        MessagesLoginElement[1].innerHTML = ""
    }
}
LoginElement.onsubmit = (event) => {
    event.preventDefault()
    if (MessagesLoginElement[0].innerHTML == "" && MessagesLoginElement[1].innerHTML == "") {
        localStorage.setItem("userLogin", JSON.stringify(userLogin))
        document.querySelector("#message-login-success").classList.replace("d-none", "d-flex")
        setTimeout(() => {
            window.location = "./app"
            document.querySelector("#message-login-success").classList.replace("d-flex", "d-none")
        }, 3000)
    }
}


// Xử lý khi Register
let CompanyElement = document.querySelector("#company")
CompanyElement.oninput = () => {
    company = CompanyElement.value
}
let FullNameElement = document.querySelector("#fullname")
FullNameElement.oninput = () => {
    fullname = FullNameElement.value
}
let EmailElement = document.querySelector("#email")
EmailElement.oninput = () => {
    email = EmailElement.value
}
let PhoneElement = document.querySelector("#phone")
PhoneElement.oninput = () => {
    phone = PhoneElement.value
}
let PasswordElement = document.querySelector("#password")
PasswordElement.oninput = () => {
    password = PasswordElement.value
}
const RegisterElement = document.querySelector("#register form")
const MessagesRegisterElement = document.querySelectorAll("#register form .form-message")
RegisterElement.onsubmit = (event) => {
    event.preventDefault()
    let MessagesRegister = [
        "",
        "",
        "",
        ""
    ]
    if (users) {
        users.forEach((user) => {
            if (user.company == company) {
                MessagesRegister[0] = "Tên công ty này đã có người đăng ký."
            }
            if (user.email == email) {
                MessagesRegister[2] = "Email này đã có người đăng ký."
            }
            if (user.phone == phone) {
                MessagesRegister[3] = "Số điện thoại này đã có người đăng ký."
            }
        })
    }

    MessagesRegister.forEach((message, index) => {
        MessagesRegisterElement[index].innerHTML = `<span style="color: red; font-size: 0.8rem">${message}</span>`
    })
    if (MessagesRegister.every(message => message == "")) {
        users.push({
            company,
            name: fullname,
            email,
            phone,
            password
        })
        localStorage.setItem("users", JSON.stringify(users))
        document.querySelector("#message-register-success").classList.replace("d-none", "d-flex")
        setTimeout(() => {
            window.location = "./"
            document.querySelector("#message-register-success").classList.replace("d-flex", "d-none")
        }, 3000)
        setTimeout(() => {
            window.location = "./"
        }, 3000)
    }
}