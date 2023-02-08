function calculateGrade(mark) {
    if (mark >= 80) {
        return "A"
    }
    else if (mark < 80 && mark > 60) {
        return "B"
    }
    else if (mark <= 60 && mark >= 50) {
        return "C"
    }
    else {
        return "F"
    }
}