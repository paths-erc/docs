---
title: "Manual for the correct use and reading of the codicological description of the codicological units"
permalink: "/handbook/manuscripts"
---

A detailed technical description of database schema is published at [schema/manuscripts](../schema/manuscripts).



Ref.: `paths.manuscripts`

---

### Manuscript identifiers

#### CLM
- Coptic Literary Manusctipt (CLM)identifier of the reconstructed codicological unit.
- DB id: `id`

#### CMCL
- CMCL *siglum* of the reconstructed codicological unit, where available ([www.cmcl.it](http://www.cmcl.it)).
- DB id: `cmclid`

#### TM
- Trismegistos stable identifier, where available ([www.trismegistos.org](http://www.trismegistos.org)).
- DB id: `tm`

#### LDAB
- [LDAB](http://www.trismegistos.org/ldab/) stable identifier, where available ([www.trismegistos.org/ldab](http://www.trismegistos.org/ldab)).
- DB id: `ldab`

#### LCBM
- List of Coptic Biblical Manuscripts identifier, where available (Göttingen, Digital Edition of the Sahidic Coptic Old Testament - [coptot.manuscriptroom.com/manuscript-catalog](http://coptot.manuscriptroom.com/manuscript-catalog) / Berlin, Novum Testamentum Graecum - Editio Critica Maior).
- DB id: `lcbm`

#### DBMNT
- List of Database of Medieval Nubian Texts identifier, where available ([www.dbmnt.uw.edu.pl](http://www.dbmnt.uw.edu.pl)).
- DB id: `dbmnt`

#### ALIAS
- Name *par excellence* used to identify a manuscript (i.e. Codex Tchacos).
- DB id: `alias`

#### PRESERVED IN A SINGLE FRAGMENT
- True or 1 if the manuscript is preserved in only one single fragment
- DB id: `issinglefrag`

#### ONLY BOOKBINDING PRESERVED
- True or 1 if only the bookbinding is preserved
- DB id: `isbookbinding`

#### MANUSCRIPT REUSED IN BOOKBINDING
- True or 1 if the manuscript has been reused in a bookbinding
- DB id: `reusedinbinding`

#### STRATIGRAPHY
- Brief description of the stratigraphy of the codicological unit, following the method and terminology of P. Andrist, P. Canart, M. Maniaci, *La syntaxe du codex. Essai de codicologie structurale*, Turnhout 2013 [ISBN: 9782503543932]. Particular attention is given to 'Production Units' (UniProd) and 'Circulation Units' (UniCirc).
- DB id: `stratigraphy`

#### MODERN HISTORY
- Brief description of the modern history of the original (i.e. virtually reconstructed) codicological unit and/or of the fragments in which it is composed. History of modern storage places is recorded, as well as modifications of the codicological units (e.g. unification or dismemberment). See also [Codex stratigraphy](#codex-stratigraphy).
- DB id: `modernhistory`

#### CONTENTS
- Detailed description of the sequence of the works contained in a multiple-text manuscript (Clavis Coptica = CC) or description of the content of a work that, for different reasons, at the moment cannot be associated to a CC.
- DB id: `contents`

---

### Shelfmarks
For each manuscript multiple instances of the following group of fields can be filed, each one describing a single modern fragment.

These fields are not part of the [manuscripts table](/schema/manuscript) but of the [m_shelfmarks table](/schema/m_shelfmarks).

#### COLLECTION
- Normalised full form of the collection name (country, city, institution, and collection of the fragment)
- DB id: `collection`
- **Warning**: this field is a foreign key referring [collections.id](/schema/collections) field.

#### SHELFMARK
- Identifier of the fragment within the collection
- DB id: `shelfmark`

#### F./FF.  OR P./PP.
- For dismembered manuscripts (except the White Monastery manuscripts), page or leaf range, within the modern bibliological unit. For dismembered manuscripts from the White Monastery, page or leaf range, within the codicological unit (about the concepts of bibliological and codicological units, see T. Orlandi, *Coptic Texts Relating to the Virgin Mary. An Overview*, Rome 2008, 8-9). For fully preserved manuscripts (e.g.: Phantoou manuscripts), modern foliation as stated in catalogues and/or editions. When a `%` sign occurs, it refers to portion of a single page/leaf preserved in more than one fragment.
- DB id: `pp`

---

### Dialects

#### DIALECTS/LANGUAGES
- Indication of the dialect(s) or language(s) used in the manuscript, according to the *sigla* of the *Kasser-Funk system* (see R. Kasser, *A Standard System of Sigla for Referring to the Dialects of Coptic*, in Journal of Coptic Studies 1 [1990], 141-151).
- DB id: `dialect`

#### NOTES ON DIALECTS/LANGUAGES
- Special characteristics of the dialect. Bibliographical reference only for minor dialects.
- DB id: `dialectnotes`

---

### Relevant places

For each manuscript, multiple instances of the following group of fields can be filed, 
each one describing a single relation to Place.

These fields are not part of the [manuscripts table](/schema/manuscripts) but of the [m_msplaces table](/schema/m_msplaces).

#### TYPE
- Type of connection between a manuscript and a place: `production`, `storage` or `discovery`
- DB id: `type`

#### PLACE
- Connected place
- DB id: `place`

#### SOURCE OF INFORMATION
- The source of information used to make the connection: `contents`, `colophon`, `title`, `archaeology`, `decoration`, `palaeography`, `dialect`, `modern reports`
- DB id: `sourceinfo`

#### NOTES ON SOURCE
- Noteworthy matters regarding the source used to make the connection between a manuscript and a place
- DB id: `sourcenotes`

---

### Dating

#### SOURCE FOR DATING
- Used to further qualify the type of dating. Available sources are: `colophon`, `palaeography`, `prosopography`, `related manuscripts`, `archaeological data` and `contents` in case a manuscript is part of a (well) datable group of manuscripts.
- DB id: `datingsource`

#### FROM
- Lower chronological limit (year) of the codicological unit, to be expressed in years. Negative values are used for BCE dating
- DB id: `chronofrom`

#### TO
- Upper chronological limit (year) of the codicological unit, to be expressed in years. Negative values are used for BCE dating. In the case of an exact date (year), this field should be filled with the same value of the From ([chronofrom](#from)) date. When no elements of dating are available, the label is blank.
- DB id: `chronoto`

#### DATING CRITERIA
- Criteria and information source for dating. If the manuscript/fragment (= codicological unit) is not datable, the field is blank.
- DB id: `datingcriteria`

---

### Book form

#### BOOK FORM
- Codex, horizontal roll (roll written horizontally in a sequence of more or less narrow columns), vertical roll (roll in which the writing runs in one column top-down and parallel to the short side), ostrakon, polyptych (codex made from wooden tablets), tablet and single leaf.
- DB id: `bookform`

#### WRITING SUPPORT
- Material used for the manuscripts (papyrus, parchment, paper, wood, terracotta, stone, and leather).
- DB id: `writingsupport`

---

### General description

#### NUMBER OF ANCIENT EXTANT LEAVES
- Total number of ancient leaves, including ancient fly and guard leaves.
- DB id: `leaftotextant`

#### NUMBER OF FRAGMENTS
- Total number of extant fragments (i.e. fragmentary leaves) belonging to a codicological unit.
- DB id: `fragtot`

#### FRAGMENTS DIMENSIONS
- Dimensions of the extant fragments, if any, and when relevant.
- DB id: `fragdim`

#### ESTIMATED NUMBER OF ANCIENT LEAVES
- Estimated number of ancient leaves.
- DB id: `leaftotestimated`

#### NUMBER OF EXTANT QUIRES
- Total number of the extant quires.
- DB id: `quiresextant`

#### NOTES
- Listing of ancient fly, guard, and written leaves.
- DB id: `gennotes`

---

### Page description

#### COLUMNS
- Number of columns per page.
- DB id: `columns`

#### NOTES ON COLUMNS
- Special/specific characteristics of columns.
- DB id: `colnotes`

#### LINES PER COLUMN
- Number of lines per column. E.g.: "25+" = "more than 25 lines"; "25-" = "less than 25 lines"; "25-30" = "25 to 30 lines".
- DB id: `linespercolumn`

#### CHARACTERS PER LINE
- Number of characters per line. E.g.: "25+" = "more than 25 characters"; "25-" = "less than 25 characters"; "25-30" = "25 to 30 characters".
- DB id: `charsperline`

#### TEXT ALIGNMENT
- Typology of text alignment inside columns (left, right, justified).
- DB id: `alignment`

#### NOTES ON ALIGNMENT
- Notes on the typology of alignment.
- DB id: `alignmentnotes`

---

### Dimensions (mm) and proportions

#### LEAF WIDTH
- Total width (in mm) of the leaf or the tablet.
- DB id: `leafw`

#### LEAF HEIGHT
- Total height (in mm) of the leaf or the tablet.
- DB id: `leafh`

#### WRITING FRAME WIDTH
- Total width (in mm) of the writing frame.
- DB id: `framew`

#### WRITING FRAME HEIGHT
- Total height (in mm) of the writing frame.
- DB id: `frameh`

#### INTERCOLUMNIUM
- Dimensions (in mm) of the intercolumnium if present.
- DB id: `intercolumnium`

#### UPPER MARGIN
- Dimensions (in mm) of the upper margin.
- DB id: `marginup`

#### LOWER MARGIN
- Dimensions (in mm) of the lower margin.
- DB id: `marginlow`

#### OUTER MARGIN
- Dimensions (in mm) of the margin on the opposite side of the gutter.
- DB id: `marginout`

#### INNER MARGIN
- Dimensions (in mm) of the margin along the gutter.
- DB id: `marginin`

#### LEFT MARGIN
- Term to be used for rolls or small fragments of codices where no binding traces are visible or inferable.
- DB id: `marginleft`

#### RIGHT MARGIN
- Term to be used for rolls or small fragments of codices where no binding traces are visible or inferable.
- DB id: `marginright`

#### HEIGHT OF TEN LINES OF TEXT
- Height of ten lines of text (in mm) together with their nine interlinear spaces.
- DB id: `heighttenlines`

#### PROPORTION HEIGHT/WIDTH
- It quantifies the format of a codex. If the proportion is around 1, the codex is defined as square (*quadratus*); if the proportion is around 2, the codex is defined as rectangular (*oblongus*).
- DB id: `prophw`

#### PROPORTION WRITTEN/TOTAL PAGE SPACE
- It shows how the writer decided to cover the writing support with scripture. Total page space includes the margins and the *intercolumnia*. The proportion is always between 0 and 1; the smaller it is, the smaller the surface of the page written upon. The bigger it is (around 1), a larger surface of the page is covered with writing and therefore margins and *intercolumnia* (if present) are narrower.
- DB id: `propwt`

#### NOTES ON DIMENSIONS AND PROPORTIONS
- Noteworthy matters regarding the proportion between written/unwritten areas.
- DB id: `dimnotes`

---

### Reconstructed quire layout

For each manuscript, multiple instances of the following group of fields can be filed, each one describing a single quire.

These fields are not part of the [manuscripts table](/schema/manuscripts) but of the [m_quires table](/schema/m_quires).

#### QUIRE NO.
- Modern number assigned to the quire
- DB id: `quireno`

#### QUIRE LAYOUT
- Schematic representation of the quire layout obtained by means of an *ad hoc*-elaborated tool (quireMatrix by J. Bogdani, DOI: [10.5281/zenodo.1453362](http://dx.doi.org/10.5281/zenodo.1453362), working demo: [https://paths-erc.github.io/quireMatrix/](https://paths-erc.github.io/quireMatrix/)): a dependency-less software to visualise in the browser the layout of quires, using a highly intuitive notation system. The software is written in vanilla javascript and can be run in every browser. The code is available for download at PAThs' official GitHub repository: [https://github.com/paths-erc/quireMatrix](https://github.com/paths-erc/quireMatrix) and is released with MIT License.
- DB id: `quirelayout`

#### PAPIRUS QUIRE TYPOLOGY
- Papyrus quire typology, according to E.G. Turner, *The Typology of the Early Codex*, Philadelphia 1977.
The fibre direction of the first page is noted (→ for horizontal fibres, and ↓ for vertical fibres) and followed by the pattern of composition of the quire, i.e. ‘like facing like’ when a double page shows the same fibre direction or ‘alternance’ when the fibre direction alternates in a double page. If the quire is of mixed type, its composition is accurately described in ‘Quire notes’ (see below).
- DB id: `quirepaptype`

#### PARCHMENT QUIRE TYPOLOGY
- Parchment quire typology, according to E.G. Turner, *The Typology of the Early Codex*, Philadelphia 1977.
The parchment side of the first page is noted (F for flesh side, and H for hair side) and followed by the pattern of composition of the quire, i.e. ‘like facing like’ when a double page shows the same parchment side (and respects the Gregory rule) or ‘alternance’ when the parchment side alternates in a double page. If the quire is of mixed type, its composition is accurately described in [Quire notes](#quire-notes).
- DB id: `quirepartype`

#### QUIRE NOTES
- Ancient quire signature. Special characteristics of the structure and composition of the quire, e.g. →↓\|→↓\|↓→\|→↓\|\|↓→\|→↓\|↓→\|↓→ or F H\|H F\|F H\|F H\|\|H F\|H F\|F H\|H F, where \| shows the passage from one leaf to the next; \|\| shows the centre of the quire. For papyrus codices, the scheme →-↓ or ↓-→ indicates a change of fibre direction in the page, i.e. in case of a kollēsis: e.g. →-↓ ↓-→\|↓-→ →-↓.
- DB id: `quirenotes`

---

#### NOTES ON QUIRES
- Noteworthy matters regarding the quires.
- DB id: `quirenotes`

---

### Quire signature

#### PRESENCE OF QUIRE SIGNATURE
- Noted if present.
- DB id: `quiresig`

#### QUIRE SIGNATURE TYPE
- Regular/irregular. A regular signature respects the logical order of the quires; an irregular signature shows errors or incompleteness in signing the quires. We consider as irregular repeated series of regular quire signatures (e.g.: quires 1-4 signed ⲁ-ⲇ followed by quires 5-8 signed again ⲁ-ⲇ).
- DB id: `quiretype`

#### QUIRE SIGNATURE POSITION
- Top-left / -right / -central / -inner / -outer. Position of the quire signature on the page. It is usually written in the upper margin. The position may vary: near the inner margin, in the centre or near the outer margin. For the leaves where recto and verso cannot be identified, "left" or "right" is used.
- DB id: `quireposition`

#### NOTES ON QUIRE SIGNATURE
- Special characteristics or exceptions in numbering, type, position, etc. of the quire signature.
- DB id: `quirenrnotes`

---

### Pagination

#### PAGINATION
- Noted if present.
- DB id: `pagination`

#### PAGINATION TYPE
- Regular/irregular. A regular numbering respects the logical order of the pages. An irregular numbering shows errors or incompleteness in numbering the pages. We consider as irregular repeated series of regular paginations (e.g.: pages 1-20 signed ⲁ-ⲕ followed by pages 21-40 signed again ⲁ-ⲕ).
- DB id: `pagtype`

#### PAGINATION POSITION
-	Top-left / -right / -central / -inner / -outer. Position of the page numbers on the page. It is usually written in the upper margin. The position may vary: near the inner margin, in the centre or near the outer margin. For the leaves where recto and verso cannot be identified, "left" or "right" is used.
- DB id: `pagposition`

#### NOTES ON PAGINATION
- Special characteristics or exceptions in numbering, type, position, etc. of the page numbers.
- DB id: `pagnote`

---

### Foliation (ancient and modern)

#### PRESENCE OF FOLIATION
- Noted if present. Usually, foliation is modern and written in pencil. Exceptions are accurately described.
- DB id: `foliation`

#### FOLIATION TYPE
- Regular/irregular. A regular numbering respects the logical order of the leaves. An irregular numbering shows errors or incompleteness in numbering the leaves.
- DB id: `foltype`

#### FOLIATION POSITION
- Top-left / -right / -central / -inner / -outer. Position of folio numbers on the page. It is usually written in the upper margin. The position may vary: near the inner margin, in the centre or near the outer margin. For the leaves where no binding traces are visible or inferable "left" or "right" is used.
- DB id: `folposition`

#### NOTES ON FOLIATION
- Special characteristics or exceptions in numbering, type, position, etc. of the folio numbers.
- DB id: `folnotes`

---

#### NUMBER OF HANDS
- Number of different scribe hands identified. For each of them a hand description protocol must be filled out.
- DB id: `handstot`

### Hand(s)

For each manuscript, multiple instances of the following group of fields can be filed, each one describing a single hand.

These fields are not part of the [manuscripts table](/schema/manuscripts) but of the [m_hands table](/schema/m_hands).

---

#### HAND NUMBER
- Progressive unique number of identified hands
- DB id: `handno`

#### WRITING MODULAR TYPOLOGY
- In unimodular writing, the letters all fit in the same shape, usually a square. In bimodular writing, there is an opposition between wide letters and narrower ones (usually ⲉ, ⲑ, ⲟ, ⲥ).
- DB id: `modulartypology`

#### AXIS
- Axis of the writing (upright/right-sloping).
- DB id: `writingaxis`

#### THICK-AND-THIN STYLE
- Noted if present.
- DB id: `thickandthin`

#### IDENTIFICATION
- The (nick)name of the scribe, if known
- DB id: `identification`

#### NOTES ON WRITING
- Noteworthy elements related to the writing and the glyphs. In this section, the writing styles (Biblical majuscule, Alexandrian majuscule, Sloping majuscule, and mixed type) are also mentioned.
- DB id: `writingnotes`

---

### Diacritical signs

In the absence of a detailed and comprehensive study, we do not take into account the supralinear strokes.

#### LECTIONAL SIGNS
- Signs used to help the correct reading of the text: trema, apostrophe, etc.
- DB id: `lectionalsigns`

#### PUNCTUATION AND STRUCTURAL/LOGICAL SIGNS
- Signs used to help the reader to identify the structure of the text. These signs may be graphic (*paragraphos*, *obelos*, etc.) or layout characteristics (*eisthesis*, *ekthesis*, etc.).
- DB id: `structuralsigns`

#### NOTES ON SIGNS
- Special characteristics about the above-described signs.
- DB id: `signsnotes`

---

#### ABBREVIATIONS
- Nomina sacra or abbreviations marked by superlinear strokes.
- DB id: `abbreviations`

#### NOTES ON ABBREVIATIONS
- Characteristics of the abbreviations and the abbreviation system.
- DB id: `abbrnotes`

---

### Ruling and pricking

#### RULING
- Noted if present.
- DB id: `ruling`

#### RULING TYPE
- Description of ruling types, following Leroy's method (J. Leroy, *Les types de réglures des manuscrits grecs*, Paris 1976; J.H. Sautel, *Répertoire des réglures dans les manuscrits grecs sur parchemin*, Turnhout 1995).
- DB id: `rulingtype`

#### RULING TOOL
- Description of the ruling tools.
- DB id: `rulingtool`

#### PRICKING
- Noted if present.
- DB id: `pricking`

#### NOTES ON RULING
- Noteworthy matters related to ruling.
- DB id: `rulingnotes`

#### LEAF TABS
- Little leather or parchment tabs fixed to the outer margin of a leaf and intended as a bookmark. Noted if present.
- DB id: `leaftabs`

#### NOTES ON LEAF TABS
- Noteworthy matters related to the leaf tabs.
- DB id: `leaftabsnotes`

---
### MANUFACTURE OF THE ROLLS

#### PRESENCE OF KOLLĒSEIS
- Noted if present.
- DB id: `kolleseis`

#### KOLLĒSEIS DESCRIPTION
- Number, direction (horizontal of vertical).
- DB id: `kolleseseisdescr`

#### NOTES
-	Direction (horizontal or vertical) and position (ascending or descending) of the *kollēseis* on the pages or on the rolls (we use 'K+number' to identify the *kollēseis*: K1, K2, etc.), identification and dimensions of the reconstructed rolls and *kollēmata* (‘k+number’ is used to identify the *kollēmata*, e.g. k1, k2, etc.).
- DB id: `tracesnotes`

#### NUMBER OF KOLLĒMATA
- Noted if the number can be estimated.
- DB id: `kollno`

#### KOLLĒMATA DIMENSIONS
- Noted if possible to measure (‘k+number’ is used to identify the *kollēmata*: k1, k2, etc.)
- DB id: `kolldim`

---

### BINDINGS

#### PRESENCE OF BINDINGS
- Noted if present.
- DB id: `bindings`

#### EVIDENCE OF FORMER BINDING
- Noted if traces indicating a rebinding are present
- DB id: `bindformer`

#### Dimensions (mm) and proportions

#### BOARD WIDTH
- Average width (in mm) of the boards
- DB id: `boardw`

#### BOARD HEIGHT
- Average height (in mm) of the boards.
- DB id: `boardh`

#### BOARD THICKNESS
- Average thickness (in mm) of the boards
- DB id: `boardt`

#### SPINE WIDTH
- Average width (in mm) of the spine
- DB id: `spinew`

#### NOTES ON BOARD DIMENSIONS
- NOtes on the dimensions of the boards
- DB id: `boarddimnotes`

#### Sewing

#### SEWING
- Noted if present
- DB id: `sewings`

#### TYPE OF SEWING
- Indication of the sewing type
- DB id: `sewingtype`
- Possible values include:
    - `Chain stitch sewing – simple` (Szirmai 1999, fig. 2.1 [e]) (broad match [http://w3id.org/lob/concept/1249](http://w3id.org/lob/concept/1249))
    - `Chain stitch sewing – paired sewing stations` (Szirmai 1999, fig. 2.1 [g], [h], [i] and [k]) (broad match [http://w3id.org/lob/concept/1249](http://w3id.org/lob/concept/1249)) 
    - `Stab sewing` (Boudalis 2018, 61–65) 
    - `Overcasting` (exact match http://w3id.org/lob/concept/1471 )
    - `Tacketing` (exact match http://w3id.org/lob/concept/4835 )

#### NO. SEWING STATIONS
- Number of sewing stations (also applicable to tablets)
- DB id: `sewingstationsno`

#### FOLD PATTERN
- Indication of sequence of stitches visible in the centrefold and note of presence of sewing guards.
- DB id: `foldpattern`
- Possible values include:
    - `All-along – one length of thread` (Szirmai 1999, fig. 2.3 [b]) (exact match [http://w3id.org/lob/concept/1196](http://w3id.org/lob/concept/1196))
    - `All-along – two length of thread` (Szirmai 1999, fig. 2.3 [c]) (close match [http://w3id.org/lob/concept/1196](http://w3id.org/lob/concept/1196))
    - `Periodic – one length of thread` (Szirmai 1999, fig. 2.3 [a]; Spitzmueller 1982, 45)
    - `Periodic – two lengths of thread` (Szirmai 1999, fig. 2.3 [d]; Spitzmueller 1982, 45)
    - Sewing guards (exact match [http://w3id.org/lob/concept/3282](http://w3id.org/lob/concept/3282))

#### NOTES ON SEWINGS
- Description of the sewing.
- DB id: `sewingnotes`

#### Boards

#### BOARD MATERIAL
- Material of which the boards are made
- DB id: `boardmat`

#### BOARD FEATURES
- Features relating to the form of the boards
- DB id: `boardfeatures`
- Possible values include:
    - `Bevels` (exact match [http://w3id.org/lob/concept/3475](http://w3id.org/lob/concept/3475))
    - `Edge` grooves (close match [http://w3id.org/lob/concept/1303](http://w3id.org/lob/concept/1303))
    - `Double` boards (exact match [http://w3id.org/lob/concept/3521](http://w3id.org/lob/concept/3521))
    - `Folded` boards (exact match [http://w3id.org/lob/concept/3519](http://w3id.org/lob/concept/3519))

#### BOARD ATTACHMENT
- System used to attach the boards to the bookblock or between them
- DB id: `boardattachment`
- Possible values include:
    - `n.d. (not visible)`
    - `n.d. (not preserved)`
    - `Hinging slips` (Sharpe 1999, 468–75)
    - `Back strip` (Szirmai 1999, 23–25 and fig. 2.6)
    - `Hinging loops – Z pattern` (Boudalis 2018, 73)
    - `Hinging loops – U pattern` (Boudalis 2018, 73)
    - `Hinging loops – I pattern`
    - `Integral part of the sewing`

#### NOTES ON BOARDS
- Description of the boards.
- DB id: `boardnotes`

#### Cover

#### COVERS
- Preserved parts of the cover (upper/ lower/ back).
- DB id: `covers`

#### COVER MATERIAL
- Material of the covers
- DB id: `covermat`

#### TURN-INS
- Type of trimming of the turn-ins.
- DB id: `turnins`
- Possible values include:
    - `Irregular` (exact match [http://w3id.org/lob/concept/3723](http://w3id.org/lob/concept/3723))
    - `Rough-trimmed` (exact match [http://w3id.org/lob/concept/3721](http://w3id.org/lob/concept/3721))
    - `Straight-trimmed` (exact match [http://w3id.org/lob/concept/3719](http://w3id.org/lob/concept/3719))
    - `Trimmed out` (exact match [http://w3id.org/lob/concept/1684](http://w3id.org/lob/concept/1684))


#### MITRES
- Type of mitres.
- DB id: `mitres`
- Possible values include:
    - `Butt mitres` (exact match [http://w3id.org/lob/concept/1235](http://w3id.org/lob/concept/1235))
    - `Lapped mitres` (fore-edge over) (broader match [http://w3id.org/lob/concept/1421](http://w3id.org/lob/concept/1421))
    - `Lapped mitres` (head/tail over) (broader match [http://w3id.org/lob/concept/1421](http://w3id.org/lob/concept/1421))
    - `Sewn mitres` (exact match [http://w3id.org/lob/concept/1588](http://w3id.org/lob/concept/1588))
    - `Open mitres` (exact match [http://w3id.org/lob/concept/1465](http://w3id.org/lob/concept/1465))
    - `Tongued mitres` (exact match [http://w3id.org/lob/concept/1674](http://w3id.org/lob/concept/1674))

#### PRESENCE OF FORE-EDGE FLAP
- Noted if present
- DB id: `foreedgeflap`

#### DECORATION OF THE COVERS
- Indication of the decoration technique.
- DB id: `coverdecoration`
- Possible values include
    - `Colouring`
    - `Blind-tooling` (exact match [http://w3id.org/lob/concept/1212](http://w3id.org/lob/concept/1212))
    - `Gilding` (exact match [http://w3id.org/lob/concept/1363](http://w3id.org/lob/concept/1363))
    - `Lacing` (exact match [http://w3id.org/lob/concept/4015](http://w3id.org/lob/concept/4015))
    - `Cut-leather work` (exact match [http://w3id.org/lob/concept/1280](http://w3id.org/lob/concept/1280))
    - `Appliqué` (Fleming and Honour 1989, 32)
    - `Intaglio` (Fleming and Honour 1989, 413)
    - `Embroidery` (exact match [http://w3id.org/lob/concept/1306](http://w3id.org/lob/concept/1306)) 

#### NOTES ON COVERS
- Description of the covers.
- DB id: `covernotes`

#### Spline lining

#### NOTES ON SPLINE LINING
- Description of the spine lining.
- DB id: `splinelining`

#### Endbands

#### ENDBANDS TYPE
- Type of endbands.
- DB id: `endbandtype`
- Possible values include:
    - `Link-stitch endband` (Petersen 1954, fig. 22)
    - `Cord endband` (Petersen 1948, fig. 18A)

#### NOTES ON ENDBANDS
- Description of the endbands.
- DB id: `endbandnotes`

#### Fastenings

#### FASTENING TYPE
- Fastening types
- DB id: `fasteningtype`
- Possible values include:
    - `Ties and metal rings`
    - `Loops and toggles`
    - `Loops and ties`
    - `Loops and pins`
    - `Paired ties` (exact match [http://w3id.org/lob/concept/3029](http://w3id.org/lob/concept/3029))
    - `Wrapping bands` (exact match [http://w3id.org/lob/concept/3097](http://w3id.org/lob/concept/3097))
    - `Wrap around ties` (exact match [http://w3id.org/lob/concept/3096](http://w3id.org/lob/concept/3096))

#### NOTES ON FASTENINGS
- Description of the fastening system.
- DB id: `fasteningnotes`

#### Other ties

#### POSITION OF OTHER TIES
- Position of other ties.
- DB id: `othertiesposition`

#### NOTES ON OTHER TIES
- Description of the other ties. 
- DB id: `othertiesnotes`


---

### Inks and pigments

### Coloured

#### COLOURS
- List of the pigments used in the codicological unit
- DB id: `pgmcol`

#### PIGMENT LOCATION
- Location of the pigments within the codicological unit (e.g. text, title, decoration)
- DB id: `pgmlocation`

#### NOTES ON PIGMENTS
- Noteworthy matters related to the pigments
- DB id: `pgmnotes`


### Black

#### BLACK INK TYPES
- List of black ink types
- DB id: `blktype`

#### BLACK INK LOCATION
- Location of the black ink within the codicological unit (e.g. text, title, decoration)
- DB id: `blklocation`

#### NOTES ON BLACK INKS
- Noteworthy matters related to the black ink
- DB id: `blknotes`

---

### Additional information

#### MARGINAL NOTES
- Noted if present and transcription or brief description.
- DB id: `marginalnotes`

#### GREEK MINUSCULE SCRIPT
- Noted if present.
- DB id: `greekminuscule`

#### NOTES ON GREEK MINUSCULE SCRIPT
- Notes on Greek minuscule script.
- DB id: `greekminusculenotes`

#### PALIMPSEST
- It records whether the manuscript is palimpsest or not.
- DB id: `palimpsest`

#### NOTES ON PALIMPSEST
- Description of the palimpsest.
- DB id: `palipsestnotes`

#### ANCIENT RESTORATION
- Notes on ancient restoration, if any.
- DB id: `restancient`

#### MODERN RESTORATIONS
- Notes on modern restoration, if any.
- DB id: `restmodern`

#### DECORATION TYPES
- List of the decorative type(s).
- DB id: `decortype`

#### DECORATION SUBJECTS
- List of the decorative subject(s).
- DB id: `decorsubj`

#### DECORATION DESCRIPTION
- Description of the decorative elements.
- DB id: `decorationdescr`

#### ENLARGED INITIALS
- Noted if present.
- DB id: `enlargedinitials`

#### SOURCE OF INFORMATION ABOUT THIS RECORD
- Autoptic analysis - Photographic reproductions - Bibliography - Archaeometric analysis - Personal communication (from…)
- DB id: `sourceinfo`

#### EDITORS
- Initials of the person(s) responsible for the record.
- DB id: `editors`

#### STATUS
- If the record has been fully compiled the status is set to `complete`; if it is under study the status is set to `in-progress`. If the status is blank it means that the provided information are incomplete, not reliable and liable to change in the future.
- DB id: `status`

#### LAST MODIFIED
- Date of last edit
- DB id: `lastmodified`

---

### BIBLIOGRAPHY
For each manuscript multiple instances of the following group of fields can be filed, each one describing a bibliographic reference.

These fields are not part of the [manuscripts table](/schema/manuscripts) but of the [m_biblio table](/schema/m_biblio).

#### SHORT REFERENCE
- Short reference of the bibliographic item as stored in [biblio table](biblio)
- DB id: `paths__m_biblio.short`

#### SPECIFIC DETAILS
- Pages of the publication if not precised in the reference
- DB id: `paths__m_biblio.details`

#### DETAILS ABOUT IMAGES
- Pages or figures containing reproductions of (part[s] of) the manuscript
- DB id: `paths__m_biblio.images`
