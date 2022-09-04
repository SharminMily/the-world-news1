const LoadAllNews = async(findNews )=>{    
    //    //
    const url = `https://openapi.programming-hero.com/api/news/category/01=${findNews}`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data)
}

const displayNews = news =>{
    const newsContainer = document.getElementById('news-container');
    news.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `        
              <div class="row g-0 pb-3">
                <div class="col-md-4">
                  <img  src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h2 class="card-title fw-bold">"${news.title}"</h2>
                    <p class="card-text">${news.details.length > 150 ? news.details.slice(0,150) + '...' : details}</p>
                    
                  </div>
                  <div class="d-flex  justify-content-between">
                  <div class="d-flex">
                    <img class=" w-12 h-12 rounded-circle" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="">
                    <div>
                      <h6 class="fw-bold">Jimmy Dane</h6>
                      <p class="card-text"><small class="text-muted"> Jan 31, 2023</small></p>
                    </div>                    
                  </div>
                  <div>
                     <h6><i class="fa-sharp fa-solid fa-eye"> ${news.total_view}</i></h6>      
                  </div>
                   <div>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div>
                          <button><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                </div>
              </div>       
        `;
        newsContainer.appendChild(newsDiv)
    });
}



// const btnEnter = document.getElementById("btn-enter")
// btnEnter.addEventListener("click", function(e){
//     const findNews = ("findNews");
//     console.log(findNews); 
// })

// document.getElementById('btn-enter').addEventListener('click', function(){
//   const btnEnter = findNews.value;
//   // const findNews = btnEnter.value;
//   LoadAllNews(btnEnter);
// })



LoadAllNews();