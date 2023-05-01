const API_URL = "https://randomuser.me/api/?results=30";

/**
 * Cambia la información en el DOM.
 */
async function changeInformation(users) {
  let userhtml = document.getElementById("usuarios");

  

users.map(user=> {
    console.log(user)
    userhtml.innerHTML += `
    <div class="content">
    <div class="card">
    <div class="imagen">
      <img src=${user.picture.large} alt="" /> 
    </div>
    <div class="nombre">
      <p>${user.name.first}</p>
    </div>
    <div class="info">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
    
    </div>
    <div>
      <p >${user.location.city}</p>
      <p >${user.email}</p>
    </div>
    <div class="btns">
      <button>Leer más</button>
      <button>Seleccionar</button>
    </div>
  </div></div>`;
    console.log(userhtml)
  
})

funicon 

Math.floor(Math.random() * 10);

}

/**
 * Obtiene los datos de usuario desde la api.
 */
async function fetchUser() {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log("Error en la petición AJAX:", error);

      return null;
    });
 

  // Almaceno usuario
  let userFetch = response.results ? response.results : null;
  return userFetch;
}

/**
 * Procesa la descarga de usuario y los asigna en el DOM.
 */
async function loadUser() {
  let users = await fetchUser();

  if (users) {
    changeInformation(users);
  
  }
}
window.document.addEventListener("DOMContentLoaded", loadUser);

//[ ]//`


