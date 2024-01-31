Search.setIndex({"docnames": ["agrupamento", "bayes", "classificadores-lineares", "combinacao", "estimativa", "introduction", "multiclasse", "nao-linear", "notebooks", "perceptron", "reconhecimento", "svm"], "filenames": ["agrupamento.md", "bayes.md", "classificadores-lineares.md", "combinacao.md", "estimativa.md", "introduction.md", "multiclasse.md", "nao-linear.md", "notebooks.ipynb", "perceptron.md", "reconhecimento.md", "svm.md"], "titles": ["Cap\u00edtulo 5: M\u00e9todos de agrupamento", "Cap\u00edtulo 1: Teoria da decis\u00e3o de Bayes", "Cap\u00edtulo 2: Classificadores lineares", "Cap\u00edtulo 4: Combina\u00e7\u00e3o de classificadores", "2.3 Estimativa baseada na soma dos erros quadr\u00e1ticos", "P\u00e1gina inicial", "2.5 Estrat\u00e9tegias Multiclasse", "Cap\u00edtulo 3: Classificadores n\u00e3o lineares", "Content with notebooks", "2.2 Perceptron", "Introdu\u00e7\u00e3o ao reconhecimento de padr\u00f5es", "2.4 M\u00e1quina de vetores de suporte (SVM) - vers\u00e3o linear"], "terms": {"A": [1, 2, 4, 6, 9, 10, 11], "regra": [1, 2, 9, 11], "demonstrada": 1, "na": [1, 2, 6, 9, 10, 11], "equa\u00e7\u00e3o": [1, 2, 4, 9, 11], "\u00e9": [1, 2, 4, 6, 9, 10, 11], "uma": [1, 2, 4, 6, 9, 10, 11], "que": [1, 2, 4, 5, 6, 9, 10, 11], "relaciona": 1, "ocorr\u00eancia": [1, 9, 11], "doi": [1, 2, 6, 11], "evento": 1, "atrav\u00e9": [1, 2, 9, 11], "sua": [1, 2, 6, 9, 11], "probabilidad": [1, 11], "condicionai": 1, "ela": 1, "utilizada": [1, 11], "para": [1, 2, 4, 6, 9, 10, 11], "calcular": 1, "um": [1, 2, 4, 6, 9, 10, 11], "ocorr": [1, 9], "dado": [1, 2, 6, 10, 11], "outro": [1, 2, 6, 9, 11], "j\u00e1": [1, 2, 6, 9, 11], "ocorreu": 1, "begin": [1, 2, 4, 8, 9, 11], "equat": [1, 2, 4, 9, 11], "p": [1, 11], "b": [1, 4, 6, 9, 11], "frac": [1, 2, 4, 9, 11], "text": 1, "end": [1, 2, 4, 8, 9, 11], "ond": [1, 10, 11], "do": [1, 2, 5, 8, 9, 10, 11], "o": [1, 2, 4, 5, 6, 9, 10], "independentement": 1, "como": [1, 2, 4, 9, 10, 11], "ponto": [1, 2, 11], "partida": 1, "vamo": [1, 2], "admitir": 1, "os": [1, 2, 6, 9, 10, 11], "padr\u00f5": [1, 2, 4, 5, 6, 9], "s\u00e3o": [1, 2, 4, 6, 9, 10, 11], "expresso": 1, "forma": [1, 2, 4, 9, 10, 11], "gen\u00e9rica": [1, 9], "por": [1, 2, 4, 6, 9, 10, 11], "x": [1, 2, 4, 6, 9, 11], "x_": [1, 2, 9], "n": [1, 2, 4, 8, 9], "t": [1, 2, 4, 8, 9, 11], "sobr": [1, 2, 11], "quai": [1, 2, 9, 10, 11], "desejamo": 1, "inferir": 1, "pertin\u00eancia": 1, "em": [1, 2, 4, 6, 9, 10], "dada": [1, 2, 6, 9], "class": [1, 2, 6, 9, 10, 11], "\u03c9": [1, 6], "\u03c9_": [1, 4, 11], "c": [1, 6, 11], "No": [1, 6, 9, 11], "contexto": [1, 11], "estat\u00edstico": 1, "seguint": [1, 4, 9, 11], "geral": 1, "pode": [1, 2, 6, 9, 10, 11], "ser": [1, 2, 6, 9, 10, 11], "empregada": [1, 6], "tal": [1, 2, 4, 9, 11], "processo": [1, 2, 4, 6, 9, 10, 11], "classifica\u00e7\u00e3o": [1, 2, 4, 6, 9, 10, 11], "textbf": [1, 2, 4, 6, 9, 11], "j": [1, 4, 9, 11], "leftrightarrow": [1, 2], "arg_": 1, "in\u03c9": 1, "max": 1, "denominada": 1, "textit": [1, 4, 6, 9, 11], "posteriori": 1, "representa": [1, 10, 11], "pertenc": [1, 6], "modo": [1, 9], "problema": [1, 6, 9, 10, 11], "comp\u00f5": 1, "expressa": [1, 2], "pela": [1, 2, 6, 9, 11], "anterior": [1, 6, 9, 11], "desconhecida": 1, "entanto": [1, 6, 9], "possibilita": [1, 2, 9, 11], "seu": [1, 11], "c\u00e1lculo": [1, 4, 9, 11], "meio": [1, 10], "priori": 1, "evid\u00eancia": 1, "e": [1, 4, 6, 9, 10], "fun\u00e7\u00e3o": [1, 2, 4, 9, 11], "verossimilhan\u00e7a": 1, "sendo": [1, 4, 6, 11], "sum_": [1, 4, 9, 11], "vez": [1, 2, 6, 9, 11], "conhecida": [1, 2], "segundo": [1, 2, 4, 6, 9, 10, 11], "com": [1, 2, 4, 6, 9, 10, 11], "torna": [1, 2, 4, 9, 11], "se": [1, 2, 4, 5, 6, 9, 10, 11], "simpl": [1, 6, 11], "objetivo": [1, 2, 9, 10, 11], "aprofundar": 1, "discuss\u00f5": [1, 9, 11], "introduzida": [1, 2], "realizar": [1, 9], "an\u00e1lis": 1, "erro": [1, 9, 10, 11], "cometido": 1, "ao": [1, 2, 4, 5, 6, 9, 11], "utilizar": 1, "fim": [1, 2, 9, 11], "favorec": 1, "entendimento": [1, 2], "consider": [1, 9], "entr": [1, 2, 6, 9, 10, 11], "apena": [1, 6, 10, 11], "dua": [1, 2, 6, 9, 11], "2": [1, 5], "equiprov\u00e1vei": 1, "cuja": [1, 2, 11], "observa\u00e7\u00f5": [1, 9, 10], "est\u00e3o": [1, 9, 11], "definida": [1, 4, 6, 11], "conjunto": [1, 9, 10, 11], "n\u00famero": [1, 6, 9, 11], "reai": [1, 11], "i": [1, 4, 6, 9, 11], "mathbb": [1, 2, 9, 11], "r": [1, 2, 9], "qual": [1, 9, 11], "dividido": [1, 10], "regi\u00f5": [1, 6], "r_": 1, "enquanto": [1, 9], "regi\u00e3o": [1, 9, 11], "compreend": [1, 10], "valor": [1, 2, 4, 9, 10, 11], "tai": [1, 9], "figura": [1, 2, 6, 9, 11], "ilustra": [1, 6, 11], "rela\u00e7\u00e3o": [1, 4, 6, 9, 11], "mencionada": [1, 2], "essa": [1, 6, 10], "considera\u00e7\u00f5": 1, "podemo": [1, 2, 9, 11], "expressar": 1, "p_": 1, "quantifica": 1, "padr\u00e3o": [1, 6, 10, 11], "\u00e0": [1, 2, 4, 6, 9, 10, 11], "apesar": 1, "origin": [1, 9], "partindo": 1, "desenvolvemo": [1, 4], "int_": 1, "dx": 1, "desenvolvimento": [1, 10, 11], "acima": [1, 2], "mostra": [1, 6], "m\u00ednimo": [1, 4, 11], "garantir": [1, 11], "quando": [1, 9, 11], "in\u03c9_": 1, "fato": [1, 11], "mover": 1, "_": [1, 2, 4, 6, 9, 11], "0": [1, 2, 4, 6, 8, 9, 11], "conform": [1, 2, 6, 11], "apresentada": [1, 2, 6, 9, 11], "verifica": [1, 2], "associada": 1, "tem": [1, 10, 11], "\u00e1rea": [1, 10], "aumentada": 1, "no\u00e7\u00e3o": [1, 2], "altera\u00e7\u00e3o": [1, 11], "baseado": [1, 9, 11], "voltamo": 1, "espa\u00e7o": [1, 2, 4, 9, 11], "est\u00e1": [1, 2, 9, 10], "associado": [1, 4, 6, 9, 11], "neq": 1, "ainda": [1, 2, 9, 11], "partir": [1, 11], "apresentado": [1, 9, 11], "poss\u00edvel": [1, 2, 6, 9, 11], "associar": 1, "risco": 1, "cada": [1, 2, 6, 9, 10, 11], "tomada": 1, "caso": [1, 2, 6, 9, 11], "englobam": 1, "quest\u00f5": 1, "exemplo": [1, 2, 11], "impacto": 1, "causado": 1, "apresenta": [1, 9, 11], "maior": [1, 2, 6, 9, 11], "relev\u00e2ncia": 1, "decidir": 1, "alternativa": [1, 4, 11], "nest": [1, 2, 11], "atributo": [1, 2, 9, 10], "induz": [1, 9], "admitindo": [1, 2], "\u03bb_": [1, 11], "ki": 1, "penalidadd": 1, "perda": 1, "relacionada": [1, 11], "escolha": [1, 9], "equivocada": 1, "op\u00e7\u00e3o": 1, "correta": 1, "seria": 1, "optar": 1, "k": [1, 9], "conceito": [1, 2, 4, 10], "jk": 1, "quantidad": [1, 11], "vista": 1, "geom\u00e9trico": [1, 2], "proporciona": [1, 9, 11], "invadida": 1, "m\u00e9dio": 1, "toda": 1, "tomando": 1, "combina\u00e7\u00e3o": [1, 2, 5, 11], "linear": [1, 4, 5, 9], "pleo": [1, 11], "propaga\u00e7\u00e3o": 1, "fazendo": [1, 9], "l_": [1, 11], "temo": [1, 9], "manipula\u00e7\u00e3o": 1, "alg\u00e9brica": 1, "realizada": [1, 9, 11], "reinterpreta\u00e7\u00e3o": 1, "dessa": [1, 6, 10, 11], "concluir": [1, 2, 11], "mai": [1, 2, 6, 10, 11], "inimiza\u00e7\u00e3o": 1, "alcan\u00e7ada": [1, 9], "estabelec": 1, "vale": [1, 9, 11], "observar": [1, 2, 4, 9, 11], "classificar": [1, 11], "deveria": 1, "logo": [1, 11], "buscamo": 1, "n\u00e3o": [1, 2, 5, 6], "confundir": 1, "demai": [1, 6], "sem": 1, "generalidad": 1, "bin\u00e1rio": [1, 6], "11": [1, 6, 11], "21": [1, 11], "12": [1, 6, 11], "22": 1, "optando": 1, "desd": [1, 2, 9, 10], "estabelecida": [1, 9], "raz\u00e3o": 1, "an\u00e1logo": 1, "obtida": [1, 6, 9, 11], "condi\u00e7\u00e3o": [1, 9], "tempo": 1, "simplificando": 1, "assumindo": 1, "h\u00e1": [1, 9], "penalidad": [1, 11], "esta": [1, 2, 9, 11], "esperada": 1, "ij": 1, "tra\u00e7ar": 1, "cabe": [1, 2, 9, 11], "notar": [1, 2, 9], "desenvolvida": 1, "recaem": 1, "minimiza\u00e7\u00e3o": [1, 4, 9, 11], "abordado": [1, 2, 11], "anteriorment": [1, 11], "lado": [1, 2, 6, 9, 11], "efeito": 1, "colater": 1, "tend\u00eancia": 1, "compara\u00e7\u00e3o": [1, 9, 11], "naturalment": 1, "passo": [1, 9, 11], "diferen\u00e7a": [1, 2], "aumenta": 1, "tendenciosidad": 1, "revelada": 1, "compartilham": 2, "de": [2, 4, 5, 6, 9], "separa\u00e7\u00e3o": [2, 6, 9, 11], "fun\u00e7\u00f5": [2, 9, 11], "discriminant": [2, 9, 11], "coeficient": 2, "peso": [2, 9], "caracter\u00edstica": [2, 10, 11], "determina\u00e7\u00e3o": [2, 11], "dess": [2, 11], "m\u00e9todo": [2, 4, 5, 6, 9, 11], "encontrado": [2, 11], "literatura": 2, "segu": 2, "particularm": 2, "por\u00e9m": [2, 9], "final": [2, 6, 9], "alcan\u00e7ar": 2, "melhor": [2, 10], "configura\u00e7\u00e3o": [2, 9], "destacar": [2, 11], "part": [2, 9], "aqui": 2, "abrem": 2, "caminho": 2, "formaliza\u00e7\u00e3o": 2, "determinado": [2, 6, 10, 11], "da": [2, 5, 6, 9, 10, 11], "simplista": 2, "definir": [2, 11], "discrimina\u00e7\u00e3o": 2, "abrangida": 2, "pelo": [2, 4, 6, 9, 11], "seja": [2, 9, 11], "conduzida": 2, "superf\u00edci": [2, 4, 6, 9, 11], "decis\u00e3o": [2, 4, 5, 6, 9, 11], "consist": [2, 9, 11], "lugar": 2, "nula": [2, 9, 11], "geralement": 2, "g": [2, 6, 9, 11], "w": [2, 4, 9, 11], "\ud835\udf14_": [2, 9, 11], "tag": [2, 4, 9, 11], "1": [2, 4, 5, 6, 8, 9], "chi": 2, "expans\u00e3o": 2, "gera": [2, 4], "correspond": [2, 11], "produto": [2, 11], "interno": [2, 11], "exibir": 2, "determinada": [2, 6], "rela\u00e7\u00f5": [2, 11], "relevant": 2, "respeito": [2, 11], "gerada": [2, 6], "considerar": 2, "intuito": [2, 11], "refor\u00e7ar": 2, "apoia": 2, "discuss\u00e3o": 2, "mencionado": 2, "subconjunto": 2, "vetor": [2, 4, 9, 10], "tomar": 2, "verificamo": 2, "levando": 2, "ortogon": 2, "poi": [2, 6, 9], "determina": [2, 11], "reta": [2, 9, 11], "ortogonalidad": 2, "decorr": [2, 11], "nulo": [2, 9], "considerando": 2, "agora": 2, "3": [2, 5, 6, 9], "31": 2, "4": [2, 5, 8, 9], "42": [2, 11], "tamb\u00e9m": [2, 10], "ocupam": [2, 11], "salvo": 2, "detalh": [2, 11], "interceptam": 2, "primeiro": [2, 11], "eixo": 2, "respectivament": [2, 4, 9], "isso": [2, 11], "rightarrow": 2, "ess": [2, 9, 10, 11], "resultado": [2, 4, 9, 10, 11], "nos": [2, 4, 9, 10, 11], "permit": 2, "dist\u00e2ncia": [2, 6, 11], "origem": 2, "equival": [2, 9, 11], "base": [2, 4, 9, 10], "mesmo": [2, 6, 9, 10, 11], "m\u00f3dulo": 2, "al\u00e9m": [2, 11], "extrema": 2, "import\u00e2ncia": 2, "retorno": [2, 9], "gerado": 2, "qualquer": [2, 11], "afastado": 2, "sentido": 2, "form": 2, "similar": [2, 4, 9, 11], "indica": 2, "extremidad": 2, "possui": [2, 10, 11], "oposto": 2, "observa\u00e7\u00e3o": [2, 9], "sinal": [2, 11], "caracteriza": [2, 9], "usualment": [2, 6], "left": [2, 9, 11], "matrix": [2, 9, 11], "right": [2, 9, 11], "acordo": [2, 6, 9, 11], "distin\u00e7\u00e3o": 2, "soment": [2, 9], "aplicabilidad": 2, "desta": [2, 4, 9, 11], "abordagem": [2, 4], "abrangem": [2, 6, 9], "exig": 2, "uso": [2, 4, 6, 9, 11], "estrat\u00e9gia": [2, 4, 6, 9, 11], "ser\u00e3o": [2, 10, 11], "adiant": 2, "nesta": [2, 4, 9, 11], "breve": [2, 5], "introdu\u00e7\u00e3o": [2, 5], "grand": [2, 11], "conceitu": 2, "existent": 2, "classifia\u00e7\u00e3o": 2, "baseada": [2, 6], "teoria": [2, 5], "bay": [2, 5], "simplicidad": [2, 11], "facilidad": 2, "tratamento": [2, 10, 11], "computacion": 2, "tornam": [2, 11], "atrativo": 2, "ant": [2, 9], "prosseguir": 2, "estudo": [2, 10], "important": [2, 4, 11], "destacarmo": 2, "linearment": 2, "separ\u00e1vei": 2, "definido": [2, 6, 11], "estruturado": 2, "equivalent": [2, 4, 11], "separ\u00e1vel": [2, 9, 11], "obter": 2, "meno": 2, "distinguia": 2, "tipo": [2, 6, 10, 11], "objeto": [2, 10, 11], "sejam": [2, 9, 10, 11], "antem\u00e3o": 2, "capacidad": [2, 11], "propriedad": 2, "serem": 2, "classificado": [2, 6, 11], "si": [2, 6], "separabilidad": [2, 9, 11], "garantida": 2, "exist\u00eancia": [2, 11], "capaz": [2, 6, 9, 11], "particionar": 2, "distinta": 2, "garantido": 2, "classificador": [4, 5, 6, 11], "modelada": 4, "sse": 4, "sum": 4, "squar": 4, "error": 4, "an\u00e1loga": 4, "perceptron": 4, "iniciamo": 4, "suposi\u00e7\u00e3o": [4, 9, 11], "disponibilidad": 4, "d": [4, 9, 11], "y_": [4, 9, 11], "time": [4, 9], "y": [4, 9, 11], "m": [4, 9, 11], "aprendizado": [4, 9, 10, 11], "verificado": [4, 9], "retornado": 4, "parametriza": 4, "8": [4, 11], "sabendo": 4, "leva": [4, 11], "cujo": [4, 10, 11], "proporcionado": 4, "9": [4, 11], "prorpociona": 4, "matriz": [4, 10], "quadrada": 4, "assim": [4, 10, 11], "denominado": [4, 11], "10": [4, 8, 9, 11], "t\u00e9cnica": [4, 10], "implica": [4, 9, 11], "algoritmo": [4, 9, 10, 11], "relaxamento": [4, 9], "implementa\u00e7\u00e3o": [4, 9, 11], "def": [4, 9], "dim": [4, 9], "shape": [4, 9], "dimens\u00e3o": [4, 9, 11], "np": [4, 8, 9, 11], "zero": [4, 9], "estendido": [4, 9], "definindo": 4, "1x": 4, "xi": [4, 9, 11], "yi": [4, 9], "zip": [4, 9], "asmatrix": 4, "hstack": [4, 9], "dot": [4, 9], "linalg": [4, 9], "inv": 4, "inversa": 4, "return": [4, 9], "resumo": 5, "trata": 5, "livro": 5, "reconhecimento": [5, 11], "cap\u00edtulo": 5, "5": [5, 8, 9], "agrupamento": 5, "formaliza\u00e7\u00f5": 6, "se\u00e7\u00f5": [6, 11], "realizado": [6, 11], "pr\u00e1tico": 6, "contornar": [6, 11], "situa\u00e7\u00e3o": 6, "existem": [6, 10], "decomp\u00f5em": 6, "subproblema": 6, "reformulam": 6, "decomposi\u00e7\u00e3o": 6, "intuitiva": 6, "diferent": [6, 9, 10, 11], "proposta": [6, 9], "ideia": [6, 11], "versu": 6, "restant": 6, "One": 6, "rest": 6, "ovr": 6, "ovo": 6, "comun": 6, "supondo": 6, "envolv": [6, 9], "respons\u00e1vel": [6, 9, 11], "espec\u00edfica": [6, 10], "\u00e0s": [6, 11], "discrimin\u00e1": 6, "lo": [6, 11], "corretament": 6, "proporcionar": [6, 11], "ou": [6, 9, 10, 11], "hiperplano": [6, 11], "foi": [6, 9], "discutido": [6, 9, 11], "asuperf\u00edci": 6, "considera\u00e7\u00e3o": 6, "envolvendo": [6, 11], "combina\u00e7\u00f5": 6, "elemento": [6, 9, 10, 11], "tomado": 6, "dele": 6, "par": [6, 11], "maneira": 6, "mesma": [6, 11], "diversa": [6, 10], "veze": 6, "frequ\u00eancia": [6, 11], "observada": 6, "el": [6, 11], "circ": [6, 11], "nota\u00e7\u00e3o": [6, 9, 11], "g_": [6, 11], "defin": 6, "realiza": [6, 9], "conjuto": 6, "composta": [6, 9], "devido": [6, 11], "perpendicular": 6, "embora": [6, 11], "apresent": 6, "quanto": [6, 11], "perten\u00e7a": 6, "determinar": [6, 11], "est": [6, 9, 10, 11], "novament": 6, "tr\u00ea": 6, "analisado": 6, "aplica\u00e7\u00e3o": [6, 11], "aplicar": [6, 10], "utilizando": [6, 9, 10], "svm": 6, "basta": 6, "inclus\u00e3o": 6, "decision_function_shap": 6, "durant": [6, 9, 11], "instancia\u00e7\u00e3o": [6, 11], "you": 8, "can": 8, "also": 8, "creat": 8, "jupyt": 8, "thi": 8, "mean": [8, 11], "includ": 8, "your": 8, "book": 8, "As": [8, 9, 10, 11], "emb": 8, "imag": 8, "html": 8, "etc": [8, 10], "post": 8, "add_": 8, "math": 8, "align": 8, "mbox": 8, "la_": 8, "tex": 8, "But": 8, "make": 8, "sure": 8, "escap": 8, "dollar": 8, "sign": 8, "want": 8, "keep": 8, "work": 8, "well": 8, "For": 8, "more": 8, "inform": 8, "about": 8, "check": 8, "out": 8, "guid": 8, "see": 8, "document": 8, "exampl": 8, "here": 8, "s": [8, 9], "some": 8, "sampl": 8, "matplotlib": 8, "from": [8, 11], "import": [8, 9, 11], "rcparam": 8, "cycler": 8, "pyplot": 8, "plt": 8, "numpi": [8, 9, 11], "ion": 8, "contextlib": 8, "exitstack": 8, "0x2169e01f410": 8, "fix": 8, "random": [8, 9], "state": 8, "reproduc": 8, "seed": 8, "19680801": 8, "data": [8, 11], "logspac": 8, "100": [8, 11], "randn": 8, "ii": [8, 9, 11], "rang": 8, "arrai": 8, "cmap": 8, "cm": 8, "coolwarm": 8, "ax": 8, "prop_cycl": 8, "color": 8, "linspac": 8, "line": 8, "line2d": 8, "custom_lin": 8, "lw": 8, "fig": 8, "subplot": 8, "figsiz": 8, "plot": 8, "legend": 8, "cold": 8, "medium": 8, "hot": 8, "There": 8, "lot": 8, "interact": 8, "representa\u00e7\u00e3o": [9, 10, 11], "inspirada": 9, "modelo": [9, 11], "neur\u00f4nio": 9, "proposto": [9, 10], "warren": 9, "mcculloch": 9, "walter": 9, "pitt": 9, "1943": 9, "ilustrada": 9, "cico": 9, "b\u00e1sico": 9, "esquerda": [9, 11], "camada": 9, "receptor": 9, "respons\u00e1vei": [9, 11], "receb": 9, "informa\u00e7\u00f5": [9, 10], "sin\u00e1ptica": 9, "conex\u00f5": 9, "pondera": 9, "entrada": 9, "w_": [9, 11], "iii": [9, 11], "constant": [9, 10], "igual": [9, 11], "ponderada": 9, "iv": 9, "n\u00facleo": 9, "concentrador": 9, "soma": [9, 11], "di": 9, "sinai": [9, 11], "campo": 9, "sin\u00e1ptico": 9, "repassa": 9, "v": [9, 11], "ativa\u00e7\u00e3o": 9, "gerar": 9, "resposta": 9, "introduzido": [9, 11], "formalizado": 9, "conhecido": 9, "exclusimament": 9, "fin": 9, "simplica\u00e7\u00e3o": 9, "consideremo": 9, "ser\u00e1": [9, 10, 11], "conduzido": 9, "isto": [9, 11], "\u03c7": 9, "subseteq": 9, "reduzida": 9, "nessa": [9, 10, 11], "condi\u00e7\u00f5": [9, 11], "busca": [9, 10, 11], "solu\u00e7\u00e3o": [9, 11], "alcan\u00e7anda": 9, "\u03b4": 9, "contr\u00e1rio": [9, 11], "atua": [9, 11], "penalizadora": 9, "treinamento": [9, 11], "pena": 9, "par\u00e2metro": 9, "atual": 9, "consequentement": 9, "teremo": 9, "obtivemo": 9, "nenhuma": 9, "penaliza\u00e7\u00e3o": 9, "gradient": [9, 11], "descendent": 9, "iterativa": 9, "atualiza\u00e7\u00f5": 9, "sucessiva": 9, "denotando": 9, "\u00e9sima": 9, "aproxima\u00e7\u00e3o": 9, "\u03b7_": 9, "partial": [9, 11], "fator": [9, 11], "corre\u00e7\u00e3o": 9, "controla": 9, "atualiza\u00e7\u00e3o": 9, "component": 9, "podem": [9, 10, 11], "inicializado": 9, "aleat\u00f3ria": 9, "reescrita": [9, 11], "6": 9, "ap\u00f3": [9, 10, 11], "finito": 9, "itera\u00e7\u00f5": 9, "algortimo": 9, "deve": [9, 11], "convergir": 9, "ressaltar": [9, 11], "converg\u00eancia": 9, "ocorrer\u00e1": 9, "sequ\u00eancia": 9, "lim_": 9, "usual": 9, "respeita": 9, "apontada": 9, "z": 9, "consequ\u00eancia": [9, 11], "comportamento": [9, 11], "cdot": 9, "configura\u00e7\u00f5": 9, "pare": 9, "central": 9, "proporcionem": 9, "longo": [9, 11], "identificada": 9, "ton": 9, "claro": 9, "gr\u00e1fico": 9, "observado": [9, 10, 11], "movimento": 9, "dire\u00e7\u00e3o": 9, "direita": [9, 11], "ajust": [9, 10, 11], "se\u00e7\u00e3o": [9, 11], "c\u00f3digo": [9, 11], "verificada": 9, "outra": [9, 10, 11], "eta": 9, "_updat": 9, "delta": 9, "_check": 9, "taxa": 9, "obtido": [9, 11], "predi\u00e7\u00e3o": [9, 11], "indicador": [9, 11], "efetuada": [9, 10], "predictor": 9, "_perceptron": 9, "contida": 9, "importa\u00e7\u00f5": 9, "contador": 9, "itera\u00e7\u00e3o": 9, "usado": [9, 11], "inicializa": 9, "aleatoriament": 9, "normal": 9, "distribui\u00e7\u00e3o": 9, "inicializa\u00e7\u00e3o": [9, 11], "eta_upd": 9, "while": 9, "true": 9, "contabiliza": 9, "desvio": 9, "errado": 9, "count": 9, "conta": 9, "delta_check": 9, "vari\u00e1vei": [9, 11], "w0": 9, "copi": 9, "faz": 9, "c\u00f3pia": 9, "atualiza": 9, "reinicia": 9, "convirja": 9, "for\u00e7a": 9, "norm": 9, "break": 9, "obtev": 9, "express\u00e3o": [9, 11], "usada": 9, "utiliza\u00e7\u00e3o": [9, 11], "verifica\u00e7\u00e3o": [9, 11], "acerto": 9, "respectiva": [9, 11], "penaiza\u00e7\u00e3o": 9, "perceptron_predict": 9, "els": 9, "diant": [9, 11], "verificar": 9, "guiada": 9, "todo": 9, "variant": 9, "formula\u00e7\u00e3o": [9, 10], "7": [9, 11], "parametriza\u00e7\u00e3o": 9, "representada": 9, "identifica": 9, "parcela": [9, 11], "sucessivament": 9, "ciclo": 9, "adotado": [9, 11], "crit\u00e9rio": 9, "analogament": 9, "obten\u00e7\u00e3o": [9, 11], "atualizado": 9, "vers\u00e3o": 9, "nota": 9, "menor": 9, "exigida": 9, "concentra\u00e7\u00e3o": 9, "testada": 9, "linha": [9, 11], "clara": 9, "fina": 9, "v\u00e1lido": 9, "estar": 9, "relacionado": [9, 10], "disposi\u00e7\u00e3o": 9, "sequenciai": 9, "apesarda": 9, "inici": 9, "constru\u00eddo": 9, "toler\u00e2ncia": 9, "adotada": [9, 11], "at\u00e9": [9, 10], "atingida": 9, "etapa": [9, 10, 11], "q": 9, "m\u00e1ximo": 9, "repita": 9, "apliqu": 9, "ent\u00e3o": [9, 11], "desempenho": [9, 10], "mostrada": 9, "termina": 9, "atingir": 9, "acur\u00e1cia": [9, 10, 11], "test": 9, "efetuado": 9, "rog\u00e9rio": 10, "negri": 10, "pesquisa": 10, "foco": 10, "persist": 10, "car\u00e1ter": 10, "multidisciplinar": 10, "especialment": 10, "dentro": 10, "inform\u00e1tica": 10, "fazem": 10, "interfac": 10, "estat\u00edstica": 10, "engenharia": 10, "intelig\u00eancia": 10, "artifici": 10, "ci\u00eancia": 10, "computa\u00e7\u00e3o": 10, "minera\u00e7\u00e3o": 10, "fort": 10, "correla\u00e7\u00e3o": 10, "m\u00e1quina": 10, "conhecimento": 10, "bastant": 10, "abrangent": 10, "\u00faltimo": 10, "ano": [10, 11], "coleta": 10, "interpreta\u00e7\u00e3o": 10, "utilizado": 10, "intimament": 10, "ligada": 10, "sensor": 10, "medi\u00e7\u00f5": 10, "coletado": 10, "representado": 10, "planilha": 10, "saiba": 10, "atualment": 10, "diverso": 10, "site": 10, "disponibilizam": 10, "aplica\u00e7\u00f5": [10, 11], "fundament": 10, "contendo": 10, "descrevem": 10, "foram": 10, "previament": 10, "poss": 10, "associa\u00e7\u00f5": 10, "grupo": 10, "associa\u00e7\u00e3o": 10, "chamada": 10, "tenham": 10, "bom": 10, "necess\u00e1rio": 10, "tratado": 10, "representar": 10, "eficient": 10, "descartando": 10, "redundant": 10, "desnecess\u00e1ria": 10, "acentuando": 10, "determinant": 10, "extra\u00eddo": 10, "avalia\u00e7\u00e3o": 10, "n\u00edvei": 10, "mensurado": 10, "nova": [10, 11], "melhorar": 10, "otimiza\u00e7\u00e3o": 10, "consistem": 10, "selecionar": 10, "adquirido": 10, "aquel": [10, 11], "produzem": 10, "portanto": 10, "dirigido": 10, "exercitar": 10, "principai": 10, "devem": [10, 11], "documentada": 10, "descrita": 10, "formato": 10, "roteiro": 10, "experiment": 10, "execu\u00e7\u00e3o": 10, "trabalhado": 10, "feita": 10, "python": 10, "biblioteca": [10, 11], "aprendizagem": 10, "support": 11, "vector": 11, "machin": 11, "supervisionado": 11, "regress\u00e3o": 11, "popular": 11, "ampla": 11, "variedad": 11, "incluindo": 11, "imagen": 11, "texto": 11, "processamento": 11, "funciona": 11, "encontrando": 11, "separa": 11, "escolhido": 11, "maximizar": 11, "margem": 11, "pr\u00f3ximo": 11, "encontrar": 11, "m\u00e1xima": 11, "usa": 11, "minimiza": 11, "escolhida": 11, "esteja": 11, "suficientement": 11, "separado": 11, "diretament": 11, "usando": 11, "programa\u00e7\u00e3o": 11, "kernel": 11, "transformar": 11, "seguir": 11, "disso": 11, "quest\u00e3o": 11, "dest": 11, "distingu": 11, "discutida": 11, "exemplificada": 11, "refer": 11, "troca": 11, "termo": 11, "significado": 11, "sofr": 11, "ambo": 11, "separar": 11, "adequadament": 11, "manter": 11, "novo": 11, "considerado": 11, "generaliza\u00e7\u00e3o": 11, "efetuar": 11, "g2": 11, "calculada": 11, "reescalonando": 11, "u": 11, "contido": 11, "caracterizado": 11, "estejam": 11, "distant": 11, "unidad": 11, "largura": 11, "geq": 11, "leq": 11, "modelado": 11, "par\u00e3metro": 11, "proporcionam": 11, "min_": 11, "sujeito": 11, "defini\u00e7\u00e3o": 11, "respectivo": 11, "inidicador": 11, "constituem": 11, "restri\u00e7\u00e3o": 11, "obriga": 11, "aplicada": 11, "concordant": 11, "resultando": 11, "multiplica\u00e7\u00e3o": 11, "superior": 11, "geom\u00e9trica": 11, "respeitar": 11, "localizado": 11, "limit": 11, "pm": 11, "\u00f3timo": 11, "circulado": 11, "convexa": 11, "restri\u00e7\u00f5": 11, "convenient": 11, "resolv\u00ea": 11, "multiplicador": 11, "lagrang": 11, "inicialment": 11, "constru\u00edda": 11, "lagrangeana": 11, "formada": 11, "multiplicada": 11, "escalar": 11, "negativo": 11, "primal": 11, "\u03bb": 11, "sela": 11, "minimizada": 11, "m\u00e1ximizada": 11, "derivada": 11, "conseguint": 11, "surgem": 11, "13": 11, "14": 11, "substituindo": 11, "obt\u00e9m": 11, "dual": 11, "15": 11, "elimina\u00e7a\u00f5": 11, "resolu\u00e7\u00e3o": 11, "max_": 11, "lambda": 11, "lambda_": 11, "16": 11, "permitem": 11, "definem": 11, "calculado": 11, "substitui\u00e7\u00e3o": 11, "classifica": 11, "17": 11, "fundamentamentado": 11, "entant": 11, "natur": 11, "inserida": 11, "folga": 11, "sempr": 11, "verdadeira": 11, "xi_": 11, "geometricament": 11, "respresentam": 11, "deslocamento": 11, "erroneament": 11, "encontram": 11, "referent": 11, "incorporar": 11, "adicion": 11, "contabilizar": 11, "penalizar": 11, "classifica\u00e7\u00f5": 11, "incorreta": 11, "regulador": 11, "proporcionada": 11, "reformula\u00e7\u00e3o": 11, "18": 11, "exepressa": 11, "\ud835\udf0c_": 11, "19": 11, "\ud835\udf0c": 11, "inserido": 11, "positividad": 11, "seguindo": 11, "procedimento": 11, "subse\u00e7\u00e3o": 11, "deriva\u00e7\u00f5": 11, "produz": 11, "deriva\u00e7\u00e3o": 11, "fornec": 11, "20": 11, "estritament": 11, "positivo": 11, "conclu\u00edmo": 11, "devida": 11, "substitui\u00e7\u00f5": 11, "id\u00eantica": 11, "formulado": 11, "difer": 11, "alcan\u00e7ado": 11, "primeira": 11, "adotando": 11, "vari\u00e1vel": 11, "visualizar": 11, "comparada": 11, "encontra": 11, "afastada": 11, "transi\u00e7\u00e3o": 11, "diferentement": 11, "especi": 11, "tanto": 11, "dificuldad": 11, "estrutura\u00e7\u00e3o": 11, "disponibilizada": 11, "scikit": 11, "learn": 11, "conter": 11, "inclui": 11, "funcionalidad": 11, "abordada": 11, "t\u00f3pico": 11, "seguem": 11, "exib": 11, "comando": 11, "contemplam": 11, "seguido": 11, "referem": 11, "implicando": 11, "present": 11, "substitu\u00eddo": 11, "importa\u00e7\u00e3o": 11, "sklearn": 11, "dataset": 11, "iri": 11, "model_select": 11, "train_test_split": 11, "divid": 11, "valida\u00e7\u00e3o": 11, "load_iri": 11, "selecionando": 11, "target": 11, "divis\u00e3o": 11, "treino": 11, "x_train": 11, "x_test": 11, "y_train": 11, "y_test": 11, "test_siz": 11, "33": 11, "random_st": 11, "svc": 11, "fit": 11, "pred": 11, "predict": 11, "acc": 11, "round": 11, "print": 11, "emprego": 11, "obsercado": 11, "muita": 11, "instancia\u00e7\u00e3": 11, "criado": 11, "relativo": 11, "efetua": 11, "rotula\u00e7\u00e3o": 11, "elementar": 11, "maioria": 11, "implementado": 11, "munido": 11, "estrutura": 11, "sugerida": 11, "leitura": 11, "guia": 11, "usu\u00e1rio": 11, "certa": 11, "vantagen": 11, "citar": 11, "descenedent": 11, "distribui\u00e7\u00f5": 11, "sens\u00edvel": 11, "conduzir": 11, "sub\u00f3timo": 11, "locai": 11, "quadr\u00e1tico": 11, "convexo": 11, "solu\u00e7\u00f5": 11, "\u00fanica": 11, "explica": 11, "explicitament": 11, "fragilidad": 11, "decorrent": 11, "cresc": 11, "quadraticament": 11, "cr\u00edtico": 11, "motivado": 11, "aprimoramento": 11, "otimizar": 11, "destinado": 11, "prop\u00f3sito": 11, "sequenti": 11, "minim": 11, "optim": 11, "smo": 11, "light": 11, "chunck": 11, "libsvm": 11, "ado\u00e7\u00e3o": 11, "minimizam": 11, "prejudicar": 11, "proporcionando": 11, "insatisfat\u00f3rio": 11, "coadjuvant": 11, "informa\u00e7\u00e3o": 11, "decisivo": 11}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"cap\u00edtulo": [0, 1, 2, 3, 7], "5": [0, 6], "m\u00e9todo": 0, "de": [0, 1, 3, 10, 11], "agrupamento": 0, "1": [1, 11], "teoria": 1, "da": 1, "decis\u00e3o": 1, "bay": 1, "2": [2, 4, 6, 9, 11], "classificador": [2, 3, 7], "linear": [2, 7, 11], "e": [2, 11], "problema": 2, "4": [3, 11], "combina\u00e7\u00e3o": 3, "3": [4, 7, 11], "estimativa": 4, "baseada": [4, 11], "na": 4, "soma": 4, "do": 4, "erro": 4, "quadr\u00e1tico": 4, "p\u00e1gina": 5, "inici": 5, "estrat\u00e9tegia": 6, "multiclass": 6, "n\u00e3o": [7, 9, 11], "content": 8, "notebook": 8, "markdown": 8, "myst": 8, "code": 8, "block": 8, "output": 8, "perceptron": 9, "sequenci": 9, "aplica\u00e7\u00e3o": 9, "sobr": 9, "dado": 9, "linearment": [9, 11], "separ\u00e1vei": [9, 11], "introdu\u00e7\u00e3o": 10, "ao": 10, "reconhecimento": 10, "padr\u00f5": [10, 11], "m\u00e1quina": 11, "vetor": 11, "suport": 11, "svm": 11, "vers\u00e3o": 11, "formaliza\u00e7\u00e3o": 11, "em": 11, "otimiza\u00e7\u00e3o": 11, "quadr\u00e1tica": 11, "par\u00e2metro": 11, "o": 11, "custo": 11, "computacion": 11}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})