class ServiceApi {
    static login(data) {
        return new Promise((resolve) => {
            fetch("http://127.0.0.1:3008/api/login",{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              }).then(response => response.json())
                .then(json => {
                   console.log("登录 "+ data.username)
                   resolve(json)
                })
                .catch(ex => console.log('parsing failed', ex));
                
            
        })
    }
    static getTpl(data) {
        return new Promise((resolve) => {
            fetch("http://127.0.0.1:3008/api/result",{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              }).then(response => response.json())
                .then(json => {
                   resolve(json)
                })
                .catch(ex => console.log('parsing failed', ex));
        })
    }
}
export default ServiceApi;