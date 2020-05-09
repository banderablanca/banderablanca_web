export default {
    onAuthStateChanged({ commit }, { authUser }) {
        if (!authUser) {
            commit('RESET_STORE')
            return
        }
        commit('SET_AUTH_USER', { authUser })
    },
    async loadFlags({ commit }) {
        await this.$fireAuth.signInAnonymously()
        const messageRef = this.$fireStore
            .collection('flags')
            .where('visibility', '==', 'public')
            .orderBy("timestamp", "desc")
        try {
            const snapshot = await messageRef.get()
            let flags = []
            snapshot.forEach((doc) => {
                const timestamp = doc.data().timestamp.toDate()
                flags.push({ ...doc.data(), id: doc.id, timestamp: timestamp })
            })

            commit('SET_FLAGS', { flags })
        } catch (e) {
            console.error(e)
            return
        }
    },
    hideBanner({ commit }) {
        commit('SET_BANNER', false)
    }
}