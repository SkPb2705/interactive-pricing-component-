var selectedRange;


$("#sliderSelectedRange").on("mousemove  touchmove",rangeValue);

function rangeValue(){
selectedRange = +$("#sliderSelectedRange").val();
$("#dollarInput").html("$"+selectedRange);

$("#progressbar").width( rangeToPercent(selectedRange)+"%");
}

function rangeToPercent(selectedRange){
  var resultPercent = 0;
  var sliderMinValue = Number($("#sliderSelectedRange").attr("min"));
  var sliderMaxValue = Number($("#sliderSelectedRange").attr("max"));
  var modifier = Number(100/(sliderMaxValue-sliderMinValue));


if(selectedRange== sliderMaxValue)
{
  resultPercent = 100;
}
else{
  resultPercent = Number(selectedRange-sliderMinValue)*modifier;
}
return resultPercent;
}
