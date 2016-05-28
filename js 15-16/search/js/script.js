$(document).ready(function () {
        var key = "2560282-275c6f94e9ab1238f0e95e5eb";
        var url = "https://pixabay.com/api/";
        var type = '&image_type=photo';

        function searchPhoto() {
            text = $('#search-text').val();
            $.getJSON(url + '?key=' + key + '&q=' + text + type,
                function (data) {
                    var str = data;
                    console.log("searchPhoto = ", str);
                    var lng = str['hits'].length;
                    console.log('lng = ', lng);
                    resHTML(str);
                    text = "";
                    return true;
                });
        }

        $('#search-icon, #search-submit').on('click', function () {
            searchPhoto();
        });

        $('#search-text').keydown(function (e) {
            if (e.keyCode == 13) {
                searchPhoto();
                return false;
            }
        });

        function resHTML(txt) {
            var str = txt;
            var lng = str['hits'].length;
            $('.photo-wrapper').remove();
            if(lng < 1){
                var noFind = '<div class="photo-wrapper"><h4">Your search ' +
                    ' did not match any documents.</h4>' + '</div>';
                $('.wrapper').append(noFind);
                return;
            }
            if(lng > 40) lng = 40;

            var urlPhoto, author, like, tmpStr, arrHTML;
            arrHTML = '<div id="gallery" class="gallery-wrapper"></div>';
            var prefix = "<div class='photo-wrapper'><h4>Author: ";
            var root = "<img class='photo' src='";

            for (var i = 0; i < lng; i++) {
                tmpStr = "";
                author = str['hits'][i]['user'];
                urlPhoto = str['hits'][i]['previewURL'];
                like = str['hits'][i]['likes'];

                tmpStr = prefix + author + "</h4>" + root + urlPhoto +
                    "\'><p>Likes: " + like + "</p></div>";
                arrHTML += tmpStr;
            }

            var elem = document.getElementById('gallery');
            elem.insertAdjacentHTML("afterBegin", arrHTML);
        }
    }
);
