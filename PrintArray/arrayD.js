const friends = ["Jerry", "Plant", "Birds", "Pond"]



// function pushffriend(){
//     let nf = document.getElementById("newfriend").value
//     document.getElementById("mybutton").click(){
//     friends.push(nf)
// }
// }

document.getElementById("myform").addEventListener("submit", pushfriend);

function pushfriend(e) {
    e.preventDefault()
    const nf = document.getElementById("inputField").value
    console.log(nf)
    const printarray= document.getElementById('printarray')
    let list = document.createElement("li")
    list.innerText = nf
    printarray.append(list)
}



for(var i = 0; i < friends.length; i++){
    let template = document.getElementById("printarray")
    let list = document.createElement("li")
    list.innerHTML = friends[i]
    template.append(list)
    
}
