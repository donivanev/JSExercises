function figureArea(w, h ,W, H) {
    let allArea = w * h + W * H;
    let minW = Math.min(W, w);
    let minH = Math.min(H, h);
    let commonArea = minW * minH;

    let result = allArea - commonArea;
    console.log(result);
}

