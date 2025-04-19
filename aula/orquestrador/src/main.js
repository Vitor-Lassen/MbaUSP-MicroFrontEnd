import "./style.css";

const rotas = [
  {
    path: "/",
    source: "http://localhost:8002",
    name: "Home",
  },
  {
    path: "/produtos",
    source: "http://localhost:8003",
    name: "Produtos",
  },
  {
    path: "/clientes",
    source: "http://localhost:8001",
    name: "Clientes",
  },
];

const navIframe = document.querySelector("#mf-nav");
const containerIframe = document.querySelector("#container");

const pathAtual = window.location.pathname;
const mfInicial = rotas.find((r) => r.path == pathAtual);
if (mfInicial) {
  containerIframe.setAttribute("src", mfInicial.source);
}

navIframe.onload = () => {
  navIframe.contentWindow.postMessage(
    { type: "INICIAR", rotas: rotas },
    "http://localhost:8000"
  );
};

window.addEventListener("message", (event) => {
  if (event.data.type == "NAVEGAR") {
    console.log("Hora de navegar para: ", event.data.destino);
    const mfAlvoNavegacao = rotas.find(
      (r) => r.path == event.data.destino.path
    );
    if (mfAlvoNavegacao) {
      console.log("sinal verde para nacegar ");
      containerIframe.setAttribute("src", mfAlvoNavegacao.source);
      window.history.pushState({}, "", event.data.destino.path);
    }
  }
});

window.addEventListener("popstate", () => {
  const path = window.location.pathname;
  const mfAlvoPop = rotas.find((r) => r.path == path);
  if (mfAlvoPop) {
    containerIframe.setAttribute("src", mfAlvoPop.source);
    console.log('pop sendo feito')
  }
});
