const dataFetcher = async function (url){
     
   return (await fetch(url)).json()
}

export {dataFetcher}