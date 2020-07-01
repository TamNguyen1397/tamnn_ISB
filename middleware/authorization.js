export default function ({ store, error }) {
    if (process.browser) {
        let numExpirationTime = Number(localStorage.getItem("expiration_time"))
        let numCurrentDateTime = Number(Math.floor(Date.now() / 1000))
        if (numCurrentDateTime > numExpirationTime) {
            store.dispatch("startReLogin");

        }
    }
}
