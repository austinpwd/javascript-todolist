const dataFetcher = async function (url){
     
    const res = await fetch(url)
    return await res.json()
}

export default dataFetcher