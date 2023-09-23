

total = 0

function additioner() {
    let fruit = document.getElementById("fruit").value

    switch (fruit) {

        case "Orange":
            total += 5
            alert("vous avez choisi une orange le prix total des Oranges est " + total + "US")
            break

        case "Mangue":
            total += 10
            alert("vous avez choisi une mangue le prix total des mangues est " + total + "US")
            break;

        case "Citron":
            total += 20
            alert("vous avez choisi un citron le pris total des citron est " + total + "US")
            break;
        default:
            alert("vous devez faire un choix")
            break;
    }
}

function finaliser() {
    alert("le prix total des achats est" + total + "US")

}