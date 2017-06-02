$(document).ready(function(){
  $("#photo-form").submit(function(event){
      event.preventDefault()

      let link = $("#linkInput").val()
      let caption = $("#capInput").val()
      photoPoster(link, caption)
      this.reset()
  })
})

function photoPoster(link, caption){

    let img = `<img src="${link}">`
    let comment = `<p>${caption}</p>`

    var list = $("#photo-list")

    list.append(img)
    list.append(comment)
}


// function clearForm(){
//     debugger
//     this.reset()
// }
