$(document).ready(function() {
$('#formBMI').submit(function(e){
  e.preventDefault();

  var tlo = $('.wynik');
  var waga = $('input[name="weight"]').val();
  var wzrost = $('input[name="height"]').val();
  var oblWzrost = (wzrost / 100);
  var wynik = ((waga / (oblWzrost * oblWzrost)));

  function round(n, k){
    var liczba = Math.pow(10, k);
    return Math.round(n * liczba) / liczba;
  }

  var BMI = round(wynik, 2);

  if (BMI < 16){
    $('.response').text(BMI);
    tlo.addClass('wynikNiedozywiony');
    $('.describe').text("WYGŁODZENIE");
  }else if (16 < BMI && BMI < 16.99){
    $('.response').text(BMI);
    tlo.addClass('wynikNiedozywiony');
    $('.describe').text("Wychudzenie");
  }else if (17 < BMI && BMI < 18.49){
    $('.response').text(BMI);
    tlo.addClass('wynikNiedozywiony');
    $('.describe').text("Niedowaga");
  }else if (18.5 < BMI && BMI < 24.99){
    $('.response').text(BMI);
    tlo.addClass('wynikOk');
    $('.describe').text("W porządku");
  }else if (25 < BMI && BMI < 29.99){
    $('.response').text(BMI);
    tlo.addClass('wynikOtyly');
    $('.describe').text("Nadwaga");
  }else if (30 < BMI && BMI < 34.99){
    $('.response').text(BMI);
    tlo.addClass('wynikOtyly');
    $('.describe').text("I stopień otyłości !");
  }else if (35 < BMI && BMI < 39.99){
    $('.response').text(BMI);
    tlo.addClass('wynikOtyly');
    $('.describe').text("II stopień otyłości");
  }else if (BMI > 40){
    $('.response').text(BMI);
    tlo.addClass('wynikOtyly');
    $('.describe').text("SKRAJNA OTYŁOŚĆ");
  }else{
    $('.response').text(BMI);
    $('.describe').text("Uzupełnij poprawnie formularz");
  };
  //$('.response').text(BMI);

});
});
