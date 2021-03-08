const data = () => {
    return fetch ("https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json")
    .then (response => response.json())
    .then(parsedResponse =>{
        return parsedResponse;
    })
}
 const inventorArray = data();

const HTMLRep = (womenObj)=>{
    return `
    <h3>Inventor:${womenObj.inventor}</h3>
    <p>Invention:${womenObj.invention}</p>
    <p>More details:${womenObj.moreDetails}`
}
const displayList = () =>{
    data()
    .then(response =>{
    for (const obj of response) {
        document.querySelector("#womenInventors").innerHTML +=HTMLRep(obj);
    }
})
}

displayList();