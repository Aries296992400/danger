
export default {
    getItem(key) {
        return localStorage.getItem(key);
    },

    setItem(key, data) {
        return localStorage.setItem(key, data);
    },

    removeItem(key) {
        return localStorage.removeItem(key);
    },
    
    clear() {
        return localStorage.clear();
    },
};
