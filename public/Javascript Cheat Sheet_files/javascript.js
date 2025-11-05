let threshold = 500;

window.onscroll = function (event) 
{
    var variable_top = document.getElementById("variable_section").getBoundingClientRect().top;
    var variable_bottom = document.getElementById("variable_section").getBoundingClientRect().bottom;

    var operator_top = document.getElementById("operator_section").getBoundingClientRect().top;
    var operator_bottom = document.getElementById("operator_section").getBoundingClientRect().bottom;

    var condition_top = document.getElementById("condition_section").getBoundingClientRect().top;
    var condition_bottom = document.getElementById("condition_section").getBoundingClientRect().bottom;
    
    var function_top = document.getElementById("function_section").getBoundingClientRect().top;
    var function_bottom = document.getElementById("function_section").getBoundingClientRect().bottom;
    
    var object_top = document.getElementById("object_section").getBoundingClientRect().top;
    var object_bottom = document.getElementById("object_section").getBoundingClientRect().bottom;

    var class_top = document.getElementById("class_section").getBoundingClientRect().top;
    var class_bottom = document.getElementById("class_section").getBoundingClientRect().bottom;
    
    var error_top = document.getElementById("error_section").getBoundingClientRect().top;
    var error_bottom = document.getElementById("error_section").getBoundingClientRect().bottom;

    var async_top = document.getElementById("async_section").getBoundingClientRect().top;
    var async_bottom = document.getElementById("async_section").getBoundingClientRect().bottom;

    var file_top = document.getElementById("file_section").getBoundingClientRect().top;
    var file_bottom = document.getElementById("file_section").getBoundingClientRect().bottom;
    
    var debug_top = document.getElementById("debug_section").getBoundingClientRect().top;
    var debug_bottom = document.getElementById("debug_section").getBoundingClientRect().bottom;
    
    var lib_value_top = document.getElementById("value_lib_section").getBoundingClientRect().top;
    var lib_value_bottom = document.getElementById("value_lib_section").getBoundingClientRect().bottom;

    if(threshold >variable_top && threshold < variable_bottom){
        document.getElementById("radio_A").checked = true;
    }
    else if (threshold >operator_top && threshold < operator_bottom){
        document.getElementById("radio_B").checked = true;
    }
    else if (threshold >condition_top && threshold < condition_bottom){
        document.getElementById("radio_C").checked = true;
    }
    else if (threshold >function_top && threshold < function_bottom){
        document.getElementById("radio_D").checked = true;
    }
    else if (threshold >object_top && threshold < object_bottom){
        document.getElementById("radio_E").checked = true;
    }
    else if (threshold >class_top && threshold < class_bottom){
        document.getElementById("radio_F").checked = true;
    }
    else if (threshold >error_top && threshold < error_bottom){
        document.getElementById("radio_G").checked = true;
    }
    else if (threshold >async_top && threshold < async_bottom){
        document.getElementById("radio_H").checked = true;
    }
    else if (threshold >file_top && threshold < file_bottom){
        document.getElementById("radio_I").checked = true;
    }
    else if (threshold >debug_top && threshold < debug_bottom){
        document.getElementById("radio_J").checked = true;
    }
    else if (threshold >lib_value_top && threshold < lib_value_bottom){
        document.getElementById("radio_K").checked = true;
    }
}
function* generator(i) {
    yield i;
    yield i + 10;
  }
  
  const gen = generator(10);
  gen.next().value