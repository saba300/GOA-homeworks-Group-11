function checkTriangleSides(a, b, c) {
    if (a > 0 && b > 0 && c > 0 && (a + b > c) && (a + c > b) && (b + c > a)) {
        console.log("These three sides can form a triangle.");
    } else {
        console.log("These three sides cannot form a triangle.");
    }
}

checkTriangleSides(3, 4, 5);
checkTriangleSides(1, 2, 10);
checkTriangleSides(5, 5, 5);
