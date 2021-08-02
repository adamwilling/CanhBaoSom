// Biến lưu trữ thông báo mới
var NewNotification = [
    {
        type: "Đề xuất",
        by: "Nguyễn Văn A",
        date: "15/02/2020"
    },
    {
        type: "Công Việc",
        by: "Nguyễn Văn B",
        date: "26/12/2020"
    },
    {
        type: "Đề xuất",
        by: "Trần Văn D",
        date: "15/06/2021"
    },
    {
        type: "Đề xuất",
        by: "Nguyễn Văn E",
        date: "15/02/2021"
    }
]
var Notification = []
// Xử lí
var NewTotalNotify_Element = document.querySelector('i.far.fa-bell > .badge')
var NewTotalNotify = NewTotalNotify_Element.innerText
if (NewNotification.length == 0) {
    NewTotalNotify.style.display = "none";
} else {
    NewTotalNotify = NewNotification.length
}