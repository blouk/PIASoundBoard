import os

directory = 'src/sound/'
html =''
for filename in os.listdir(directory):
    if filename.endswith(".mp3"):
        f = os.path.join(filename)
        html = html + '<button class="btn btn-sm btn-primary" data-src="%s" title="%s">%s</button>' %('sound/'+f,f.split('.')[0],f.split('.')[0][0:10]+"...")

with open('src/generated.html', 'w+') as f:
    f.write(html)
