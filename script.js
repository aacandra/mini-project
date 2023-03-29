// <!-- Search Auto Complete -->


function autocomplete(inp, arr) {
  
    var currentFocus;
    
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        
        this.parentNode.appendChild(a);
        
        for (i = 0; i < arr.length; i++) {
          
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            
            b = document.createElement("DIV");
            
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function(e) {
                
                inp.value = this.getElementsByTagName("input")[0].value;
                
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
  
    function addActive(x) {
      
      if (!x) return false;
      
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  
  var countries = ["A Beautiful Mind", "Ali", "American Beauty", "Avatar",  "Batman", "Bad Cops", "Casino", "Casino Royale", "Cabble Guy", "The Dark Knight","Die Hard", "Equilibrium","Fight Club", "Forest Gump", "Gladiator", "Home Alone", "Inception", "Indiana Jones", "Kick Ass", "Last Samurai", "Magnificient", "Men In Black", "Nice Guy", "Open Order", "Quick Sands", "Robocop", "Sentinel", "UFO", "Vintage", "X Men", "Young Guns", "Zorro"];
  
  
  autocomplete(document.getElementById("myInput"), countries);
  
  
  
  
  
//   Scroll Navbar 
  
  
        const navEl = document.querySelector('.navbar');
          window.addEventListener('scroll', () => {
            if (window.scrollY >= 56) {
          navEl.classList.add('navbar-scrolled');
            } else if (window.scrollY < 56) {
          navEl.classList.remove ('navbar-scrolled');
  
        }
      });
  

//Icon Hover  
     
  
        var img1 = document.getElementById("img-1");
        var img2 = document.getElementById("img-2");
        var img3 = document.getElementById("img-3");
        var img4 = document.getElementById("img-4");
  
        function mouseIn(ele) {
          if (ele == 1) {
              img1.setAttribute("src","./assets/image/twitter-color.png");
          } else if (ele == 2) {
              img2.setAttribute("src","./assets/image/facebook-color.png"); 
          } else if (ele == 3) {
              img3.setAttribute("src","./assets/image/instagram-color.png");
          } else {
              img4.setAttribute("src","./assets/image/youtube-color.png");
          }
        }
  
        function mouseOut(ele) {
          if (ele == 1) {
              img1.setAttribute("src", "./assets/image/twitter.png");
          } else if (ele == 2) {
              img2.setAttribute("src", "./assets/image/facebook.png"); 
          } else if (ele == 3) {
              img3.setAttribute("src", "./assets/image/instagram.png");
          } else {
              img4.setAttribute("src", "./assets/image/youtube.png");
          }
        }
  
  
//    Alert
  
        document.getElementById(featured-movie).onclick = function () {
          alert('This Movie will be Avalable Soon')
        }  
  
  
   
      
  
  