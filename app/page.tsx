'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, ChevronDown, ChevronUp, Menu, X } from 'lucide-react'

const testimonies = [
    {
        place: `Israele e Palestina`,
        title: `Layla Alsheikh e Robi Damelin`,
        text: `
        Layla Alsheikh, palestinese, e Robi Damelin, israeliana, hanno entrambe perso un figlio a causa del conflitto. 
        Attraverso Parents Circle – Families Forum, un'organizzazione che riunisce famiglie israeliane e palestinesi colpite dalla perdita di persone care, 
        testimoniano come il dialogo possa contribuire a interrompere il ciclo dell'odio e della vendetta.
        `,
        detail: `
        Layla Alsheikh e Robi Damelin provengono da due comunità contrapposte, ma condividono la stessa esperienza: 
        la perdita di un figlio a causa del conflitto israelo-palestinese. Entrambe fanno parte di Parents Circle – Families Forum (PCFF), 
        un'organizzazione che riunisce oltre 800 israeliani e palestinesi che hanno perso familiari stretti a causa della guerra. Attraverso l'incontro, 
        il dialogo e la riconciliazione, l'organizzazione cerca di dimostrare che è possibile spezzare il ciclo della vendetta.\n\nLayla Alsheikh racconta che, 
        per lei, perdonare non significa dimenticare ciò che è successo, ma allontanare l'odio e la rabbia. 
        Spiega di non aver mai pensato di vendicarsi per la morte di suo figlio: 
        ha compreso che la vendetta non può cancellare la perdita e rischia, invece, di coinvolgere altre persone innocenti nella spirale della violenza.
        \n\nRobi Damelin riflette sul significato della giustizia e sulla possibilità di rinunciare alla vendetta. 
        Si domanda se la giustizia consista necessariamente nel condannare per tutta la vita l'uomo che ha ucciso suo figlio. 
        Afferma che, se liberare quell'uomo permettesse di riportare indietro un ostaggio, per lei sarebbe importante farlo, 
        mettendo al centro la sacralità della vita umana. La sua testimonianza sottolinea che il perdono non cancella il dolore, 
        ma richiede di trovare prima la pace con sé stessi.
        `
    },

    {
        place: 'Siria',
        title: 'Memorie in sospensione',
        text: '[Inserire qui l’estratto autentico della testimonianza.]',
        detail: '[Inserire qui il testo completo, la fonte e il contesto della testimonianza.]'
    },

    {
        place: 'Libano',
        title: 'Tra ciò che resta',
        text: '[Inserire qui l’estratto autentico della testimonianza.]',
        detail: '[Inserire qui il testo completo, la fonte e il contesto della testimonianza.]'
    },

    {
        place: 'Haiti',
        title: 'Raccontare la resilienza',
        text: '[Inserire qui l’estratto autentico della testimonianza.]',
        detail: '[Inserire qui il testo completo, la fonte e il contesto della testimonianza.]'
    },

    {
        place: 'Colombia',
        title: 'La pace come percorso',
        text: '[Inserire qui l’estratto autentico della testimonianza.]',
        detail: '[Inserire qui il testo completo, la fonte e il contesto della testimonianza.]'
    },

    {
        place: 'Ruanda',
        title: 'Una memoria condivisa',
        text: '[Inserire qui l’estratto autentico della testimonianza.]',
        detail: '[Inserire qui il testo completo, la fonte e il contesto della testimonianza.]'
    },

    {
        place: 'Myanmar',
        title: 'Oltre il silenzio',
        text: '[Inserire qui l’estratto autentico della testimonianza.]',
        detail: '[Inserire qui il testo completo, la fonte e il contesto della testimonianza.]'
    },

    {
        place: 'Ucraina',
        title: 'Vite attraverso il confine',
        text: '[Inserire qui l’estratto autentico della testimonianza.]',
        detail: '[Inserire qui il testo completo, la fonte e il contesto della testimonianza.]'
    },

    {
        place: 'Sudafrica',
        title: 'Il futuro da ricostruire',
        text: '[Inserire qui l’estratto autentico della testimonianza.]',
        detail: '[Inserire qui il testo completo, la fonte e il contesto della testimonianza.]'
    },
]

const gallery = [
    { src: '/images/peace-reportage-hero.png', alt: 'Spazio museale che ospita la mostra', caption: 'Fotografia principale — sostituire con uno scatto della visita.' },
    { src: '/images/peace-reportage-hero.png', alt: 'Dettaglio dell’allestimento della mostra', caption: 'Dettaglio dell’allestimento — immagine segnaposto.' },
    { src: '/images/peace-reportage-hero.png', alt: 'Una sala del museo di Piazza Università', caption: 'Gli spazi dell’incontro — immagine segnaposto.' },
    { src: '/images/peace-reportage-hero.png', alt: 'Materiali esposti durante la visita', caption: 'Materiali della mostra — immagine segnaposto.' },
]

export default function Page() {
    const [openCard, setOpenCard] = useState<number | null>(null)
    const [menuOpen, setMenuOpen] = useState(false)
    const [lightbox, setLightbox] = useState<number | null>(null)
    const lastFocus = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') { setLightbox(null); setMenuOpen(false) }
        }
        document.addEventListener('keydown', onKeyDown)
        document.body.style.overflow = lightbox !== null ? 'hidden' : ''
        return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
    }, [lightbox])

    const openImage = (index: number, element: HTMLElement) => { lastFocus.current = element; setLightbox(index) }
    const closeImage = () => { setLightbox(null); requestAnimationFrame(() => lastFocus.current?.focus()) }

    return (
        <div className="site-shell">
            <a className="skip-link" href="#contenuto">Vai al contenuto</a>
            <header className="site-header">
                <a className="wordmark" href="#inizio">Profezie <span>per la Pace</span></a>
                <p className="header-kicker">Reportage <i>·</i> Educazione civica <i>·</i> Mirko Andò 5C IIS Marconi-Mangano 2026</p>
                <button className="menu-button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() =>
                    setMenuOpen(!menuOpen)}>
                    {menuOpen ?
                        <X size={18} /> :
                        <Menu size={18} />} <span>Indice</span>
                </button>
                <nav id="site-nav" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Indice dell’articolo">
                    <a href="#introduzione" onClick={() => setMenuOpen(false)}>01 Introduzione</a>
                    <a href="#luogo" onClick={() => setMenuOpen(false)}>02 Il luogo</a>
                    <a href="#racconto" onClick={() => setMenuOpen(false)}>03 La visita</a>
                    <a href="#testimonianze" onClick={() => setMenuOpen(false)}>04 Testimonianze</a>
                    <a href="#galleria" onClick={() => setMenuOpen(false)}>05 Galleria</a>
                    <a href="#valutazione" onClick={() => setMenuOpen(false)}>06 Valutazione</a>
                    <a href="#conclusione" onClick={() => setMenuOpen(false)}>07 Conclusione</a>
                </nav>
            </header>

            <main id="contenuto">
                <article>
                    <section className="hero" id="inizio">
                        <div className="hero-copy">
                            <p className="eyebrow">Un’esperienza di educazione civica</p>
                            <h1>Profezie<br /><em>per la Pace</em></h1>
                            <p className="dek">Ascoltare il mondo attraverso le testimonianze di chi vive il conflitto.</p>
                            <p className="small-note">Reportage realizzato da Mirko Andò, <br></br>
                                Studente del 5° anno del IIS Marconi-Mangano 2026</p>
                            <div className="hero-meta"><span>23 ottobre 2026</span><span>Catania, Piazza
                                Università</span><span>Visita Offerta da: Università degli Studi di Catania</span></div>
                            <a className="scroll-cue" href="#introduzione">
                                <ArrowDown size={17} /> Inizia il racconto
                            </a>
                        </div>
                        <figure className="hero-image"><img src={gallery[0].src} alt={gallery[0].alt} fetchPriority="high" />
                            <figcaption>Immagine segnaposto — sostituire con una fotografia autentica della struttura o della
                                mostra.</figcaption>
                        </figure>
                    </section>

                    <section className="intro section-grid" id="introduzione">
                        <div className="section-label"><span>01</span><span>Introduzione</span></div>
                        <div className="section-body narrow">
                            <h2>Un incontro che<br /><em>chiede ascolto.</em></h2>
                            <p className="placeholder">[Inserire qui l’introduzione personale alla visita.]</p>
                            <p className="small-note">Questo spazio è pensato per raccontare il contesto dell’iniziativa e il
                                motivo per cui l’esperienza merita di essere condivisa.</p>
                        </div>
                    </section>

                    <section className="place section-grid" id="luogo">
                        <div className="section-label"><span>02</span><span>Il luogo</span></div>
                        <div className="section-body place-layout">
                            <div>
                                <h2>Dentro il museo,<br /><em>a Piazza Università.</em></h2>
                                <p className="placeholder">[Descrivere qui la struttura che ha ospitato la mostra e l’esperienza
                                    dei visitatori, senza aggiungere dettagli non osservati direttamente.]</p>
                            </div>
                            <figure><img src={gallery[1].src} alt={gallery[1].alt} loading="lazy" />
                                <figcaption>{gallery[1].caption}</figcaption>
                            </figure>
                        </div>
                    </section>

                    <section className="story section-grid" id="racconto">
                        <div className="section-label"><span>03</span><span>La visita</span></div>
                        <div className="section-body story-layout">
                            <div className="pull-quote">“<br /><em>Lo spazio per la voce degli altri.</em>”<small>— citazione
                                autentica da inserire</small></div>
                            <div>
                                <h2>Una classe accompagna<br />il pubblico.</h2>
                                <p className="placeholder">[Raccontare qui come gli studenti della scuola Spedalieri hanno
                                    accompagnato i visitatori attraverso la mostra.]</p>
                                <p className="placeholder">[Aggiungere le riflessioni personali nate durante la visita e gli
                                    aspetti che hanno colpito maggiormente l’autore.]</p>
                            </div>
                        </div>
                    </section>

                    <section className="testimonies" id="testimonianze">
                        <div className="testimonies-heading">
                            <div className="section-label"><span>04</span><span>Le testimonianze</span></div>
                            <div>
                                <h2>Le voci oltre<br /><em>i confini.</em></h2>
                                <p>Ogni testimonianza racconta una realtà che non può essere ridotta a un semplice dato
                                    geografico. I contenuti che seguono verranno presentati rispettando le parole, le fonti e il
                                    contesto in cui sono stati raccolti.</p>
                            </div>
                        </div>
                        <div className="testimony-grid">{testimonies.map((item, index) => {
                            const isOpen = openCard === index;
                            const panelId = `testimony-${index}`; return <article className={`testimony-card ${isOpen
                                ? 'is-open' : ''}`} key={item.place}>
                                <div className="card-top"><span className="card-number">0{index + 1}</span><span
                                    className="card-place">{item.place}</span></div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <div id={panelId} hidden={!isOpen} className="card-detail">
                                    <p>{item.detail}</p><span className="source">Fonte / attribuzione: da inserire</span>
                                </div><button className="card-button" aria-expanded={isOpen} aria-controls={panelId}
                                    onClick={() => setOpenCard(isOpen ? null : index)}>{isOpen ? <>Riduci
                                        <ChevronUp size={15} />
                                    </> : <>Leggi la testimonianza
                                        <ChevronDown size={15} />
                                    </>}</button>
                            </article>
                        })}</div>
                    </section>

                    <section className="gallery-section section-grid" id="galleria">
                        <div className="section-label"><span>05</span><span>Galleria fotografica</span></div>
                        <div className="section-body">
                            <h2>Gli spazi, i dettagli,<br /><em>l’incontro.</em></h2>
                            <p className="gallery-intro">Una raccolta di immagini della struttura, dell’allestimento e
                                dell’esperienza. Le fotografie sono predisposte per essere sostituite con materiali autentici.
                            </p>
                            <div className="gallery-grid">{gallery.map((image, index) => <figure key={image.caption}
                                className={`gallery-item gallery-${index + 1}`}><button onClick={(event) => openImage(index,
                                    event.currentTarget)} aria-label={`Ingrandisci: ${image.alt}`}><img src={image.src}
                                        alt={image.alt} loading="lazy" /></button>
                                <figcaption>{image.caption}</figcaption>
                            </figure>)}</div>
                        </div>
                    </section>

                    <section className="evaluation section-grid" id="valutazione">
                        <div className="section-label"><span>06</span><span>Valutazione personale</span></div>
                        <div className="section-body evaluation-body">
                            <h2>Quando l’educazione civica<br /><em>esce dai libri.</em></h2>
                            <p className="placeholder">[Inserire qui una valutazione personale e motivata dell’esperienza: la
                                capacità comunicativa degli studenti, la qualità della presentazione, l’efficacia delle
                                testimonianze e il valore didattico e umano della mostra.]</p>
                            <div className="rating-lines"><span>Capacità comunicativa degli studenti</span><i /><span>Qualità
                                della presentazione</span><i /><span>Valore didattico e umano</span><i /></div>
                        </div>
                    </section>

                    <section className="closing" id="conclusione">
                        <p className="eyebrow">07 — Conclusione</p>
                        <h2>Ciò che resta<br /><em>dopo l’ascolto.</em></h2>
                        <p className="placeholder">[Inserire qui il testo personale e riflessivo che chiude il reportage.]</p>
                        <div className="closing-mark">PP<span>·</span>P</div>
                    </section>
                </article>
            </main>

            <footer className="site-footer">
                <div><strong>Profezie per la Pace</strong><span>Reportage editoriale · 23 ottobre 2026</span></div>
                <div><span>Esperienza di educazione civica offerta da</span><span>Scuola Spedalieri, Catania</span></div>
                <p>Fonti, attribuzioni e crediti fotografici: [da completare con informazioni effettivamente disponibili].</p>
            </footer>

            {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Immagine ingrandita"
                onClick={(event) => { if (event.target === event.currentTarget) closeImage() }}><button
                    className="lightbox-close" onClick={closeImage} aria-label="Chiudi immagine">
                    <X size={22} />
                </button>
                <figure><img src={gallery[lightbox].src} alt={gallery[lightbox].alt} />
                    <figcaption>{gallery[lightbox].caption}</figcaption>
                </figure>
            </div>}
        </div>
    )
}
