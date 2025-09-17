import VueErdjsTab from "./VueErdjsTab.vue"
import VueErdjsConnect from "./VueErdjsConnect.vue";
import VueErdjsConnectModal from "./VueErdjsConnectModal.vue";
import XPortalLogin from './xportal/XPortalLogin.vue';
import LedgerLogin from './ledger/LedgerLogin.vue';
import WebWalletLogin from './web/WebWalletLogin.vue';
import DefiWalletLogin from './defi/DefiWalletLogin.vue';

export {VueErdjsConnect, VueErdjsConnectModal};
export default new Map<string, Object>([
    ["VueErdjsConnectModal", VueErdjsConnectModal],
    ["VueErdjsTab", VueErdjsTab],
    ["VueErdjsConnect", VueErdjsConnect],
    ["XPortalLogin", XPortalLogin],
    ["LedgerLogin", LedgerLogin],
    ["DefiWalletLogin", DefiWalletLogin],
    ["WebWalletLogin", WebWalletLogin],
]);
