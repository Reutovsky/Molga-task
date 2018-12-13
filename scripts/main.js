document.addEventListener("DOMContentLoaded", loadDataFromJSON);

function loadDataFromJSON () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/gists/public');
    xhr.onload = function(){
        if(this.status == 200) {
            var data = JSON.parse(this.responseText);
            var tablePlace = document.getElementById("tablePlace");
            var table = '';
            table += '<table class="table">' +
                        '<thead>' +
                            '<tr>' +
                                '<th scope="col">Название файла</th>' +
                                '<th scope="col">Язык</th>' +
                                '<th scope="col">Ссылка</th>' +
                            '</tr>' +
                        '</thead>' +
                        '<tbody>';          
            for (var k in data) {
                for (var mainKey in data[k]) {
                    if (mainKey === "files") {
                        var filenameObject = data[k][mainKey];
                        for (var filenameObjectKey in filenameObject) {
                            // console.log(filenameObject[filenameObjectKey]);
                            for (var fileNameObjectKeyFile in filenameObject[filenameObjectKey]) {
                                if (fileNameObjectKeyFile === 'filename') {
                                    var wantedFilename = filenameObject[filenameObjectKey][fileNameObjectKeyFile];
                                    table += '<tr><td>' + wantedFilename + '</td>';
                                } else if (fileNameObjectKeyFile === 'language') {
                                    var wantedLanguage = filenameObject[filenameObjectKey][fileNameObjectKeyFile];
                                    table += '<td>' + wantedLanguage + '</td>';
                                } else if (fileNameObjectKeyFile === 'raw_url') {
                                    var wantedURL = filenameObject[filenameObjectKey][fileNameObjectKeyFile];
                                    table += '<td>' + wantedURL + '</td></tr>';
                                } else;
                            }
                        }
                    }
                }
            }
            table += '</tbody></table>';
            tablePlace.innerHTML = table;
        }
    };
    xhr.send();
}