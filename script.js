window.onload = function () {
    var comment = document.getElementById("comment")
    var user = document.getElementById("user")
    var push = document.getElementById("push")
    var now = new Date()

    push.onclick = function () {
        console.log(user.value)
        console.log(comment.value)
        var now = new Date()
        var year = now.getFullYear()
        var month = now.getMonth()
        var date = now.getDate()
        var hour = now.getHours()
        var min = now.getMinutes()
        if (min < 10) {
            min = '0' + min
        }
        console.log(year + '/' +  month + '/' + date + ' ' + hour + ':' + min)
    }
}
