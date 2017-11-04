const $msg = document.querySelector('.msg')
const $sendMsg = document.querySelector('.send-msg')
const $sendMsgContent = document.querySelector('.send-msg__content')

$sendMsg.addEventListener('submit', (event) => {
  event.preventDefault()
  const msg = { msg: $sendMsgContent.value }

  $.post('/msg', msg,(result) => {
    $sendMsgContent.value = ''
    $msg.innerHTML += `<br> ${result}`
  })
})
