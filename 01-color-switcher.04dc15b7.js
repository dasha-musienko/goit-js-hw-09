const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.stopBtn.setAttribute("disabled","");let e=null;t.startBtn.addEventListener("click",(function(r){t.stopBtn.removeAttribute("disabled"),r.currentTarget.setAttribute("disabled",""),e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.stopBtn.addEventListener("click",(function(r){t.startBtn.removeAttribute("disabled"),r.currentTarget.setAttribute("disabled",""),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.04dc15b7.js.map
