import requests
from lxml import html
import requests

url = 'http://localhost:8081/'
r = requests.get(url)
print(r.text)
tree = html.fromstring(r.content)
target = tree.xpath("//@action")[0]
newURL = url + target[1: len(target)]

fields = tree.xpath("//@type")


def genString(email=True):
    if email:
        return 'fake@bot'
    return "fake"


if fields[4].find("pass") > -1:
    print(genString(False))

spam_resp = {}
for field in fields:
    name = tree.xpath("//input[@type=\"" + field + "\"]/@name")
    if field == "email":
        value = genString(True)
    else:
        value = genString(False)
    spam_resp[field] = value

print(spam_resp)
requests.post(newURL, spam_resp)
# spamForm(tree)
