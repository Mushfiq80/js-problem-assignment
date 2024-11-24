function calculateFinalScore(obj) {
    if (typeof obj === 'object' && obj !== null) {
        if (typeof obj.name === 'string' && typeof obj.testScore === 'number' && obj.testScore <= 50 && typeof obj.schoolGrade === 'number' && obj.schoolGrade <= 30 && typeof obj.isFFamily === 'boolean') {
            if (obj.isFFamily === true) {
                const isFarmer = obj.testScore + obj.schoolGrade + 20;
                if (isFarmer >= 80) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                const notFarmer = obj.testScore + obj.schoolGrade;
                if (notFarmer >= 80) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return 'Invalid Input';
        }
    }
    else {
        return 'Invalid Input';
    }
}
