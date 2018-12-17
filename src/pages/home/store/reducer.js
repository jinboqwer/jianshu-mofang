import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: "社会热点",
        imgUrl: "//upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },{
        id: 2,
        title: "手绘",
        imgUrl: "//upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    }]
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        
            
        default: 
            return state;
    }  
}

export default reducer;