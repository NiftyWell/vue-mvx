<template>
    <div>
        <button class="vue3rdj5__connect-button" @click="setModal(true)">
            Connect
        </button>

        <div class="vue3rdj5__modal" v-if="showModal" @click="setModal(false)">
            <div class="vue3rdj5__modal__container">
                <div class="vue3rdj5__modal__content" @click.stop>
                    <div
                        class="vue3rdj5__modal__content__close-button"
                        @click="setModal(false)"
                    ></div>

                    <div v-if="account.address">
                        <div class="vue3rdj5__logged-address">
                            {{ account.obfuscatedAddress() }}
                        </div>
                        <button
                            class="vue3rdj5__logged-logout"
                            @click.prevent="logout()"
                        >
                            Logout
                        </button>
                    </div>

                    <div v-else class="vue3rdj5__modes">
                        <vue-erdjs-tab
                            name="Defi Wallet"
                            @select-mode="selectMode($event as string)"
                            :active="tabs.activeTab === 'Defi Wallet'"
                        >
                            <defi-wallet-login :token="token"></defi-wallet-login>
                        </vue-erdjs-tab>
                        <vue-erdjs-tab
                            name="xPortal"
                            @select-mode="selectMode($event as string)"
                            :active="tabs.activeTab === 'xPortal'"
                        >
                            <x-portal-login
                                :qrcodeHandler="qrcodeHandler"
                                :token="token"
                            ></x-portal-login>
                        </vue-erdjs-tab>
                        <vue-erdjs-tab
                            name="Ledger"
                            @select-mode="selectMode($event as string)"
                            :active="tabs.activeTab === 'Ledger'"
                        >
                            <ledger-login :token="token"></ledger-login>
                        </vue-erdjs-tab>
                        <web-wallet-login :token="token"></web-wallet-login>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, reactive, ref, watch } from "vue"
import QRCodeDefaultHandler from "./xportal/QRCodeDefaultHandler"
import { useVueErd } from "@/composable/useVueErd"
import XPortalLogin from "@/components/xportal/XPortalLogin.vue"

const props = defineProps({
    qrcodeHandler: {
        require: true,
        default: function () {
            return new QRCodeDefaultHandler()
        },
    },
    token: {
        require: false,
        type: String,
    },
})

const showModal = ref(false)
const { erd, account } = useVueErd()
const tabs = reactive({ activeTab: "" })

async function selectMode(mode: string) {
    tabs.activeTab = mode
}

const logout = () => {
    erd.logout()
    tabs.activeTab = ""
    showModal.value = false
}

const setModal = (value: boolean) => {
    if (value) {
        showModal.value = true
    } else {
        tabs.activeTab = ""
        showModal.value = false
    }
}
/*watch(
    () => account.address,
    address => {
        if (address != null) {
            showModal.value = false
        }
    }
)*/

watch(
    () => account.address,
    address => {
        if (address != null) {
            const searchParams = new URLSearchParams(window.location.search)
            const fromUrl = searchParams.get("fromUrl")
            if (fromUrl) {
                window.location.href = fromUrl
            }
        }
    }
)
</script>

<style lang="scss">
@import "../sass/vue3rdj5";
</style>
