const initState = {
    themeId: 1 | 2 | 3,
}

type InitStateType = {
    themeId:number
}

export const themeReducer = (state:InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":{
            return {...state,themeId:action.id}
        }
        // дописать

        default:
            return state
    }
}

type ActionType = ChangeThemeIdType

type ChangeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }as const) // fix any