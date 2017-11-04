const socket = io()
const $msg = document.querySelector('.msg')
const $sendMsg = document.querySelector('.send-msg')
const $sendMsgContent = document.querySelector('.send-msg__content')

socket.on('msg', (result) => {
  $msg.innerHTML += `<br> ${result.msg}`
})

$sendMsg.addEventListener('submit', (event) => {
  event.preventDefault()
  const msg = { msg: $sendMsgContent.value }

  $.post('/msg', msg,(result) => {
    $sendMsgContent.value = ''

  })
})
