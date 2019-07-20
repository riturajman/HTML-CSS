document.getElementById("my_form").addEventListener("click", getValues)

//function to get selected values
function getValues(e){
    event.preventDefault()
    var region = document.getElementById("exampleFormControlSelect1").value
    var sex_1 = document.getElementById("exampleFormControlSelect2").value
    var sex = sex_1.toLowerCase()
    let url = `https://uinames.com/api/?gender=${sex}&region=${region}&amount=6`
    requestData(url)
}

function requestData(x) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", x, true)
    xhr.onload = function(){
        if(this.status === 200){
            const data = JSON.parse(this.responseText)
            let output = ''
            data.forEach(function(data){
                output += `
                <div class="card" style="width: 18rem;">
                <div class="card-header">
                First Name: ${data.name}
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Surname: ${data.surname}</li>
                <li class="list-group-item">Gender: ${data.gender}</li>
                <li class="list-group-item">Region: ${data.region}</li>
                </ul>
                </div>`
            });
            document.getElementById("printHere").innerHTML = output;
        }
    }
    xhr.send();
}