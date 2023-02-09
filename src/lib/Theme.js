import { createContext } from "react"

export const THEME = {
    day: {
        prime: "#DEF5E5",
        secondary: "#BCEAD5",
        accent: "#9ED5C5"
    },
    night:{
        prime: "#0A2647",
        secondary: "#144272",
        accent: "#205295"
    }
}

export const ThemeContext = createContext(THEME.day);