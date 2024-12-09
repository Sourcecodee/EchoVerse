
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url: string = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=8d02a36fa0f3272e134ae628559e8415&format=json'


const fetchMusic = async () =>{
    const getter = fetch(url, {
        method: "GET" ,
    })
    .then((res)=> res.json())
    .then((data)=> data)


    const response = await getter;

    return response
    // console.log(response)

}

export default fetchMusic