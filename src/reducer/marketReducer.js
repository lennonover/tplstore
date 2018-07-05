import { fromJS } from 'immutable';
const initialState = {
    modelResult:[
        {
            id:1,
            name:"模板名称",
            time:"2018-12-15 12:25:00",
            imgsrc:"http://172.16.115.222:4000/static/img/login_bg.1d1806d.jpg",
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