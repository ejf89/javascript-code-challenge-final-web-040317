$(document).ready(function(){
    formListener()
})



function formListener(){
    $("#photo-form").submit(function(event){
        event.preventDefault()

        let link = $("#linkInput").val()
        let caption = $("#capInput").val()
        photoPoster(link, caption)
        this.reset()
    })
}

function photoPoster(link, caption){
    let img = new Image(link)
    let comment = new Comment(caption)
    let list = $("#photo-list")

    list.append(img.render())
    list.append(comment.render())
}
