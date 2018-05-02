
var Calc = {

    Model: {
        var1: undefined,
        var2: undefined,
        var1String: "",
        var2String: "",
        operation: undefined,
        total: undefined,
        totalString: "",
        in1: true,
        in2: false,
        memory: undefined,
        memorytoAdd: undefined,
        memoryRead : false


    },


    View: {
        textRow: {id: "textRow", type: "text", value: "", onclick: ""},
        button1: {id: "button1", type: "button", value: 1, onclick: ""},
        button0: {id: "button0", type: "button", value: 0, onclick: ""},
        buttonPlus: {id: "buttonPlus", type: "button", value: "+", onclick: ""},
        buttonMult: {id: "buttonMult", type: "button", value: "*", onclick: ""},
        buttonDivide: {id: "buttonDivide", type: "button", value: "/", onclick: ""},
        buttonMod: {id: "buttonMod", type: "button", value: "%", onclick: ""},
        buttonLeft: {id: "buttonLeft", type: "button", value: "<<", onclick: ""},
        buttonRight: {id: "buttonRight", type: "button", value: ">>", onclick: ""},
        buttonAnd: {id: "buttonAnd", type: "button", value: "&&", onclick: ""},
        buttonOr: {id: "buttonOr", type: "button", value: "||", onclick: ""},
        buttonNot: {id: "buttonNot", type: "button", value: "~", onclick: ""},
        buttonMemoryRead: {id: "buttonMemoryRead", type: "button", value: "MR", onclick: ""},
        buttonMemoryClear: {id: "buttonMemoryClear", type: "button", value: "MC", onclick: ""},
        buttonMemoryPlus: {id: "buttonMemoryPlus", type: "button", value: "M+", onclick: ""},
        buttonMemoryMinus: {id: "buttonMemoryMinus", type: "button", value: "M-", onclick: ""},
        buttonEquals: {id: "buttonEquals", type: "button", value: "=", onclick: ""},
        buttonClear: {id: "buttonClear", type: "button", value: "C", onclick: ""}
    },

    Controller: {



        resetButtons:function(){
            document.getElementById("button1").style.color = "black";
            document.getElementById("button0").style.color = "black";
            document.getElementById("buttonPlus").style.color = "black";
            document.getElementById("buttonMult").style.color = "black";
            document.getElementById("buttonDivide").style.color = "black";
            document.getElementById("buttonMod").style.color = "black";
            document.getElementById("buttonLeft").style.color = "black";
            document.getElementById("buttonRight").style.color = "black";
            document.getElementById("buttonAnd").style.color = "black";
            document.getElementById("buttonOr").style.color = "black";
            document.getElementById("buttonNot").style.color = "black";
            document.getElementById("buttonMemoryRead").style.color = "black";
            document.getElementById("buttonMemoryClear").style.color = "black";
            document.getElementById("buttonMemoryPlus").style.color = "black";
            document.getElementById("buttonMemoryMinus").style.color = "black";
            document.getElementById("buttonEquals").style.color = "black";
            document.getElementById("buttonClear").style.color = "black";
        },

        setVal: function(that){
            if (Calc.Model.in1 === true) {
                    Calc.Model.var1String = Calc.Model.var1String + that.toString();
                document.getElementById("textRow").value = Calc.Model.var1String;
            }else{
                    Calc.Model.var2String = Calc.Model.var2String + that.toString();
                document.getElementById("textRow").value = Calc.Model.var2String;
            }


            Calc.Model.var1 = parseInt(Calc.Model.var1String, 2);
            Calc.Model.var2 = parseInt(Calc.Model.var2String, 2);
        },

        setOperation: function(that){
                Calc.Model.operation = that;
                Calc.Model.in1 = false;
                Calc.Model.in2 = true;
        },

        addVal: function(op){
           var tempSum;
           //alert("total:  " + Calc.Model.total + "var1:  " + Calc.Model.var1 + "var2:  "+Calc.Model.var2 + "op code:  "+ op);
            if(op === 1) {
                tempSum = Calc.Model.var1 + Calc.Model.var2;
            }else{
                tempSum = Calc.Model.total + Calc.Model.var2;
            }
            Calc.Model.total = tempSum;
            Calc.Model.totalString = tempSum.toString(2);
            document.getElementById("textRow").value = Calc.Model.totalString;

        },

        multVal: function(op){
            var tempProd;
            if(op===1){
                tempProd = Calc.Model.var1 * Calc.Model.var2;
            }else{
                tempProd = Calc.Model.total * Calc.Model.var2;
            }
            Calc.Model.total = tempProd;
            Calc.Model.totalString = tempProd.toString(2);
            document.getElementById("textRow").value = Calc.Model.totalString;
        },

        divVal: function(op){
            var tempDiv;
            if(op === 1){
                tempDiv = Calc.Model.var1 / Calc.Model.var2;
            } else{
                tempDiv = Calc.Model.total / Calc.Model.var2;
            }
            Calc.Model.total = Math.floor(tempDiv);
            Calc.Model.totalString = Math.floor(tempDiv).toString(2);//ROUNDED DOWN. INTEGER DIVISION BC USING BINARY
            document.getElementById("textRow").value = Calc.Model.totalString;
        },

        modVal: function(op){
            var tempMod;
            if(op === 1) {
                tempMod = Calc.Model.var1 % Calc.Model.var2;
            }else{
                tempMod = Calc.Model.total%Calc.Model.var2;
            }
            Calc.Model.total = Math.floor(tempMod);
            Calc.Model.totalString = tempMod.toString(2);
            document.getElementById("textRow").value = Calc.Model.totalString;
        },

        LShiftVal: function(){
            var tempLShift = Calc.Model.var1 << 1;
            Calc.Model.totalString = tempLShift.toString(2);
            document.getElementById("textRow").value = Calc.Model.totalString;
            Calc.Model.var1 = tempLShift;
        },

        RShiftVal: function(){
            var tempRShift = Calc.Model.var1 >> 1;
            Calc.Model.totalString = tempRShift.toString(2);
            document.getElementById("textRow").value = Calc.Model.totalString;
            Calc.Model.var1 = tempRShift;
        },


        andVal: function(op){
            var tempAnd;
            if(op === 1){
                tempAnd = Calc.Model.var1 & Calc.Model.var2;
            } else {
                tempAnd = Calc.Model.total & Calc.Model.var2;
            }
            Calc.Model.total = tempAnd;
            Calc.Model.totalString = tempAnd.toString(2);
            document.getElementById("textRow").value = Calc.Model.totalString;
        },

        orVal: function(op){
            var tempOr;
            if (op ===1){
                tempOr = Calc.Model.var1 | Calc.Model.var2;
            }else{
                tempOr = Calc.Model.total | Calc.Model.var1;
            }
            Calc.Model.total = tempOr;
            Calc.Model.totalString = tempOr.toString(2);
            document.getElementById("textRow").value = Calc.Model.totalString;
        },

        notVal: function(){
            var x = Calc.Model.var1;
            var tempNot = x ^ parseInt((new Array(x.toString(2).length+1)).join("1"),2);

            Calc.Model.totalString = tempNot.toString(2);
            document.getElementById("textRow").value =Calc.Model.totalString;
            Calc.Model.var1 = tempNot;
        },

        equals: function() {
            if(Calc.Model.var1String === "") {
                if (Calc.Model.operation === 1) {
                    Calc.Controller.addVal(2);
                } else if (Calc.Model.operation === 2) {
                    Calc.Controller.multVal(2);
                } else if (Calc.Model.operation === 3) {
                    Calc.Controller.divVal(2);
                } else if (Calc.Model.operation === 4) {
                    Calc.Controller.modVal(2);
                } else if (Calc.Model.operation === 7) {
                    Calc.Controller.andVal(2);
                } else if (Calc.Model.operation === 8) {
                    Calc.Controller.orVal(2);
                }
            }else{
                if (Calc.Model.operation === 1) {
                    Calc.Controller.addVal(1);
                } else if (Calc.Model.operation === 2) {
                    Calc.Controller.multVal(1);
                } else if (Calc.Model.operation === 3) {
                    Calc.Controller.divVal(1);
                } else if (Calc.Model.operation === 4) {
                    Calc.Controller.modVal(1);
                } else if (Calc.Model.operation === 7) {
                    Calc.Controller.andVal(1);
                } else if (Calc.Model.operation === 8) {
                    Calc.Controller.orVal(1);
                }
            }

            Calc.Model.in1 = true;
            Calc.Model.in2 = false;
            Calc.Model.var1String = "";
            Calc.Model.var2String = "";
            Calc.Model.var1 = undefined;
            Calc.Model.var2 = undefined;
            Calc.Model.memoryRead = false;
        },

        clear: function(){
            Calc.Model.var1= undefined;
            Calc.Model.var2= undefined;
            Calc.Model.var1String= "";
            Calc.Model.var2String= "";
            Calc.Model.operation= undefined;
            Calc.Model.total= undefined;
            Calc.Model.totalString= "";
            Calc.Model.in1= true;
            Calc.Model.in2= false;
            Calc.Model.memory= undefined;
            Calc.Model.memorytoAdd= undefined;
            Calc.Model.memoryRead = false;
            document.getElementById("textRow").value = "Cleared";
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
                document.getElementById("textRow").value = "M: " + Calc.Model.memory.toString(2);
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
                document.getElementById("textRow").value = "M: " + Calc.Model.memory.toString(2);
                Calc.Model.total = Calc.Model.memory;
            }
        },

        memoryRead: function(){
            Calc.Model.memoryRead = true;
            document.getElementById("textRow").value = "M: " + Calc.Model.memory.toString(2);
            Calc.Model.total = Calc.Model.memory;
        },

        memoryClear: function(){
            Calc.Model.memory = undefined;
            if(Calc.Model.memoryRead===true) {
                document.getElementById("textRow").value = "Memory Clear";
                setTimeout(function() {
                    document.getElementById("textRow").value = "Showing Total...";
                    setTimeout(function() {
                        document.getElementById("textRow").value = Calc.Model.total.toString(2);
                    }, (2 * 1000));
                }, (2 * 1000));
            }
        },



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
        s = "<table id=\"myTable\" border=2>";
        s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
        s += "<tr><td>";
        s += Calc.displayElement(Calc.View.button1) + "  ";
        s += Calc.displayElement(Calc.View.button0) + "  ";
        s += Calc.displayElement(Calc.View.buttonPlus) + "  ";
        s += Calc.displayElement(Calc.View.buttonMult) + "  ";
        s += Calc.displayElement(Calc.View.buttonDivide) + "  ";
        s += Calc.displayElement(Calc.View.buttonMod) + "  ";
        s += "<tr><td>";
        s += Calc.displayElement(Calc.View.buttonLeft) + "  ";
        s += Calc.displayElement(Calc.View.buttonRight) + "  ";
        s += Calc.displayElement(Calc.View.buttonAnd) + "  ";
        s += Calc.displayElement(Calc.View.buttonOr) + "  ";
        s += Calc.displayElement(Calc.View.buttonNot) + "  ";
        s += "<tr><td>";
        s += " " + Calc.displayElement(Calc.View.buttonMemoryRead) + "  ";
        s += Calc.displayElement(Calc.View.buttonMemoryClear) + "  ";
        s += Calc.displayElement(Calc.View.buttonMemoryPlus) + "  ";
        s += Calc.displayElement(Calc.View.buttonMemoryMinus) + "  ";
        s += "<tr><td>";
        s += " _____________ ";
        s += Calc.displayElement(Calc.View.buttonEquals) + "  ";
        s += Calc.displayElement(Calc.View.buttonClear) + "  ";
        s += "</tr></td></table>";
        return s;
    },

    attachHandlers: function () {
        Calc.View.button1.onclick = "Calc.button1Handler()";
        Calc.View.button0.onclick = "Calc.button0Handler()";
        Calc.View.buttonPlus.onclick = "Calc.buttonPlusHandler()";
        Calc.View.buttonMult.onclick = "Calc.buttonMultHandler()";
        Calc.View.buttonDivide.onclick = "Calc.buttonDivideHandler()";
        Calc.View.buttonMod.onclick = "Calc.buttonModHandler()";
        Calc.View.buttonLeft.onclick = "Calc.buttonLeftHandler()";
        Calc.View.buttonRight.onclick = "Calc.buttonRightHandler()";
        Calc.View.buttonAnd.onclick = "Calc.buttonAndHandler()";
        Calc.View.buttonOr.onclick = "Calc.buttonOrHandler()";
        Calc.View.buttonNot.onclick = "Calc.buttonNotHandler()";
        Calc.View.buttonMemoryRead.onclick = "Calc.buttonMemoryReadHandler()";
        Calc.View.buttonMemoryClear.onclick = "Calc.buttonMemoryClearHandler()";
        Calc.View.buttonMemoryPlus.onclick = "Calc.buttonMemoryPlusHandler()";
        Calc.View.buttonMemoryMinus.onclick = "Calc.buttonMemoryMinusHandler()";
        Calc.View.buttonEquals.onclick = "Calc.buttonEqualsHandler()";
        Calc.View.buttonClear.onclick = "Calc.buttonClearHandler()";
    },

    button1Handler: function () {
        Calc.Controller.setVal(1);
        Calc.Controller.resetButtons();
        document.getElementById("button1").style.color = "red";

    },
    button0Handler: function () {
        Calc.Controller.setVal(0);
        Calc.Controller.resetButtons();
        document.getElementById("button0").style.color = "red";
    },
    buttonPlusHandler: function () {
        Calc.Controller.setOperation(1);
        Calc.Controller.resetButtons();
        document.getElementById("buttonPlus").style.color = "red";
    },
    buttonMultHandler: function () {
        Calc.Controller.setOperation(2);
        Calc.Controller.resetButtons();
        document.getElementById("buttonMult").style.color = "red";
    },
    buttonDivideHandler: function () {
        Calc.Controller.setOperation(3);
        Calc.Controller.resetButtons();
        document.getElementById("buttonDivide").style.color = "red";
    },
    buttonModHandler: function () {
        Calc.Controller.setOperation(4);
        Calc.Controller.resetButtons();
        document.getElementById("buttonMod").style.color = "red";
    },
    buttonLeftHandler: function () {
        Calc.Controller.LShiftVal();
        Calc.Controller.resetButtons();
        document.getElementById("buttonLeft").style.color = "red";
    },
    buttonRightHandler: function () {
        Calc.Controller.RShiftVal();
        Calc.Controller.resetButtons();
        document.getElementById("buttonRight").style.color = "red";
    },
    buttonAndHandler: function () {
        Calc.Controller.setOperation(7);
        Calc.Controller.resetButtons();
        document.getElementById("buttonAnd").style.color = "red";
    },
    buttonOrHandler: function () {
        Calc.Controller.setOperation(8);
        Calc.Controller.resetButtons();
        document.getElementById("buttonOr").style.color = "red";
    },
    buttonNotHandler: function () {
        Calc.Controller.notVal();
        Calc.Controller.resetButtons();
        document.getElementById("buttonNot").style.color = "red";
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
    buttonEqualsHandler: function () {
        Calc.Controller.equals();
        Calc.Controller.resetButtons();
        document.getElementById("buttonEquals").style.color = "red";
    },
    buttonClearHandler: function () {
        Calc.Controller.clear();
        Calc.Controller.resetButtons();
        document.getElementById("buttonClear").style.color = "red";
    },


} // end of Calc;

