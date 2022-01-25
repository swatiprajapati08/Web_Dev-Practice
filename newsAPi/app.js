
console.log('New api');

let apiKey ='0527955e2d0940f3aed5b79560112607';
let source = 'bbc-news';



let newsAccordian = document.getElementById("newsAccordian");

const xhr = new XMLHttpRequest();

//create the AJAX get request

xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);

xhr.onload = function(){
  if(this.status == 200){
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      console.log(articles);
      let str="";
      articles.forEach((element,index) => {
          str += ` <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading${index}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                  <strong>Breaking news ${index + 1} : </strong>${element.title}
              </button>
          </h2>
          <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">${element.content}
              <a href="${element.url}" target="_blank" >Read more here</a></div>
          </div>
      </div> `;
      });
      newsAccordian.innerHTML = str;
  }
  else{
      console.log('Some error occured');
  }
}

xhr.send();



