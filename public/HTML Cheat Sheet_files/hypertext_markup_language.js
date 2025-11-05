let threshold = 500;

window.onscroll = function (event) 
{
    var layout_top = document.getElementById("layout_section").getBoundingClientRect().top;
    var layout_bottom = document.getElementById("layout_section").getBoundingClientRect().bottom;

    var text_top = document.getElementById("text_section").getBoundingClientRect().top;
    var text_bottom = document.getElementById("text_section").getBoundingClientRect().bottom;

    var list_top = document.getElementById("list_section").getBoundingClientRect().top;
    var list_bottom = document.getElementById("list_section").getBoundingClientRect().bottom;
    
    var form_top = document.getElementById("form_section").getBoundingClientRect().top;
    var form_bottom = document.getElementById("form_section").getBoundingClientRect().bottom;
    
    var media_top = document.getElementById("media_section").getBoundingClientRect().top;
    var media_bottom = document.getElementById("media_section").getBoundingClientRect().bottom;
    
    var hide_top = document.getElementById("hide_section").getBoundingClientRect().top;
    var hide_bottom = document.getElementById("hide_section").getBoundingClientRect().bottom;

    var lang_top = document.getElementById("lang_section").getBoundingClientRect().top;
    var lang_bottom = document.getElementById("lang_section").getBoundingClientRect().bottom;

    var dom_top = document.getElementById("DOM_section").getBoundingClientRect().top;
    var dom_bottom = document.getElementById("DOM_section").getBoundingClientRect().bottom;

    var meta_top = document.getElementById("meta_section").getBoundingClientRect().top;
    var meta_bottom = document.getElementById("meta_section").getBoundingClientRect().bottom;

    var attr_top = document.getElementById("attr_section").getBoundingClientRect().top;
    var attr_bottom = document.getElementById("attr_section").getBoundingClientRect().bottom;
    
    var val_top = document.getElementById("value_section").getBoundingClientRect().top;
    var val_bottom = document.getElementById("value_section").getBoundingClientRect().bottom;

    if(threshold > layout_top && threshold < layout_bottom){
        document.getElementById("radio_A").checked = true;
    }
    else if (threshold > text_top && threshold < text_bottom){
        document.getElementById("radio_B").checked = true;
    }
    else if (threshold > list_top && threshold < list_bottom){
        document.getElementById("radio_C").checked = true;
    }
    else if (threshold > form_top && threshold < form_bottom){
        document.getElementById("radio_D").checked = true;
    }
    else if (threshold > media_top && threshold < media_bottom){
        document.getElementById("radio_E").checked = true;
    }
    else if (threshold > hide_top && threshold < hide_bottom){
        document.getElementById("radio_F").checked = true;
    }
    else if (threshold > lang_top && threshold < lang_bottom){
        document.getElementById("radio_G").checked = true;
    }
    else if (threshold > dom_top && threshold < dom_bottom){
        document.getElementById("radio_H").checked = true;
    }
    else if (threshold > meta_top && threshold < meta_bottom){
        document.getElementById("radio_I").checked = true;
    }
    else if (threshold > attr_top && threshold < attr_bottom){
        document.getElementById("radio_J").checked = true;
    }
    else if (threshold > val_top && threshold < val_bottom){
        document.getElementById("radio_K").checked = true;
    }
}