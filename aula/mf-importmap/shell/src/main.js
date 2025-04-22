const rotas = [
  {
    path:'/', 
    modulo:'mf-busca'
  }, 
  {
    path:'/pedidos', 
    modulo:'mf-pedidos'
  }
]

const container = document.querySelector("#app");

document.querySelectorAll("nav ul li a").forEach(ancora => {
  ancora.addEventListener("click", async function (event) {
    event.preventDefault();
    const path = this.getAttribute("href");
    console.log('precisamos navegar para =>',path)
    const mfAlvo = rotas.find(r => r.path == path)
    console.log('mfAlvo',mfAlvo)
    const {renderizar}  = await import(mfAlvo.modulo)

    console.log('renderizar',renderizar)
    renderizar(container)

  })
}
)