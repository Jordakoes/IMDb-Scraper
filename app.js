function check() {

    document.querySelector('.grid-container').style.display = "grid";
    // document.querySelector('#f1').innerHTML = document.myform.name.value;

    //OMDb scraping using jQuery 
    $.getJSON('https://www.omdbapi.com/?apikey=d7a28dd2&t=' + encodeURI(document.myform.name.value)).then(function(response)

    {
        //console.log(response);
        console.log(response);

        // console.log(response.Title);
        var title = response.Title;
        var year = response.Year;
        //If there is no title or year available then:
        if(title !== "N/A" || "undefined"){
            $('#title').text(title);
            $('#year').text(year);
        }

        //console.log(response.Runtime);
        var runtime = response.Runtime;
        //If there is no duration avaiable then:
        if(runtime !== "N/A" || "undefined"){
            $('#duration').text(runtime);
        }
        
        //console.log(response.Poster);
        var image = response.Poster;
        //If there is no poster available then:
        if(image !== "N/A" || "undefined"){
            $('#poster').attr('src', image);
        }

        //console.log(response.Plot);
        var plot = response.Plot;
        //If there is no plot available then:
        if(plot !== "N/A" || "undefined"){
            $('#plot').text(plot);
        }

        //console.log(response.Ratings[0].Value);
        var rating = response.Ratings[0].Value;
        if(rating !== "N/A" || "undefined"){
            $('#IMDb-btn').text("IMDb " + rating);
        }

        //console.log(response.Ratings[0].Value);
        var rating = response.Ratings[1].Value;
        if(rating !== "N/A" || "undefined"){
            $('#RT-btn').text("Rotten " + rating);
        }
    });
  }