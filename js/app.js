//--------------------------Variables y arrays inciales-------------------
var info;
var number;
var ene;
var feb;
var mar;
var abr;
var may;
var jun;
var jul;
var ago;
var sep;
var oct;
var nov;
var dic;
var mes;
var map;
var marker1;
var marker2;
var marker3;
var marker4;
var marker5;
var marker6;
var marker7;
var marker8;
var marker9;
var cicle1;
var circle2;
var cicle3;
var circle4;
var cicle5;
var circle6;
var cicle7;
var circle8;
var poly1;
var poly2;
var poly3;
var poly4;
var poly5;
var poly6;
var poly7;
var poly8;
var poly9;
var poly10;
var poly11;
var poly12;
var poly13;
var poly14;
var poly15;
var poly16;
var data;
var dataN;
var dataS;
var dataE;
var dataO;
var mediaEnero;
var mediaFebrero;
var mediaMarzo;
var mediaAbril;
var mediaMayo;
var mediaJunio;
var mediaJulio;
var mediaAgosto;
var mediaSeptiembre;
var mediaOctubre;
var mediaNoviembre;
var mediaDiciembre;
var regresion;
var lengthInKm;
var lengthInKm2;
var lengthInKm3;
var lengthInKm4;
var lengthInKm5;
var lengthInKm6;
var lengthInKm7;
var lengthInKm8;
var temperaturaF;

var locations = [
      ['Zona 1: Rio verde', 20.69526, -103.28330],
      ['Zona 2: Oblatos', 20.66763, -103.31970],
      ['Zona 3: 18 de Marzo', 20.63358, -103.37532],
      ['Zona 4: Providencia', 20.70662, -103.38321],
      ['Zona 5: De la cruz', 20.70276, -103.31180],
      ['Zona 6: Nueva Galicia', 20.65137, -103.44364],
      ['Zona 7: Nueva España', 20.61153, -103.38871],
      ['Zona 8: Tlaquepaque', 20.64366, -103.31729]
    ];

var path = [
  [20.69526, -103.28330],
  [20.66763, -103.31970]
];

var path2 = [
  [20.66763, -103.31970],
  [20.64366, -103.31729]
];

var path3 = [
  [20.64366, -103.31729],
  [20.63358, -103.37532]
]

var path4 = [
  [20.63358, -103.37532],
  [20.61153, -103.38871]
]

var path5 = [
  [20.61153, -103.38871],
  [20.65137, -103.44364]
]

var path6 = [
  [20.65137, -103.44364],
  [20.70662, -103.38321]
]

var path7 = [
  [20.70662, -103.38321],
  [20.70276, -103.31180]
]

var path8 = [
  [20.70276, -103.31180],
  [20.69526, -103.28330]
]

var path9 = [
  [20.69526, -103.28330]
]

var path10 = [
  [20.66763, -103.31970]
]

var path11 = [
  [20.64366, -103.31729]
]

var path12 = [
  [20.63358, -103.37532]
]

var path13 = [
  [20.61153, -103.38871]
]

var path14 = [
  [20.65137, -103.44364]
]

var path15 = [
  [20.70662, -103.38321]
]

var path16 = [
  [20.70276, -103.31180]
]
//-------------------------Fin de variables y arrays iniciales---------------------------

//-------------------------Creacion del mapa y marcadores con informacion-------------------------
map = new GMaps({
  div: '#map-canvas',
  lat: 20.65970,
  lng: -103.34961,
  zoom: 11,
  disableDefaultUI: true
});

circle1 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

circle2 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

circle3 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

circle4 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

circle5 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

circle6 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

circle7 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

circle8 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

poly1 = map.drawPolyline({
  path: path,
  strokeColor: '#131540',
  strokeWeight: 6,
  strokeOpacity: 0
});

poly2 = map.drawPolyline({
  path: path2,
  strokeColor: '#131540',
  strokeWeight: 6,
  strokeOpacity: 0
});

poly3 = map.drawPolyline({
  path: path3,
  strokeColor: '#131540',
  strokeWeight: 6,
  strokeOpacity: 0
});

poly4 = map.drawPolyline({
  path: path4,
  strokeColor: '#131540',
  strokeWeight: 6,
  strokeOpacity: 0
});

poly5 = map.drawPolyline({
  path: path5,
  strokeColor: '#131540',
  strokeWeight: 6,
  strokeOpacity: 0
});

poly6 = map.drawPolyline({
  path: path6,
  strokeColor: '#131540',
  strokeWeight: 6,
  strokeOpacity: 0
});

poly7 = map.drawPolyline({
  path: path7,
  strokeColor: '#131540',
  strokeWeight: 6,
  strokeOpacity: 0
});

poly8 = map.drawPolyline({
  path: path8,
  strokeColor: '#131540',
  strokeWeight: 6,
  strokeOpacity: 0
});

document.getElementById("calendario").disabled = true;
//-------------------------Fin de la creacion del mapa y marcadores con informacion-------------------------

//-------------------------Funcion para leer por OCR la imagen y alimentar al sistema con los datos para calculos----------------------------------
function load_file () {
  var reader = new FileReader();
  reader.onload = function(){
    var img = new Image();
    img.src = reader.result;
    img.onload = function(){
      OCRAD(img, function(text){
        map.removeMarkers();
        ene = [];
        feb = [];
        mar = [];
        abr = [];
        may = [];
        jun = [];
        jul = [];
        ago = [];
        sep = [];
        oct = [];
        nov = [];
        dic = [];
        dataN = [];
        dataS = [];
        dataE = [];
        dataO = [];
        mediaEnero = 0;
        mediaFebrero = 0;
        mediaMarzo = 0;
        mediaAbril = 0;
        mediaMayo = 0;
        mediaJunio = 0;
        mediaJulio = 0;
        mediaAgosto = 0;
        mediaSeptiembre = 0;
        mediaOctubre = 0;
        mediaNoviembre = 0;
        mediaDiciembre = 0;
        info = "";
        lengthInKm = 0;
        lengthInKm2 = 0;
        lengthInKm3 = 0;
        lengthInKm4 = 0;
        lengthInKm5 = 0;
        lengthInKm6 = 0;
        lengthInKm7 = 0;
        lengthInKm8 = 0;
        temperaturaF = 0;
        document.getElementById("calendario").disabled = false;
        info = text.match(/[^\s]+/g);
        console.log(info);
        for (i = 0; i < info.length; i++)
        {
          number = parseFloat(info[i]);
          if(i > 9 && i <= 17)
          {
            ene.push(number);
          }
          else if(i > 18 && i <= 26)
          {
            feb.push(number);
          }
          else if(i > 27 && i <= 35)
          {
            mar.push(number);
          }
          else if(i > 36 && i <= 44)
          {
            abr.push(number);
          }
          else if(i > 45 && i <= 53)
          {
            may.push(number);
          }
          else if(i > 54 && i <= 62)
          {
            jun.push(number);
          }
          else if(i > 63 && i <= 71)
          {
            jul.push(number);
          }
          else if(i > 72 && i <= 80)
          {
            ago.push(number);
          }
          else if(i > 81 && i <= 89)
          {
            sep.push(number);
          }
          else if(i > 90 && i <= 98)
          {
            oct.push(number);
          }
          else if(i > 99 && i <= 107)
          {
            nov.push(number);
          }
          else if(i > 108 && i <= 116)
          {
            dic.push(number);
          }
        }

        for (i = 0; i < 8; i++)
        {
            locations[i].push(ene[i]);
            locations[i].push(feb[i]);
            locations[i].push(mar[i]);
            locations[i].push(abr[i]);
            locations[i].push(may[i]);
            locations[i].push(jun[i]);
            locations[i].push(jul[i]);
            locations[i].push(ago[i]);
            locations[i].push(sep[i]);
            locations[i].push(oct[i]);
            locations[i].push(nov[i]);
            locations[i].push(dic[i]);
        }


        for (i = 0; i < ene.length; i++)
        {
          mediaEnero += ene[i];
          mediaFebrero += feb[i];
          mediaMarzo += mar[i];
          mediaAbril += abr[i];
          mediaMayo += may[i];
          mediaJunio += jun[i];
          mediaJulio += jul[i];
          mediaAgosto += ago[i];
          mediaSeptiembre += sep[i];
          mediaOctubre += oct[i];
          mediaNoviembre += nov[i];
          mediaDiciembre += dic[i];
        }

        dataN.push([1, (ene[3]+ene[4])/2]);
        dataN.push([2, (feb[3]+feb[4])/2]);
        dataN.push([3, (mar[3]+mar[4])/2]);
        dataN.push([4, (abr[3]+abr[4])/2]);
        dataN.push([5, (may[3]+may[4])/2]);
        dataN.push([6, (jun[3]+jun[4])/2]);
        dataN.push([7, (jul[3]+jul[4])/2]);
        dataN.push([8, (ago[3]+ago[4])/2]);
        dataN.push([9, (sep[3]+sep[4])/2]);
        dataN.push([10, (oct[3]+oct[4])/2]);
        dataN.push([11, (nov[3]+nov[4])/2]);
        dataN.push([12, (dic[3]+dic[4])/2]);

        dataS.push([1, (ene[0]+ene[1]+ene[7])/3]);
        dataS.push([2, (feb[0]+feb[1]+feb[7])/3]);
        dataS.push([3, (mar[0]+mar[1]+mar[7])/3]);
        dataS.push([4, (abr[0]+abr[1]+abr[7])/3]);
        dataS.push([5, (may[0]+may[1]+may[7])/3]);
        dataS.push([6, (jun[0]+jun[1]+jun[7])/3]);
        dataS.push([7, (jul[0]+jul[1]+jul[7])/3]);
        dataS.push([8, (ago[0]+ago[1]+ago[7])/3]);
        dataS.push([9, (sep[0]+sep[1]+sep[7])/3]);
        dataS.push([10, (oct[0]+oct[1]+oct[7])/3]);
        dataS.push([11, (nov[0]+nov[1]+nov[7])/3]);
        dataS.push([12, (dic[0]+dic[1]+dic[7])/3]);

        dataE.push([1, (ene[0]+ene[1])/3]);
        dataE.push([2, (feb[0]+feb[1])/3]);
        dataE.push([3, (mar[0]+mar[1])/3]);
        dataE.push([4, (abr[0]+abr[1])/3]);
        dataE.push([5, (may[0]+may[1])/3]);
        dataE.push([6, (jun[0]+jun[1])/3]);
        dataE.push([7, (jul[0]+jul[1])/3]);
        dataE.push([8, (ago[0]+ago[1])/3]);
        dataE.push([9, (sep[0]+sep[1])/3]);
        dataE.push([10, (oct[0]+oct[1])/3]);
        dataE.push([11, (nov[0]+nov[1])/3]);
        dataE.push([12, (dic[0]+dic[1])/3]);

        dataO.push([1, ene[0]]);
        dataO.push([2, feb[0]]);
        dataO.push([3, mar[0]]);
        dataO.push([4, abr[0]]);
        dataO.push([5, may[0]]);
        dataO.push([6, jun[0]]);
        dataO.push([7, jul[0]]);
        dataO.push([8, ago[0]]);
        dataO.push([9, sep[0]]);
        dataO.push([10, oct[0]]);
        dataO.push([11, nov[0]]);
        dataO.push([12, dic[0]]);

        marker1 = map.addMarker({
          position: new google.maps.LatLng(locations[0][1], locations[0][2]),
          icon: 'img/pin.png',
        });

        marker2 = map.addMarker({
          position: new google.maps.LatLng(locations[1][1], locations[1][2]),
          icon: 'img/pin.png'
        });

        marker3 = map.addMarker({
          position: new google.maps.LatLng(locations[2][1], locations[2][2]),
          icon: 'img/pin.png'
        });

        marker4 = map.addMarker({
          position: new google.maps.LatLng(locations[3][1], locations[3][2]),
          icon: 'img/pin.png'
        });

        marker5 = map.addMarker({
          position: new google.maps.LatLng(locations[4][1], locations[4][2]),
          icon: 'img/pin.png'
        });

        marker6 = map.addMarker({
          position: new google.maps.LatLng(locations[5][1], locations[5][2]),
          icon: 'img/pin.png'
        });

        marker7 = map.addMarker({
          position: new google.maps.LatLng(locations[6][1], locations[6][2]),
          icon: 'img/pin.png'
        });

        marker8 = map.addMarker({
          position: new google.maps.LatLng(locations[7][1], locations[7][2]),
          icon: 'img/pin.png'
        });

        circle1.bindTo('center', marker1, 'position');
        circle2.bindTo('center', marker2, 'position');
        circle3.bindTo('center', marker3, 'position');
        circle3.bindTo('center', marker3, 'position');
        circle4.bindTo('center', marker4, 'position');
        circle5.bindTo('center', marker5, 'position');
        circle6.bindTo('center', marker6, 'position');
        circle7.bindTo('center', marker7, 'position');
        circle8.bindTo('center', marker8, 'position');

        circle1.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
        circle2.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
        circle3.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
        circle4.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
        circle5.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
        circle6.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
        circle7.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
        circle8.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });

        poly1.setOptions({
          strokeOpacity: 1
        });
        poly2.setOptions({
          strokeOpacity: 1
        });
        poly3.setOptions({
          strokeOpacity: 1
        });
        poly4.setOptions({
          strokeOpacity: 1
        });
        poly5.setOptions({
          strokeOpacity: 1
        });
        poly6.setOptions({
          strokeOpacity: 1
        });
        poly7.setOptions({
          strokeOpacity: 1
        });
        poly8.setOptions({
          strokeOpacity: 1
        });

        lengthInKm = google.maps.geometry.spherical.computeLength(poly1.getPath()) * 0.001;
        lengthInKm2 = google.maps.geometry.spherical.computeLength(poly2.getPath()) * 0.001;
        lengthInKm3 = google.maps.geometry.spherical.computeLength(poly3.getPath()) * 0.001;
        lengthInKm4 = google.maps.geometry.spherical.computeLength(poly4.getPath()) * 0.001;
        lengthInKm5 = google.maps.geometry.spherical.computeLength(poly5.getPath()) * 0.001;
        lengthInKm6 = google.maps.geometry.spherical.computeLength(poly6.getPath()) * 0.001;
        lengthInKm7 = google.maps.geometry.spherical.computeLength(poly7.getPath()) * 0.001;
        lengthInKm8 = google.maps.geometry.spherical.computeLength(poly8.getPath()) * 0.001;

        google.maps.event.addListener(poly1, 'click', function() {
          alert(lengthInKm + " Kilometros");
        });

        google.maps.event.addListener(poly2, 'click', function() {
          alert(lengthInKm2 + " Kilometros");
        });

        google.maps.event.addListener(poly3, 'click', function() {
          alert(lengthInKm3 + " Kilometros");
        });

        google.maps.event.addListener(poly4, 'click', function() {
          alert(lengthInKm4 + " Kilometros");
        });

        google.maps.event.addListener(poly5, 'click', function() {
          alert(lengthInKm5 + " Kilometros");
        });

        google.maps.event.addListener(poly6, 'click', function() {
          alert(lengthInKm6 + " Kilometros");
        });

        google.maps.event.addListener(poly7, 'click', function() {
          alert(lengthInKm7 + " Kilometros");
        });

        google.maps.event.addListener(poly8, 'click', function() {
          alert(lengthInKm8 + " Kilometros");
        });
      })
    }
  }
  reader.readAsDataURL(document.getElementById('picker').files[0])
}
//-------------------------Fin de funcion para leer por OCR la imagen y alimentar al sistema con los datos para calculos----------------------------------

//-------------------------Triggers de botones, para seleccionar el tipo de mes y cambiarlo dinamicamente, y cambio de datos para marcadores y circulos de google maps------------------------
$( document ).ready(function() {

  $( "#calendario" ).bind( "click", function(event, ui) {
    $('#popupCalendar').popup('open');
  });

  $("#bene, #bfeb, #bmar, #babr, #bmay, #bjun, #bjul, #bago, #bsep, #boct, #bnov, #bdic").bind( "click", function(event, ui) {
    map.removeMarkers();

    if($(this).val() == "Ene")
    {
      mes = 3;
    }
    else if($(this).val() == "Feb")
    {
        mes = 4;
    }
    else if($(this).val() == "Mar")
    {
        mes = 5;
    }
    else if($(this).val() == "Abr")
    {
        mes = 6;
    }
    else if($(this).val() == "May")
    {
        mes = 7;
    }
    else if($(this).val() == "Jun")
    {
        mes = 8;
    }
    else if($(this).val() == "Jul")
    {
        mes = 9;
    }
    else if($(this).val() == "Ago")
    {
        mes = 10;
    }
    else if($(this).val() == "Sep")
    {
        mes = 11;
    }
    else if($(this).val() == "Oct")
    {
        mes = 12;
    }
    else if($(this).val() == "Nov")
    {
        mes = 13;
    }
    else
    {
        mes = 14;
    }

    if(locations[0][mes] >= 30)
    {
      circle1.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[0][mes] < 30 && locations[0][mes] > 0)
    {
      circle1.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[0][mes] < 0 && locations[0][mes] >= -15)
    {
      circle1.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[0][mes] < -15 && locations[0][mes] >= -30)
    {
      circle1.setOptions({
        fillColor: "blue"
      });
    }

    if(locations[1][mes] >= 30)
    {
      circle2.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[1][mes] < 30 && locations[1][mes] > 0)
    {
      circle2.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[1][mes] < 0 && locations[1][mes] >= -15)
    {
      circle2.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[1][mes] < -15 && locations[1][mes] >= -30)
    {
      circle2.setOptions({
        fillColor: "blue"
      });
    }

    if(locations[2][mes] >= 30)
    {
      circle3.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[2][mes] < 30 && locations[2][mes] > 0)
    {
      circle3.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[2][mes] < 0 && locations[2][mes] >= -15)
    {
      circle3.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[2][mes] < -15 && locations[2][mes] >= -30)
    {
      circle3.setOptions({
        fillColor: "blue"
      });
    }

    if(locations[3][mes] >= 30)
    {
      circle4.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[3][mes] < 30 && locations[3][mes] > 0)
    {
      circle4.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[3][mes] < 0 && locations[3][mes] >= -15)
    {
      circle4.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[3][mes] < -15 && locations[3][mes] >= -30)
    {
      circle4.setOptions({
        fillColor: "blue"
      });
    }

    if(locations[4][mes] >= 30)
    {
      circle5.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[4][mes] < 30 && locations[4][mes] > 0)
    {
      circle5.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[4][mes] < 0 && locations[4][mes] >= -15)
    {
      circle5.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[4][mes] < -15 && locations[4][mes] >= -30)
    {
      circle5.setOptions({
        fillColor: "blue"
      });
    }

    if(locations[5][mes] >= 30)
    {
      circle6.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[5][mes] < 30 && locations[5][mes] > 0)
    {
      circle6.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[5][mes] < 0 && locations[5][mes] >= -15)
    {
      circle6.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[5][mes] < -15 && locations[5][mes] >= -30)
    {
      circle6.setOptions({
        fillColor: "blue"
      });
    }

    if(locations[6][mes] >= 30)
    {
      circle7.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[6][mes] < 30 && locations[6][mes] > 0)
    {
      circle7.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[6][mes] < 0 && locations[6][mes] >= -15)
    {
      circle7.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[6][mes] < -15 && locations[6][mes] >= -30)
    {
      circle7.setOptions({
        fillColor: "blue"
      });
    }

    if(locations[7][mes] >= 30)
    {
      circle8.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[7][mes] < 30 && locations[7][mes] > 0)
    {
      circle8.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[7][mes] < 0 && locations[7][mes] >= -15)
    {
      circle8.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[7][mes] < -15 && locations[7][mes] >= -30)
    {
      circle8.setOptions({
        fillColor: "blue"
      });
    }

    marker1 = map.addMarker({
      position: new google.maps.LatLng(locations[0][1], locations[0][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h2>" + locations[0][0] + "</h2></b>" +  "<h3>Temperatura: " + String(locations[0][mes]) + " grados Celsius" + "</h3>" +  "<h3>Presión: " + (1.381)*(6.022)*(Math.abs(locations[0][mes])) + " hPa</h3>" + "<h3>Partículas: " + ((1.381)*(6.022)*(Math.abs(locations[0][mes])))/(1.381*(locations[0][mes]+273.15)) + " g/cm^2</h3>"
      }
    });

    marker2 = map.addMarker({
      position: new google.maps.LatLng(locations[1][1], locations[1][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h2>" + locations[1][0] + "</h2></b>" +  "<h3>Temperatura: " + String(locations[1][mes]) + " grados Celsius" + "</h3>" +  "<h3>Presión: " + (1.381)*(6.022)*(Math.abs(locations[1][mes])) + " hPa</h3>" + "<h3>Partículas: " + ((1.381)*(6.022)*(Math.abs(locations[1][mes])))/(1.381*(locations[1][mes]+273.15)) + " g/cm^2</h3>"
      }
    });

    marker3 = map.addMarker({
      position: new google.maps.LatLng(locations[2][1], locations[2][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h2>" + locations[2][0] + "</h2></b>" +  "<h3>Temperatura: " + String(locations[2][mes]) + " grados Celsius" + "</h3>" +  "<h3>Presión: " + (1.381)*(6.022)*(Math.abs(locations[2][mes])) + " hPa</h3>" + "<h3>Partículas: " + ((1.381)*(6.022)*(Math.abs(locations[2][mes])))/(1.381*(locations[2][mes]+273.15)) + " g/cm^2</h3>"
      }
    });

    marker4 = map.addMarker({
      position: new google.maps.LatLng(locations[3][1], locations[3][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h2>" + locations[3][0] + "</h2></b>" +  "<h3>Temperatura: " + String(locations[3][mes]) + " grados Celsius" + "</h3>" +  "<h3>Presión: " + (1.381)*(6.022)*(Math.abs(locations[3][mes])) + " hPa</h3>" + "<h3>Partículas: " + ((1.381)*(6.022)*(Math.abs(locations[3][mes])))/(1.381*(locations[3][mes]+273.15)) + " g/cm^2</h3>"
      }
    });

    marker5 = map.addMarker({
      position: new google.maps.LatLng(locations[4][1], locations[4][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h2>" + locations[4][0] + "</h2></b>" +  "<h3>Temperatura: " + String(locations[4][mes]) + " grados Celsius" + "</h3>" +  "<h3>Presión: " + (1.381)*(6.022)*(Math.abs(locations[4][mes])) + " hPa</h3>" + "<h3>Partículas: " + ((1.381)*(6.022)*(Math.abs(locations[4][mes])))/(1.381*(locations[4][mes]+273.15)) + " g/cm^2</h3>"
      }
    });

    marker6 = map.addMarker({
      position: new google.maps.LatLng(locations[5][1], locations[5][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h2>" + locations[5][0] + "</h2></b>" +  "<h3>Temperatura: " + String(locations[5][mes]) + " grados Celsius" + "</h3>" +  "<h3>Presión: " + (1.381)*(6.022)*(Math.abs(locations[5][mes])) + " hPa</h3>" + "<h3>Partículas: " + ((1.381)*(6.022)*(Math.abs(locations[5][mes])))/(1.381*(locations[5][mes]+273.15)) + " g/cm^2</h3>"
      }
    });

    marker7 = map.addMarker({
      position: new google.maps.LatLng(locations[6][1], locations[6][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h2>" + locations[6][0] + "</h2></b>" +  "<h3>Temperatura: " + String(locations[6][mes]) + " grados Celsius" + "</h3>" +  "<h3>Presión: " + (1.381)*(6.022)*(Math.abs(locations[6][mes])) + " hPa</h3>" + "<h3>Partículas: " + ((1.381)*(6.022)*(Math.abs(locations[6][mes])))/(1.381*(locations[6][mes]+273.15)) + " g/cm^2</h3>"
      }
    });

    marker8 = map.addMarker({
      position: new google.maps.LatLng(locations[7][1], locations[7][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h2>" + locations[7][0] + "</h2></b>" +  "<h3>Temperatura: " + String(locations[7][mes]) + " grados Celsius" + "</h3>" +  "<h3>Presión: " + (1.381)*(6.022)*(Math.abs(locations[7][mes])) + " hPa</h3>" + "<h3>Partículas: " + ((1.381)*(6.022)*(Math.abs(locations[7][mes])))/(1.381*(locations[7][mes]+273.15)) + " g/cm^2</h3>"
      }
    });

    map.addListener("click", function(event) {
        if(marker9) {
          poly9.setMap(null);
          poly10.setMap(null);
          poly11.setMap(null);
          poly12.setMap(null);
          poly13.setMap(null);
          poly14.setMap(null);
          poly15.setMap(null);
          poly16.setMap(null);
          path9.pop();
          path10.pop();
          path11.pop();
          path12.pop();
          path13.pop();
          path14.pop();
          path15.pop();
          path16.pop();
          marker9.setMap(null);
        }

        marker9 = map.addMarker({
            position: event.latLng,
            icon: 'img/pin.png'
        });

        var coor = [marker9.getPosition().lat(), marker9.getPosition().lng()];

        path9.push(coor);
        path10.push(coor);
        path11.push(coor);
        path12.push(coor);
        path13.push(coor);
        path14.push(coor);
        path15.push(coor);
        path16.push(coor);

        poly9 = map.drawPolyline({
          path: path9,
          strokeColor: 'red',
          strokeWeight: 6,
          strokeOpacity: 1
        });

        poly10 = map.drawPolyline({
          path: path10,
          strokeColor: 'red',
          strokeWeight: 6,
          strokeOpacity: 1
        });

        poly11 = map.drawPolyline({
          path: path11,
          strokeColor: 'red',
          strokeWeight: 6,
          strokeOpacity: 1
        });

        poly12 = map.drawPolyline({
          path: path12,
          strokeColor: 'red',
          strokeWeight: 6,
          strokeOpacity: 1
        });

        poly13 = map.drawPolyline({
          path: path13,
          strokeColor: 'red',
          strokeWeight: 6,
          strokeOpacity: 1
        });

        poly14 = map.drawPolyline({
          path: path14,
          strokeColor: 'red',
          strokeWeight: 6,
          strokeOpacity: 1
        });

        poly15 = map.drawPolyline({
          path: path15,
          strokeColor: 'red',
          strokeWeight: 6,
          strokeOpacity: 1
        });

        poly16 = map.drawPolyline({
          path: path16,
          strokeColor: 'red',
          strokeWeight: 6,
          strokeOpacity: 1
        });

        lengthInKm9 = google.maps.geometry.spherical.computeLength(poly9.getPath()) * 0.001;
        lengthInKm10 = google.maps.geometry.spherical.computeLength(poly10.getPath()) * 0.001;
        lengthInKm11 = google.maps.geometry.spherical.computeLength(poly11.getPath()) * 0.001;
        lengthInKm12 = google.maps.geometry.spherical.computeLength(poly12.getPath()) * 0.001;
        lengthInKm13 = google.maps.geometry.spherical.computeLength(poly13.getPath()) * 0.001;
        lengthInKm14 = google.maps.geometry.spherical.computeLength(poly14.getPath()) * 0.001;
        lengthInKm15 = google.maps.geometry.spherical.computeLength(poly15.getPath()) * 0.001;
        lengthInKm16 = google.maps.geometry.spherical.computeLength(poly16.getPath()) * 0.001;

        google.maps.event.addListener(poly9, 'click', function() {
          alert(lengthInKm9 + " Kilometros");
        });

        google.maps.event.addListener(poly10, 'click', function() {
          alert(lengthInKm10 + " Kilometros");
        });

        google.maps.event.addListener(poly11, 'click', function() {
          alert(lengthInKm11 + " Kilometros");
        });

        google.maps.event.addListener(poly12, 'click', function() {
          alert(lengthInKm12 + " Kilometros");
        });

        google.maps.event.addListener(poly13, 'click', function() {
          alert(lengthInKm13 + " Kilometros");
        });

        google.maps.event.addListener(poly14, 'click', function() {
          alert(lengthInKm14 + " Kilometros");
        });

        google.maps.event.addListener(poly15, 'click', function() {
          alert(lengthInKm15 + " Kilometros");
        });

        google.maps.event.addListener(poly16, 'click', function() {
          alert(lengthInKm16 + " Kilometros");
        });

        temperaturaF = ((locations[0][mes]*Math.abs(1-lengthInKm9)/lengthInKm9) + (locations[1][mes]*Math.abs(1-lengthInKm10)/lengthInKm10) + (locations[2][mes]*Math.abs(1-lengthInKm16)/lengthInKm16) + (locations[3][mes]*Math.abs(1-lengthInKm11)/lengthInKm11) + (locations[4][mes]*Math.abs(1-lengthInKm15)/lengthInKm15) + (locations[5][mes]*Math.abs(1-lengthInKm14)/lengthInKm14) + (locations[6][mes]*Math.abs(1-lengthInKm12)/lengthInKm12) + (locations[7][mes]*Math.abs(1-lengthInKm13)/lengthInKm13)) / 8;

        $('#calcular').bind('click', function(){
          $('#markerContainer').remove();
          $('#markerPop').append("<div id='markerContainer'></div>");
          $('#markerContainer').append("<h3>Temperatura: " + temperaturaF + " grados Celsius</h3>" + "<br>");
          $('#markerContainer').append("<h3>Presión: " + (1.381)*(6.022)*(Math.abs(temperaturaF)) + " hPa</h3>" + "<br>");
          $('#markerContainer').append("<h3>Partículas: " + ((1.381)*(6.022)*(Math.abs(temperaturaF)))/(1.381*(temperaturaF+273.15)) + " g/cm^2</h3>" + "<br>");
          $('#markerPop').popup('open');
        });
    });

    $('#popupCalendar').popup('close');
  });
//-------------------------Fin de triggers de botones, para seleccionar el tipo de mes y cambiarlo dinamicamente, y cambio de datos para marcadores y circulos de google maps------------------------
});
