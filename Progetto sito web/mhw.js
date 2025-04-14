// EventListener

document.addEventListener("DOMContentLoaded", function () {
    var hiddenCards = document.querySelectorAll('.product-card.hidden');
    var showMoreBtn = document.getElementById('show-more-btn');

    showMoreBtn.addEventListener('click', function () {
        hiddenCards.forEach(function (card) {
            card.classList.remove('hidden');
        });

        showMoreBtn.style.display = 'none';
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.querySelector(".announcement-bar .close-btn");

    closeBtn.addEventListener("click", function () {
        this.parentElement.remove();
    });
  });
  


  // document.CreateElement

  document.addEventListener("DOMContentLoaded", function () {
    const notifica = document.createElement("div");
    notifica.style.position = "fixed";
    notifica.style.top = "60px";
    notifica.style.left = "80px";
    notifica.style.backgroundColor = "#fff";
    notifica.style.padding = "20px";
    notifica.style.border = "1px solid #ccc";
    notifica.style.borderRadius = "10px";
    notifica.style.boxShadow = "0 4px 10px rgba(1, 0, 0, 0.6)";
    notifica.style.zIndex = "1000";
    notifica.style.fontFamily = "sans-serif";
  
    
    const domanda = document.createElement("p");
    domanda.textContent = "Conosci Iginio Massari?";
    domanda.style.marginBottom = "10px";
    notifica.appendChild(domanda);
  
    
    const btnSi = document.createElement("button");
    btnSi.textContent = "Sì";
    btnSi.style.marginRight = "10px";
    btnSi.style.padding = "5px 10px";
    btnSi.style.borderRadius = "15px";
    btnSi.style.cursor = "pointer";
    btnSi.style.backgroundColor = "rgba(0, 128, 0, 0.8)"
    
  
    const btnNo = document.createElement("button");
    btnNo.textContent = "No";
    btnNo.style.padding = "5px 10px";
    btnNo.style.borderRadius = "15px";
    btnNo.style.cursor = "pointer";

  

    btnSi.addEventListener("click", () => {
      alert("Grande!");
      notifica.remove();
    });
  
    btnNo.addEventListener("click", () => {
      alert("male male male");
      notifica.remove();
    });
  
    
    notifica.appendChild(btnSi);
    notifica.appendChild(btnNo);
    document.body.appendChild(notifica);
  });
  

//Modifica dinamicamente immagine tramite addeventlistener che modifica l' src nel CSS

window.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero");

  if (new Date().getHours() >= 23 || new Date().getHours() <= 7) {
    
    heroSection.style.backgroundImage = "url('luna.jpg')";
  } else {
    
    heroSection.style.backgroundImage = "url('hero2.jpg')";
  }

  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";
});


// modifico dinamicamente classi degli elementi agendo con la proprietà classlist nel mio caso ho deciso di usarlo come cambio tema 
// ancora da rifinire ma ho riscontrato difficoltà

/* 

const themeToggleButton = document.getElementById("themeToggle");
const body = document.body;


if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  body.classList.remove("light-theme");
  themeToggleButton.textContent = "Passa a Tema Chiaro";
} else {
  body.classList.add("light-theme");
  body.classList.remove("dark-theme");
  themeToggleButton.textContent = "Passa a Tema Scuro";
}


themeToggleButton.addEventListener("click", () => {
  
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themeToggleButton.textContent = "Passa a Tema Chiaro";
    localStorage.setItem("theme", "dark"); 
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeToggleButton.textContent = "Passa a Tema Scuro";
    localStorage.setItem("theme", "light"); 
  }
});

*/