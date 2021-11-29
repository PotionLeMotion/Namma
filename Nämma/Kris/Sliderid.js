var slideIndex = 1;
        showSlides(slideIndex);
        //Nupule "järgmine" vajutades liidab arvu juurde, mitu slaidi edasi minna. Arv on määratud real 83.
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        //Nupule "eelmine" vajutades lahutab arvu ehk slaidi tuleb tagasi minna. Arv on määratud real 82.
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        //Slaidishow põhiselgroog.
        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
        }