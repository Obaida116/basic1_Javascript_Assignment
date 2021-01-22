// https://github.com/Obaida116/basic1_Javascript_Assignment



// Problem-1: Convertting kilometer to Meter

function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    return meter;
}

// Problem-2: Make a budget calculator

var items = ['watch', 'calculator', 'laptop'];
var items_numbers = [1, 1, 1];
   
function budgetCalculator([a, b, c]) {
    var totalCost = (a * 50) + (b * 100) + (c * 500);
    return totalCost;
}


// Problem-3: Calculating Hotel Cost;

var n = 1;
function hotelCost(n) {

    if (n <= 10) {
        cost10 = 100 * n;
        hotel_cost = cost10;
        return hotel_cost;
    }
    else if (n > 20) {
        cost10 = 100 * 10;
        cost20 = 80 * 10;
        cost30 = 50 * (n - 20);
        hotel_cost = cost10 + cost20 + cost30;
        return hotel_cost;
    }
    else if (n > 10 && n <= 20) {
        cost10 = 100 * 10;
        cost20 = 80 * (n - 10);
        hotel_cost = cost20 + cost10;
        return hotel_cost;
    }
}
