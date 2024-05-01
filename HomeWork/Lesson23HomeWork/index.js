

const btn = document.getElementById('btn');
let urlGeorgiaUniversiti = "http://universities.hipolabs.com/search?country=Georgia";
const listeorgiaUniversiti = () => 
  fetch(urlGeorgiaUniversiti)
    .then((response) => {
      if(!response.ok){
        throw new Error('Ошибка загрузки'+ response.status)
      }
      return response.json();
    })
    .then((data) => {
      data.forEach(item => {
        console.log(data[0]);
      });
      
    });

btn.addEventListener('click',listeorgiaUniversiti);



