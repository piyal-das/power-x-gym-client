const initialState = {
    featureList: [
        { name: 'Progression', icon: 'https://i.imgur.com/B89vhIe.png', image: 'https://i.imgur.com/HE6Yvkj.jpg' },
        { name: 'workout', icon: 'https://i.imgur.com/Aw9gvet.png', image: 'https://i.imgur.com/5OYyj6v.jpg' },
        { name: 'nutrition', icon: 'https://i.imgur.com/PZzTx08.png', image: 'https://i.imgur.com/MxBlwlg.jpg' },
    ],
    programs: [
        { name: 'yoga training session', image: 'https://i.imgur.com/glzHzi6.png' },
        { name: 'cardio training session', image: 'https://i.imgur.com/b7EKjNU.jpg' },
    ],
    specialities: [
        {name: 'free fitness training', icon: 'https://i.imgur.com/TLldmDg.png',},
        {name: 'tons of cardio and strength', icon: 'https://i.imgur.com/Ev2EhsF.png',},
        {name: 'no commitment memberships', icon: 'https://i.imgur.com/ldjFmd1.png',},
    ]
};

const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default homeReducer;