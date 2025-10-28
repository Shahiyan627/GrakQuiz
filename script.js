document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        hy: {
            title: "գրակի հարցում",
            nav_quiz: "Ոսկեդար",
            section_quiz_title: "Փորձիր Իմացությունդ: Հայոց Ոսկեդար",
            quiz_restart: "Նորից սկսել",
            footer_copy: "© 2025 Գրական Քուիզ. Բոլոր իրավունքները պաշտպանված են։",
            correct_text: "Ճիշտ պատասխաններ",
            wrong_text: "Սխալ պատասխաններ",
            startButton: "Սկսել թեստը",
            resultTitle: "Արդյունք",
            score: "Ձեր հաշիվը: %SCORE% / %TOTAL%",
            footer_creator: "Մշակվել է **Գևորգ Շահինյանի** կողմից։" 
        },
        ru: {
            title: "опрос литературы",
            nav_quiz: "Золотой Век",
            section_quiz_title: "Проверь свои знания: Золотой Век Армении",
            quiz_restart: "Начать заново",
            footer_copy: "© 2025 Литературный Квиз. Все права защищены.",
            correct_text: "Правильных ответов",
            wrong_text: "Неправильных ответов",
            startButton: "Начать тест", 
            resultTitle: "Результат", 
            score: "Ваш счет: %SCORE% / %TOTAL%", 
            footer_creator: "Разработано **Геворгом Шагиняном**." 
        },
        en: {
            title: "quiz of lit",
            nav_quiz: "Golden Age",
            section_quiz_title: "Test Your Knowledge: Armenian Golden Age",
            quiz_restart: "Restart Quiz",
            footer_copy: "© 2025 Literary Quiz. All rights reserved.",
            correct_text: "Correct Answers",
            wrong_text: "Wrong Answers",
            startButton: "Start Quiz", 
            resultTitle: "Result", 
            score: "Your score: %SCORE% / %TOTAL%", 
            footer_creator: "Developed by **Gevorg Shahinyan**."
        }
    };

    const quizQuestions = [
        { question: { hy: "Ո՞վ է հայտնի որպես Հայոց այբուբենի գյուտարարը (Մեսրոպ Մաշտոցի հետ):", ru: "Кто известен как инициатор создания армянского алфавита (вместе с Маштоцем)?", en: "Who is known as the initiator of the Armenian alphabet's creation (along with Mashtots)?" }, answers: [{ text: { hy: "Մովսես Խորենացի", ru: "Мовсес Хоренаци", en: "Movses Khorenatsi" }, correct: false }, { text: { hy: "Սահակ Պարթև", ru: "Սահակ Պարթև", en: "Sahak Partev" }, correct: true }, { text: { hy: "Կորյուն", ru: "Կորյուն", en: "Koriun" }, correct: false }] },

        { question: { hy: "Հայոց այբուբենի գյուտը, որը նպաստեց ազգային ինքնության պահպանմանը, ո՞ր թվականն է", ru: "Когда был изобретен армянский алфавит, что способствовало сохранению национальной идентичности", en: "**When was the Armenian alphabet invented, which contributed to the preservation of national identity" }, answers: [{ text: { hy: "451 թ.", ru: "451 г.", en: "451 AD" }, correct: true }, { text: { hy: "405-406 թթ. ", ru: "405-406 гг.", en: "405-406 AD " }, correct: false }, { text: { hy: "301 թ.", ru: "301 г.", en: "301 AD" }, correct: false }] },

        { question: { hy: "Հայոց գրերի ստեղծումից հետո, Մաշտոցը սկսեց իր աշխատանքը ո՞ր գրքի թարգմանությամբ:", ru: "После создания армянской письменности, Маштоц начал свою работу с перевода какой книги?", en: "After the creation of the Armenian script, Mashtots began his work with the translation of which book?" }, answers: [{ text: { hy: "Հայոց Պատմություն", ru: "История Армении", en: "History of Armenia" }, correct: false }, { text: { hy: "Աստվածաշունչ", ru: "Библия", en: "The Bible" }, correct: true }, { text: { hy: "Կանոնագիրք", ru: "Книга Канонов", en: "Book of Canons" }, correct: false }] },
        { question: { hy: "Ո՞րն է Մաշտոցի կողմից նոր այբուբենով գրված առաջին նախադասությունը:", ru: "Какое первое предложение было записано Маштоцем новым алфавитом?", en: "What was the first sentence written by Mashtots with the new alphabet?" }, answers: [{ text: { hy: "Եղիցի լույս:", ru: "Да будет свет.", en: "Let there be light." }, correct: false }, { text: { hy: "Ճանաչել զիմաստություն եւ զխրատ...", ru: "Познать мудрость и наставление...", en: "To know wisdom and instruction..." }, correct: true }, { text: { hy: "Վասն Հայաստանեայց աշխարհի", ru: "За армянскую землю", en: "For the land of Armenia" }, correct: false }] },
        { question: { hy: "Մաշտոցի և Սահակ Պարթևի շրջապատը հայտնի է որպես Թարգմանիչների ո՞ր դպրոց:", ru: "Как называется Школа Переводчиков, связанная с Маштоцем и Сааком Партевом?", en: "What is the School of Translators associated with Mashtots and Sahak Partev called?" }, answers: [{ text: { hy: "Հելլենիստական դպրոց", ru: "Эллинистическая школа", en: "Hellenistic School" }, correct: false }, { text: { hy: "Առաջին դպրոց", ru: "Первая школа", en: "First School" }, correct: true }, { text: { hy: "Վերածննդի կենտրոն", ru: "Центр Возрождения", en: "Renaissance Center" }, correct: false }] },
        { question: { hy: "Ի՞նչ կարգավիճակ էր զբաղեցնում Մեսրոպ Մաշտոցը մինչև գրերի գյուտը:", ru: "Какую должность занимал Месроп Маштоц до изобретения письменности?", en: "What position did Mesrop Mashtots hold before the invention of the script?" }, answers: [{ text: { hy: "Զորավար", ru: "Полководец", en: "General" }, correct: false }, { text: { hy: "Թագավորի դիվանապետ", ru: "Цարский секретарь (Диванапет)", en: "King's secretary (Divanapet)" }, correct: true }, { text: { hy: "Եպիսկոպոս", ru: "Епископ", en: "Bishop" }, correct: false }] },
        { question: { hy: "Մաշտոցի ստեղծագործական մեծ աշխատանքի հիմնական շարժառիթը եղել է:", ru: "Главным мотивом великой творческой работы Маштоца было:", en: "The main motive for Mashtots' great creative work was:" }, answers: [{ text: { hy: "Ռազմական իշխանության ամրապնդում", ru: "Укрепление военной власти", en: "Strengthening military power" }, correct: false }, { text: { hy: "Քրիստոնեության քարոզումը հասկանալի հայերենով", ru: "Проповедь христианства на понятном армянском языке", en: "Preaching Christianity in understandable Armenian" }, correct: true }, { text: { hy: "Առևտրային փաստաթղթերի ստեղծում", ru: "Создание торговых документов", en: "Creation of commercial documents" }, correct: false }] },
        { question: { hy: "V դարի գրականության լեզուն (Գրաբար) այլ կերպ կոչվում է:", ru: "Как по-другому называется язык литературы V века (Грабар)?", en: "What is another name for the language of 5th-century literature (Grabar)?" }, answers: [{ text: { hy: "Միջին հայերեն", ru: "Среднеармянский", en: "Middle Armenian" }, correct: false }, { text: { hy: "Հին հայերեն", ru: "Древнеармянский", en: "Old Armenian" }, correct: true }, { text: { hy: "Աշխարհաբար", ru: "Ашхарабар", en: "Ashkharabar" }, correct: false }] },
        { question: { hy: "«Ոսկեդար» տերմինը կիրառվում է հայ գրականության ո՞ր դարի նկատմունբ:", ru: "Термин «Золотой Век» применяется к какому веку армянской литературы?", en: "To which century of Armenian literature is the term 'Golden Age' applied?" }, answers: [{ text: { hy: "III դար", ru: "III век", en: "3rd century" }, correct: false }, { text: { hy: "V դար", ru: "V век", en: "5th century" }, correct: true }, { text: { hy: "VII դար", ru: "VII век", en: "7th century" }, correct: false }] },
        { question: { hy: "Հայոց գրերը ստեղծվեցին ո՞ր պետականության պայմաններում:", ru: "В условиях какой государственности была создана армянская письменность?", en: "Under the conditions of which state was the Armenian script created?" }, answers: [{ text: { hy: "Անկախ Հայաստան", ru: "Независимая Армения", en: "Independent Armenia" }, correct: false }, { text: { hy: "Հայաստանի բաժանում Պարսկաստանի և Բյուզանդիայի միջև", ru: "Разделение Армении между Персией и Византией", en: "Division of Armenia between Persia and Byzantium" }, correct: true }, { text: { hy: "Մեծ Հայքի թագավորություն", ru: "Царство Великой Армении", en: "Kingdom of Greater Armenia" }, correct: false }] },
        { question: { hy: "Մեսրոպ Մաշտոցը այբուբենի ստեղծման համար ճամփորդել է ո՞ր երկիր:", ru: "В какую страну путешествовал Месроп Маштоц для создания алфавита?", en: "Which country did Mesrop Mashtots travel to for the creation of the alphabet?" }, answers: [{ text: { hy: "Հռոմ", ru: "Рим", en: "Rome" }, correct: false }, { text: { hy: "Ասորիք", ru: "Сирия (Асорик)", en: "Syria (Asorik)" }, correct: true }, { text: { hy: "Հնդկաստան", ru: "Индия", en: "India" }, correct: false }] },
        { question: { hy: "Մաշտոցի աշխատանքի մեկ այլ կարևոր նպատակն էր, բացի Աստվածաշնչից, թարգմանել ո՞ր գրականությունը:", ru: "Какая еще важная цель работы Маштоца, помимо Библии, заключалась в переводе какой литературы?", en: "What was another important goal of Mashtots' work, besides the Bible, which involved the translation of which literature?" }, answers: [{ text: { hy: "Միայն իրանական գրականություն", ru: "Только иранская литература", en: "Only Iranian literature" }, correct: false }, { text: { hy: "Հունական և ասորական հոգևոր և գիտական գրականություն", ru: "Греческая и ассирийская духовная и научная литература", en: "Greek and Assyrian spiritual and scientific literature" }, correct: true }, { text: { hy: "Հայկական հեթանոսական էպոս", ru: "Армянский языческий эпоս", en: "Armenian pagan epic" }, correct: false }] },
        { question: { hy: "Մաշտոցը ստեղծել է գրեր ո՞ր երկու այլ ժողովուրդների համար (ըստ տեքստի):", ru: "Для каких двух других народов Маштоц создал письменность (согласно тексту)?", en: "For which two other nations did Mashtots create scripts (according to the text)?" }, answers: [{ text: { hy: "Վրացիներ և աղվաններ", ru: "Грузины и Албанцы", en: "Georgians and Aghvans" }, correct: true }, { text: { hy: "Հռոմեացիներ և պարսիկներ", ru: "Римляне и персы", en: "Romans and Persians" }, correct: false }, { text: { hy: "Հույներ և հրեաներ", ru: "Греки и евреи", en: "Greeks and Jews" }, correct: false }] },
        { question: { hy: "Ո՞րն է V դարի հայ գրականության ամենաբարձր նվաճումը:", ru: "Каково высшее достижение армянской литературы V века?", en: "What is the highest achievement of Armenian literature in the 5th century?" }, answers: [{ text: { hy: "Միայն պատմագրություն", ru: "Только историография", en: "Only historiography" }, correct: false }, { text: { hy: "Հայոց գրերի ստեղծումը և Աստվածաշնչի թարգմանությունը", ru: "Создание армянской письменности и перевод Библии", en: "Creation of the Armenian script and translation of the Bible" }, correct: true }, { text: { hy: "Հեթանոսական տաճարների կառուցում", ru: "Строительство языческих храмов", en: "Construction of pagan temples" }, correct: false }] },
        { question: { hy: "Մաշտոցի գործունեության արդյունքը դարձավ հիմք ո՞ր զարգացման համար:", ru: "Результат деятельности Маштоца стал основой для какого развития?", en: "The result of Mashtots' activity became the basis for which development?" }, answers: [{ text: { hy: "Ռազմական իշխանություն", ru: "Военная власть", en: "Military power" }, correct: false }, { text: { hy: "Ազգային ինքնագիտակցություն և մշակութային ծաղկում", ru: "Национальное самосознание и культурный расцвет", en: "National self-awareness and cultural flourishing" }, correct: true }, { text: { hy: "Արտաքին քաղաքականություն", ru: "Внешняя политика", en: "Foreign policy" }, correct: false }] },
        { question: { hy: "Մաշտոցի ուսումնական գործունեության կենտրոնն էր:", ru: "Центром образовательной деятельности Маштоца был:", en: "The center of Mashtots' educational activity was:" }, answers: [{ text: { hy: "Դվին", ru: "Двин", en: "Dvin" }, correct: false }, { text: { hy: "Վաղարշապատ (Էջմիածին)", ru: "Վաղարշապատ (Էջմիածին)", en: "Vagharshapat (Etchmiadzin)" }, correct: true }, { text: { hy: "Արտաշատ", ru: "Արտաշատ", en: "Artashat" }, correct: false }] },
        { question: { hy: "Հայկական գրերի ստեղծման գլխավոր խնդիրը, ըստ տեքստի, եղել է:", ru: "Главная проблема создания армянской письменности, согласно тексту, была:", en: "The main problem of creating the Armenian script, according to the text, was:" }, answers: [{ text: { hy: "Ֆինանսական միջոցներ", ru: "Финансовые средства", en: "Financial means" }, correct: false }, { text: { hy: "Այբուբենի անհրաժեշտ քանակի տառեր", ru: "Необходимое количество букв для алфавита", en: "The necessary number of letters for the alphabet" }, correct: true }, { text: { hy: "Թագավորի դեմ դիմադրություն", ru: "Сопротивление против царя", en: "Resistance against the king" }, correct: false }] },
        { question: { hy: "Ո՞վ է հայտնի 5-րդ դարի Հայ եկեղեցու կանոնական գործունեությամբ:", ru: "Кто известен своей канонической деятельностью в Армянской церкви 5-го века?", en: "Who is known for his canonical activity in the Armenian Church in the 5th century?" }, answers: [{ text: { hy: "Կորյուն", ru: "Կորյուն", en: "Koriun" }, correct: false }, { text: { hy: "Մովսես Խորենացի", ru: "Մովսես Խորենացի", en: "Movses Khorenatsi" }, correct: false }, { text: { hy: "Սահակ Պարթև", ru: "Սահակ Պարթև", en: "Sahak Partev" }, correct: true }] },
        { question: { hy: "Մաշտոցի գործունեության երկու հիմնական ուղղություններն էին:", ru: "Два основных направления деятельности Маштоца были:", en: "The two main directions of Mashtots' activity were:" }, answers: [{ text: { hy: "Ռազմական և քաղաքական", ru: "Военное и политическое", en: "Military and political" }, correct: false }, { text: { hy: "Գրերի գյուտ և թարգմանական դպրոցի հիմնում", ru: "Изобретение письменности и основание школы переводчиков", en: "Invention of the script and founding of the school of translators" }, correct: true }, { text: { hy: "Ճամփորդություն և քարոզչություն", ru: "Путешествие и проповедь", en: "Travel and preaching" }, correct: false }] },
        { question: { hy: "Հայ գրականության V դարի լեզուն (Գրաբար) նշանակում է:", ru: "Язык армянской литературы V века (Грабар) означает:", en: "The language of Armenian literature of the 5th century (Grabar) means:" }, answers: [{ text: { hy: "Խոսակցական լեզու", ru: "Разговорный язык", en: "Spoken language" }, correct: false }, { text: { hy: "Գրքի լեզու (գրաբար)", ru: "Язык книги (Письменный)", en: "Language of the book (Written)" }, correct: true }, { text: { hy: "Միջին դարի լեզու", ru: "Язык Средних веков", en: "Language of the Middle Ages" }, correct: false }] },

        { question: { hy: "Մեսրոպ Մաշտոցի ո՞ր աշակերտն է գրել նրա «Վարք»-ը:", ru: "Какой ученик Месропа Маштоца написал его «Житие»?", en: "Which student of Mesrop Mashtots wrote his 'Life'?" }, answers: [{ text: { hy: "Մովսես Խորենացի", ru: "Мовсес Хоренаци", en: "Movses Khorenatsi" }, correct: false }, { text: { hy: "Կորյուն", ru: "Կորյուն", en: "Koriun" }, correct: true }, { text: { hy: "Եղիշե", ru: "Եղիշե", en: "Eghishe" }, correct: false }] },
        { question: { hy: "Կորյունի աշխատությունը կոչվում է:", ru: "Работа Корюна называется:", en: "Koriun's work is called:" }, answers: [{ text: { hy: "Հայոց Պատմություն", ru: "История Армении", en: "History of Armenia" }, correct: false }, { text: { hy: "Վարք Մաշտոցի", ru: "Житие Մաշտոցի", en: "Life of Mashtots" }, correct: true }, { text: { hy: "Վասն Վարդանի...", ru: "О Вардане...", en: "On Vardan..." }, correct: false }] },
        { question: { hy: "Կորյունի աշխատության մեջ ամենաշատը նկարագրվում է:", ru: "В работе Корюна больше всего описывается:", en: "Koriun's work mostly describes:" }, answers: [{ text: { hy: "Ավարայրի ճակատամարտը", ru: "Аварайрская битва", en: "The Battle of Avarayr" }, correct: false }, { text: { hy: "Մաշտոցի կյանքը, գործունեությունը և մահը", ru: "Жизнь, деятельность и смерть Маштоца", en: "Mashtots' life, activity, and death" }, correct: true }, { text: { hy: "Հայոց թագավորների ցուցակը", ru: "Список армянских царей", en: "List of Armenian kings" }, correct: false }] },
        { question: { hy: "Կորյունը իր աշխատությունը նվիրել է ո՞ր գործչին (որը և պատվիրել է գրել):", ru: "Кому Корюн посвятил свою работу (и кто поручил ему ее написать)?", en: "To whom did Koriun dedicate his work (and who commissioned him to write it)?" }, answers: [{ text: { hy: "Վարդան Մամիկոնյան", ru: "Վարդան Մամիկոնյան", en: "Vardan Mamikonian" }, correct: false }, { text: { hy: "Հովսեփ Ա կաթողիկոս", ru: "Католикос Овсеп I", en: "Catholicos Hovsep I" }, correct: true }, { text: { hy: "Մովսես Խորենացի", ru: "Մովսես Խորենացի", en: "Movses Khorenatsi" }, correct: false }] },
        { question: { hy: "Կորյունի աշխատությունը համարվում է հայ գրականության ո՞ր ժանրի առաջին նմուշը:", ru: "Какой жанр армянской литературы считается первым образцом работы Корюна?", en: "Which genre of Armenian literature is Koriun's work considered the first example of?" }, answers: [{ text: { hy: "Քերթողություն", ru: "Поэзия", en: "Poetry" }, correct: false }, { text: { hy: "Կենսագրություն (Վարք)", ru: "Биография (Житие)", en: "Biography (Life)" }, correct: true }, { text: { hy: "Աստվածաբանական տրակտատ", ru: "Богословский трактат", en: "Theological treatise" }, correct: false }] },

        { question: { hy: "Ո՞վ է հեղինակել Ավարայրի ճակատամարտին նվիրված «Վասն Վարդանի և Հայոց պատերազմին» աշխատությունը:", ru: "Кто автор труда «О Вардане и войне Армянской», посвященного Аварайрской битве?", en: "Who is the author of the work 'History of Vardan and the Armenian War', dedicated to the Battle of Avarayr?" }, answers: [{ text: { hy: "Ղազար Փարպեցի", ru: "Ղազար Փարպեցի", en: "Ghazar Parpetsi" }, correct: false }, { text: { hy: "Եղիշե", ru: "Եղիշե", en: "Eghishe" }, correct: true }, { text: { hy: "Եզնիկ Կողբացի", ru: "Եզնիկ Կողբացի", en: "Eznik Koghbatsi" }, correct: false }] },
        { question: { hy: "Ավարայրի ճակատամարտը տեղի է ունեցել ո՞ր թվականին:", ru: "В каком году произошла Аварайрская битва?", en: "In which year did the Battle of Avarayr take place?" }, answers: [{ text: { hy: "405 թ.", ru: "405 г.", en: "405 AD" }, correct: false }, { text: { hy: "451 թ.", ru: "451 г.", en: "451 AD" }, correct: true }, { text: { hy: "484 թ.", ru: "484 г.", en: "484 AD" }, correct: false }] },
        { question: { hy: "Եղիշեի գլխավոր հերոսը, որը զոհվեց հանուն հավատքի, ո՞վ էր:", ru: "Кто был главным героем Егише, павшим за веру?", en: "Who was Eghishe's main hero, who fell for the faith?" }, answers: [{ text: { hy: "Մեսրոպ Մաշտոց", ru: "Մեսրոպ Մաշտոց", en: "Mesrop Mashtots" }, correct: false }, { text: { hy: "Վարդան Մամիկոնյան", ru: "Վարդան Մամիկոնյան", en: "Vardan Mamikonian" }, correct: true }, { text: { hy: "Մովսես Խորենացի", ru: "Մովսես Խորենացի", en: "Movses Khorenatsi" }, correct: false }] },
        { question: { hy: "Եղիշեն շեշտում է, որ Ավարայրի ճակատամարտը եղել է ո՞ր բնույթի հաղթանակ:", ru: "Егише подчеркивает, что Аварайрская битва была победой какого характера?", en: "Eghishe emphasizes that the Battle of Avarayr was a victory of what nature?" }, answers: [{ text: { hy: "Ռազմական", ru: "Военного", en: "Military" }, correct: false }, { text: { hy: "Հոգևոր և բարոյական", ru: "Духовного և морального", en: "Spiritual and moral" }, correct: true }, { text: { hy: "Տարածքային", ru: "Территориального", en: "Territorial" }, correct: false }] },
        { question: { hy: "«Վասն Վարդանի...» աշխատության ոճը բնութագրվում է որպես:", ru: "Стиль работы «О Вардане...» характеризуется как:", en: "The style of the work 'On Vardan...' is characterized as:" }, answers: [{ text: { hy: "Չափազանց չոր և փաստագրական", ru: "Слишком сухой и документальный", en: "Too dry and documentary" }, correct: false }, { text: { hy: "Բարձր գրական, ճառախոսական և հուզական", ru: "Высокохудожественный, ораторский и эмоциональный", en: "Highly literary, rhetorical, and emotional" }, correct: true }, { text: { hy: "Փիլիսոփայական", ru: "Философский", en: "Philosophical" }, correct: false }] },
        { question: { hy: "Ավարայրի մասնակիցները, որոնք զոհվեցին, հիշատակվում են որպես:", ru: "Участники Аварайра, которые пали, упоминаются как:", en: "The participants of Avarayr who fell are mentioned as:" }, answers: [{ text: { hy: "Հերոսներ", ru: "Герои", en: "Heroes" }, correct: false }, { text: { hy: "Նահատակներ (Վարդանանք)", ru: "Мученики (Вардананц)", en: "Martyrs (Vardanank)" }, correct: true }, { text: { hy: "Զինվորներ", ru: "Солдаты", en: "Soldiers" }, correct: false }] },
        { question: { hy: "Եղիշեն, ըստ ավանդության, եղել է ո՞ր գործչի աշակերտը:", ru: "Егише, по преданию, был учеником какого деятеля?", en: "Eghishe, according to tradition, was a student of which figure?" }, answers: [{ text: { hy: "Կորյուն", ru: "Կորյուն", en: "Koriun" }, correct: false }, { text: { hy: "Սահակ Պարթև", ru: "Սահակ Պարթև", en: "Sahak Partev" }, correct: false }, { text: { hy: "Սահակ Պարթևի թարգմանչական դպրոցի", ru: "Школы переводчиков Саака Партева", en: "Sahak Partev's translation school" }, correct: true }] },
        { question: { hy: "Ի՞նչն էր պաշտպանում հայկական բանակը Ավարայրում:", ru: "Что защищала армянская армия в Аварайре?", en: "What was the Armenian army defending at Avarayr?" }, answers: [{ text: { hy: "Արտաշատի բերդը", ru: "Крепость Арташат", en: "Artashat fortress" }, correct: false }, { text: { hy: "Հավատքի ազատությունը", ru: "Свободу веры", en: "Freedom of faith" }, correct: true }, { text: { hy: "Պարսկական տարածքները", ru: "Персидские территории", en: "Persian territories" }, correct: false }] },
        { question: { hy: "Եղիշեն նկարագրում է Վարդանի ելույթը որպես:", ru: "Егише описывает речь Вардана как:", en: "Eghishe describes Vardan's speech as:" }, answers: [{ text: { hy: "Համառոտ հաշվետվություն", ru: "Краткий отчет", en: "Brief report" }, correct: false }, { text: { hy: "Հուզիչ ճառ", ru: "Волнующая речь (Жаркое обращение)", en: "Moving speech (Passionate address)" }, correct: true }, { text: { hy: "Քաղաքական բանավեճ", ru: "Политический спор", en: "Political debate" }, correct: false }] },
        { question: { hy: "V դարի պատմագրության մեջ կարևորագույն թեմաներից մեկն է:", ru: "Одна из важнейших тем историографии V века:", en: "One of the most important themes of 5th-century historiography is:" }, answers: [{ text: { hy: "Հայոց թագավորների ռազմական արշավները", ru: "Военные походы армянских царей", en: "Military campaigns of Armenian kings" }, correct: false }, { text: { hy: "Վարդանանց պատերազմը և դրա գաղափարական իմաստը", ru: "Война Вардананц и ее идейный смысл", en: "The Vardanank war and its ideological meaning" }, correct: true }, { text: { hy: "Առևտրական ճանապարհների զարգացումը", ru: "Развитие торговых путей", en: "Development of trade routes" }, correct: false }] },

        { question: { hy: "Ո՞ր հեղինակն է գրել «Եղծ աղանդոց» (Ընդդեմ աղանդների) աշխատությունը:", ru: "Какой автор написал труд «Опровержение ересей» (Против ересей)?", en: "Which author wrote the work 'Refutation of Sects' (Against Sects)?" }, answers: [{ text: { hy: "Ղազար Փարպեցի", ru: "Ղազար Փարպեցի", en: "Ghazar Parpetsi" }, correct: false }, { text: { hy: "Եզնիկ Կողբացի", ru: "Եզնիկ Կողբացի", en: "Eznik Koghbatsi" }, correct: true }, { text: { hy: "Կորյուն", ru: "Կորյուն", en: "Koriun" }, correct: false }] },
        { question: { hy: "«Եղծ աղանդոց» աշխատության հիմնական նպատակն էր:", ru: "Главная цель труда «Опровержение ересей» была:", en: "The main purpose of the work 'Refutation of Sects' was:" }, answers: [{ text: { hy: "Քաղաքական վիճաբանություն", ru: "Политический спор", en: "Political dispute" }, correct: false }, { text: { hy: "Քրիստոնեական ուսմունքի հիմնավորումը և պաշտպանությունը", ru: "Обоснование и защита христианского учения", en: "Justification and defense of Christian doctrine" }, correct: true }, { text: { hy: "Միայն պատմական տվյալների հավաքագրում", ru: "Только сбор исторических данных", en: "Only collection of historical data" }, correct: false }] },
        { question: { hy: "Եզնիկ Կողբացին եղել է Մաշտոցի և ո՞ր կաթողիկոսի աշակերտը:", ru: "Езник Кохбаци был учеником Маштоца и какого Католикоса?", en: "Eznik Koghbatsi was a student of Mashtots and which Catholicos?" }, answers: [{ text: { hy: "Ներսես Մեծ", ru: "Нерсес Великий", en: "Nerses the Great" }, correct: false }, { text: { hy: "Սահակ Պարթև", ru: "Սահակ Պարթև", en: "Sahak Partev" }, correct: true }, { text: { hy: "Հովսեփ Ա", ru: "Овсеп I", en: "Hovsep I" }, correct: false }] },
        { question: { hy: "V դարի թարգմանչական դպրոցը թարգմանում էր գրականություն ո՞ր երկու հիմնական լեզուներից:", ru: "С каких двух основных языков переводила литература Школа Переводчиков V века?", en: "From which two main languages did the 5th-century Translation School translate literature?" }, answers: [{ text: { hy: "Լատիներեն և Պարսկերեն", ru: "Латынь и Персидский", en: "Latin and Persian" }, correct: false }, { text: { hy: "Հունարեն և Ասորերեն", ru: "Греческий и Сирийский (Асореներ)", en: "Greek and Syriac (Asoreren)" }, correct: true }, { text: { hy: "Արաբերեն և Լատիներեն", ru: "Арабский и Латынь", en: "Arabic and Latin" }, correct: false }] },
        { question: { hy: "Եզնիկի աշխատության մեջ ներկայացվում է աշխարհի ո՞ր բացատրությունը:", ru: "Какое объяснение мира представлено в работе Езника?", en: "What explanation of the world is presented in Eznik's work?" }, answers: [{ text: { hy: "Միայն հեթանոսական", ru: "Только языческое", en: "Only pagan" }, correct: false }, { text: { hy: "Քրիստոնեական (Աստվածաշնչյան)", ru: "Христианское (Библейское)", en: "Christian (Biblical)" }, correct: true }, { text: { hy: "Գիտական", ru: "Научное", en: "Scientific" }, correct: false }] },
        { question: { hy: "Հայոց թագավորության վերջնական անկումը տեղի է ունեցել V դարի սկզբին՝ ո՞ր թվականին:", ru: "Окончательный крах Армянского царства произошел в начале V века, в каком году?", en: "The final collapse of the Armenian Kingdom occurred at the beginning of the V century, in which year?" }, answers: [{ text: { hy: "405 թ.", ru: "405 г.", en: "405 AD" }, correct: false }, { text: { hy: "428 թ.", ru: "428 г.", en: "428 AD" }, correct: true }, { text: { hy: "451 թ.", ru: "451 г.", en: "451 AD" }, correct: false }] },
        { question: { hy: "Ո՞ր գործչի անվան հետ է կապվում «Կանոնագիրք»-ի ստեղծումը:", ru: "С именем какого деятеля связано создание «Книги Канонов»?", en: "The creation of the 'Book of Canons' is associated with the name of which figure?" }, answers: [{ text: { hy: "Մեսրոպ Մաշտոց", ru: "Մեսրոպ Մաշտոց", en: "Mesrop Mashtots" }, correct: false }, { text: { hy: "Սահակ Պարթև", ru: "Սահակ Պարթև", en: "Sahak Partev" }, correct: true }, { text: { hy: "Կորյուն", ru: "Կորյուն", en: "Koriun" }, correct: false }] },
        { question: { hy: "V դարի գրականության հիմնական դերն էր ազգային ո՞ր գիտակցության ամրապնդումը:", ru: "Какова была основная роль литературы V века в укреплении какого национального сознания?", en: "What was the main role of 5th-century literature in strengthening which national consciousness?" }, answers: [{ text: { hy: "Ռազմական", ru: "Военного", en: "Military" }, correct: false }, { text: { hy: "Քաղաքական", ru: "Политического", en: "Political" }, correct: false }, { text: { hy: "Հոգևոր (մշակութային-կրոնական)", ru: "Духовного (культурно-религиозного)", en: "Spiritual (cultural-religious)" }, correct: true }] },
        { question: { hy: "Ի՞նչ է նշանակում «Թարգմանիչների դպրոց» անվանումը V դարի գործունեության համար:", ru: "Что означает название «Школа Переводчиков» для деятельности V века?", en: "What does the name 'School of Translators' mean for the activity of the 5th century?" }, answers: [{ text: { hy: "Միայն Մաշտոցի աշակերտները", ru: "Только ученики Маштоца", en: "Only Mashtots' students" }, correct: false }, { text: { hy: "Թարգմանիչների և մշակութային գործիչների շարժում", ru: "Движение переводчиков и культурных деятелей", en: "Movement of translators and cultural figures" }, correct: true }, { text: { hy: "Եկեղեցու պաշտոնական անունը", ru: "Официальное название церкви", en: "Official name of the church" }, correct: false }] },
        { question: { hy: "Հայ գրականության Ոսկեդարի գլխավոր արդյունքներն են եղել:", ru: "Главными результатами Золотого Века армянской литературы были:", en: "The main results of the Golden Age of Armenian literature were:" }, answers: [{ text: { hy: "Նոր թագավորության ստեղծում", ru: "Создание нового царства", en: "Creation of a new kingdom" }, correct: false }, { text: { hy: "Գրերի գյուտը և հոգևոր-մշակութային գրականության զարգացումը", ru: "Изобретение письменности и развитие духовно-культурной литературы", en: "Invention of the script and development of spiritual-cultural literature" }, correct: true }, { text: { hy: "Արտաքին աշխարհի հետ քաղաքական դաշինքներ", ru: "Политические союзы с внешним миром", en: "Political alliances with the outside world" }, correct: false }] },

        { question: { hy: "Ո՞ր քաղաքն է համարվում եղել V դարի հայ գրական կենտրոններից մեկը (Մաշտոցի հետ կապված):", ru: "Какой город считается одним из армянских литературных центров V века (связанный с Маштоцем)?", en: "Which city is considered one of the Armenian literary centers of the 5th century (related to Mashtots)?" }, answers: [{ text: { hy: "Արտաշատ", ru: "Арташат", en: "Artashat" }, correct: false }, { text: { hy: "Վաղարշապատ", ru: "Вагаршапат", en: "Vagharshapat" }, correct: true }, { text: { hy: "Երևան", ru: "Երևան", en: "Yerevan" }, correct: false }] },
        { question: { hy: "Վարդան Մամիկոնյանը հայտնի է որպես:", ru: "Вардан Мамиконян известен как:", en: "Vardan Mamikonian is known as:" }, answers: [{ text: { hy: "Գրող", ru: "Писатель", en: "Writer" }, correct: false }, { text: { hy: "Զորավար և նահատակ", ru: "Полководец и мученик", en: "General and martyr" }, correct: true }, { text: { hy: "Թագավոր", ru: "Царь", en: "King" }, correct: false }] },
        { question: { hy: "Կորյունի «Վարք Մաշտոցի»-ը հիմնականում հիմնված է:", ru: "«Житие Маштоца» Корюна в основном основано на:", en: "Koriun's 'Life of Mashtots' is mainly based on:" }, answers: [{ text: { hy: "Հին հունական առասպելներ", ru: "Древнегреческих мифах", en: "Ancient Greek myths" }, correct: false }, { text: { hy: "Ականատեսի վկայություններ և Մաշտոցի գործունեություն", ru: "Свидетельствах очевидцев и деятельности Маштоца", en: "Eyewitness testimonies and Mashtots' activity" }, correct: true }, { text: { hy: "Արխիվային փաստաթղթեր", ru: "Архивных документах", en: "Archival documents" }, correct: false }] },
        { question: { hy: "Ո՞ր հեղինակն է հայտնի իր բանավիճային (polemical) ոճով:", ru: "Какой автор известен своим полемическим стилем?", en: "Which author is known for his polemical style?" }, answers: [{ text: { hy: "Կորյուն", ru: "Կորյուն", en: "Koriun" }, correct: false }, { text: { hy: "Եղիշե", ru: "Եղիշե", en: "Eghishe" }, correct: false }, { text: { hy: "Եզնիկ Կողբացի", ru: "Եզնիկ Կողբացի", en: "Eznik Koghbatsi" }, correct: true }] },
        { question: { hy: "Եզնիկ Կողբացու աշխատության մյուս անունն է (Եղծ աղանդոց):", ru: "Другое название работы Езника Кохбаци:", en: "Another name for the work of Eznik Koghbatsi:" }, answers: [{ text: { hy: "Հավատքի հիմքեր", ru: "Основы веры", en: "Foundations of Faith" }, correct: false }, { text: { hy: "Վասն Վարդանի", ru: "О Вардане", en: "On Vardan" }, correct: false }, { text: { hy: "Հավատքի և իմաստության հիմքեր", ru: "Основы веры և мудрости", en: "Foundations of faith and wisdom" }, correct: true }] },
        { question: { hy: "Մաշտոցի ո՞ր աշակերտը, ըստ տեքստի, ուսում է ստացել Հունաստանում:", ru: "Какой ученик Маштоца, согласно тексту, получил образование в Греции?", en: "Which student of Mashtots, according to the text, received education in Greece?" }, answers: [{ text: { hy: "Կորյուն", ru: "Կորյուն", en: "Koriun" }, correct: true }, { text: { hy: "Եղիշե", ru: "Եղիշե", en: "Eghishe" }, correct: false }, { text: { hy: "Սահակ Պարթև", ru: "Սահակ Պարթև", en: "Sahak Partev" }, correct: false }] },
        { question: { hy: "Եղիշեի աշխատությունը ունի ո՞ր բաժինները (Վարդանի մասին):", ru: "Какие разделы имеет работа Егише (о Вардане)?", en: "What sections does Eghishe's work have (about Vardan)?" }, answers: [{ text: { hy: "Երկու մաս", ru: "Две части", en: "Two parts" }, correct: false }, { text: { hy: "Յոթ գլուխ", ru: "Семь глав", en: "Seven chapters" }, correct: true }, { text: { hy: "Տասը գլուխ", ru: "Десять глав", en: "Ten chapters" }, correct: false }] },
        { question: { hy: "Հայոց Ոսկեդարի գործիչները հայտնի են ընդհանուր անունով:", ru: "Деятели Золотого Века Армении известны общим именем:", en: "Figures of the Armenian Golden Age are known by a common name:" }, answers: [{ text: { hy: "Վարդանանք", ru: "Վարդանանք", en: "Vardanank" }, correct: false }, { text: { hy: "Թարգմանիչներ", ru: "Թարգմանիչներ", en: "Translators" }, correct: true }, { text: { hy: "Մամիկոնյաններ", ru: "Մամիկոնյաններ", en: "Mamonikonians" }, correct: false }] },
        { question: { hy: "Ի՞նչ է «Վարք» ժանրը V դարի գրականության մեջ:", ru: "Что такое жанр «Житие» в литературе V века?", en: "What is the 'Life' (Vark) genre in 5th-century literature?" }, answers: [{ text: { hy: "Պատմական տարեգրություն", ru: "Историческая хроника", en: "Historical chronicle" }, correct: false }, { text: { hy: "Սրբի կամ նշանավոր գործչի կենսագրություն", ru: "Биография святого или выдающегося деятеля", en: "Biography of a saint or prominent figure" }, correct: true }, { text: { hy: "Պոեմ", ru: "Поэма", en: "Poem" }, correct: false }] },
        { question: { hy: "Մաշտոցի գրերի ստեղծման գործունեության երկրորդ փուլը սկսվեց:", ru: "Второй этап деятельности Маштоца по созданию письменности начался:", en: "The second stage of Mashtots' activity in creating the script began:" }, answers: [{ text: { hy: "Միայն Ասորիքում", ru: "Только в Сирии", en: "Only in Syria" }, correct: false }, { text: { hy: "Հայաստանի տարբեր վայրերում", ru: "В разных местах Армении", en: "In different places in Armenia" }, correct: true }, { text: { hy: "Վրաստանում", ru: "В Грузии", en: "In Georgia" }, correct: false }] },
        { question: { hy: "Ո՞ր կրոնական տեքստի թարգմանությունն է կապված Մաշտոցի անվան հետ:", ru: "Перевод какого религиозного текста связан с именем Маштоца?", en: "The translation of which religious text is associated with Mashtots' name?" }, answers: [{ text: { hy: "Ղուրան", ru: "Коран", en: "Quran" }, correct: false }, { text: { hy: "Աստվածաշունչ", ru: "Библия", en: "The Bible" }, correct: true }, { text: { hy: "Զենդ-Ավեստա", ru: "Зенд-Авеста", en: "Zend-Avesta" }, correct: false }] },
        { question: { hy: "Եղիշեի աշխատությունը համարվում է ո՞ր տեսակի պատմագրության նմուշ:", ru: "Какого типа историографии считается образцом работа Егише?", en: "What type of historiography is Eghishe's work considered an example of?" }, answers: [{ text: { hy: "Չոր ժամանակագրություն", ru: "Сухая хронология", en: "Dry chronology" }, correct: false }, { text: { hy: "Հոգևոր-հայրենասիրական պատմություն", ru: "Духовно-патриотическая история", en: "Spiritual-patriotic history" }, correct: true }, { text: { hy: "Քաղաքական տրակտատ", ru: "Политический трактат", en: "Political treatise" }, correct: false }] },
        { question: { hy: "Ո՞վ է հայտնի որպես 'Ավարայրի ճակատամարտի պատմիչ':", ru: "Кто известен как «Историк Аварайрской битвы»?", en: "Who is known as the 'Historian of the Battle of Avarayr'?" }, answers: [{ text: { hy: "Մովսես Խորենացի", ru: "Մովսես Խորենացի", en: "Movses Khorenatsi" }, correct: false }, { text: { hy: "Եղիշե", ru: "Եղիշե", en: "Eghishe" }, correct: true }, { text: { hy: "Կորյուն", ru: "Կորյուն", en: "Koriun" }, correct: false }] },
        { question: { hy: "Մաշտոցը եղել է ո՞ր կաթողիկոսի աշակերտը:", ru: "Учеником какого Католикоса был Маштоц?", en: "Mashtots was a student of which Catholicos?" }, answers: [{ text: { hy: "Ներսես Մեծ", ru: "Ներսես Մեծ", en: "Nerses the Great" }, correct: true }, { text: { hy: "Սահակ Պարթև", ru: "Սահակ Պարթև", en: "Sahak Partev" }, correct: false }, { text: { hy: "Հովսեփ Ա", ru: "Հովսեփ Ա", en: "Hovsep I" }, correct: false }] },
        { question: { hy: "Եզնիկ Կողբացու աշխատության ոճը համարվում է V դարի լավագույն նմուշներից մեկը ո՞ր առումով:", ru: "В каком отношении работа Езника Кохбаци считается одним из лучших образцов V века?", en: "In what respect is Eznik Koghbatsi's work considered one of the best examples of the 5th century?" }, answers: [{ text: { hy: "Հումորային", ru: "Юмористическом", en: "Humorous" }, correct: false }, { text: { hy: "Լեզվի մաքրության և հարստության", ru: "Чистоты и богатства языка", en: "Purity and richness of language" }, correct: true }, { text: { hy: "Քաղաքական վերլուծություն", ru: "Политического анализа", en: "Political analysis" }, correct: false }] },
    ];

    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const questionNumber = document.getElementById('question-number');
    const resultsArea = document.getElementById('results-area');
    const questionArea = document.getElementById('question-area');
    const scoreText = document.getElementById('score-text');
    const feedbackText = document.getElementById('feedback-text');
    const restartButton = document.getElementById('restart-button');
    const detailedScore = document.getElementById('detailed-score'); 

    const availableLangs = ['hy', 'ru', 'en'];
    let currentQuestionIndex = 0;
    let score = 0;
    const totalQuestions = quizQuestions.length; 
    let currentLang = localStorage.getItem('lang') || 'hy';
    if (!availableLangs.includes(currentLang)) currentLang = 'hy';

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };


    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const finalTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

        if (finalTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.textContent = '☀️'; 
        } else {
            body.classList.remove('dark-mode');
            themeToggle.textContent = '🌙'; 
        }
    };
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    });


    const applyLanguage = (lang) => {
        document.documentElement.lang = lang;
        const currentIndex = availableLangs.indexOf(lang);
        const nextLangIndex = (currentIndex + 1) % availableLangs.length;
        const currentSymbol = lang.toUpperCase();
        const nextSymbol = availableLangs[nextLangIndex].toUpperCase();
        langToggle.textContent = `${currentSymbol}/${nextSymbol}`;
        
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            el.textContent = translations[lang][key] || el.textContent;
        });
        
        const footerElement = document.getElementById('footer-creator-text');
        if (footerElement) {
            footerElement.innerHTML = translations[lang].footer;
        }

        if (questionArea.classList.contains('hidden')) {
            showResults(); 
        } else {
            if (currentQuestionIndex < totalQuestions) {
                 showQuestion(); 
            }
           
        }
    };

    langToggle.addEventListener('click', () => {
        const currentIndex = availableLangs.indexOf(currentLang);
        const nextIndex = (currentIndex + 1) % availableLangs.length;
        currentLang = availableLangs[nextIndex];
        
        localStorage.setItem('lang', currentLang);
        applyLanguage(currentLang);
    });



    const showQuestion = () => {
        const q = quizQuestions[currentQuestionIndex];
        
        let langText;
        if (currentLang === 'hy') langText = 'Հարց';
        else if (currentLang === 'ru') langText = 'Вопрос';
        else langText = 'Question';
        
        questionNumber.textContent = `${langText} ${currentQuestionIndex + 1} / ${totalQuestions}`;
        questionText.textContent = q.question[currentLang];
        
        answersContainer.innerHTML = '';
        
        const shuffledAnswers = shuffleArray([...q.answers]);

        shuffledAnswers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer.text[currentLang];
            button.classList.add('answer-btn', 'slide-up');
            
            button.style.transitionDelay = `${0.1 * index}s`; 

            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            
            button.addEventListener('click', selectAnswer);
            answersContainer.appendChild(button);
            
            setTimeout(() => button.classList.add('in-view'), 10);
        });
    };

    const selectAnswer = (e) => {
        const selectedButton = e.target;
        const isCorrect = selectedButton.dataset.correct === 'true';

        if (isCorrect) {
            selectedButton.classList.add('correct');
            score++;
        } else {
            selectedButton.classList.add('wrong');
            Array.from(answersContainer.children).forEach(button => {
                if (button.dataset.correct === 'true') {
                    button.classList.add('correct');
                }
            });
        }

        Array.from(answersContainer.children).forEach(button => {
            button.disabled = true;
        });

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < totalQuestions) {
                showQuestion();
            } else {
                showResults();
            }
        }, 1800); 
    };

    const showResults = () => {
        questionArea.classList.add('hidden');
        resultsArea.classList.remove('hidden');

        const wrongCount = totalQuestions - score;
        const percentage = score / totalQuestions;

        let scoreDisplay = translations[currentLang].score.replace('%SCORE%', score).replace('%TOTAL%', totalQuestions);
        scoreText.textContent = scoreDisplay;

        const correctText = translations[currentLang].correct_text || 'Correct';
        const wrongText = translations[currentLang].wrong_text || 'Wrong';
        
        detailedScore.innerHTML = `
            <span style="color: #27ae60;">${correctText}: ${score}</span> | 
            <span style="color: #e74c3c;">${wrongText}: ${wrongCount}</span>
        `;
        
        let feedback = "";
        
        if (percentage === 1.0) {
            if (currentLang === 'hy') feedback = "ՀԻԱՆԱԼԻ է։ Դուք իսկական Ոսկեդարի գիտակ եք։ Դուք բացարձակապես գերազանց եք։";
            else if (currentLang === 'ru') feedback = "ВЕЛИКОЛЕПНО! Вы настоящий знаток Золотого Века. Вы абсолютный отличник! 🤩";
            else feedback = "EXCELLENT! You are a true connoisseur of the Golden Age. You are absolutely brilliant! 🤩";
        } else if (percentage >= 0.9) { 
            if (currentLang === 'hy') feedback = "ԳԵՐԱԶԱՆՑ։ Ձեր գիտելիքները շատ բարձր մակարդակի վրա են։";
            else if (currentLang === 'ru') feedback = "ПРЕВОСХОДНО. Ваши знания на очень высоком уровне. 👍";
            else feedback = "OUTSTANDING. Your knowledge is at a very high level. 👍";
        } else if (percentage >= 0.7) { 
            if (currentLang === 'hy') feedback = "ԼԱՎ ԱՐԴՅՈՒՆՔ։ Ոսկեդարի հիմքերը դրված են, բայց կան մի քանի թերություններ։";
            else if (currentLang === 'ru') feedback = "ХОРОШИЙ РЕЗУЛЬТАТ. Основы Золотого Века заложены, но есть пробелы. 🤔";
            else feedback = "GOOD RESULT. The foundations of the Golden Age are laid, but there are some gaps. 🤔";
        } else {
            if (currentLang === 'hy') feedback = "Պետք է մի փոքր ավելին ուսումնասիրել։ Համեցեք նորից։";
            else if (currentLang === 'ru') feedback = "Нужно немного больше изучить. Приглашаем снова. 📚";
            else feedback = "You need to study a little more. Welcome back to try again. 📚";
        }
        feedbackText.textContent = feedback;
    };

    const startQuiz = () => {
        currentQuestionIndex = 0;
        score = 0;
        resultsArea.classList.add('hidden');
        questionArea.classList.remove('hidden');
        showQuestion();
    };

    restartButton.addEventListener('click', startQuiz);

    initTheme();
    applyLanguage(currentLang);
    startQuiz();
});