function check() {

    //resets
    document.querySelector(".result1").style.display = "grid";
    document.querySelector(".result2").style.display = "grid";
    document.querySelector('.result1').style.opacity = 1;
    document.querySelector('.download-animation1').style.display = "none";
    document.querySelector('.result2').style.opacity = 1;
    document.querySelector('.download-animation2').style.display = "none";

    //document.querySelector('#error').style.display = "none";

    $.getJSON('https://api.themoviedb.org/3/search/movie?api_key=3b35407824b1cc23ccf4cd13b04f9784&language=en-US&query='+ encodeURI(document.myform.name.value)).then(function(response) {
        
        //error catching...
            //console.log(response.total_results);
        if(response.total_results < 1) { //check if there is a result
            //if not then
            $('#error').text('No movie found, check your spelling')
            document.querySelector(".result1").style.display = "none";
            document.querySelector(".result2").style.display = "none";
        } else {
            $('#error').text('')
        }

        //log API response to console
        console.log(response);
            
            //console.log(response.results[0].title)
        var title1 = response.results[0].title;
        if(title1 !== "N/A" || "undefined"){
            $('#title1').text(title1);
        } else {
            $('#title1').text('Sukablyt');
        }
            //console.log(response.results[1].title)
        var title2 = response.results[1].title;
        if(title2 !== "N/A" || "undefined"){
            $('#title2').text(title2)
        }

            //console.log(response.results[0].overview);
        var plot1 = response.results[0].overview;
        if(plot1 !== "N/A" || "undefined"){
            $('#plot1').text(plot1);
        }
            //console.log(response.results[1].overview);
        var plot2 = response.results[1].overview;
        if(plot2 !== "N/A" || "undefined"){
            $('#plot2').text(plot2);
        }

            //console.log(response.results[0].release_date);
        var release1 = response.results[0].release_date;
        if(release1 !== "N/A" || "undefined"){
            $('#release1').text(release1);
        }
            //console.log(response.results[1].release_date);
        var release2 = response.results[1].release_date;
        if(release2 !== "N/A" || "undefined"){
            $('#release2').text(release2);
        }

            //console.log(response.results[0].vote_average);
        var imdb = response.results[0].vote_average;
        if(imdb !== "N/A" || "undefined"){
            $('#rating1').text('IMDb '+imdb);
        }
            //console.log(response.results[1].vote_average);
        var imdb2 = response.results[1].vote_average;
        if(imdb2 !== "N/A" || "undefined"){
            $('#rating2').text('IMDb '+imdb2);
        }

            //console.log(response.results[0].poster_path);
        var poster1 = response.results[0].poster_path;
        if(poster1 !== "N/A" || "undefined"){
            $('#poster1').attr('src', 'https://image.tmdb.org/t/p/w500'+poster1);
        }
            //console.log(response.results[1].poster_path);
        var poster2 = response.results[1].poster_path;
        if(poster2 !== "N/A" || "undefined"){
            $('#poster2').attr('src', 'https://image.tmdb.org/t/p/w500'+poster2);
        }
    });
}

//download animation for the first result
 function dlFirst() {
     document.querySelector('.result1').style.opacity = .2;
     document.querySelector('.download-animation1').style.display = "flex";
}
//download animation for the second result
function dlSecond() {
    document.querySelector('.result2').style.opacity = .2;
    document.querySelector('.download-animation2').style.display = "flex";
}