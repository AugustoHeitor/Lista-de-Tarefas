let btnSalvar = document.getElementById('botaoSalvar')
let btnExcluir = document.getElementById('botaoExcluir')


/*Pegar o valor digitado no input e adiciona no localstroage*/
document.addEventListener('keypress', (e) => {
   
   if( e.keyCode === 13){
    let txt = document.getElementById('texto').value
 
    let dados = JSON.parse(localStorage.getItem('Produtos'))
 
    if(dados == null){
        dados = []
        estilo = []
    }
 
    let lista = {nome: txt}
 
    if(txt !== ''){
        dados.push(lista)
        localStorage.setItem('Produtos', JSON.stringify(dados))
    }else{
        alert('Preencha o campo de texto para adicionar um tarefa')
    }
 
    location.reload();
   }
 
 })

 /*Pegar o valor digitado no input e adiciona no localstroage*/
btnSalvar.addEventListener('click', () => {
   
   let txt = document.getElementById('texto').value

   let dados = JSON.parse(localStorage.getItem('Produtos'))

   if(dados == null){
       dados = []
   }

   let lista = {nome: txt}

   if(txt !== ''){
       dados.push(lista)
       localStorage.setItem('Produtos', JSON.stringify(dados))
   }else{
       alert('Preencha o campo de texto para adicionar um tarefa')
   }

   location.reload();

})

/*Carrega a página com todos os dados armazenados em localstroage produtos*/
function carregar(){
    let dados = JSON.parse(localStorage.getItem('Produtos'))


    if(localStorage.Produtos){
        if(dados.length === 0){
            localStorage.removeItem('Produtos');
        }
    }

    if(localStorage.Produtos){
        let cxLista = document.createElement('div')
        cxLista.classList.add("cx-lista");
        document.body.appendChild(cxLista)
        let id = 0

        for(let i = 0; i < dados.length; i++){
            let p = document.createElement('p')
            p.classList.add("itemLista");
            p.setAttribute('id', id);
            p.innerHTML = dados[i].nome
            cxLista.appendChild(p)
            id = id+1
        }
    }
    
}

/*Limpa todo o localstroage Produtos*/
btnExcluir.addEventListener('click', () => {
    localStorage.removeItem('Produtos');
    location.reload();
})

/*Remove o item pelo seu id*/
document.addEventListener('click', (e) => {
   if(e.target.className === 'itemLista'){
    let dados = JSON.parse(localStorage.getItem('Produtos'))
    dados.splice(e.target.id, 1)
    localStorage.setItem('Produtos', JSON.stringify(dados))
    location.reload();
   }

})

 