
window.onload = () => {
  let defferedPrompt
  var btnAdd = document.getElementById('add')

  btnAdd.addEventListener('click', e => {
    defferedPrompt.prompt()
  })

  
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    defferedPrompt = e
    btnAdd.style.display = 'block'
  })

}


