const initState = {
    themeId: 1,
}
type InitStateType = {
    themeId: number
}
export const themeReducer = (state = initState, action: ChangeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type ChangeThemeIdType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const) // fix any