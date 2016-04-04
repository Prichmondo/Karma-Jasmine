describe("Karma Test", function(){
    
    var app = new AppTestClass();
    app.init(); 
    
    it("should return true", function(){
       expect(app.get_field_value("test")).toBe("test"); 
    });
    
    it("should return the error message: 'input field is empty'", function(){
       expect(app.get_field_value("")).toBe("input field is empty"); 
    });

});