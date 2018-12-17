import style from 'styled-components';

export const HomeWrapper = style.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`
export const HomeLeft = style.div`
    width: 625px;
    margin-left: 15px;
    margin-top: 20px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`
export const HomeRight = style.div`
    width: 240px;
    float: right;
`
export const TopicWrapper = style.div`
    margin-left: -10px;
    padding: 20px 0 10px 0;
    overflow: hidden;
    
`
export const TopicItem = style.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 10px;
    margin-bottom: 10px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border:1px solid #dcdcdc;
    border-radius: 4px;
    img {
        display: block;
        margin-right: 10px;
        float: left;
        width: 32px;
        height: 32px;
    }
`
