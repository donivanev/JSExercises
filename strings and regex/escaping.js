function htmlList(items) {

    //return "<ul>\n" + items.map(htmlEscape).map(item => `  <li>${item}</li>`).join("\n") + "</ul>\n";

    //function htmlEscape(text) {

        //let map = { '"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;' };

        //return text.replace(/[\"&'<>]/g, ch => map[ch]);
    //}
    let text = "<ul>\n";
    for (let obj of items) {
        text += "  <li>"+ replacing(obj) +"</li>\n";

    }
    text+="</ul>";
    console.log(text);
    function replacing(text){
        return text.replace(/&/g,'&amp;')
            .replace(/</g,"&lt;")
            .replace(/>/g,"&gt;")
            .replace(/"/g,"&quot;")
            .replace(/'/g,'&#39;')
    }
}