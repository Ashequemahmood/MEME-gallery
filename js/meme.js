const loadData = () => {
    const URL = "https://meme-api.com/gimme/20";
    fetch(URL)
    .then(res => res.json())
    .then(data => showData(data.memes))
    
}

const showData = memes => {
    console.log(memes);
    memes.forEach(meme => {
        console.log(meme.url)
        const memeContainer = document.getElementById('section');
        const memeDiv = document.createElement('div');
        memeDiv.innerHTML = `
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="${meme.url}" alt="Shoes" /></figure>
            
            </div>
            
        `
        memeContainer.appendChild(memeDiv)
    })
}



loadData();