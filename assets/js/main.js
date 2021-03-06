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
        time: "08/02/2001",
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
        time: "08/02/2001",
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

let MessagesLoginElement = document.querySelectorAll("#login form .form-message")

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

MessagesLoginElement = Array.prototype.slice.call(MessagesLoginElement)  // Chuyển đổi từ Nodelist sang Array

LoginElement.onsubmit = (event) => {
    event.preventDefault()
    if (MessagesLoginElement.every(message => message.innerHTML == "")) {
        localStorage.setItem("userLogin", JSON.stringify(userLogin))
        document.querySelector("#message-login-success").classList.replace("d-none", "d-flex")
        setTimeout(() => {
            window.location = "./app"
            document.querySelector("#message-login-success").classList.replace("d-flex", "d-none")
        }, 3000)
    }
}


// Xử lý khi Register
const RegisterElement = document.querySelector("#register form")

let MessagesRegisterElement = document.querySelectorAll("#register form .form-message")

let CompanyElement = document.querySelector("#company")

CompanyElement.oninput = () => {
    company = CompanyElement.value
    checkCompany = users.some(user => user.company == company)
    if (checkCompany) {
        MessagesRegisterElement[0].innerHTML = `<span style="color: red; font-size: 0.8rem">Tên công ty đã tồn tại.</span>`
    } else {
        MessagesRegisterElement[0].innerHTML = ""
    }
}

let FullNameElement = document.querySelector("#fullname")

FullNameElement.oninput = () => {
    fullname = FullNameElement.value
}

let EmailElement = document.querySelector("#email")

EmailElement.oninput = () => {
    email = EmailElement.value
    checkEmail = users.some(user => user.email == email)
    if (checkEmail) {
        MessagesRegisterElement[1].innerHTML = `<span style="color: red; font-size: 0.8rem">Email này đã được sử dụng.</span>`
    } else {
        MessagesRegisterElement[1].innerHTML = ""
    }
}

let PhoneElement = document.querySelector("#phone")

PhoneElement.oninput = () => {
    phone = PhoneElement.value
    checkPhone = users.some(user => user.phone == phone)
    if (checkPhone) {
        MessagesRegisterElement[2].innerHTML = `<span style="color: red; font-size: 0.8rem">Số điện thoại này đã được sử dụng.</span>`
    } else {
        MessagesRegisterElement[2].innerHTML = ""
    }
}

let PasswordElement = document.querySelector("#password")

PasswordElement.oninput = () => {
    password = PasswordElement.value
}

let RePasswordElement = document.querySelector("#repassword")

RePasswordElement.oninput = () => {
    repassword = RePasswordElement.value
    if (repassword != password) {
        MessagesRegisterElement[3].innerHTML = `<span style="color: red; font-size: 0.8rem">Mật khẩu nhập lại không chính xác.</span>`
    } else {
        MessagesRegisterElement[3].innerHTML = ""
    }
}

MessagesRegisterElement = Array.prototype.slice.call(MessagesRegisterElement)  // Chuyển đổi từ Nodelist sang Array

getTimeNow = () => {
    let currentdate = new Date()
    let datetime = currentdate.getHours() + ":"
        + ((currentdate.getMinutes() <= 9) ? "0" + currentdate.getMinutes() : currentdate.getMinutes()) + ":"
        + ((currentdate.getSeconds() <= 9) ? "0" + currentdate.getSeconds() : currentdate.getSeconds()) + " ngày "
        + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear()
    return datetime
}
RegisterElement.onsubmit = (event) => {
    event.preventDefault()
    if (MessagesRegisterElement.every(message => message.innerHTML == "")) {
        users.push({
            company,
            name: fullname,
            time: getTimeNow(),
            email,
            phone,
            password,
            department: "Hội đồng quản trị",
            position: "Chủ tịch",
            set: "admin"
        })
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("userLogin", JSON.stringify(users[users.length-1]))
        document.querySelector("#message-register-success").classList.replace("d-none", "d-flex")
        setTimeout(() => {
            document.querySelector("#message-register-success").classList.replace("d-flex", "d-none")
        }, 3000)
        setTimeout(() => {
            window.location = "./app"
        }, 3000)
    }
}