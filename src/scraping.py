import requests

def scrapping():
    # Définition des en-têtes de la requête
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:100.0) Gecko/20100101 Firefox/100.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'fr-FR,fr;q=0.8,en-US;q=0.5,en;q=0.3',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
    }

    # URL de la page à récupérer
    url = "https://www.vinted.fr/"

    # Créer une session pour gérer les cookies
    session = requests.Session()

    # Faire la première requête GET pour récupérer les cookies
    response = session.get(url, headers=headers)

    # Afficher les cookies récupérés de la session
    cookie_header = "; ".join([f"{cookie.name}={cookie.value}" for cookie in session.cookies])

    # Mettre à jour les en-têtes avec le cookie récupéré
    headers['Cookie'] = cookie_header

    # URL de la seconde requête
    url2 = "https://www.vinted.fr/api/v2/catalog/items?page=1&per_page=5&time=1736905822&search_text=nike&catalog_ids=&size_ids=&brand_ids=&status_ids=&color_ids=&material_ids="

    # Faire la deuxième requête en utilisant les cookies dans les en-têtes
    response_with_cookies = session.get(url2, headers=headers)

    # Vérifier si la seconde requête a réussi
    if response_with_cookies.status_code == 200:

        data = response_with_cookies.json()  # Affiche la réponse en JSON si disponible
        
    return (data["items"][0]["title"],data["items"][0]["photo"]["full_size_url"])
