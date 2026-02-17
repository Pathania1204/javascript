const url = "httos://jsonplaceholder.typicode.com/users"

async function fetchData(){
    const response = await fetch(url)
    const result = await response.json()
    console.log(result);
}
fetchData()