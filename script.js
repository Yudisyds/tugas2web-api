var container = document.querySelector('div.content-wrapper')
var input = document.querySelector('input.input')
var submit = document.querySelector('button.submit')

function getData() {

    submit.innerHTML = 'loading'
    
    $.ajax({
        "async": true,
	"crossDomain": true,
	"url": "https://free-news.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "8d8dd33ad4msh709acc0e1aec7e6p19f204jsn1f73bdcc69e9",
		"X-RapidAPI-Host": "free-news.p.rapidapi.com"
	}
    }).done(function (response) {
        console.log(response.articles);

        var list = response.articles.map( (e) => {
            return `
                <div class="col-md-12">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">${e.author}</strong>
                        <h4 class="mb-1">${e.title}</h4>
                        <div class="mb-1 text-muted">di publish pada : ${e.published_date}</div>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img style="object-fit: cover;" class="bd-placeholder-img" width="200" height="200"  src="${e.media}"/>
                    </div>
                    </div>
                </div>
            `
        }).join('')

        container.innerHTML = list

        submit.innerHTML = 'ambil data'
    });
        
}

submit.addEventListener('click', function(){
    getData()
})