const digitalCurrentTime = () => {
  const date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  // LOGIC
  if (hour == 0) {
    hour = 12
  }
  if (hour > 12) {
    hour = hour - 12
  }

  document.querySelector('.hour').innerHTML = hour < 10 ? '0' + hour : hour
  document.querySelector('.minute').innerHTML =
    minute < 10 ? '0' + minute : minute
  document.querySelector('.second').innerHTML =
    second < 10 ? '0' + second : second
}

setInterval(() => {
  digitalCurrentTime()
}, 1000)

digitalCurrentTime()

const wrapper = document.getElementById('wrapper')
const layer = document.getElementById('layer')

window.addEventListener('load', () => {
  wrapper.style.position = 'absolute'
  wrapper.style.animation = 'animateLeft 1s ease'
  wrapper.style.position = 'relative'
  setTimeout(() => {
    layer.style.animation = 'animateBackground 4s ease'
    layer.style.backgroundColor = 'transparent'
  }, 800)
})
