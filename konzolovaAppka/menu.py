menu = {1: "Zoznam poistencov", 2: "Pridať poistenca", 3: "Vyhľadať poistenca", 4: "Vymazať poistenca", 5: "Koniec programu"}
menu_hlavicka = ["Evidencia poistencov", "Zoznam poistencov", "Pridať poistenca", "Vyhľadanie poistenca", "Vymazanie poistenca"]
odrazky = "========================================"


def hlavicka(current, hlasenie):
    return (print(f"\n" + odrazky + "\n" + menu_hlavicka[current].center(40, " ") + "\n" + odrazky + "\n" + hlasenie.center(40, " ")))

def vypis_menu():
    for key, value in menu.items():
        print(f"{key} - {value}")
    print()



