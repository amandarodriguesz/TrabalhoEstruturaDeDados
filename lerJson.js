var div = document.getElementById('cabeca');
var section = document.getElementById('tabela');

//Ler o JSON
var requestURL = 'https://api.myjson.com/bins/p6vm9';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

//Funcoes ao Carregar o HTML
request.onload = function() {
    var listAlgoritmos = request.response;
    setarHeader(listAlgoritmos);
    mostrarAlgoritmos(listAlgoritmos);
   
  }

  //Elementos da cabeca
  function setarHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.setAttribute("class","display-1");
    myH1.textContent ='Alunos: '+jsonObj['alunos'];
    div.appendChild(myH1);
  
   

    var Vetores = jsonObj['vetores_utilizados'];
       
      var myVetores = document.createElement('div');
      myVetores.setAttribute("class","col-sm-12");

      var myPara = document.createElement('div');
      myPara.setAttribute("class","row");
      myPara.textContent = 'Turma: ' + jsonObj['turma'];
      

      var myVet1 = document.createElement('div');
      myVet1.setAttribute("class","row");
      var myVet2 = document.createElement('div');
       myVet2.setAttribute("class","row");
      var myVet3 = document.createElement('div');
      myVet3.setAttribute("class","row");
 
      myVet1.textContent = 'Tamanho do Vetor no Melhor Caso:' + Vetores.tamanho_vetor_melhor_caso;
      myVet2.textContent = 'Tamanho do Vetor no Pior Caso:' + Vetores.tamanho_vetor_pior_caso;
      myVet3.textContent = 'Tamanho do Vetor no Médio Caso:' + Vetores.tamanho_vetor_caso_medio;   

      myVetores.appendChild(myPara);
      myVetores.appendChild(myVet1);
      myVetores.appendChild(myVet1);
      myVetores.appendChild(myVet2);
      myVetores.appendChild(myVet3);

  
      div.appendChild(myVetores);

  }



    //Mostrando o JSON na Section
  function mostrarAlgoritmos(jsonObj) {
    var algoritmos = jsonObj['algoritmos'];
        
    for (var i = 0; i < algoritmos.length; i++) {
      var myArticle = document.createElement('tr');
      var myH2 = document.createElement('td');
      var myPara1 = document.createElement('td');
      var myPara12 = document.createElement('button');
      var myPara2 = document.createElement('td');
      var myPara3 = document.createElement('td');
      var myPara4 = document.createElement('td');
      var myPara5 = document.createElement('td');
      var myPara6 = document.createElement('td');
      var myPara7 = document.createElement('td');
  

      myH2.textContent = algoritmos[i].nome_algoritmo;
      myPara12.setAttribute("data-target", '#'+algoritmos[i].url_codigo_algoritmo );
      myPara12.setAttribute('data-toggle','modal');
      myPara12.setAttribute("class","btn btn-secondary");
       myPara12.setAttribute("type","button");
       myPara12.textContent='Acesse';

      myPara2.textContent =  algoritmos[i].complexidade_melhor_caso;
      myPara3.textContent =  algoritmos[i].complexidade_pior_caso;
      myPara4.textContent = algoritmos[i].complexidade_caso_medio;
      myPara5.textContent =  algoritmos[i].tempo_execucao_melhor_caso;
      myPara6.textContent = algoritmos[i].Ttempo_execucao_pior_caso;
      myPara7.textContent =  algoritmos[i].tempo_execucao_caso_medio;
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myPara1.appendChild(myPara12);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myPara5);
      myArticle.appendChild(myPara6);
      myArticle.appendChild(myPara7);
  
      section.appendChild(myArticle);
    }



  }