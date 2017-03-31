module.exports = (state={}, action) => {
    switch (action.type) {
        case "NEW_DATE":
            console.log("NEW BRAND")
            return state;
    
        default:
        return state;
    }
}