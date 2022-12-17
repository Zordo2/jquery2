// Task1
// $("#plus").click(function(){
//     $("p").css("fontSize","+=.25px")
//     if($("p").css("fontSize")>="200px"){
//         $("#max").removeClass("d-none");
//         $("#min").addClass("d-none");
//         $("#max").css("fontSize","22px");
//         $("#show").css("fontSize","200px");
//     }
// });
// $("#minus").click(function(){
//     $("p").css("fontSize","-=.25px")
//     if($("p").css("fontSize")<="10px"){
//         $("#min").removeClass("d-none");
//         $("#max").addClass("d-none");
//         $("#min").css("fontSize","22px");
//         $("#show").css("fontSize","1px");
//     }
// })
// Task2
// $(document).ready(function(){
//     $("#box").animate({
//         left:"200px",
//         width:"200px",
//         height:"200px",
//         backgroundColor:"blue"
//     },2000,function(){
//         $("#box").css("backgroundColor","blue");
//     });
//     $("#box").animate({
//         top:"200px",
//         width: "100px",
//         height: "100px",
//         backgroundColor:"blue"
//     },2000,function(){
//         $("#box").css("backgroundColor","orange");
//     }); 
//     $("#box").animate({
//         left:"0px",
//         width: "200px",
//         height: "200px",
//         backgroundColor:"blue"
//     },2000,function(){
//         $("#box").css("backgroundColor","green");
//     }); 
//     $("#box").animate({
//         top:"0px",
//         width: "100px",
//         height: "100px",
//         backgroundColor:"blue"
//     },2000,function(){
//         $("#box").css("backgroundColor","red");
//     });

// });
// // Task3
$.fn.addPaddingAndMargin = function (options) {
  var settings = $.extend(
    {
      padding: "10px",
      margin:"10px"

    },
    options
  );
  return this.css({
    padding: settings.padding,
    margin:settings.margin
  });
};
$('button').click(function(){
    $('p').addPaddingAndMargin({padding:"100px",margin:"100px"});
});