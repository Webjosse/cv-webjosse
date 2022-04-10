import { tweened } from "svelte/motion";
import { writable } from "svelte/store";
import { cubicIn } from 'svelte/easing';


export const linkProg = tweened(0, {
    duration: 1000,
    easing: cubicIn
});
export const actualPath = writable(window.location.pathname);




export const redirectEvent = function (event) {
    event.preventDefault();

    window.history.pushState("", "", event.target.href);
}

export const redirect = function (url) {
    redirectedStore.set(true);
    linkProg.set(url == "/" ? 1 : 0, { duration: 0 });
    if (url != "/") { actualPath.set(url); } else startHide();
    linkProg.set(url == "/" ? 0 : 1).then(() => {
        if (url == "/") { actualPath.set(url); } else startShowed();
    });
}

const onShowedFuns = writable([]);
const onHideFuns = writable([]);

const redirectedStore = writable(false);
let redirected = false;
redirectedStore.subscribe(val => redirected = val);


let showedF = [];
let hideF = [];
onShowedFuns.subscribe(val => showedF = val);
onHideFuns.subscribe(val => hideF = val);

export const onShowed = function (fun) {
    if (window.location.pathname != "/" && !redirected) fun();
    onShowedFuns.set([...showedF, fun]);
}
export const onHide = function (fun) {
    onHideFuns.set([...hideF, fun]);
}


export const startShowed = function () {
    for (let f of showedF) f();
}


function startHide() {
    for (let f of hideF) f();
}