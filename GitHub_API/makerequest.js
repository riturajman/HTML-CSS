document.getElementById("my_form").addEventListener("click", getusername)

function getusername(e){
    e.preventDefault()
    // let check = event.target.value
    // console.log("line 6", check)
    let input = document.getElementById("exampleInputEmail1").value
    // console.log("line 8", input)
    let url = `https://api.github.com/users/${input}`
    // console.log("line 10", url)
    getdata(url)
}

function getdata(x){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', x, true);
    xhr.onload = function(){
        if(this.status == 200){
            const data = JSON.parse(this.responseText)
            const selectdata = `
                                <div class="card" style="width: 18rem;">
                    <img src="${data.avatar_url}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Username: ${data.login}</h5>
                        <p class="card-text">Bio: ${data.bio}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Company: ${data.company}</li>
                        <li class="list-group-item">Followers: ${data.followers}</li>
                        <li class="list-group-item">Following: ${data.following}</li>
                        <li class="list-group-item">Public repos: ${data.public_repos}</li>
                        <li class="list-group-item">Public gists: ${data.public_gists}</li>
                    </ul>
                    </div>            
                    `
            document.getElementById("to_print").innerHTML = selectdata;
        }
    }
    xhr.send();
}