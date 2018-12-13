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

                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</i>
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
        const { focused, list } = this.props;
        if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                        <SearchInfoList>
                            {list.map((item) => {
                                return(<SearchInfoItem key={item}>{item}</SearchInfoItem>)
                               
                            })}
                             
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
        list: state.get('header').get('list')
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
        }
    }

}

export default connect(mapStateToProps, mapDisPatchToProps)(Header);