const socket = io()

socket.on('message', content => {
  console.log(content);
})