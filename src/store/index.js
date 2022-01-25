import { defineStore } from 'pinia'


export const useUIStore = defineStore('main', {
    state: () => ({
        theme: {},
        navigation: [
            { name: "devlog", to: "Devlog" },
            { name: "about", to: "About" },
        ]
    }),
    getters: {
        getTheme: (state) => {
            return state.theme
        }
    },
    actions: {
        initialiseTheme() {
            const cachedTheme = localStorage.theme ? localStorage.theme: false;
            const userPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (cachedTheme) {
                this.updateTheme(cachedTheme)
            } else if (userPreferDark) {
                this.updateTheme('dark')
                // console.log("setting theme to dark")
            } else {
                this.updateTheme('light')
                // console.log("setting theme to light")
            }
        },

        updateTheme (payload) {
            this.theme = payload
            localStorage.theme = payload
            payload === "light"
                ? document.querySelector("html").classList.remove("dark")
                : document.querySelector("html").classList.add("dark");
        }
    }
})
