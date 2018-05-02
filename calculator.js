
var Calc = {

    Model: {
        var1: undefined,
        var2: undefined,
        var1String: "",
        var2String: "",
        operation: undefined,
        total: undefined,
        in1: true,
        in2: false,
        memory: undefined,
        memorytoAdd: undefined,
        memoryRead : false


    },


    View: {
        textRow: {id: "textRow", type: "text", value: "", onclick: ""},
        button7: {id: "button7", type: "button", value: 7, onclick: "", class: "button"},
        button8: {id: "button8", type: "button", value: 8, onclick: ""},
        button9: {id: "button9", type: "button", value: 9, onclick: ""},
        buttonPlus: {id: "buttonPlus", type: "button", value: "+", onclick: ""},
        button4: {id: "button4", type: "button", value: 4, onclick: ""},
        button5: {id: "button5", type: "button", value: 5, onclick: ""},
        button6: {id: "button6", type: "button", value: 6, onclick: ""},
        buttonMinus: {id: "buttonMinus", type: "button", value: "-", onclick: ""},
        button1: {id: "button1", type: "button", value: 1, onclick: ""},
        button2: {id: "button2", type: "button", value: 2, onclick: ""},
        button3: {id: "button3", type: "button", value: 3, onclick: ""},
        buttonMult: {id: "buttonMult", type: "button", value: "*", onclick: ""},
        button0: {id: "button0", type: "button", value: 0, onclick: ""},
        buttonDecimal: {id: "buttonDecimal", type: "button", value: ".", onclick: ""},
        buttonEquals: {id: "buttonEquals", type: "button", value: "=", onclick: ""},
        buttonDivide: {id: "buttonDivide", type: "button", value: "/", onclick: ""},
        buttonClear: {id: "buttonClear", type: "button", value: "C", onclick: ""},
        buttonMemoryRead: {id: "buttonMemoryRead", type: "button", value: "MR", onclick: ""},
        buttonMemoryMinus: {id: "buttonMemoryMinus", type: "button", value: "M-", onclick: ""},
        buttonMemoryPlus: {id: "buttonMemoryPlus", type: "button", value: "M+", onclick: ""},
        buttonMemoryClear: {id: "buttonMemoryClear", type: "button", value: "MC", onclick: ""},
    },

    Controller: {


        setVal: function (that) {


            if (Calc.Model.in1 === true) {
                if (that === '.') {
                    Calc.Model.var1String += '.';
                } else if (that === '-') {
                    Calc.Model.var1String += '-';
                }
                else{
                    Calc.Model.var1String = Calc.Model.var1String + that.toString();
                }
            } else{
                if (that ==='.'){
                    Calc.Model.var2String += '.';
                }else if(that === '.'){
                    Calc.Model.var2String += '-';
                }
                    else {
                        Calc.Model.var2String = Calc.Model.var2String + that.toString()
                };
                }

            Calc.Model.var1 = parseFloat(Calc.Model.var1String);
            Calc.Model.var2 = parseFloat(Calc.Model.var2String);

            //document.getElementById("textRow").value = Calc.Model.var1;
        },

        setOperation: function (that) {
           /* if(Calc.Model.var1String==="") {//if not var 1 was set, can't do this.//TODO -- STARTING WITH NEGATIVE
                if (that === 2) {
                    if(Calc.Model.in1==true) {
                        Calc.Model.var1String = "-";
                    }else Calc.Model.var2String = "-";
                }
            }*/

                Calc.Model.operation = that;
                Calc.Model.in1 = false;
                Calc.Model.in2 = true;

        },

        equals: function () {
            if (Calc.Model.var1String === "") {
                if (Calc.Model.operation === 1) {
                    Calc.Model.total = Calc.Model.total + Calc.Model.var2;
                } else if (Calc.Model.operation === 2) {
                    Calc.Model.total = Calc.Model.total - Calc.Model.var2;
                } else if (Calc.Model.operation === 3) {
                    Calc.Model.total = Calc.Model.total * Calc.Model.var2;
                } else if (Calc.Model.operation === 4) {
                    Calc.Model.total = Calc.Model.total / Calc.Model.var2;
                }
            } else {
                if (Calc.Model.operation === 1) {
                    Calc.Model.total = Calc.Model.var1 + Calc.Model.var2;
                } else if (Calc.Model.operation === 2) {
                    Calc.Model.total = Calc.Model.var1 - Calc.Model.var2;
                } else if (Calc.Model.operation === 3) {
                    Calc.Model.total = Calc.Model.var1 * Calc.Model.var2;
                } else if (Calc.Model.operation === 4) {
                    Calc.Model.total = Calc.Model.var1 / Calc.Model.var2;
                }
            }
                document.getElementById("textRow").value = Calc.Model.total;
                //Save Total Somewhere! Then make it possible to * just that (checek in setOp).
                Calc.Model.in1 = true;
                Calc.Model.in2 = false;
                Calc.Model.var1String = "";
                Calc.Model.var2String = "";
                Calc.Model.memoryRead = false;

        },

        clear: function(){
            Calc.Model.in1 = true;
            Calc.Model.in2 = false;
            Calc.Model.var1String = "";
            Calc.Model.var2String = "";
            Calc.Model.var1 = undefined;
            Calc.Model.var2 = undefined;
            Calc.Model.total = undefined;
            Calc.Model.operation = undefined;
            document.getElementById("textRow").value = "Cleared";
        },

        resetButtons:function(){
            document.getElementById("button7").style.color = "black";
            document.getElementById("button8").style.color = "black";
            document.getElementById("button9").style.color = "black";
            document.getElementById("buttonPlus").style.color = "black";
            document.getElementById("buttonMemoryPlus").style.color = "black";
            document.getElementById("buttonClear").style.color = "black";
            document.getElementById("button4").style.color = "black";
            document.getElementById("button5").style.color = "black";
            document.getElementById("button6").style.color = "black";
            document.getElementById("buttonMinus").style.color = "black";
            document.getElementById("buttonMemoryMinus").style.color = "black";
            document.getElementById("button1").style.color = "black";
            document.getElementById("button2").style.color = "black";
            document.getElementById("button3").style.color = "black";
            document.getElementById("buttonMult").style.color = "black";
            document.getElementById("buttonMemoryRead").style.color = "black";
            document.getElementById("button0").style.color = "black";
            document.getElementById("buttonDecimal").style.color = "black";
            document.getElementById("buttonEquals").style.color = "black";
            document.getElementById("buttonDivide").style.color = "black";
            document.getElementById("buttonMemoryClear").style.color = "black";
        },

        memoryAdd: function(){

            if(Calc.Model.var1String === "" && Calc.Model.var2String ===""){
                Calc.Model.memorytoAdd = Calc.Model.total;
            }
           if(Calc.Model.memory === undefined){
               Calc.Model.memory = Calc.Model.memorytoAdd;
           }else {
               Calc.Model.memory += Calc.Model.memorytoAdd;
           }

            if(Calc.Model.memoryRead===true) {
                document.getElementById("textRow").value = "M: " + Calc.Model.memory;
                Calc.Model.total = Calc.Model.memory;
            }

        },

        memorySubtract : function(){
            if(Calc.Model.var1String === "" && Calc.Model.var2String ===""){
                Calc.Model.memorytoAdd = Calc.Model.total;
            }
            if(Calc.Model.memory === undefined){
                Calc.Model.memory = 0 - Calc.Model.memorytoAdd;
            }else {
                Calc.Model.memory -= Calc.Model.memorytoAdd;
            }

            if(Calc.Model.memoryRead===true) {
                document.getElementById("textRow").value = "M: " + Calc.Model.memory;
                Calc.Model.total = Calc.Model.memory;
            }
        },

        memoryRead: function(){
            Calc.Model.memoryRead = true;
            document.getElementById("textRow").value = "M: " + Calc.Model.memory;
            Calc.Model.total = Calc.Model.memory;
        },

        memoryClear: function(){
            Calc.Model.memory = undefined;
            if(Calc.Model.memoryRead===true) {
                document.getElementById("textRow").value = "Memory Cleared";
                setTimeout(function() {
                    document.getElementById("textRow").value = "Showing Total...";
                    setTimeout(function() {
                        document.getElementById("textRow").value = Calc.Model.total.toString();
                    }, (2 * 1000));
                }, (2 * 1000));
            }
        }
    },

    run: function () {
        Calc.attachHandlers();
        console.log(Calc.display());
        return Calc.display();
    },


    displayElement: function (element) {
        var s = "<input ";
        s += " id=\"" + element.id + "\"";
        s += " type=\"" + element.type + "\"";
        s += " value= \"" + element.value + "\"";
        s += " onclick= \"" + element.onclick + "\"";
        s += ">";
        return s;

    },

    display: function () {
        var s;
        s = "<table id=\"myTable\" border=2>"
        s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
        s += "<tr><td>";
        s += Calc.displayElement(Calc.View.button7) + "  ";
        s += Calc.displayElement(Calc.View.button8) + "  ";
        s += Calc.displayElement(Calc.View.button9) + "  ";
        s += Calc.displayElement(Calc.View.buttonPlus) + "";
        s += Calc.displayElement(Calc.View.buttonMemoryPlus) + "";
        s += Calc.displayElement(Calc.View.buttonClear) + "";
        s += "<tr><td>";
        s += Calc.displayElement(Calc.View.button4) + "  ";
        s += Calc.displayElement(Calc.View.button5) + "  ";
        s += Calc.displayElement(Calc.View.button6) + "  ";
        s += Calc.displayElement(Calc.View.buttonMinus) + " ";
        s += Calc.displayElement(Calc.View.buttonMemoryMinus) + "";
        s += "<tr><td>";
        s += Calc.displayElement(Calc.View.button1) + "  ";
        s += Calc.displayElement(Calc.View.button2) + "  ";
        s += Calc.displayElement(Calc.View.button3) + "  ";
        s += Calc.displayElement(Calc.View.buttonMult) + "";
        s += Calc.displayElement(Calc.View.buttonMemoryRead) + "";
        s += "<tr><td>";
        s += Calc.displayElement(Calc.View.button0) + "  ";
        s += Calc.displayElement(Calc.View.buttonDecimal) + " ";
        s += Calc.displayElement(Calc.View.buttonEquals) + "  ";
        s += Calc.displayElement(Calc.View.buttonDivide) + " ";
        s += Calc.displayElement(Calc.View.buttonMemoryClear) + "";
        s += "</tr></td></table>";
        return s;
    },

    attachHandlers: function () {
        Calc.View.button7.onclick = "Calc.button7Handler()";
        Calc.View.button8.onclick = "Calc.button8Handler()";
        Calc.View.button9.onclick = "Calc.button9Handler()";
        Calc.View.buttonPlus.onclick = "Calc.buttonPlusHandler()";
        Calc.View.button4.onclick = "Calc.button4Handler()";
        Calc.View.button5.onclick = "Calc.button5Handler()";
        Calc.View.button6.onclick = "Calc.button6Handler()";
        Calc.View.buttonMinus.onclick = "Calc.buttonMinusHandler()";
        Calc.View.button1.onclick = "Calc.button1Handler()";
        Calc.View.button2.onclick = "Calc.button2Handler()";
        Calc.View.button3.onclick = "Calc.button3Handler()";
        Calc.View.buttonMult.onclick = "Calc.buttonMultHandler()";
        Calc.View.button0.onclick = "Calc.button0Handler()";
        Calc.View.buttonDecimal.onclick = "Calc.buttonDecimalHandler()";
        Calc.View.buttonEquals.onclick = "Calc.buttonEqualsHandler()";
        Calc.View.buttonDivide.onclick = "Calc.buttonDivideHandler()";
        Calc.View.buttonMemoryPlus.onclick = "Calc.buttonMemoryPlusHandler()";
        Calc.View.buttonMemoryMinus.onclick = "Calc.buttonMemoryMinusHandler()";
        Calc.View.buttonMemoryRead.onclick = "Calc.buttonMemoryReadHandler()";
        Calc.View.buttonMemoryClear.onclick = "Calc.buttonMemoryClearHandler()";
        Calc.View.buttonClear.onclick = "Calc.buttonClearHandler()";


    },

    button7Handler: function () {
        Calc.Controller.setVal(7);
        Calc.Controller.resetButtons();
        document.getElementById("button7").style.color = "red";
    },
    button8Handler: function () {
        Calc.Controller.setVal(8);
        Calc.Controller.resetButtons();
        document.getElementById("button8").style.color = "red";
    },
    button9Handler: function () {
        Calc.Controller.setVal(9);
        Calc.Controller.resetButtons();
        document.getElementById("button9").style.color = "red";
    },
    buttonPlusHandler: function () {
        Calc.Controller.setOperation(1);
        Calc.Controller.resetButtons();
        document.getElementById("buttonPlus").style.color = "red";
    },
    button4Handler: function () {
        Calc.Controller.setVal(4);
        Calc.Controller.resetButtons();
        document.getElementById("button4").style.color = "red";
    },
    button5Handler: function () {
        Calc.Controller.setVal(5);
        Calc.Controller.resetButtons();
        document.getElementById("button5").style.color = "red";
    },
    button6Handler: function () {
        Calc.Controller.setVal(6);
        Calc.Controller.resetButtons();
        document.getElementById("button6").style.color = "red";
    },
    buttonMinusHandler: function () {
  //  if (Calc.Model.var1String === ""){Calc.Controller.setVal('-')}
    //else {
       // Calc.Controller.setVal('-')
        Calc.Controller.setOperation(2);
   // }
        Calc.Controller.resetButtons();
        document.getElementById("buttonMinus").style.color = "red";
    },
    button1Handler: function () {
        Calc.Controller.setVal(1);
        Calc.Controller.resetButtons();
        document.getElementById("button1").style.color = "red";
    },
    button2Handler: function () {
        Calc.Controller.setVal(2);
        Calc.Controller.resetButtons();
        document.getElementById("button2").style.color = "red";
    },
    button3Handler: function () {
        Calc.Controller.setVal(3);
        Calc.Controller.resetButtons();
        document.getElementById("button3").style.color = "red";
    },
    buttonMultHandler: function () {
        Calc.Controller.setOperation(3);
        Calc.Controller.resetButtons();
        document.getElementById("buttonMult").style.color = "red";
    },
    button0Handler: function () {
        Calc.Controller.setVal(0);
        Calc.Controller.resetButtons();
        document.getElementById("button0").style.color = "red";
    },
    buttonDecimalHandler: function () {
        Calc.Controller.setVal('.');
        Calc.Controller.resetButtons();
        document.getElementById("buttonDecimal").style.color = "red";
    },
    buttonEqualsHandler: function () {
        Calc.Controller.equals();
        Calc.Controller.resetButtons();
        document.getElementById("buttonEquals").style.color = "red";
    },
    buttonDivideHandler: function () {
        Calc.Controller.setOperation(4);
        Calc.Controller.resetButtons();
        document.getElementById("buttonDivide").style.color = "red";
    },
    buttonMemoryPlusHandler: function () {
        Calc.Controller.memoryAdd();
        Calc.Controller.resetButtons();
        document.getElementById("buttonMemoryPlus").style.color = "red";
    },
    buttonMemoryMinusHandler: function () {
        Calc.Controller.memorySubtract();
        Calc.Controller.resetButtons();
        document.getElementById("buttonMemoryMinus").style.color = "red";
    },
    buttonMemoryReadHandler: function () {
        Calc.Controller.memoryRead();
        Calc.Controller.resetButtons();
        document.getElementById("buttonMemoryRead").style.color = "red";
    },
    buttonMemoryClearHandler: function () {
        Calc.Controller.memoryClear();
        Calc.Controller.resetButtons();
        document.getElementById("buttonMemoryClear").style.color = "red";
    },
    buttonClearHandler: function () {
        Calc.Controller.clear();
        Calc.Controller.resetButtons();
        document.getElementById("buttonClear").style.color = "red";
    }



} // end of Calc;

