import webbrowser
from lxml import html
import requests

url = 'http://localhost:8081/'
r = requests.get(url)
tree = html.fromstring(r.content)
webpages = tree.xpath('//@href')
print(webpages)
for pages in webpages:
    webbrowser.open(pages)