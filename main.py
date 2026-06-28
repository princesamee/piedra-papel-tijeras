
def on_gesture_shake():
    limpiar_matriz()
    dibujar_jugada()
    esperar_boton()
    music._play_default_background(music.built_in_playable_melody(Melodies.DADADADUM), music.PlaybackMode.IN_BACKGROUND)
    sumar_puntaje()

def mostrar_puntaje(jugador, numero):
    if numero == 0:
        basic.show_string("Empate")
    else:
        basic.show_string(jugador)
        basic.show_number(numero)

def esperar_boton():
    jugador_a = input.button_is_pressed(Button.A)
    jugador_b = input.button_is_pressed(Button.B)
        
    while not (jugador_a or jugador_b):
        jugador_a = input.button_is_pressed(Button.A)
        jugador_b = input.button_is_pressed(Button.B)



    
def dibujar_jugada():    
    global hand
    hand = randint(1,3)
    
    if hand == 1:
        #piedra
        dibujar_cuadrado()
    elif hand == 2:
        #papel
        basic.show_icon(IconNames.SQUARE)
    else:
        #Tijera
        basic.show_icon(IconNames.SCISSORS)

def dibujar_cuadrado():
    for x in range (1,4):
        for y in range(1,4):
            led.plot(x, y)

def limpiar_matriz():
    for x in range (0,5):
            for y in range(0,5):
                led.unplot(x, y)

def sumar_puntaje():
    jugador_a = input.button_is_pressed(Button.A)
    jugador_b = input.button_is_pressed(Button.B)
    empate = jugador_a and jugador_b
    if empate:
        mostrar_puntaje("",0)
    elif jugador_a:
        global jugador
        jugador += 1
        mostrar_puntaje("Hum", jugador)
    elif jugador_b:
        global microbit
        microbit += 1
        mostrar_puntaje("AI", microbit)

hand = 0 # inicio sin nada
jugador = 0
microbit = 0
input.on_gesture(Gesture.SHAKE, on_gesture_shake)