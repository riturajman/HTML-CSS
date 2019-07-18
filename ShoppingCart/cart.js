document.getElementById("allcards").addEventListener("click", func1);

function func1(e) {
  if (e.target.classList.contains("btn"))
    var mydiv = e.target.parentElement.parentElement;
  searchIt(mydiv);
  }

function searchIt(newelem) {
    const allObj = {
   name : newelem.querySelector("h5").innerText,
   img : newelem.querySelector("img").src,
  price : 100

    }
//   let img2 = img.style.width = "100px"
  var element = document.getElementById("this_is_it");
  
  element.innerHTML = `
          
           <td scope="col"><img src="${allObj.img}"></td>
           <td scope="col">${allObj.name}</td>
           <td scope="col">${allObj.price}</td>
          
  `
 
 
  element.appendChild(row);
}
