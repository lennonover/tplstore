import React from 'react';
import { DatePicker , Input , Select ,Pagination } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import actions from '../action/action'
import Item from './modelitem'
import ServiceApi from '../api/api'

import 'antd/dist/antd.css'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modelname:null,
            modeltime:null,
            modeltype:null,
            modeltypes:[{
                typecname:"网安事业一部",
                typeename:"way"
            },{
                typecname:"网安事业二部",
                typeename:"way2"
            }],
            modelResult:[]
        }
        this.searchFunc = this.searchFunc.bind(this);
        this.onchangeModelname = this.onchangeModelname.bind(this);
        this.onchangeModeltime = this.onchangeModeltime.bind(this);
        this.onchangeModeltype = this.onchangeModeltype.bind(this);
        this.onShowSizeChange = this.onShowSizeChange.bind(this);
    }
    componentWillMount() {
        /** */
        
    }
    componentDidMount() {
        /** */
        var that = this;
        ServiceApi.getTpl({user:"admin"}).then(function(Json){
            that.setState({
                modelResult : Json.data
            })
        })
    }
    shouldComponentUpdate(nextdata) {
        /** */
        console.log("shouldComponentUpdate")
        return true;
    }
    searchFunc(){
        console.log(this.state)
    }
    onchangeModelname(event){
        this.setState({
            modelname : event.target.value
        })
    }
    onchangeModeltime(data,modeltime){
        this.setState({
            modeltime
        })
    }
    onchangeModeltype(modeltype){
        this.setState({
            modeltype
        })
    }
    onShowSizeChange(current,pagesize){
        console.log(current,pagesize)
    }
    render(){
        const Option = Select.Option
        return (
            <ModelBd>
                <ModelHd>
                    <HdAddbutton>新增模板</HdAddbutton>
                    <Hdbutton onClick={this.searchFunc}></Hdbutton>
                    <Select  className="model-type" showSearch  placeholder="模板类型" style={{width:130}} onChange={this.onchangeModeltype}>
                        {
                            this.state.modeltypes.map((item,i) => {
                                return (
                                    <Option key={i} value={item.typeename}>{item.typecname}</Option>
                                )
                            })
                        }
                    </Select > 
                    <DatePicker className="model-time" placeholder="创建时间" style={{width:130}} onChange={this.onchangeModeltime}/>
                    <Input className="model-name" placeholder="模板名称" onChange={this.onchangeModelname} style={{width:130}}/>
                </ModelHd>
                <ModelBottom className="clearfix">
                    {
                        this.state.modelResult.map((item,i) =>{
                            return (
                                <Item key={i} name={item.name} time={item.time} imgsrc={item.imgsrc} downsrc={item.downsrc} looksrc={item.looksrc} issuessrc={item.issuessrc}/>
                            )
                        })
                    }
                </ModelBottom>
                <Pagination className="modelpage" onShowSizeChange={this.onShowSizeChange} size="small" total={50}/>
            </ModelBd>
        )
    }
}
const ModelBd = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(./images/list/bg.png);
    .modelpage {
        position: fixed;
        right: 20px;
        bottom: 40px;
        &:after {
            content:"";

        }
    }
   .ant-pagination-item-active {
        font-weight: 500;
        background: none;
        border: none;
   }
    .ant-pagination-prev .ant-pagination-item-link:after {
        content: "";
        display: block;
        height: 24px;
        width: 24px;
        background: url(./images/list/pre.png);
    }
    .ant-pagination-next .ant-pagination-item-link:after {
        content: "";
        display: block;
        height: 24px;
        width: 24px;
        background: url(./images/list/next.png);
    }
    .ant-pagination-prev:hover .ant-pagination-item-link:after {
        background: url(./images/list/pre_hover.png);
    }
    .ant-pagination-next:hover .ant-pagination-item-link:after {
        background: url(./images/list/next_hover.png);
    }
    .ant-calendar-picker-icon:after {
            content: "";
            display: inline=block;
            height: 16px;
            width: 16px;
            background: url(./images/list/cal.png);
    }
    .model-time:hover .ant-calendar-picker-icon:after {
        background: url(./images/list/cal_hover.png);
    }
`
const ModelBottom = styled.div`
    padding: 20px;
`
const ModelHd = styled.div`
    height: 60px;
    line-height: 60px;
    .model-name,.model-type,.model-time{
        border-radius: 0;
        float: right;
        top: 15px;
        margin-right: 8px;
    }
    .model-time input ,.ant-select-selection--single {
        border-radius: 0;
    }

    &:before {
        content:"";
        top: 2px;
        left: 8px;
        position:absolute;
        height: 50px;
        width: 256px;
        background: url(./images/list/hd_bg.png);
    }
    &:after {
        content:"";
        top: 60px;
        left: 8px;
        right: 8px;
        position:absolute;
        height: 9px;
        width: 100%;
        background: url(./images/list/hd_after_bg.png);
    }
`
const Hdbutton = styled.button`
    margin: 17px 8px 0 0;
    float: right;
    height: 28px;
    width: 28px;
    color: #fff;
    text-align: center;
    border: none;
    outline: none;
    background: url(./images/list/search.png) no-repeat center center;
    background-color: #000;
    &:hover{
        cursor: pointer;
    }
`
const HdAddbutton = styled.button`
    position: relative;
    margin: 17px 8px 0 20px;
    float: right;
    height: 28px;
    line-height: 28px;
    width: 80px;
    color: #fff;
    text-align: center;
    border: none;
    outline: none;
    background-color: #000;
    &:before {
        content:"";
        position: absolute;
        top: 0px;
        left: -15px;
        height:28px;
        border-left: 1px dotted #000;
    }
    &:hover{
        cursor: pointer;
    }
`
const mapStateToProps = state => ({
    status: state.marketReducer
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
