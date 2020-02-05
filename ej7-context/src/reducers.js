const rootReducer = (state, action) => {
    switch(action.type) {
      case 'login':
        return { ...state, user: action.user }
      case 'logout':
        return { ...state, user: null }
      case 'tema':
          return { ...state, tema: action.tema }
      case 'products':
          return { ...state, products: action.products }
      default:
        return state || {
          tema: 'dark',
          modal: { type: 'error' }
        }
    }
}

export default rootReducer
