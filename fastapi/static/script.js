var ws = null;

function connect(event) {
    event.preventDefault()
    var itemId = document.getElementById("itemId")
    var token = document.getElementById("token")
    ws = new WebSocket("ws://localhost:8000/items/" + itemId.value + "/ws?token=" + token.value)
    ws.onmessage = function(event) {
        var messages = document.getElementById('messages')
        var message = document.createElement('li')
        var content = document.createTextNode(event.data)
        message.appendChild(content)
        messages.appendChild(message)
    }
}

function sendMessage(event) {
    event.preventDefault()
    var input = document.getElementById("messageText")
    ws.send(input.value)
    input.value = ''
}
