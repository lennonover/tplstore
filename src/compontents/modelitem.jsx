import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'



class Modelitem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        /** */
    }

    render(){
        let {imgsrc,name,time,downsrc,looksrc,issuessrc} = this.props;
        return (
            <Item >
                <img src={imgsrc} alt={name}/>
                <div className="name">{name} </div>
                <div className="time">{time} </div>
                <div className="edit">
                    <a href={issuessrc} className="comment"></a>
                    <a href={downsrc} className="down"></a>
                    <a href={looksrc} className="look"></a>
                </div>
            </Item>
        )
    }
}
 const Item = styled.div`
    padding: 10px;
    width: 19%;
    height: 270px;
    background: #fff;
    float: left;
    margin: .5%;
    &:hover {
        color: #fff;
        background: #000;
        box-shadow: 4px 4px #fe67cb,-4px -4px #67ccff;
    }
    img {
        height: 190px;
        width: 100%;
    }
    .name{
        margin-top: 8px;
    }
    .time {
        font-size: 12px;
        color: #ababab;
    }
    .edit .look,.edit .comment,.edit .down{
        float:right;
        height: 16px;
        width: 16px;
        margin-left: 10px;
        background: url(./images/list/look.png);
    }
    .edit .look:hover {
        cursor:pointer;
        background: url(./images/list/look_hover.png);
    }
    .edit .comment {
        background: url(./images/list/comment.png);
        &:hover {
            cursor:pointer;
            background: url(./images/list/comment_hover.png);
        }
    }
    .edit .down {
        background: url(./images/list/down.png);
        &:hover {
            cursor:pointer;
            background: url(./images/list/down_hover.png);
        }
    }
    
    
 `

Modelitem.propTypes = {
    imgsrc:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    downsrc:PropTypes.string.isRequired,
    looksrc: PropTypes.string.isRequired,
    issuessrc: PropTypes.string.isRequired
}
export default Modelitem;
