const api = 'https://champinoneslol.herokuapp.com/all_champs/'

fetch(api)
    .then(response => response.json())
    .then(data => imprimirHTML(data.CHAMPS));


function imprimirHTML(data) {
    data.forEach(champ => {
        console.log(champ);
        const li = document.createElement('li');

        const { img, champName, difficulty, rol, champPresentation } = champ;

        li.innerHTML = `
        <article class="shadow">
            <div class="card">
                <div class="card-cont">
                    <img src = "${img}">
                    <div class="card-text-cont"> 
                        <h1>${champName}</h1>
                        <h3 class="f-400"><strong>${rol}</strong></h3>
                        <h3 class="f-400">Difficulty: <em><strong>${difficulty}</strong></em></h3>
                    </div>
                </div>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${champPresentation}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </article>
        `;
        document.querySelector('#app').appendChild(li);
    });
}