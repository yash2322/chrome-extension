let newheader = document.getElementById('myHeader');
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  console.log(tabs[0].url);     //url
  console.log(tabs[0].title);   //title
  newheader.innerText = tabs[0].title;
});
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//   console.log(tabs[0].url);     //url
//   console.log(tabs[0].title);   //title
//   newheader.innerText = tabs[0].title;
// });
// $(document).ready(function(){
//   // forms 
//   $('form').each(function(findex){
//     // focus first form, first input
//     if (findex == 0){
//       $(':input:first',this).focus();
//     }
//   });//form.each
//   $('input[type=submit]').live('click',function(){
//     $(this).closest('form').submit(function(){
//       var url = $(this).attr('action');
//       // get post values
//       var data = {}; // define data object
//       $(':input',this).each(function(index){
//         // checkbox
//         if ($(this).attr('type') == 'checkbox'){
//           if ($(this).is(':checked')){
//             var key = $(this).attr('name');
//             // if it hasn't been created yet, define it as an array
//             if (typeof data[key] == 'undefined'){
//               data[key] = [];
//             }
//             data[key].push($(this).val()); // only happens on CHECKED fields
//           }
//         // radio button
//         }else if($(this).attr('type') == 'radio'){
//           if ($(this).is(':checked')){
//             var key = $(this).attr('name');
//             var val = $(this).val();
//             data[key] = val;
//           }
//         // all others
//         }else{
//           // write non-checkbox fields to data
//           var key = $(this).attr('name');
//           var val = $(this).val();
//           alert(val);
//           data[key] = val;
//         }
//       });
//       // $.post(url,data, function(html) {
//       //     $("#output").html(html);
//       });
//       return false;
//     }); //form.submit
//   });//submit.live
// });//document.ready
