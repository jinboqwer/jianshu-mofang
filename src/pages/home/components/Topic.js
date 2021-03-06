import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';

class Topic extends Component {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => (
                        <TopicItem key={item.get('id')}> 
                            <img src={item.get('imgUrl')} alt={item.get('title')} />
                            {item.get('title')}
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.get('home').get('topicList')
})

export default connect(mapState, null)(Topic);