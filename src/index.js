import styles from "./style.css"
let app = document.getElementById('app')
app.innerHTML = 
`
<div class="${styles.className}">Hello CSS Modules</div>
<div class="text">Global Selectors</div>
<div class="${styles.otherClassName}">Class Composes</div>
<div class="${styles.background}">Scoped Animations</div>
<div class="${styles.backgroundAnimation}">Scoped Animations</div>
<div class="${styles.color}">Define variables</div>
`