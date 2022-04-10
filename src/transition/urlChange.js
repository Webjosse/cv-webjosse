import { redirect, linkProg } from "../stores/link.js";

const urlChangeInit = () => {
    if (window.location.pathname != "/") linkProg.set(1, { duration: 0 });
    let oldPushState = history.pushState;
    history.pushState = function pushState() {
        let ret = oldPushState.apply(this, arguments);
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };

    let oldReplaceState = history.replaceState;
    history.replaceState = function replaceState() {
        let ret = oldReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };

    window.addEventListener('popstate', () => {
        window.dispatchEvent(new Event('locationchange'));
    });

    window.addEventListener("locationchange", function () {
        redirect(window.location.pathname);
    });
};

export default urlChangeInit;
