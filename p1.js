function calculateTax(income, expenses) {
    if (income <= 0 || expenses <= 0 || income < expenses) {
        return "Invalid Input";
    }
    else {
        let taxReturn = (income - expenses) * 0.2;
        return taxReturn;
    }
}
