function XML_Messenger(input) {
    let regex = /<message\s*([a-z]+="[A-za-z0-9\s.]+"\s*)+>[A-Za-z0-9\s,?'!\\n.]+<\/message>/gm;
    let match, arr = [];
    let result = '<article>';
    for (let element of input)
            match = regex.exec(element);
            if (match) console.log(`<div>From: <span class="sender">Alice</span></div>\n`);

    result += '</article>';
    console.log(match[0]);

}

XML_Messenger('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>');