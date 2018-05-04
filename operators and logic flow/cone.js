function cone(radius, height) {

    let volume = (Math.PI * radius * radius * height) / 3;
    let surface = Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height));

    console.log("volume = " + volume.toFixed(4));
    console.log("area = " + surface);
}