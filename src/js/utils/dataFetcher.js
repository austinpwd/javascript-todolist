const dataFetcher = async function (url=null){
     
    const res =  await fetch(url)
    return await res.json()
}

export default dataFetcher