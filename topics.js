const topics = {


    astronomy: {

        aliases: {
            en: ["astronomy"],
            fr: ["astronomie"],
            es: ["astronomía", "astronomia"],
            ar: ["علم الفلك"]
        },


        translations: {

            en: {
                title: "Astronomy",
                category: "Science",

                overview:
                    "Astronomy is the scientific study of objects and phenomena beyond Earth. It includes planets, stars, galaxies, black holes, and the large-scale structure and history of the universe.",

                prerequisites: [
                    "Basic mathematics",
                    "Basic physics",
                    "Curiosity about space and the universe"
                ],

                learningPath: {
                    beginner: [
                        "What is Astronomy?",
                        "The Solar System",
                        "Stars",
                        "Galaxies",
                        "The Universe"
                    ],

                    intermediate: [
                        "Classical Physics",
                        "Stellar Structure",
                        "Galactic Astronomy",
                        "Black Holes",
                        "Cosmology"
                    ],

                    advanced: [
                        "Astrophysics",
                        "General Relativity",
                        "High-Energy Astrophysics",
                        "Cosmology",
                        "Quantum Gravity"
                    ]
                },

                concepts: [
                    "Planets and planetary systems",
                    "Stars and stellar evolution",
                    "Galaxies",
                    "Black holes",
                    "Cosmology"
                ],

                related: [
                    "Physics",
                    "Cosmology",
                    "Astrophysics",
                    "Planetary Science"
                ]
            },


            fr: {
                title: "Astronomie",
                category: "Sciences",

                overview:
                    "L'astronomie est l'étude scientifique des objets et phénomènes situés au-delà de la Terre. Elle comprend les planètes, les étoiles, les galaxies, les trous noirs ainsi que la structure et l'histoire de l'univers.",

                prerequisites: [
                    "Mathématiques de base",
                    "Physique de base",
                    "Curiosité pour l'espace et l'univers"
                ],

                learningPath: {
                    beginner: [
                        "Qu'est-ce que l'astronomie ?",
                        "Le Système solaire",
                        "Les étoiles",
                        "Les galaxies",
                        "L'Univers"
                    ],

                    intermediate: [
                        "Physique classique",
                        "Structure des étoiles",
                        "Astronomie galactique",
                        "Trous noirs",
                        "Cosmologie"
                    ],

                    advanced: [
                        "Astrophysique",
                        "Relativité générale",
                        "Astrophysique des hautes énergies",
                        "Cosmologie",
                        "Gravitation quantique"
                    ]
                },

                concepts: [
                    "Planètes et systèmes planétaires",
                    "Étoiles et évolution stellaire",
                    "Galaxies",
                    "Trous noirs",
                    "Cosmologie"
                ],

                related: [
                    "Physique",
                    "Cosmologie",
                    "Astrophysique",
                    "Science planétaire"
                ]
            },


            es: {
                title: "Astronomía",
                category: "Ciencia",

                overview:
                    "La astronomía es el estudio científico de los objetos y fenómenos que se encuentran más allá de la Tierra. Incluye planetas, estrellas, galaxias, agujeros negros y la estructura e historia del universo.",

                prerequisites: [
                    "Matemáticas básicas",
                    "Física básica",
                    "Curiosidad por el espacio y el universo"
                ],

                learningPath: {
                    beginner: [
                        "¿Qué es la astronomía?",
                        "El Sistema Solar",
                        "Las estrellas",
                        "Las galaxias",
                        "El Universo"
                    ],

                    intermediate: [
                        "Física clásica",
                        "Estructura estelar",
                        "Astronomía galáctica",
                        "Agujeros negros",
                        "Cosmología"
                    ],

                    advanced: [
                        "Astrofísica",
                        "Relatividad general",
                        "Astrofísica de altas energías",
                        "Cosmología",
                        "Gravedad cuántica"
                    ]
                },

                concepts: [
                    "Planetas y sistemas planetarios",
                    "Estrellas y evolución estelar",
                    "Galaxias",
                    "Agujeros negros",
                    "Cosmología"
                ],

                related: [
                    "Física",
                    "Cosmología",
                    "Astrofísica",
                    "Ciencia planetaria"
                ]
            },


            ar: {
                title: "علم الفلك",
                category: "العلوم",

                overview:
                    "علم الفلك هو الدراسة العلمية للأجرام والظواهر الموجودة خارج الأرض. ويشمل الكواكب والنجوم والمجرات والثقوب السوداء وبنية الكون وتاريخه.",

                prerequisites: [
                    "أساسيات الرياضيات",
                    "أساسيات الفيزياء",
                    "الفضول حول الفضاء والكون"
                ],

                learningPath: {
                    beginner: [
                        "ما هو علم الفلك؟",
                        "النظام الشمسي",
                        "النجوم",
                        "المجرات",
                        "الكون"
                    ],

                    intermediate: [
                        "الفيزياء الكلاسيكية",
                        "بنية النجوم",
                        "علم الفلك المجري",
                        "الثقوب السوداء",
                        "علم الكونيات"
                    ],

                    advanced: [
                        "الفيزياء الفلكية",
                        "النسبية العامة",
                        "فيزياء الفلك عالية الطاقة",
                        "علم الكونيات",
                        "الجاذبية الكمومية"
                    ]
                },

                concepts: [
                    "الكواكب والأنظمة الكوكبية",
                    "النجوم وتطورها",
                    "المجرات",
                    "الثقوب السوداء",
                    "علم الكونيات"
                ],

                related: [
                    "الفيزياء",
                    "علم الكونيات",
                    "الفيزياء الفلكية",
                    "علم الكواكب"
                ]
            }

        },

        resources: [
            {
                name: "NASA Astronomy",
                url: "https://science.nasa.gov/astronomy/"
            },

            {
                name: "Khan Academy — Cosmology and Astronomy",
                url: "https://www.khanacademy.org/science/cosmology-and-astronomy"
            },

            {
                name: "OpenStax — Astronomy 2e",
                url: "https://openstax.org/books/astronomy-2e/"
            }
        ]

    },


    physics: {

        aliases: {
            en: ["physics"],
            fr: ["physique"],
            es: ["física", "fisica"],
            ar: ["الفيزياء"]
        },


        translations: {

            en: {
                title: "Physics",
                category: "Science",

                overview:
                    "Physics studies matter, energy, motion, forces, space, and time, and the rules that describe how nature behaves.",

                prerequisites: [
                    "Basic mathematics",
                    "Algebra"
                ],

                learningPath: {
                    beginner: [
                        "Basic Mathematics",
                        "Motion",
                        "Forces",
                        "Energy",
                        "Waves"
                    ],

                    intermediate: [
                        "Classical Mechanics",
                        "Electricity",
                        "Magnetism",
                        "Thermodynamics",
                        "Waves"
                    ],

                    advanced: [
                        "Quantum Mechanics",
                        "Relativity",
                        "Particle Physics",
                        "Statistical Mechanics",
                        "Field Theory"
                    ]
                },

                concepts: [
                    "Motion",
                    "Forces",
                    "Energy",
                    "Waves",
                    "Modern physics"
                ],

                related: [
                    "Mathematics",
                    "Astronomy",
                    "Engineering"
                ]
            },


            fr: {
                title: "Physique",
                category: "Sciences",

                overview:
                    "La physique étudie la matière, l'énergie, le mouvement, les forces, l'espace et le temps ainsi que les lois qui décrivent le comportement de la nature.",

                prerequisites: [
                    "Mathématiques de base",
                    "Algèbre"
                ],

                learningPath: {
                    beginner: [
                        "Mathématiques de base",
                        "Mouvement",
                        "Forces",
                        "Énergie",
                        "Ondes"
                    ],

                    intermediate: [
                        "Mécanique classique",
                        "Électricité",
                        "Magnétisme",
                        "Thermodynamique",
                        "Ondes"
                    ],

                    advanced: [
                        "Mécanique quantique",
                        "Relativité",
                        "Physique des particules",
                        "Mécanique statistique",
                        "Théorie des champs"
                    ]
                },

                concepts: [
                    "Mouvement",
                    "Forces",
                    "Énergie",
                    "Ondes",
                    "Physique moderne"
                ],

                related: [
                    "Mathématiques",
                    "Astronomie",
                    "Ingénierie"
                ]
            },


            es: {
                title: "Física",
                category: "Ciencia",

                overview:
                    "La física estudia la materia, la energía, el movimiento, las fuerzas, el espacio y el tiempo, así como las leyes que describen el comportamiento de la naturaleza.",

                prerequisites: [
                    "Matemáticas básicas",
                    "Álgebra"
                ],

                learningPath: {
                    beginner: [
                        "Matemáticas básicas",
                        "Movimiento",
                        "Fuerzas",
                        "Energía",
                        "Ondas"
                    ],

                    intermediate: [
                        "Mecánica clásica",
                        "Electricidad",
                        "Magnetismo",
                        "Termodinámica",
                        "Ondas"
                    ],

                    advanced: [
                        "Mecánica cuántica",
                        "Relatividad",
                        "Física de partículas",
                        "Mecánica estadística",
                        "Teoría de campos"
                    ]
                },

                concepts: [
                    "Movimiento",
                    "Fuerzas",
                    "Energía",
                    "Ondas",
                    "Física moderna"
                ],

                related: [
                    "Matemáticas",
                    "Astronomía",
                    "Ingeniería"
                ]
            },


            ar: {
                title: "الفيزياء",
                category: "العلوم",

                overview:
                    "تدرس الفيزياء المادة والطاقة والحركة والقوى والمكان والزمان والقوانين التي تصف كيفية عمل الطبيعة.",

                prerequisites: [
                    "أساسيات الرياضيات",
                    "الجبر"
                ],

                learningPath: {
                    beginner: [
                        "أساسيات الرياضيات",
                        "الحركة",
                        "القوى",
                        "الطاقة",
                        "الموجات"
                    ],

                    intermediate: [
                        "الميكانيكا الكلاسيكية",
                        "الكهرباء",
                        "المغناطيسية",
                        "الديناميكا الحرارية",
                        "الموجات"
                    ],

                    advanced: [
                        "ميكانيكا الكم",
                        "النسبية",
                        "فيزياء الجسيمات",
                        "الميكانيكا الإحصائية",
                        "نظرية الحقول"
                    ]
                },

                concepts: [
                    "الحركة",
                    "القوى",
                    "الطاقة",
                    "الموجات",
                    "الفيزياء الحديثة"
                ],

                related: [
                    "الرياضيات",
                    "علم الفلك",
                    "الهندسة"
                ]
            }

        },

        resources: [
            {
                name: "Khan Academy — Physics",
                url: "https://www.khanacademy.org/science/physics"
            },

            {
                name: "OpenStax — Physics",
                url: "https://openstax.org/subjects/physics"
            }
        ]

    },


    history: {

        aliases: {
            en: ["history"],
            fr: ["histoire"],
            es: ["historia"],
            ar: ["التاريخ"]
        },


        translations: {

            en: {
                title: "History",
                category: "Humanities",

                overview:
                    "History is the study of the human past through events, societies, cultures, institutions, and the evidence people have left behind.",

                prerequisites: [
                    "No special prerequisites",
                    "Ability to compare sources",
                    "Interest in human societies"
                ],

                learningPath: {
                    beginner: [
                        "Understanding Historical Time",
                        "Ancient Civilizations",
                        "Medieval History",
                        "Early Modern History",
                        "Modern History"
                    ],

                    intermediate: [
                        "Historical Sources",
                        "Ancient Civilizations",
                        "Medieval Societies",
                        "Early Modern States",
                        "Modern World History"
                    ],

                    advanced: [
                        "Historiography",
                        "Primary Source Analysis",
                        "Comparative History",
                        "Historical Method",
                        "Specialized Research"
                    ]
                },

                concepts: [
                    "Ancient civilizations",
                    "Medieval societies",
                    "Early modern history",
                    "Modern history",
                    "Historical evidence"
                ],

                related: [
                    "Archaeology",
                    "Geography",
                    "Politics",
                    "Anthropology"
                ]
            },


            fr: {
                title: "Histoire",
                category: "Sciences humaines",

                overview:
                    "L'histoire étudie le passé humain à travers les événements, les sociétés, les cultures, les institutions et les traces laissées par les populations.",

                prerequisites: [
                    "Aucun prérequis particulier",
                    "Capacité à comparer des sources",
                    "Intérêt pour les sociétés humaines"
                ],

                learningPath: {
                    beginner: [
                        "Comprendre le temps historique",
                        "Civilisations anciennes",
                        "Histoire médiévale",
                        "Histoire moderne",
                        "Histoire contemporaine"
                    ],

                    intermediate: [
                        "Sources historiques",
                        "Civilisations anciennes",
                        "Sociétés médiévales",
                        "États modernes",
                        "Histoire du monde moderne"
                    ],

                    advanced: [
                        "Historiographie",
                        "Analyse des sources primaires",
                        "Histoire comparée",
                        "Méthode historique",
                        "Recherche spécialisée"
                    ]
                },

                concepts: [
                    "Civilisations anciennes",
                    "Sociétés médiévales",
                    "Histoire moderne",
                    "Histoire contemporaine",
                    "Sources historiques"
                ],

                related: [
                    "Archéologie",
                    "Géographie",
                    "Politique",
                    "Anthropologie"
                ]
            },


            es: {
                title: "Historia",
                category: "Humanidades",

                overview:
                    "La historia estudia el pasado humano a través de acontecimientos, sociedades, culturas, instituciones y las evidencias que dejaron.",

                prerequisites: [
                    "No se necesitan conocimientos especiales",
                    "Capacidad para comparar fuentes",
                    "Interés por las sociedades humanas"
                ],

                learningPath: {
                    beginner: [
                        "Comprender el tiempo histórico",
                        "Civilizaciones antiguas",
                        "Historia medieval",
                        "Historia moderna",
                        "Historia contemporánea"
                    ],

                    intermediate: [
                        "Fuentes históricas",
                        "Civilizaciones antiguas",
                        "Sociedades medievales",
                        "Estados modernos",
                        "Historia mundial moderna"
                    ],

                    advanced: [
                        "Historiografía",
                        "Análisis de fuentes primarias",
                        "Historia comparada",
                        "Método histórico",
                        "Investigación especializada"
                    ]
                },

                concepts: [
                    "Civilizaciones antiguas",
                    "Sociedades medievales",
                    "Historia moderna",
                    "Historia contemporánea",
                    "Evidencia histórica"
                ],

                related: [
                    "Arqueología",
                    "Geografía",
                    "Política",
                    "Antropología"
                ]
            },


            ar: {
                title: "التاريخ",
                category: "العلوم الإنسانية",

                overview:
                    "التاريخ هو دراسة الماضي البشري من خلال الأحداث والمجتمعات والثقافات والمؤسسات والأدلة التي تركتها الشعوب.",

                prerequisites: [
                    "لا توجد متطلبات خاصة",
                    "القدرة على مقارنة المصادر",
                    "الاهتمام بالمجتمعات البشرية"
                ],

                learningPath: {
                    beginner: [
                        "فهم الزمن التاريخي",
                        "الحضارات القديمة",
                        "التاريخ الوسيط",
                        "التاريخ الحديث",
                        "التاريخ المعاصر"
                    ],

                    intermediate: [
                        "المصادر التاريخية",
                        "الحضارات القديمة",
                        "المجتمعات الوسيطة",
                        "الدول الحديثة",
                        "تاريخ العالم الحديث"
                    ],

                    advanced: [
                        "علم كتابة التاريخ",
                        "تحليل المصادر الأولية",
                        "التاريخ المقارن",
                        "المنهج التاريخي",
                        "البحث المتخصص"
                    ]
                },

                concepts: [
                    "الحضارات القديمة",
                    "المجتمعات الوسيطة",
                    "التاريخ الحديث",
                    "التاريخ المعاصر",
                    "الأدلة التاريخية"
                ],

                related: [
                    "علم الآثار",
                    "الجغرافيا",
                    "السياسة",
                    "الأنثروبولوجيا"
                ]
            }

        },

        resources: [
            {
                name: "Khan Academy — World History",
                url: "https://www.khanacademy.org/humanities/world-history"
            },

            {
                name: "OpenStax — Humanities",
                url: "https://openstax.org/subjects/humanities"
            }
        ]

    },


    philosophy: {

        aliases: {
            en: ["philosophy"],
            fr: ["philosophie"],
            es: ["filosofía", "filosofia"],
            ar: ["الفلسفة"]
        },


        translations: {

            en: {
                title: "Philosophy",
                category: "Humanities",

                overview:
                    "Philosophy investigates fundamental questions about reality, knowledge, morality, reasoning, existence, and how we should live.",

                prerequisites: [
                    "No special prerequisites",
                    "Willingness to question assumptions",
                    "Basic reasoning skills"
                ],

                learningPath: {
                    beginner: [
                        "What is Philosophy?",
                        "Logic",
                        "Ethics",
                        "Knowledge",
                        "Existence"
                    ],

                    intermediate: [
                        "Logic",
                        "Epistemology",
                        "Ethics",
                        "Metaphysics",
                        "Philosophy of Mind"
                    ],

                    advanced: [
                        "Formal Logic",
                        "Advanced Epistemology",
                        "Metaethics",
                        "Analytic Metaphysics",
                        "Philosophy of Mind"
                    ]
                },

                concepts: [
                    "Logic",
                    "Epistemology",
                    "Ethics",
                    "Metaphysics",
                    "Philosophy of mind"
                ],

                related: [
                    "Psychology",
                    "Logic",
                    "History",
                    "Religion"
                ]
            },


            fr: {
                title: "Philosophie",
                category: "Sciences humaines",

                overview:
                    "La philosophie étudie les questions fondamentales sur la réalité, la connaissance, la morale, le raisonnement, l'existence et notre manière de vivre.",

                prerequisites: [
                    "Aucun prérequis particulier",
                    "Volonté de remettre en question les idées",
                    "Bases du raisonnement"
                ],

                learningPath: {
                    beginner: [
                        "Qu'est-ce que la philosophie ?",
                        "Logique",
                        "Éthique",
                        "Connaissance",
                        "Existence"
                    ],

                    intermediate: [
                        "Logique",
                        "Épistémologie",
                        "Éthique",
                        "Métaphysique",
                        "Philosophie de l'esprit"
                    ],

                    advanced: [
                        "Logique formelle",
                        "Épistémologie avancée",
                        "Métaéthique",
                        "Métaphysique analytique",
                        "Philosophie de l'esprit"
                    ]
                },

                concepts: [
                    "Logique",
                    "Épistémologie",
                    "Éthique",
                    "Métaphysique",
                    "Philosophie de l'esprit"
                ],

                related: [
                    "Psychologie",
                    "Logique",
                    "Histoire",
                    "Religion"
                ]
            },


            es: {
                title: "Filosofía",
                category: "Humanidades",

                overview:
                    "La filosofía investiga preguntas fundamentales sobre la realidad, el conocimiento, la moral, el razonamiento, la existencia y cómo debemos vivir.",

                prerequisites: [
                    "No se necesitan conocimientos especiales",
                    "Disposición para cuestionar ideas",
                    "Habilidades básicas de razonamiento"
                ],

                learningPath: {
                    beginner: [
                        "¿Qué es la filosofía?",
                        "Lógica",
                        "Ética",
                        "Conocimiento",
                        "Existencia"
                    ],

                    intermediate: [
                        "Lógica",
                        "Epistemología",
                        "Ética",
                        "Metafísica",
                        "Filosofía de la mente"
                    ],

                    advanced: [
                        "Lógica formal",
                        "Epistemología avanzada",
                        "Metaética",
                        "Metafísica analítica",
                        "Filosofía de la mente"
                    ]
                },

                concepts: [
                    "Lógica",
                    "Epistemología",
                    "Ética",
                    "Metafísica",
                    "Filosofía de la mente"
                ],

                related: [
                    "Psicología",
                    "Lógica",
                    "Historia",
                    "Religión"
                ]
            },


            ar: {
                title: "الفلسفة",
                category: "العلوم الإنسانية",

                overview:
                    "تبحث الفلسفة في الأسئلة الأساسية المتعلقة بالواقع والمعرفة والأخلاق والاستدلال والوجود وكيف ينبغي للإنسان أن يعيش.",

                prerequisites: [
                    "لا توجد متطلبات خاصة",
                    "الاستعداد للتشكيك في الافتراضات",
                    "أساسيات التفكير المنطقي"
                ],

                learningPath: {
                    beginner: [
                        "ما هي الفلسفة؟",
                        "المنطق",
                        "الأخلاق",
                        "المعرفة",
                        "الوجود"
                    ],

                    intermediate: [
                        "المنطق",
                        "نظرية المعرفة",
                        "الأخلاق",
                        "الميتافيزيقا",
                        "فلسفة العقل"
                    ],

                    advanced: [
                        "المنطق الصوري",
                        "نظرية المعرفة المتقدمة",
                        "ما وراء الأخلاق",
                        "الميتافيزيقا التحليلية",
                        "فلسفة العقل"
                    ]
                },

                concepts: [
                    "المنطق",
                    "نظرية المعرفة",
                    "الأخلاق",
                    "الميتافيزيقا",
                    "فلسفة العقل"
                ],

                related: [
                    "علم النفس",
                    "المنطق",
                    "التاريخ",
                    "الدين"
                ]
            }

        },

        resources: [
            {
                name: "Stanford Encyclopedia of Philosophy",
                url: "https://plato.stanford.edu/"
            },

            {
                name: "Internet Encyclopedia of Philosophy",
                url: "https://iep.utm.edu/"
            }
        ]

    },


    technology: {

        aliases: {
            en: ["technology"],
            fr: ["technologie"],
            es: ["tecnología", "tecnologia"],
            ar: ["التكنولوجيا", "التقنية"]
        },


        translations: {

            en: {
                title: "Technology",
                category: "Technology",

                overview:
                    "Technology is the use of knowledge, tools, systems, and techniques to solve problems and accomplish human goals.",

                prerequisites: [
                    "Basic computer skills",
                    "Curiosity about how systems work"
                ],

                learningPath: {
                    beginner: [
                        "Computer Basics",
                        "How the Web Works",
                        "Programming Basics",
                        "Data Basics",
                        "Digital Systems"
                    ],

                    intermediate: [
                        "Programming",
                        "Data Structures",
                        "Databases",
                        "Computer Networks",
                        "Cybersecurity"
                    ],

                    advanced: [
                        "Algorithms",
                        "Distributed Systems",
                        "Artificial Intelligence",
                        "Computer Architecture",
                        "Advanced Computing"
                    ]
                },

                concepts: [
                    "Computer science",
                    "Programming",
                    "Artificial intelligence",
                    "Networks",
                    "Cybersecurity"
                ],

                related: [
                    "Programming",
                    "Engineering",
                    "Artificial Intelligence",
                    "Cybersecurity"
                ]
            },


            fr: {
                title: "Technologie",
                category: "Technologie",

                overview:
                    "La technologie utilise les connaissances, les outils, les systèmes et les techniques pour résoudre des problèmes et atteindre des objectifs humains.",

                prerequisites: [
                    "Bases en informatique",
                    "Curiosité sur le fonctionnement des systèmes"
                ],

                learningPath: {
                    beginner: [
                        "Bases de l'informatique",
                        "Comment fonctionne le Web",
                        "Bases de la programmation",
                        "Bases des données",
                        "Systèmes numériques"
                    ],

                    intermediate: [
                        "Programmation",
                        "Structures de données",
                        "Bases de données",
                        "Réseaux informatiques",
                        "Cybersécurité"
                    ],

                    advanced: [
                        "Algorithmes",
                        "Systèmes distribués",
                        "Intelligence artificielle",
                        "Architecture des ordinateurs",
                        "Informatique avancée"
                    ]
                },

                concepts: [
                    "Informatique",
                    "Programmation",
                    "Intelligence artificielle",
                    "Réseaux",
                    "Cybersécurité"
                ],

                related: [
                    "Programmation",
                    "Ingénierie",
                    "Intelligence artificielle",
                    "Cybersécurité"
                ]
            },


            es: {
                title: "Tecnología",
                category: "Tecnología",

                overview:
                    "La tecnología utiliza conocimientos, herramientas, sistemas y técnicas para resolver problemas y alcanzar objetivos humanos.",

                prerequisites: [
                    "Conocimientos básicos de informática",
                    "Curiosidad por el funcionamiento de los sistemas"
                ],

                learningPath: {
                    beginner: [
                        "Conceptos básicos de informática",
                        "Cómo funciona la Web",
                        "Bases de programación",
                        "Bases de datos",
                        "Sistemas digitales"
                    ],

                    intermediate: [
                        "Programación",
                        "Estructuras de datos",
                        "Bases de datos",
                        "Redes informáticas",
                        "Ciberseguridad"
                    ],

                    advanced: [
                        "Algoritmos",
                        "Sistemas distribuidos",
                        "Inteligencia artificial",
                        "Arquitectura de computadores",
                        "Computación avanzada"
                    ]
                },

                concepts: [
                    "Informática",
                    "Programación",
                    "Inteligencia artificial",
                    "Redes",
                    "Ciberseguridad"
                ],

                related: [
                    "Programación",
                    "Ingeniería",
                    "Inteligencia artificial",
                    "Ciberseguridad"
                ]
            },


            ar: {
                title: "التكنولوجيا",
                category: "التكنولوجيا",

                overview:
                    "التكنولوجيا هي استخدام المعرفة والأدوات والأنظمة والتقنيات لحل المشكلات وتحقيق أهداف الإنسان.",

                prerequisites: [
                    "مهارات أساسية في الحاسوب",
                    "الفضول لمعرفة كيفية عمل الأنظمة"
                ],

                learningPath: {
                    beginner: [
                        "أساسيات الحاسوب",
                        "كيف تعمل شبكة الويب",
                        "أساسيات البرمجة",
                        "أساسيات البيانات",
                        "الأنظمة الرقمية"
                    ],

                    intermediate: [
                        "البرمجة",
                        "هياكل البيانات",
                        "قواعد البيانات",
                        "شبكات الحاسوب",
                        "الأمن السيبراني"
                    ],

                    advanced: [
                        "الخوارزميات",
                        "الأنظمة الموزعة",
                        "الذكاء الاصطناعي",
                        "هندسة الحاسوب",
                        "الحوسبة المتقدمة"
                    ]
                },

                concepts: [
                    "علوم الحاسوب",
                    "البرمجة",
                    "الذكاء الاصطناعي",
                    "الشبكات",
                    "الأمن السيبراني"
                ],

                related: [
                    "البرمجة",
                    "الهندسة",
                    "الذكاء الاصطناعي",
                    "الأمن السيبراني"
                ]
            }

        },

        resources: [
            {
                name: "freeCodeCamp",
                url: "https://www.freecodecamp.org/"
            },

            {
                name: "MDN Web Docs",
                url: "https://developer.mozilla.org/"
            }
        ]

    }

};