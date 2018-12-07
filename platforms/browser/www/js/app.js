var dataObject = [{"nim":"125060400111044", 
"nama":"Isyana Sarasvati", 
"jurusan":"Teknik Informatika", 
"fakultas":"Filkom", 
"alamat":"Jl. Suka Nyanyi", 
"noHP":"081234567890",
"foto":"images/dekIsyana.jpg"},
{"nim":"135060401111005", 
"nama": "Marion Jola", 
"jurusan":"komunikasi",
"fakultas": "FISIP",
"alamat": "Kec. Wakanda",
"noHP":"08765432109",
"foto":"images/bintangMarion.jpg"},
{"nim":"165150201111150", 
"nama": "Chayrul Arifin", 
"jurusan":"Teknik Informatika",
"fakultas": "FILKOM",
"alamat": "Malang",
"noHP":"08765426969",
"foto":"images/awak.jpeg"}];

var Application = {
 initApplication : function() {
  $(window).load('pageinit', '#page-one', function() {
   Application.initShowMhs();
  })
  $(document).on('click', '#detail-mhs', function() {
   var nim = $(this).data('nimmhs');
   Application.initShowDetailMhs(nim);
  })
 },
 
 initShowMhs : function() {
  var appendList = "";
  for (i in dataObject) {
   appendList = '<li><a href="#page-two?id='
   +dataObject[i].nim+'" target="_self" id="detail-mhs" data-nimmhs="'
   +dataObject[i].nim+'">'
   +'<img src="'+dataObject[i].foto+'">'
   +dataObject[i].nama+'</h2><p>'
   +dataObject[i].nim+'</p><p><b>'
   +dataObject[i].fakultas+'</b></p></a></li>';
   $('#list-mhs').append(appendList); 
  }
 },
 
 initShowDetailMhs : function(nim) {
  var tbdy = $("#table-detailMhs tr");
  $("#table-detailMhs > tbody").empty();
  for (i in dataObject) {
   var appendDetail = "";
   if(dataObject[i].nim == nim) {
    appendDetail = '<tr><td>'+dataObject[i].nim+
    '</td><td>'+dataObject[i].nama+
    '</td><td>'+dataObject[i].jurusan+
    '</td><td>'+dataObject[i].fakultas+
    '</td><td>'+dataObject[i].alamat+
    '</td><td>'+dataObject[i].noHP+
    '</td></tr>';
    $('#table-detailMhs').append(appendDetail);
    
   }
  }
 }
};