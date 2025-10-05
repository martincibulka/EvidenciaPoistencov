from menu import *
from poistenci import *

exit = False # ovládanie cyklu

current_page = 0
vyber_z_menu = 0
hlasenie = ""

poistenci.append({"meno": "Peter", "priezvisko": "Novák", "vek": 30, "telefon": "0905123456"})      #   Táto časť
poistenci.append({"meno": "Jana", "priezvisko": "Kováčová", "vek": 27, "telefon": "0910123456"})    #   slúži len
poistenci.append({"meno": "Dana", "priezvisko": "Kováčová", "vek": 55, "telefon": "0910121234"})    #   na testovanie

while not exit:
    hlavicka(current_page, hlasenie)
    hlasenie = ""
    vypis_menu()

    try:
        vyber_z_menu = int(input(f"Zvolte číslo akcie: "))

        match vyber_z_menu:
            case 1:
                hlasenie = vypis_poistencov()
                current_page = vyber_z_menu
            case 2:
                pridat_poistenca()
                current_page = vyber_z_menu
            case 3:
                vyhladat_poistenca()
                current_page = vyber_z_menu
            case 4:
                vymazat_poistenca()
                current_page = vyber_z_menu
            case 5:
                exit = True
            case _:
                hlasenie = f"{vyber_z_menu} nie je platná voľba!"


    except ValueError:
        hlasenie = "Zadaj ČÍSLO voľby prosím."

print("Dovidenia")
