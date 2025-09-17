<div align="center">
  <h1>Vue MultiversX Dapp Plugin (Community Fork)</h1>
  <p>
    A Vue.js plugin that provides <a href="https://multiversx.com/">MultiversX</a> (formerly Elrond) 
    integration for decentralized applications (DApps).
  </p>
</div>

---

## 📖 About this repository

This repository is a **public fork and archive** of work originally contributed to  
[`stephaneLeroy/vue-mvx`](https://github.com/stephaneLeroy/vue-mvx) a fork of the earlier  
[`El-SKV/vue-erdjs`](https://github.com/El-SKV/vue-erdjs) project.

- The **`vue-mvx` repo was later made private**, which hid issues and pull requests.  
- To keep a verifiable record of my contributions, this fork preserves the commit history and merged PRs.

---

## What the project does

The plugin simplifies integration of **MultiversX authentication and wallet connections** in Vue DApps.

Features include:
- Maiar App Login  
- Ledger Login  
- Web Wallet Login  
- xPortal 2FA support  
- Defi Wallet  
- Token login signature for backend authentication  
- Local storage login caching  
- TypeScript migration  
- Vue 3 compatibility (via the `vue3-migration` branch)  

It also provides a **demo DApp** showing how to integrate these features.

---

## 🛠️ Getting started for developers

```bash
# install dependencies
npm install

# serve the dapp sample with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

---

## 🧩 Contributions (by @NiftyWell)

My work on this project was merged via multiple PRs, later hidden when the upstream repo was privatized.
This fork keeps the proof:

- **PR #8** — Signing and sending in bulk multiple transactions to different contracts (merged Jan 13, 2023)
- **PR #12** — Guarded transactions for WebWallet (merged Nov 24, 2023)  
- **PR #13** — Vue 3 migration groundwork (merged Dec 1, 2023)  
- **PR #14** — WebWallet transaction data fix (merged Dec 18, 2023)  
- **PR #15** — Vue 3 migration with xPortal 2FA integration (merged Dec 21, 2023)  
 

Example commit: [`65aa53a`](https://github.com/NiftyWell/vue-mvx/commit/65aa53ac25efb402833358e7ae6798a2c9334dcc)

📑 See [CONTRIBUTIONS.md](./CONTRIBUTIONS.md) for a full technical report with timeline and screenshots.

---

## Work in Progress

I also started work on a **modal-based login flow** (replacing the separate login page).  
This can be found in the branch:  
[`feature/modal-connect`](../../tree/feature/modal-connect)

---

## 📚 Historical context

- Original base project: [`El-SKV/vue-erdjs`](https://github.com/El-SKV/vue-erdjs)  
- Forked and extended as: `stephaneLeroy/vue-mvx` (now private)  
- This repository: my **public fork**, preserving merged contributions and ongoing work.  

---

## 📈 Roadmap (original)

- [x] Init project and build management  
- [x] DApp example project  
- [x] Maiar App Login  
- [x] Ledger Login  
- [x] Web Wallet Login  
- [x] Defi Wallet  
- [x] Token login signature for backend authentication  
- [x] Local storage login cache  
- [x] TypeScript migration  
- [x] Vue 3 compatibility (via `vue3-migration`)  
- [ ] Styling documentation  
- [ ] Vuex support  

---

> ⚠️ **Note:** This fork is primarily an **archive of contributions**.  
> For latest MultiversX Vue tooling, please refer to [MultiversX official SDKs](https://github.com/multiversx/mx-sdk-js-core).
