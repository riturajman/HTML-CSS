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
            <ul>
            <li>Username: ${data.login}</li>
            <li>Avtar: <img style="width: 80px" src="${data.avatar_url}"></li>
            <li>Bio: ${data.bio}</li>
            <li>Company: ${data.company}</li>
            <li>Followers ${data.followers}</li>
            <li>Following ${data.following}</li>
            <li>Public repos: ${data.public_repos}</li>
            <li>Public gists: ${data.public_gists}</li>
            </ul>
            `
            document.getElementById("to_print").innerHTML = selectdata;
        }
    }
    xhr.send();
}