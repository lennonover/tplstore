class ServiceApi {
    static login(name) {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve({
                    code:200,
                    token:584848484848484
                })
                console.log("登录 "+ name)
            },1000)
        })
    }
}
export default ServiceApi;