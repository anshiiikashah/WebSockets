const socket = new WebSocket('ws://localhost:3000')

function sendMessage(e){
    e.preventDefault()
    const input = document.querySelector('input')
    if (input.value){
        socket.send(input.value)
        input.value = ""
    }
    input.focus()
}
document.querySelector('form')
.addEventListener('submit',sendMessage)

socket.addEventListener("message",({data})=>{
    const listEl = document.createElement('listEl')
    listEl.textContent = data
    document.querySelector('ul').appendChild(listEl)
})