function fromJSONToTable(json) {

    let html = "<table>\n";
    let arr = JSON.parse(json);
    html += " <tr>";

    for (let key of Object.keys(arr[0]))
        html += `<th>${htmlEscape(key)}</th>`;

    html += "</tr>\n";

    for (let obj of arr) {

    }

        return html + "</table>";

        function htmlEscape(text) {

        }
}