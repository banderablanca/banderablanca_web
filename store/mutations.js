export default {
    SET_LANG(state, locale) {
        if (state.locales.includes(locale)) {
            state.locale = locale
        }
    },
    SET_AUTH_USER: (state, { authUser }) => {
        if (authUser != null)
            state.authUser = {
                uid: authUser.uid
            }
    },
    SET_FLAGS: (state, { flags }) => {
        state.flags = flags
    },
    SET_BANNER: (state, showBanner) => {
        state.showBanner = showBanner
    }
}