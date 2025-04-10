function downloadScript() {
    console.log("Part of main codebase");
}

downloadScript();

(function () {
    function downloadScript() {
        console.log("Part by intern");
    }
    console.log("Intern code called");
    downloadScript();
})();

