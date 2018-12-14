import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';
import { connect } from 'react-redux';




class Header extends Component {

    render() {
        const { focused, handleFocus, handleBlur } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60b;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe61c;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleOnMouseEnter, handleOnMouseLeave, handleOnClick } = this.props;
        const jsList = list.toJS();
        const listData = [];

        for (let index = (page - 1) * 10; index < page * 10; index++) {
            if (jsList[index]) {
                listData.push(
                    <SearchInfoItem key={jsList[index]}>{jsList[index]}</SearchInfoItem>
                )
            }
        }



        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => (handleOnClick(page, totalPage, this.spin))}>
                            <i className="iconfont spin" ref={(spin) => {this.spin = spin}}>&#xe851;</i>
                            换一换
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {listData}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
}



const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
        mouseIn: state.get('header').get('mouseIn')
    }
}
const mapDisPatchToProps = (dispath) => {
    return {
        handleFocus() {
            dispath(actionCreators.searchList())
            dispath(actionCreators.searchFocus());
        },
        handleBlur() {
            dispath(actionCreators.searchBlur());
        },
        handleOnMouseEnter() {
            dispath(actionCreators.handleOnMouseEnter())
        },
        handleOnMouseLeave() {
            dispath(actionCreators.handleOnMouseLeave())
        },
        handleOnClick(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, "");
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);    
            } else {
                originAngle = 0;   
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)'

            let newPage;
            if (page < totalPage) {
                newPage = page + 1;
            } else {
                newPage = 1;
            }

            dispath(actionCreators.handleOnClick(newPage))
        }
    }

}

export default connect(mapStateToProps, mapDisPatchToProps)(Header);