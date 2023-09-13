const {exec} = require("child_process");

exec(process.argv[2] + " --version", (error, stdout, stderr) => {

    if (error) {
      return console.log(error) // Erreur js
    }
    if (stderr) {
      return console.log(error) // Erreur dans la commande
    }
    console.log(stdout) // Résultat classic
})