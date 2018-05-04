function triangleArea(firstSide, secondSide, thirdSide) {
    let halfPerimeter = (firstSide + secondSide + thirdSide) / 2;

    console.log(Math.sqrt(halfPerimeter * (halfPerimeter - firstSide) * (halfPerimeter - secondSide) * (halfPerimeter - thirdSide)));
}