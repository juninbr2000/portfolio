const navButton = document.querySelector('.nav_button');
const nav = document.querySelector('.nav_menu')
const habilityContainer = document.querySelector('.hability_container')

navButton.addEventListener('click', () => {
    nav.classList.toggle('ocult')
})

async function getHability () {

    try{
        const habilityList = await fetch('./skil.json')

        if(!habilityList){
            console.error('ocorreu um erro ao buscar as habilidades')
            hability.innerHTML = '<p>Ocorreu um erro</p>'
        }
        
        const data = await habilityList.json()


        habilityContainer.innerHTML = '';

    // Itera sobre as chaves do objeto
    Object.entries(data).forEach(([key, value]) => {
        const skillHTML = `
            <div class="skill-card">
                <img src="${value.icon}" alt="${key}" class="skill-icon">
                <span>${key.toUpperCase()}</span>
            </div>
        `;

        // Adiciona cada habilidade ao container
        habilityContainer.innerHTML += skillHTML;
    })

    } catch (e) {
        console.error(e)
    }


}

getHability()