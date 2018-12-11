import React from 'react';
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
    SearchWrapper
} from './style'
import { connect } from 'react-redux';

const Header = (props) => {
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
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleFocus}
                            onBlur={props.handleBlur}
                        />
                    </CSSTransition>

                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</i>
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


const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused')
    }
}
const mapDisPatchToProps = (dispath) => {
    return {
        handleFocus() {
            
            dispath(actionCreators.searchFocus());
        },
        handleBlur() {
            
            dispath(actionCreators.searchBlur());
        }
    }

}

export default connect(mapStateToProps, mapDisPatchToProps)(Header);