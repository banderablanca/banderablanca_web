export default {
    isLoggedIn: (state) => state.authUser?.id,
    getLocales: (state) => state.locales,
  }