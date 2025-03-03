window.onload = () => {
    let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
    let action = ['se comió', 'orinó sobre', 'aplastó', 'rompió'];
    let what = ['mi tarea', 'mi teléfono', 'el coche'];
    let when = ['antes de la clase', 'mientras dormía', 'mientras hacía ejercicio', 'durante el almuerzo', 'mientras rezaba'];

    let excuse = `${who[Math.floor(Math.random() * who.length)]} ${action[Math.floor(Math.random() * action.length)]} ${what[Math.floor(Math.random() * what.length)]} ${when[Math.floor(Math.random() * when.length)]}.`;

    document.getElementById("excuse").innerText = excuse;
};