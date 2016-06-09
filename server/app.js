var nuIndex = 0;
var nuPerson;

$(document).ready(function(){

  $('#getJsonAjax').click(function(){//get the array of students all nice

    $.ajax({
        url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
        dataType: 'json',
        success: function (data){
          console.log ("in success");
          nuPerson = data;
          },
        statusCode: {
          404: function(){
            alert ("sumpthin' ain't werkin");
          }//end 404 code
        } // end status code
      });// end ajax object
    });//end getJsonAjax


  $('#prevButton').click(function(){
    
    nuIndex--;
    if(nuIndex < 0){
      nuIndex = nuPerson.students.length -1;
    }

    displayNu();
  });

  $('#nextButton').click(function(){
    nuIndex++;
    if(nuIndex >= nuPerson.students.length){
      nuIndex = 0;
    }
    displayNu();

  });


    var displayNu = function(){
      $('#person').empty();
      var nameOut = nuPerson.students[nuIndex].first_name + " " + nuPerson.students[nuIndex].last_name;
      var infoOut = nuPerson.students[nuIndex].city + ", " + nuPerson.students[nuIndex].shoutout;

      var adjustedIndex = nuIndex +1;
      var counterOut = adjustedIndex + "/" + nuPerson.students.length;

      var newHeader = document.createElement('h2');
      newHeader.textContent=nameOut;
      var newParagraph = document.createElement('p');
      newParagraph.textContent=infoOut;
      var newParagraph1 = document.createElement('p');
      newParagraph1.textContent= counterOut;
      // display output
      $("#person").append( newHeader );
      $("#person").append( newParagraph );
      $("#person").append( newParagraph1 );
    };

});


    //Some of the ither stuff I tried*******
  //     var $el = $('#person').children().last();
  //     $el.append('<h2>' + nuPerson + nuPerson.students[nuIndex].first_name + " " + nuPerson.students[nuIndex].last_name + '</h2>');
  //     $el.append('<h3>' + nuPerson.students.city + '</h3>');
  //     $el.append('<h4>' + nuPerson.students.shoutout + '</h4>');
  //     $('#indexNumber').text("(" + Number(nuIndex + 1) + "/20)");
  //   console.log (nuPerson + "Hooray");
  //
  // };
