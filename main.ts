function mostrar_puntaje(jugador: string, numero: number) {
    if (numero == 0) {
        basic.showString("Empate")
    } else {
        basic.showString(jugador)
        basic.showNumber(numero)
    }
    
}

function esperar_boton() {
    let jugador_a = input.buttonIsPressed(Button.A)
    let jugador_b = input.buttonIsPressed(Button.B)
    while (!(jugador_a || jugador_b)) {
        jugador_a = input.buttonIsPressed(Button.A)
        jugador_b = input.buttonIsPressed(Button.B)
    }
}

function dibujar_jugada() {
    
    hand = randint(1, 3)
    if (hand == 1) {
        // piedra
        dibujar_cuadrado()
    } else if (hand == 2) {
        // papel
        basic.showIcon(IconNames.Square)
    } else {
        // Tijera
        basic.showIcon(IconNames.Scissors)
    }
    
}

function dibujar_cuadrado() {
    for (let x = 1; x < 4; x++) {
        for (let y = 1; y < 4; y++) {
            led.plot(x, y)
        }
    }
}

function limpiar_matriz() {
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
            led.unplot(x, y)
        }
    }
}

function sumar_puntaje() {
    let jugador_a = input.buttonIsPressed(Button.A)
    let jugador_b = input.buttonIsPressed(Button.B)
    let empate = jugador_a && jugador_b
    if (empate) {
        mostrar_puntaje("", 0)
    } else if (jugador_a) {
        
        jugador += 1
        mostrar_puntaje("Hum", jugador)
    } else if (jugador_b) {
        
        microbit += 1
        mostrar_puntaje("AI", microbit)
    }
    
}

let hand = 0
//  inicio sin nada
let jugador = 0
let microbit = 0
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    limpiar_matriz()
    dibujar_jugada()
    esperar_boton()
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    sumar_puntaje()
})
