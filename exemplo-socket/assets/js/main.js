const socket = io()
socket.on('vai', (result) => {
  console.log(result)
})
