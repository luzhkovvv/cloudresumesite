
async function updatecounter(){
    let path = window.location.host + window.location.pathname
    let url = 'https://pplqowtiue.execute-api.us-east-1.amazonaws.com/counter?path=' + path
    let response = await fetch(url)
    let json = await response.json()
    document.getElementById("counter").innerText = json.count;
}

updatecounter();
