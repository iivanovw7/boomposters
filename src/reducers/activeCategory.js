export default function (state = null, action) {
    switch(action.type) {

        case 'CATEGORY_SELECTED':
            return action.payload;
        case 'PAGE_SELECTED':
            return action.payload;
    }

    return null;
}