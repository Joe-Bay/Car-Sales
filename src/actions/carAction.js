// action suite:
// 1. action creators - functions that create and return action objects
// 2. action objects - objects with a "type" property that describe events that have taken place in the UI
// 3. action types - variables to manage action type strings to avoid hard-to-find bugs

export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const removeFeature = (value) => {
    console.log('is it running? - removeFeature fn')
    return { type: REMOVE_FEATURE, payload: value }
}
export const ADD_FEATURE = 'ADD_FEATURE'
export const addFeature = (value) => {
    return { type: ADD_FEATURE, payload: value}
}