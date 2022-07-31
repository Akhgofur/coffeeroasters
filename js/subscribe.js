const coffeChoseList = document.querySelector(".coffeesteps")

const handleListClick = (e) => {
    switch (e.target.name) {
        case "how_you_drink":
            document.querySelector("#how").textContent = e.target.value
            break;
        case "type_of_coffee":
                document.querySelector("#type").textContent = e.target.value
            break;
        case "How_much":
            document.querySelector("#amount").textContent = e.target.value
            break;
        case "to_grind_them":
            document.querySelector("#grind").textContent = e.target.value
            break;
        case "How_often_deliver":
            document.querySelector("#interval").textContent = e.target.value
            break;
    
        default:
            break;
    }
}

coffeChoseList.addEventListener('click', handleListClick)