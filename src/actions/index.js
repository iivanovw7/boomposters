export function selectCategory(category) {
    return {
        type: 'CATEGORY_SELECTED',
        payload: category
    }
}

export function pageSelector(page) {
    return {
        type: 'PAGE_SELECTED',
        payload: page
    }
}

