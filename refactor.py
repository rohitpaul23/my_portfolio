import os
import re

html_path = r"c:\Users\rohit\Downloads\resume\rohit_paul_portfolio.html"
css_path = r"c:\Users\rohit\Downloads\resume\style.css"
js_path = r"c:\Users\rohit\Downloads\resume\script.js"

with open(html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

# 1. Extract CSS
css_match = re.search(r"<style>(.*?)</style>", html_content, re.DOTALL)
if css_match:
    css_content = css_match.group(1).strip()
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(css_content)
    # Replace style tag with link
    html_content = html_content[:css_match.start()] + '<link rel="stylesheet" href="style.css">' + html_content[css_match.end():]

# 2. Extract cloudflare project data script
project_data_match = re.search(r'<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode\.min\.js">\s*(.*?)\s*</script>', html_content, re.DOTALL)
js_content = ""
if project_data_match:
    js_content += project_data_match.group(1).strip() + "\n\n"
    html_content = html_content[:project_data_match.start()] + html_content[project_data_match.end():]

# 3. Extract main JS
main_js_match = re.search(r'<script>\s*(.*?)$', html_content, re.DOTALL)
if main_js_match:
    main_js_content = main_js_match.group(1).strip()
    if main_js_content.endswith("do"):
        main_js_content = main_js_content[:-2] + "document.querySelectorAll('.r').forEach(el => obs.observe(el));"
    js_content += main_js_content
    
    html_content = html_content[:main_js_match.start()] + '<script src="script.js"></script>\n</body>\n</html>'

with open(js_path, "w", encoding="utf-8") as f:
    f.write(js_content)

# 4. Replace obfuscated emails
# href email 1
html_content = re.sub(r'href="/cdn-cgi/l/email-protection#[a-f0-9]+"', 'href="mailto:rohitpaul97@gmail.com"', html_content)
# label email
html_content = re.sub(r'<span class="__cf_email__" data-cfemail="[a-f0-9]+">\[email&#160;protected\]</span>', 'rohitpaul97@gmail.com', html_content)

# 5. Local three.js
html_content = html_content.replace('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', 'js/three.min.js')

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print("Extraction and refactoring complete.")
