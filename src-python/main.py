import sys
from time import sleep
from pyfirmata import Arduino, util, INPUT_PULLUP

sys.stdout.write('preparing...\n')

board = Arduino('/dev/cu.usbserial-1220')

it = util.Iterator(board)
it.start()

A0 = board.get_pin('a:0:i')
A1 = board.get_pin('a:1:i')

A0.enable_reporting()
A1.enable_reporting()

D8 = board.get_pin('d:8:i')
D8.mode = INPUT_PULLUP

sys.stdout.write('start...\n')

while True:
    is_switch_pressed = D8.read()
    value_a0 = A0.read()
    value_a1 = A1.read()

    sys.stdout.write(
        f'Switch: {bool(is_switch_pressed)} A0: {value_a0} A1: {value_a1}\n')
