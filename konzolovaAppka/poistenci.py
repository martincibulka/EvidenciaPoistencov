poistenci = []

def pridat_poistenca():

    meno = input("Zadaj meno: ").strip().capitalize()
    priezvisko = input("Zadaj priezvisko: ").strip().capitalize()
    vek = ""
    telefon = ""

    while not vek.isdigit() or int(vek) > 130:
        vek = input("Zadaj vek poistenca: ").strip()
        if not vek.isdigit():
            print("Napíš ČÍSLO!")
            continue
        if int(vek) > 130:
            print("Matuzalem :D Skús to znova!")

    while not telefon.isdigit() or len(telefon) < 10:
        telefon = input("Zadaj telefónne číslo: ").strip()
        if not telefon.isdigit():
            print("Napíš ČÍSLO!")
            continue
        if len(telefon) < 10:
            print("Číslo musí mať aspoň 10 znakov.")





    poistenec = {
        "meno": str(meno),
        "priezvisko": str(priezvisko),
        "vek": str(vek),
        "telefon": str(telefon)
    }
    poistenci.append(poistenec)


def vypis_poistencov():
    if not poistenci:
        return "Zoznam poistencov je prázdny."

    hlasenie = ""

    for i, p in enumerate(poistenci, start=1):
        hlasenie += f"{i}. {p['meno']} {p['priezvisko']} – vek: {p['vek']}, tel: {p['telefon']}\n"

    return hlasenie

def vyhladat_poistenca():
    hladany = input("Zadaj meno alebo priezvisko poistenca: ").lower()
    najdene = [p for p in poistenci if hladany in p["meno"].lower() or hladany in p["priezvisko"].lower()]

    if najdene:
        print("\n Nájdení poistenci:")
        for p in najdene:
            print(f"- {p['meno']} {p['priezvisko']} – vek: {p['vek']}, tel: {p['telefon']}")
    else:
        print("\n Poistenec nebol nájdený.")

def vymazat_poistenca():
    hladany_meno = input("Zadaj meno poistenca, ktorého chceš vymazať: ").strip().lower()
    hladany_priezvisko = input("Zadaj priezvisko poistenca: ").strip().lower()

    global poistenci
    povodni_pocet = len(poistenci)

    poistenci = [
        p for p in poistenci
        if not (p["meno"].lower() == hladany_meno and p["priezvisko"].lower() == hladany_priezvisko)
    ]

    if len(poistenci) < povodni_pocet:
        print("Poistenec bol vymazaný.")
    else:
        print("Poistenec nebol nájdený.")

