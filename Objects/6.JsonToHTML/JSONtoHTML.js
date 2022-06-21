function table(inputStr){
    let arr =JSON.parse(inputStr);
    let result='<table>\n\t<tr>'
for (let key of Object.keys(arr[0])) {
    result+=`<th>${escapeHTML(key)}</th>`
}
result+='</tr>';
for (let i = 0; i < arr.length; i++) {
    result+=`\n\t<tr>`
    for (let key of Object.keys(arr[i])) {
        result+=`<td>${escapeHTML(arr[i][key])}</td>`
    }
    result+=`</tr>`;
}
result+='\n</table>'
console.log(result);

function escapeHTML(value){
    return value .toString()  
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
}
table(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`

)