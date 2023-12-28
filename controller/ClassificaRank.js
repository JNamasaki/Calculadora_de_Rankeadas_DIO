
export function classificaRank(total) {
    
    let rank;
    switch (true) {
        case (total <= 10):
            rank = "Ferro";
        break;
        case (total >= 11 && total <= 20):
            rank = "Bronze";
        break;
        case (total >= 21 && total <= 50):
            rank = "Prata";
        break;
        case (total >= 51 && total <= 80):
            rank = "Ouro";
        break;
        case (total >= 81 && total <= 90):
            rank = "Diamante";
        break;
        case (total >= 91 && total <= 100):
            rank = "Lendário";
        break;
        case (total >= 101):
            rank = "Imortal"
        break;
        default:
            rank = "invalido"
            break;
    }


    return rank;
}