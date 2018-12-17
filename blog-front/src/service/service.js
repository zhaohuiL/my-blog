
export const fetchData = () => {
    let url = './data.json'
    let data = fetch(url,{method:'get'}).then(res => res.json());
    return data
}
export const fetchAsideData = () => {
    let url='./home.json'
    let data = fetch(url,{method:'get'}).then(res => res.json());
    return data
}