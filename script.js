const frasi = ['Abbiamo quaranta milioni di ragioni per fallire, ma non una sola scusa. Rudyard Kipling',
'Il futuro appartiene a coloro che credono nella bellezza dei propri sogni. Eleanor Roosevelt',
'Ci sono due cose che non tornano mai indietro: una freccia scagliata e un’occasione perduta. Jim Rohn',
'Qual è il padre di qualsiasi azione? Che cosa, alla fine, determina ciò che diventiamo e dove andiamo nella vita? La risposta è: le nostre decisioni. Anthony Robbins',
'I due giorni più importanti della vita sono quello in cui sei nato e quello in cui capisci perché. Mark Twain',
'Vivere è la cosa più rara al mondo. La maggior parte della gente esiste, ecco tutto. Oscar Wilde'
]

const fraseDelGiorno = () => {
    const randomNumber = Math.floor(Math.random() * frasi.length)
    document.getElementsById("frase").innerHTML = frasi[randomNumber]
}

fraseDelGiorno();