    fetch('http://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=26c8bdd6cb72495685575001723f30af')
    .then(response => response.json())
        .then((data) => {
        console.log(data)
        data.articles.forEach(elt => {

            let authorName = elt.author;
            let title = elt.title;
            let text = elt.description;
            let img = elt.urlToImage;
            let link = elt.url;
            
                output.innerHTML +=   
                `<article>
                    <h3>${title}</h3>
                    <img src="${img}" alt="">
                    <p>${text}</p>
                    <a href="${link}">READ MORE</a>
                </article>`
        })
    })

