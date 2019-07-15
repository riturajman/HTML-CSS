const friends = ["Jerry", "Plant", "Birds", "Pond"]

for(var i = 0; i < friends.length; i++){
    let template = document.getElementById("printarray")
    let list = document.createElement("li")
    list.innerHTML = friends[i]
    template.append(list)
    
}