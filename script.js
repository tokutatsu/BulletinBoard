window.onload = function () {
    var comment = document.getElementById("comment")
    var user = document.getElementById("user")
    var push = document.getElementById("push")
    var output = document.getElementsByName("output")

    push.onclick = function () {

        var now = new Date()
        var year = now.getFullYear()
        var month = now.getMonth() + 1
        var date = now.getDate()
        var hour = now.getHours()
        var min = now.getMinutes()
        if (min < 10) {
            min = '0' + min
        }
        var time = year + '/' +  month + '/' + date + ' ' + hour + ':' + min
        for (i = 9; i > 0; i--) {
            output[i].textContent = output[i - 1].textContent
        }
        output[0].textContent = time + '  ' + user.value + '  ' + comment.value

    }
}
