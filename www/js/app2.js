var dataObject;
$.getJSON('https://api.myjson.com/bins/bifpi', function(json){

dataObject = json;
});


var Application = {

    initApplication : function() {
        $(window).load('pageinit', '#page-one', function(){
            Application.initShowMhs();
        })
        $(document).on('click', '#detail-mhs', function(){
            var selected = $(this).closest("li").index();
            Application.initShowDetailMhs(selected);
        })
    },

    initShowMhs : function () {

        $.ajax ({

            url : 'https://api.myjson.com/bins/bifpi',
            type : 'GET',
            dataType : 'json',

            beforeSend : function() {
                $.mobile.loading('show', {
                    text : 'Please Wait While Retrieving Data...',
                    textVisible : true
                });
            },

            success : function (dataObject){

                for(var i = 0; i < dataObject.length; i++)
                {
                
                    var appendList = '<li><a href="#page-two?id='+dataObject[i].nim+'" target="_self" id="detail-mhs" data-nimmhs="'
                    + dataObject[i].nim+'"><h2>'+dataObject[i].nama+'</h2><p>'
                    +dataObject[i].nim+'</p><p><b>'
                    +dataObject[i].fakultas+'</b></p></a></li>';

                    $('#list-mhs').append(appendList);
                    $('#list-mhs').listview('refresh');

                }
                
            },

            complete : function () {
                $.mobile.loading('hide');
            }
        });
    },

    initShowDetailMhs : function (selected) {

        $.ajax({
            url : 'https://api.myjson.com/bins/bifpi',
            type : 'GET',

            beforeSend : function() {
                $.mobile.loading('show', {
                    text : 'Please Wait While Retrieving Data...',
                    textVisible : true
                });
            },
            success : function (dataObject){

                $('#p-nim, #p-nama, #p-jurusan, #p-fakultas, #p-alamat, #p-nohp').empty();
                $('#p-nim').append('<b>NIM : </b>' +dataObject[selected].nim);
                $('#p-nama').append('<b>Nama : </b>' +dataObject[selected].nama);
                $('#p-jurusan').append('<b>Jurusan : </b>' +dataObject[selected].jurusan);
                $('#p-fakultas').append('<b>Fakultas : </b>' +dataObject[selected].fakultas);
                $('#p-alamat').append('<b>Alamat : </b>' +dataObject[selected].alamat);
                $('#p-nohp').append('<b>NIM : </b>' +dataObject[selected].noHP);

            },

            complete : function () {
                $.mobile.loading('hide');
            }
        });
    }
}
