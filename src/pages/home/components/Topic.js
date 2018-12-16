import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                <TopicItem>
                    <img src='//upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='社会热点' />
                    社会热点
                </TopicItem>
            </TopicWrapper>
        )
    }
}

export default Topic;