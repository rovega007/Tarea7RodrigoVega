function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myFunction(this);
  }
  xhttp.open("GET", "Series-Ejemplo_2.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("serie");  //accedemos a todos los que tengan SERIE
  let table="<tr>    <th>Nombre</th><th>Generos</th><th>Fecha de Publicacion</th><th>Reparto</th><th>Temporadas</th>   </tr>";
  for (let i = 0; i <x.length; i++) { 

    table += "<tr> <td>" + x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue + "</td> ";

  
    

    table += "<td>";
    const a = x[i].getElementsByTagName("Generos");

    var maxLength=0;
    for(let y = 0; y < a[0].getElementsByTagName("Genero").length; y++){ //a[0] porque solo estamos dentro de Generos que esta solo 1 vez por serie, posicion 0, y obtenemo longitud de sus elementos Genero
      maxLength=y;
    }

    for(let y = 0; y < a[0].getElementsByTagName("Genero").length; y++){ //a[0] porque solo estamos dentro de Generos que esta solo 1 vez por serie, posicion 0, y obtenemo longitud de sus elementos Genero
      
      if(y==maxLength){
        table += a[0].getElementsByTagName("Genero")[y].childNodes[0].nodeValue;
        
      }else{
        table += a[0].getElementsByTagName("Genero")[y].childNodes[0].nodeValue + ","; //a[0] porque estamos dentro Generos solo esta 1 vez por "serie"
      }
      
    }
    table += "</td>";



    
    table += "<td>" + x[i].getElementsByTagName("fechaPublicacion")[0].childNodes[0].nodeValue + "</td>";




    table += "<td>";
    const b = x[i].getElementsByTagName("castReparto");

    var maxLength=0;
    for(let y = 0; y < b[0].getElementsByTagName("cast").length; y++){ //a[0] porque solo estamos dentro de Generos que esta solo 1 vez por serie, posicion 0, y obtenemo longitud de sus elementos Genero
      maxLength=y;
    }

    for(let y = 0; y <b[0].getElementsByTagName("cast").length; y++){
      if(y==maxLength){
        table += b[0].getElementsByTagName("cast")[y].childNodes[0].nodeValue;
        
      }else{
        table += b[0].getElementsByTagName("cast")[y].childNodes[0].nodeValue + ","; //a[0] porque estamos dentro Generos solo esta 1 vez por "serie"
      }
    }
    table += "</td>";


    table += "<td>" + x[i].getElementsByTagName("temporadas")[0].childNodes[0].nodeValue + "</td> </tr>";
    

  }
  document.getElementById("demo").innerHTML = table;
}
