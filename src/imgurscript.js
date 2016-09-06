if (document.location.host == "i.imgur.com") {
    document.location.href = document.location.protocol + "//imgur.com/" + document.location.pathname.match(/[a-zA-Z0-9_\+\-]+/)
}
else {
    var posts = document.getElementsByClassName("post-image")

    for (var i = 0; i < posts.length; i++) {
        (function() {
            var post = posts[i];
            
            var sources = post.getElementsByTagName("source")

            for (var j = 0; j < sources.length; j++) {
                var source = sources[j];
                
                if (source.src.match(/\.mp4/))
                {
                    var message = document.createElement("div")
                    message.style = "color:#FF0000"
                    message.innerText = "warning: video"
                    source.parentElement.parentElement.insertBefore(message, source.parentElement.parentElement.childNodes[0])

                    return
                }
            }

            var gifs = post.getElementsByTagName("img")

            for (var j = 0; j < gifs.length; j++) {
                var gif = gifs[j];

                if (gif.src.match(/\.gif/)) {
                    var message = document.createElement("div")
                    message.style = "color:#FF0000"
                    message.innerText = "warning: gif"
                    source.parentElement.parentElement.insertBefore(message, source.parentElement.parentElement.childNodes[0])

                    return
                }
            }
        })()
    }
}
