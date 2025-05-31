const boksEL = document.querySelector(".boks")
        boksEL.addEventListener("click",makePink)
        
        function makePink(){
            boksEL.classList.toggle("pinkclass")
        }