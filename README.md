# Mongolian Food Composition Database

## Ажиллуулах
1. Төслийн үндсэн хавтсанд terminal нээнэ.
2. `npm install` ажиллуулна.
3. `docs/index.html` файлыг Live Server-ээр нээнэ.

## GitHub Pages
Repository → Settings → Pages:
- Source: Deploy from a branch
- Branch: `master` (эсвэл өөрийн үндсэн branch)
- Folder: `/docs`
- Save

## Гол хавтас
- `docs/` — GitHub Pages-д байршуулах веб хувилбар.
- `src/` — `docs`-той ижил эх код, CSS, зураг, өгөгдөл.
- `package.json` — npm тохиргоо.

## Энэ хувилбарт зассан зүйл
- Contact page дээр `contact.heading`, `contact.description` түлхүүрүүд шууд харагдаж байсныг Монгол/Англи орчуулгатай болгосон.
- Food Calculator дээр тайлбарын цэнхэр/шар хэсэг давхар гарч байсныг зассан.
- Footer дахь яамны лого нь SVG өгөгдөлтэй мөртлөө `.png` өргөтгөлтэй байсныг `.svg` болгон зассан.
- Food Composition Table-ийн картууд дээр "Book of Beasts" гэсэн хамааралгүй номын нүүр ашиглаж байсныг сольж, төсөлд байсан AFACI зургийг түр ашигласан.
- Footer logo ачаалагдахгүй бол эвдэрсэн зурагны тэмдэг харагдахгүй болгов.
- `src` болон `docs` кодыг ижил болгосон.

## PDF файлын тухай
Эдгээр PDF эх файлууд анхны ZIP-д байхгүй тул номын "View/Үзэх" товчнууд PDF нээх боломжгүй байж болно:
- `docs/pdf/SOP_Mongolia_V2_No_Blanks.pdf`
- `docs/pdf/FoodCompositionTableForMongolia20240520.pdf`
- `docs/pdf/foodbook-en.pdf`
- `docs/pdf/foodbook-mn.pdf`

PDF эх файлуудаа `docs/pdf/` хавтсанд байршуулна уу. Бодит PDF файлыг оронд нь хуурамч файл үүсгээгүй.

## Шалгалтын үр дүн
- 43 JavaScript файл шалгасан.
- JavaScript syntax: алдаагүй.
- Relative import зам: дутуу файл илрээгүй.
