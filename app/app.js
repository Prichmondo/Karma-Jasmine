var AppTestClass = function(){    
    
    var inputField, button;
    
    function button_click(e){
        var inputValue = inputField.val();
        alert(this.get_field_value(inputValue));
        return e;
    }
    
    this.get_field_value = function(inputValue){        
        return inputValue !== "" ? inputValue : "input field is empty";
    }
    
    this.init = function(){
        
        inputField = $("#text_field");
        button = $("#get_field_btn");
        
        button.click(button_click);
    }
    
    this.dispose = function(){
        inputField.off();
        button.off();
    }
}

$(document).ready(function(){
    var app = new AppTestClass();
    app.init();
});