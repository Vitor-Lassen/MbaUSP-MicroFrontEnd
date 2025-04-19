import './style.css'

const rotas = [
  {
    path: '/', 
    source: '',
    name: 'Home',
  },
  {
    path: '/', 
    source: '',
    name: 'Produtos',
  },
  {
    path: '/', 
    source: '',
    name: 'Clientes',
  },
]

const navIframe = document.querySelector('#mf-nav')

navIframe.onload = () =>{
  navIframe.contentWindow.postMessage({type: 'INICIAR', rotas: rotas}, 'http://localhost:8000')
}

console.log(navIframe)