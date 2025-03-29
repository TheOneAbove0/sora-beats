"use client"
import React, { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

import GetUser from "@/services/server/users/GetUser";
import { decrypt } from "@/utils/decoding";

import { useThemeStore } from "@/store/theme-store";
import { useAuthStore } from "@/store/auth-store";
import { useUserStore } from "@/store/user-store";
import { useAppStore } from "@/store/app-store";

import Loading from "../ui/loading/Loading";

import '@/styles/globals.scss'

const ThemeProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [user, setUser] = useState<User>(null)
    const [loading, setLoading] = useState<boolean>(true)

    // Retrieve darkMode and its setter separately to keep snapshots cached.
    const darkMode = useThemeStore((state) => state.darkMode)
    const setInitialDarkMode = useThemeStore((state) => state.setInitialDarkMode)

    // Similarly split the auth store values.
    const token = useAuthStore((state) => state.token)
    const userId = useAuthStore((state) => state.id)
    const setInitialAuth = useAuthStore((state) => state.setInitialAuth)

    // And the app store values.
    const currentMusic = useAppStore((state) => state.currentMusic)
    const setInitialApp = useAppStore((state) => state.setInitialApp)

    const login = useUserStore((state) => state.login)

    useEffect(() => {
        if (!currentMusic) {
            if (!localStorage.getItem(process.env.NEXT_PUBLIC_THEME_STORE)) {
                localStorage.setItem(process.env.NEXT_PUBLIC_THEME_STORE, "false")
            } else {
                const darkModeItem = localStorage.getItem(process.env.NEXT_PUBLIC_THEME_STORE) === "true"
                setInitialDarkMode(darkModeItem)
            }

            if (!localStorage.getItem(process.env.NEXT_PUBLIC_APP_STORE)) {
                localStorage.setItem(process.env.NEXT_PUBLIC_APP_STORE, JSON.stringify({
                    currentMusic: null,
                    isPlaying: false,
                    playList: [],
                    playListId: "",
                    volume: 1,
                    repeatType: "all",
                    shuffleIndex: [],
                    currentMusicTime: 0,
                }))
            } else {
                const appItem: AppLocalStorage = JSON.parse(localStorage.getItem(process.env.NEXT_PUBLIC_APP_STORE)!)
                setInitialApp(appItem)
            }
        }
        setLoading(false)
    }, [])

    useEffect(() => {
        const fetchUser = async (id: number = userId) => {
            const usr = await GetUser(id)
            setUser(usr.data)
        }

        if (!token) {
            if (localStorage.getItem(process.env.NEXT_PUBLIC_AUTH_STORE)) {
                const authItem: AuthLocalStorage = JSON.parse(localStorage.getItem(process.env.NEXT_PUBLIC_AUTH_STORE)!)
                const currentTime = new Date().getTime()
                const setTime = new Date(authItem.set_at + Number(process.env.NEXT_PUBLIC_AUTH_TOKEN_CREDIT) * 3600000).getTime()

                if (setTime < currentTime) {
                    localStorage.removeItem(process.env.NEXT_PUBLIC_AUTH_STORE)
                    setUser(null)
                } else {
                    setInitialAuth(authItem.token, Number(decrypt(authItem.id)))
                }
            }

            if (user) {
                setUser(null)
            }
        }

        if (token && !user) {
            fetchUser()
        }

        if (token && user) {
            login(user)
        }
    }, [token, user, userId, setInitialAuth, login])

    const themeClass = darkMode ? "dark" : "light"

    return (
        <main className={themeClass}>
            {loading ? <Loading /> : <>{children}</>}
        </main>
    )
}

export default ThemeProvider;