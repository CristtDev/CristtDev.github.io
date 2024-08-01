// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function change_state() {
    let estadoGenerado = Math.floor(Math.random() * 2); // Estado : 0-> limpio | 1-> sucio
    console.log(estadoGenerado);


    if (estadoGenerado == 0) return "DIRTY";
    else if (estadoGenerado == 1) return "CLEAN";
}

function test(states) {
    var location = states[0];
    var state = states[0] == "A" ? states[1] : states[2];
    document.getElementById("log").innerHTML += "<br>Location: A".concat("  ->  ").concat(states[1]).concat(" | Location: B").concat("  ->  ").concat(states[2]);
    var action_result = reflex_agent(location, state);
    document.getElementById("log").innerHTML += "<br><strong style='color: yellow;'>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat("</strong>");
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGHT") {
        states[0] = "B";
        states[1] = change_state();
        console.log(states[1]);
    }
    else if (action_result == "LEFT") {
        states[0] = "A";
        states[2] = change_state();
        console.log(states[2]);
    }
    setTimeout(function () { test(states); }, 2000);
}

var states = ["A", "DIRTY", "DIRTY"];
test(states);