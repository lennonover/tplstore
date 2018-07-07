import { fromJS } from 'immutable';
const initialState = {
    modelResult:[
        {
            id:1,
            name:"模板名称",
            time:"2018-12-15 12:25:00",
            imgsrc:"https://user-gold-cdn.xitu.io/2018/5/8/1633fba0d68a7018?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1",
            downsrc:"http://172.16.9.7/lennonover/framework/repository/archive.zip",
            looksrc:"http://172.16.9.7/lennonover/framework",
            issuessrc:"http://172.16.9.7/lennonover/framework/issues"
        }
    ]
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_MARKET":
            return state;
        default:
            return state;
    }
}