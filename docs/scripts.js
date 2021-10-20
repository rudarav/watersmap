let data_waters = [
    { name: 'м.Ланівці #1 (орендовано)', location: [49.846507, 26.100237], waterpath: 'Lanivtsi1', photoes: [] },
    { name: 'м.Ланівці #2 (орендовано)', location: [49.85156, 26.093528], waterpath: 'Lanivtsi2', photoes: [] },
    { name: 'м.Ланівці #3', location: [49.858617, 26.090585], waterpath: 'Lanivtsi3', photoes: ['Lanivtsi3_1.jpg', 'Lanivtsi3_2.jpg', 'Lanivtsi3_3.jpg', 'Lanivtsi3_4.jpg', 'Lanivtsi3_5.jpg', 'Lanivtsi3_6.jpg'] },
    { name: 'м.Ланівці #4', location: [49.861674, 26.087055], waterpath: 'Lanivtsi4', photoes: ['Lanivtsi4_1.jpg', 'Lanivtsi4_2.jpg', 'Lanivtsi4_3.jpg', 'Lanivtsi4_4.jpg', 'Lanivtsi4_5.jpg', 'Lanivtsi4_6.jpg', 'Lanivtsi4_7.jpg', 'Lanivtsi4_8.jpg', 'Lanivtsi4_9.jpg'] },
    { name: 'м.Ланівці #5', location: [49.861549, 26.081884], waterpath: 'Lanivtsi5', photoes: ['Lanivtsi5_1.jpg', 'Lanivtsi5_2.jpg'] },
    { name: 'с.Білозірка', location: [49.766017, 26.190421], waterpath: '', photoes: [] },
    { name: 'с.Буглів (орендовано)', location: [49.767050, 26.068930], waterpath: '', photoes: [] },
    { name: 'с.Вербовець #1', location: [49.812410, 25.913759], waterpath: '', photoes: [] },
    { name: 'с.Вербовець #2', location: [49.813718, 25.917890], waterpath: '', photoes: [] },
    { name: 'с.Вербовець #3', location: [49.815656, 25.920165], waterpath: '', photoes: [] },
    { name: 'с.Вербовець #4', location: [49.816827, 25.872854], waterpath: '', photoes: [] },
    { name: 'с.Верещаки', location: [49.753178, 25.968639], waterpath: '', photoes: [] },
    { name: 'с.Влащинці', location: [49.789954, 25.926943], waterpath: '', photoes: [] },
    { name: 'с.Гриньки #1 (орендовано)', location: [49.854270, 26.131825], waterpath: '', photoes: [] },
    { name: 'с.Гриньки #2 (орендовано)', location: [49.854281, 26.143706], waterpath: '', photoes: [] },
    { name: 'с.Гриньки #3 (орендовано)', location: [49.855568, 26.116690], waterpath: '', photoes: [] },
    { name: 'с.Жуківці #1 (орендовано)', location: [49.814020, 26.006112], waterpath: '', photoes: [] },
    { name: 'с.Загірці #1 (орендовано)', location: [49.947439, 26.088913], waterpath: '', photoes: [] },
    { name: 'с.Загірці #2', location: [49.938703, 26.126361], waterpath: 'Zagirzi2', photoes: ['Zagirzi2_1.jpg', 'Zagirzi2_2.jpg', 'Zagirzi2_3.jpg'] },
    { name: 'с.Загірці #3', location: [49.939366, 26.122102], waterpath: 'Zagirzi3', photoes: ['Zagirzi3_1.jpg', 'Zagirzi3_2.jpg'] },
    { name: 'с.Коростава', location: [49.754108, 26.023038], waterpath: '', photoes: [] },
    { name: 'с.Мала Білка #1 (орендовано)', location: [49.817389, 25.967609], waterpath: '', photoes: [] },
    { name: 'с.Молотків #1', location: [49.816927, 26.206375], waterpath: '', photoes: [] },
    { name: 'с.Молотків #2', location: [49.822181, 26.198194], waterpath: '', photoes: [] },
    { name: 'с.Москалівка', location: [49.760728, 26.122926], waterpath: '', photoes: [] },
    { name: 'с.Оришківці #1 (орендовано)', location: [49.841156, 26.112349], waterpath: '', photoes: [] },
    { name: 'с.Іванківці #1 (орендовано)', location: [49.803743, 26.134284], waterpath: '', photoes: [] },
    { name: 'с.Юськівці #1', location: [49.911136, 26.124202], waterpath: '', photoes: [] },
    { name: 'с.Юськівці #2', location: [49.911025, 26.125586], waterpath: '', photoes: [] },
    { name: 'с.Юськівці #3', location: [49.910652, 26.127442], waterpath: '', photoes: [] },
    { name: 'с.Юськівці #4', location: [49.903432, 26.106677], waterpath: '', photoes: [] },
    { name: 'с.Якимівці #1', location: [49.934860, 26.067624], waterpath: '', photoes: [] },
    { name: 'с.Якимівці #2', location: [49.935136, 26.056101], waterpath: '', photoes: [] },
    { name: 'с.Якимівці #3', location: [49.935769, 26.053719], waterpath: '', photoes: [] },
    { name: 'с.Якимівці #4', location: [49.936731, 26.045297], waterpath: '', photoes: [] },
];

var mymap = L.map('mapid').setView([49.87, 26.09], 11);

L.tileLayer('https://tms{s}.visicom.ua/2.0.0/planet3/base/{z}/{x}/{y}.png?key={accessToken}', {
    attribution: 'Дані карт © АТ «<a href="https://api.visicom.ua/">Візіком</a>»',
    maxZoom: 19,
    subdomains: '123',
    tms: true,
    accessToken: '719fa393f85afa2b1b0f6c8bc851571b'
}).addTo(mymap);


data_waters.forEach((water, n) => {
    if (water.name) {
        let path = water.waterpath;
        let thumb = water.photoes[0];
        if (!thumb) {
            path = 'empty';
            thumb = 'empty.jpg';
        }
        let mark = L.marker(water.location).addTo(mymap).bindPopup(
            `<a href="javascript:void(0);" onclick="openSlider(${n});" >
            <b>${water.name}</b><br>
            <img src="./src/img/${path}/${thumb}" width="160" height="100">
            </a>`
        );

        $('#waterlist').append($('<option>', {
            value: n,
            text: water.name
        }));
        water.marker = mark;
    }
});

// mymap.on('popupopen', function(e) { new Splide( '#image-slider' ).mount(); });

// $(document).ready(function () {
//     new Splide('#image-slider').mount();
// })

function openSlider(n) {
    $('.splide__list').empty();
    let path = data_waters[n].waterpath;
    let photoes = data_waters[n].photoes;
    if (photoes.length == 0) {
        path = 'empty';
        photoes = ['empty.jpg'];
    }
    photoes.forEach(photo => {
        $('.splide__list').append(`<li class="splide__slide"><img src="./src/img/${path}/${photo}"></li>`);
    });

    new Splide('#image-slider', { type: 'loop' }).mount();
    $("#myModal").css("display", "block");
    $("#mapid").css("display", "none");
}


function setVievMarker(water) {
    mymap.setView(water.location, 15);
    water.marker.openPopup();
}
// document.addEventListener( 'DOMContentLoaded', function () {
// } );

$("#waterlist").change(function () {
    setVievMarker(data_waters[$(this).val()]);
});

// When the user clicks on <span> (x), close the modal
$(".close").click(function () {
    $("#myModal").css("display", "none");
    $("#mapid").css("display", "block");
})

var modal = document.getElementById("myModal");
// When the user clicks anywhere outside of the modal, close it
$(window).click(function (event) {
    if (event.target == modal) {
        $("#myModal").css("display", "none");
        $("#mapid").css("display", "block");
    }
})