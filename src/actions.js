export const inc = () => {
    return {type: 'INC'};
}

export const dec = () => ({type: 'DEC'});

export const rnd = () => {
    return {
        type: 'RND', 
        payload: Math.floor(Math.random()*10)
    };
};

export const res = () => ({type: 'RES'});
