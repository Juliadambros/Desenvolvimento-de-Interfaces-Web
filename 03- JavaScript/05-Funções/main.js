(function (win, doc){
    let isValid = false
    console.log("main", isValid)
    win.alert("ALERTA")
    function init(){
        console.log("init do main")
    }
    init()
})(window, document)  /*autodeclaravel com o : (), sendo assim chamada de função*/ 