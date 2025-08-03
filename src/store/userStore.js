import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: () => {
        return {
            user: null,
            loginMode: null,
            likelist: null,
            favoritePlaylistId: null,
            appOptionShow: false,
            biliUser: null,
            homePage: true,
            cloudDiskPage: true,
        }
    },
    actions: {
        updateUser(userinfo) {
            this.user = userinfo
        },
        updateLikelist(likelist) {
            this.likelist = likelist
        },
        updateFavoritePlaylistId(playlistId) {
            this.favoritePlaylistId = playlistId
        }
    },
    persist: {
        storage: localStorage,
        paths: ['user','biliUser','homePage','cloudDiskPage','favoritePlaylistId']
    },
})