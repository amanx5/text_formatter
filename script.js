function colorchange(){
  let color = color_select.selectedOptions[0].value;    //select first element (there can be multi selection too using multiple attribute)
  text.style.color=color;
  color_select.style.color=color;
  // let value = 'color:'+color;
  // text.setAttribute("style", value);   this method overwrites existing inline styling so not using it
  // color_select.setAttribute("style", value); 
}
function fontchange(){
  let font = font_select.selectedOptions[0].value;
  font = font + ",Arial"; //arial in case selected font is not avaiable in the device
  text.style.fontFamily=font;
  font_select.style.fontFamily=font;
}
function up()
{
  content = text.value;
  content = content.toUpperCase();
  text.value=content;
}
function down()
{
  content = text.value;
  content = content.toLowerCase();
  text.value=content;
}
function bold()
{
  // https://www.w3schools.com/jsref/prop_element_classlist.asp
  let list = text.classList;
  list.toggle("bold");
  // also toggle style of button to highlight when button is clicked
  list = bold_btn.classList;
  list.toggle("highlight");
} 
function uline()
{
  let list = text.classList;
  list.toggle("underline");
  list = uline_btn.classList;
  list.toggle("highlight");
} 
function italic()
{
  let list = text.classList;
  list.toggle("italic");
  list = italic_btn.classList;
  list.toggle("highlight");
} 
function dec(){
  //https://stackoverflow.com/questions/15195209/how-to-get-font-size-in-html
  var style = window.getComputedStyle(text, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style); 
  text.style.fontSize = (fontSize - 2) + 'px';
}
function inc(){
  var style = window.getComputedStyle(text, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style); 
  text.style.fontSize = (fontSize + 2) + 'px';
}