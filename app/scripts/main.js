$(document).ready(function() {
  $(".weight, .birds, .dosage").keyup(function(){
   var weightObj = $(this).parent().parent().find(".weight");
   var birdsObj = $(this).parent().parent().find(".birds");
   var dosageObj = $(this).parent().parent().find(".dosage");
   var concentrationObj = $(this).parent().parent().find(".concentration");

   if (weightObj.val() !== "" && birdsObj.val() !== "")
     {
       $(this).parent().parent().find(".total").val((parseFloat(weightObj.val()).toFixed(3) * parseInt(birdsObj.val()) * parseFloat(dosageObj.val()).toFixed(3)) / parseFloat(concentrationObj.val()).toFixed(3) );
       $(this).parent().parent().find(".totalgall").val((parseFloat(weightObj.val()).toFixed(3) * parseInt(birdsObj.val()) * parseFloat(dosageObj.val()).toFixed(3)) / parseFloat(concentrationObj.val()).toFixed(3) *0.264 );
     }

   // Update the grant total;
   var total = 0;
   $(".total").each(function(i,e){
     if (e.value !== "")
       total += parseInt(e.value);
   });

 });
});
