const dataFetcher = async function (url=null){
     
    const res =  await fetch(url)
    const data = await res.json()
   
    
    return data
}

export default dataFetcher