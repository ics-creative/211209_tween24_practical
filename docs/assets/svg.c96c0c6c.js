import"./modulepreload-polyfill.b7f2da20.js";/* empty css              */import{t as e}from"./vendor.864692c0.js";const t=document.querySelector("svg path"),s=t.getTotalLength();t.setAttribute("stroke-dasharray",String(s));t.setAttribute("stroke-dashoffset",String(s));const r={progress:0},a=()=>{const n=s*(r.progress/100);t.setAttribute("stroke-dashoffset",String(n))},o=e.exports.Tween24.serial(e.exports.Tween24.prop(r,{progress:100}),e.exports.Tween24.tween(r,1,e.exports.Ease24._1_SineIn,r).onUpdate(a));o.play();document.querySelector(".js-replay").addEventListener("click",()=>{t.setAttribute("stroke-dasharray",String(s)),o.play()});
