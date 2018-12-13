document.addEventListener("DOMContentLoaded", loadDataFromJSON);
var tablePlace = document.getElementById("tablePlace");

function loadDataFromJSON () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/gists/public');
    xhr.onload = function(){
        if(this.status == 200) {
            var data = JSON.parse(this.responseText);
            var table = '<table class="table">' +
                            '<thead class="thead-dark">' +
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
                            for (var fileNameObjectKeyFile in filenameObject[filenameObjectKey]) {
                                if (fileNameObjectKeyFile === 'filename') {
                                    var wantedFilename = filenameObject[filenameObjectKey][fileNameObjectKeyFile];
                                    table += '<tr><td>' + wantedFilename + '</td>';
                                } else if (fileNameObjectKeyFile === 'language') {
                                    var wantedLanguage = filenameObject[filenameObjectKey][fileNameObjectKeyFile];
                                    table += '<td>' + wantedLanguage + '</td>';
                                } else if (fileNameObjectKeyFile === 'raw_url') {
                                    var wantedURL = filenameObject[filenameObjectKey][fileNameObjectKeyFile];
                                    table += '<td>' + '<a href="' + wantedURL + '">Link</a></td></tr>';
                                } else;
                            }
                        }
                    }
                }
            }
            table += '</tbody></table>';
            tablePlace.innerHTML = table;
        } else {
            tablePlace.innerHTML = '<h3><center>Ошибка!<br>Статус ответа: ' + this.status + '</center></h3>';
        }
    };
    xhr.send();
}