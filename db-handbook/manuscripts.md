# Manual for the correct use and reading of the codicological description of the codicological units

This subfolder of PAThs’ main documentation repository provides a complete
documentation for users and readers of the PAThs database, currently available at
http://db.bradypus.net. The documentation is written in [Markdown](https://daringfireball.net/projects/markdown/)
by the PAThs' team (Julian Bogdani) and is available in PDF format in
[PAThs’ website](http://paths.uniroma1.it).

If you are looking for the schema description please go to [db-schema/README.md](../db-schema/README.md).



Ref.: `paths.manuscripts`

---

### Manuscript identifiers

#### CMCL
- CMCL siglum of the reconstructed codicological unit, where available.
- DB id: `cmclid`

#### TM
- Trismegistos stable identifier, where available.
- DB id: `tm`

#### LDAB
- [LDAB](www.trismegistos.org/ldab/) stable identifier, where available.
- DB id: `ldab`

#### LCBM
- List of Coptic Biblical Manuscripts identifier, where available (Göttingen, Digital Edition of the Sahidic Coptic Old Testament / Berlin, Novum Testamentum Graecum - Editio Critica Maior).
- DB id: `lcbm`

#### ALIAS
- Name par excellence used to identify a manuscript (i.e. Codex Tchacos).
- DB id: `alias`

#### STRATIGRAPHY
- Brief description of the 'stratigraphy' of the codicological unit, following the method and terminology of P. Andrist, P. Canart, M. Maniaci, *La syntaxe du codex. Essai de codicologie structurale*, Turnhout 2013 [ISBN: 9782503543932]. Particular attention is given to 'Production Units' (UniProd) and 'Circulation Units' (UniCirc).
- DB id: `stratigraphy`

#### MODERN HISTORY
- Brief description of the modern history of the original (i.e. virtually reconstructed) codicological unit and/or of the fragments in which it is composed. History of modern storage places is recorded, as well as modifications of the codicological units (e.g. unification or dismemberment).
- DB id: `modernhistory`

#### CONTENTS
- Detailed description of the sequence of the works contained in a multiple-text manuscript (CCs) or description of the content of a work that, for different reasons, at the moment cannot be associated to a Clavis Coptica (CC).
- DB id: `contents`

---

### Shelfmarks
For each manuscript multiple instances of the following group of fields can be filed, each one describing a single modern fragment.

These fields are not part of the [manuscripts table](../db-schema/manuscripts.md) but of the [m_shelfmarks table](../db-schema/m_shelfmarks.md).

#### CMCL's full segnat
- Fragment identifier as recorderd in the [CMCL](http://cmcl.it)
- DB id: `fullsegnat`

#### CMCL segnat
- Collection name as (programatically) extracted from the [CMCL](http://cmcl.it)
- DB id: `segnatid`

#### COLLECTION
- Normalised full form of the collection name (country, city, institution, and collection of the fragment)
- DB id: `collection`
- **Warning**: this field is a foreign key referring [collections.id](../db-schema/collections.md) field.

#### SHELFMARK
- Identifier of the fragment within the collection
- DB id: `shelfmark`

#### F./FF.  OR P./PP.
- Page range, within the fragment referring to the main codicological unit, in case a single (modern) fragment contains more than one original codicological units.
- DB id: `pp`

---

### Dialects

#### DIALECTS/LANGUAGES
- Indication of the dialect(s) or language(s) used in the manuscript, according to the *sigla* of the 'Kasser-Funk system' (see R. Kasser, *A Standard System of Sigla for Referring to the Dialects of Coptic*, in Journal of Coptic Studies 1 [1990], 141-151).
- DB id: `dialect`

#### NOTES ON DIALECTS/LANGUAGES
- Special characteristics of the dialect. Bibliographical reference only for minor dialects.
- DB id: `dialectnotes`

### Dating

#### FROM
- Lower chronological limit (year) of the codicological unit, to be expressed in years. Negative values are used for BC dating
- DB id: `chronofrom`

#### TO
- Upper chronological limit (year) of the codicological unit, to be expressed in years. Negative values are used for BC dating. In the case of an exact date (year), this field should be filled with the same value of the From (chronofrom) date. When no elements of dating are available, the label is blank.
-DB id: `chronoto`

#### DATING CRITERIA
- Criteria and information source for dating. If the manuscript/fragment is not dated, the field is blank.
- DB id: `datingcriteria`

---

### Book form

#### BOOK FORM
- Horizontal roll: roll written horizontally in a sequence of more or less narrow columns.
Vertical roll: roll in which the writing runs in one column top-down and parallel to the short side.
Polyptych: codex made from wooden tablets.
- DB id: `bookform`

#### WRITING SUPPORT
- Material used for the manuscripts (papyrus, parchment, paper, wood, etc.).
- DB id: `writingsupport`

---

### General description

#### NUMBER OF ANCIENT EXTANT LEAVES
- Total number of ancient leaves, including ancient fly and guard leaves.
- DB id: `leaftotextant`

#### NUMBER OF FRAGMENTS
- Total number of extant fragments belonging to a codicological unit.
- DB id: `fragtot`

#### FRAGMENTS DIMENSIONS
- Dimensions of the extant fragments, if any and when relevant.
- DB id: `fragdim`

#### ESTIMATED NUMBER OF ANCIENT LEAVES
- Estimated number of ancient leaves.
- DB id: `leaftotestimated`

#### NUMBER OF EXTANT QUIRES
- Total number of the extant quires.
- DB id: `quiresextant`

#### NOTES
- Verbose listing of ancient fly, guard, and written leaves.
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
- Typology of column alignment (left, right, justified).
- DB id: `alignment`

#### NOTES ON ALIGNMENT
- Notes on the typology of alignment.
- DB id: `alignmentnotes`

---

### Original dimensions (mm) and proportions

#### LEAF OR TABLET WIDTH
- Total width (in mm) of the leaf or the tablet.
- DB id: `leafw`

### LEAF OR TABLET HEIGHT
- Total height (in mm) of the leaf or the tablet.
- DB id: `leafh`

#### WRITING FRAME WIDTH
- Total width (in mm) of the writing frame.
- DB id: `framew`

#### WRITING FRAME HEIGHT
- Total height (in mm) of the writing frame.
- DB id: `frameh`

#### INTERCOLUMNIUM
- Dimensions (in mm) of the intercolumnium.
- DB id: `intercolumnium`

#### UPPER MARGIN
- Dimensions (in mm) of the upper margin.
- DB id: `marginup`

#### LOWER MARGIN
- Dimensions (in mm) of the lower margin.
- DB id: `marginlow`

#### OUTER MARGIN
- Margin on the opposite side of the binding.
- DB id: `marginout`

#### INNER MARGIN
- Margin along the binding.
- DB id: `marginin`

#### LEFT MARGIN
- Term to be used for rolls or small fragments of codices where no binding traces are visible or inferable.
- DB id: `marginleft`

#### RIGHT MARGIN
- Term to be used for rolls or small fragments of codices where no binding traces are visible or inferable.
- DB id: `marginright`

#### HEIGHT OF TEN LINES OF TEXT
- Height of ten lines of text (in mm) together with their ten interlinear spaces.
- DB id: `heighttenlines`

#### PROPORTION HEIGHT/WIDTH
- It quantifies the format of a codex. If the proportion is around 1, the codex is defined as square (quadratus); if the proportion is around 2, the codex is defined as rectangular (oblongus).
- DB id: `prophw`

#### PROPORTION WRITTEN/UNWRITTEN TEXT
- It shows how the writer decided to cover the writing support with scripture. Unwritten space consists of the margins and the intercolumnia. If the proportion is around 1, it means that half of the surface of the leaf is covered with writing. If the proportion is higher than 1, more than half of the surface of the leaf is covered with writing and therefore the margins are more narrow.
- DB id: `propwuw`

#### NOTES ON DIMENSIONS AND PROPORTIONS
- Noteworthy matters regarding the proportion between written/unwritten areas.
- DB id: `dimnotes`

---

### Reconstructed quire layout

For each manuscript multiple instances of the following group of fields can be filed, each one describing a single quire.

These fields are not part of the [manuscripts table](../db-schema/manuscripts.md) but of the [m_quires table](../db-schema/m_quires.md).

#### 	QUIRE NO.
- Modern number assigned to the quire
- DB id: `quireno`

#### 	QUIRE LAYOUT
- Schematic representation of the quire layout obtained by means of an *ad hoc*-elaborated tool (http://paths.uniroma1.it/other-products): a dependency-less software to visualise in the browser the layout of quires, using a very intuitive notation system. Please refer to the The software is written in vanilla javascript and can be run in every browser. The code is available for download at PAThs' official GitHub repository: https://github.com/paths-erc/quireMatrix and is released with MIT License.
- DB id: `quirelayout`

#### NOTES ON QUIRE LAYOUT
-
- DB id: `quirelayoutnotes`

#### PAPIRUS QUIRE TYPOLOGY
- Papyrus quire typology, according to E.G. Turner, *The Typology of the Early Codex*, Philadelphia 1977.
If the quire is of mixed type, its composition is accurately described. For this purpose, a scheme like the following is used: →↓|→↓|↓→|→↓||↓→|→↓|↓→|↓→ (↓, →, F or H; | shows the passage from one leaf to the following; || shows the centre of the quire).
The scheme →-↓ or ↓-→ indicates a change of fibre direction in the page, i.e. in case of a kollēsis: e.g. →-↓ ↓-→|↓-→ →-↓| etc.
- DB id: `quirepaptype`

#### PARCHMENT QUIRE TYPOLOGY
- Parchment quire typology, according to E.G. Turner, *The Typology of the Early Codex*, Philadelphia 1977.
If the quire is of mixed type, its composition is accurately described. For this purpose, a scheme like the following is used: →↓|→↓|↓→|→↓||↓→|→↓|↓→|↓→ (↓, →, F or H; | shows the passage from one leaf to the following; || shows the centre of the quire).
The scheme →-↓ or ↓-→ indicates a change of fibre direction in the page, i.e. in case of a kollēsis: e.g. →-↓ ↓-→|↓-→ →-↓| etc.
- DB id: `quirepartype`

#### QUIRE NOTES
- Ancient quire-signature. Special characteristics of the structure and composition of the quire
- DB id: `quirenotes`

---

#### NOTES ON QUIRES
- Noteworthy matters regarding the quires.
- DB id: `quirenotes`

---

### Quire signature

#### QUIRE-SIGNATURE
- Noted if present.
- DB id: `quiresig`

#### QUIRE-SIGNATURE TYPE
- Regular/irregular. A regular signature respects the logical order of the quires; an irregular signature shows errors or incompleteness in signing the quires.
- DB id: `quiretype`

#### QUIRE-SIGNATURE POSITION
- Top-left / -right / -central / -inner / -outer. Position of the quire-signature on the page. It is usually written in the upper margin. The position may vary: near the inner margin, in the centre or near the outer margin. For the leaves where no binding traces are visible, "left" or "right" is used.
- DB id: `quireposition`

#### NOTES ON QUIRE-SIGNATURE
- Special characteristics or exceptions in numbering, type, position, etc. of the quire-signature.
- DB id: `quirenrnotes`

---

### Pagination

#### PAGINATION
- Noted if present.
- DB id: `pagination`

#### PAGINATION TYPE
- Regular/irregular. A regular numbering respects the logical order of the pages. An irregular numbering shows errors or incompleteness in numbering the pages.
- DB id: `pagtype`

#### PAGINATION POSITION
- Top-left / -right / -central / -inner / -outer. Position of the page numbers on the page. It is usually written in the upper margin. The position may vary: near the inner margin, in the centre or near the outer margin. For the leaves where no binding traces are visible or inferable, "left" or "right" is used.
- DB id: `pagposition`

#### NOTES ON PAGINATION
- Special characteristics or exceptions in numbering, type, position, etc. of the page numbers.
- DB id: `pagnote`

---

### Foliation (ancient and modern)

#### PRESENCE OF FOLIATION
- Noted if present. Normally, foliation is modern and written in pencil. Exceptions are accurately described.
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

### Writing

#### WRITING MODULAR TYPOLOGY
- In unimodular writing, the letters all fit in the same shape, usually a square. In bimodular writing, there is an opposition between wide letters and narrower ones (usually ⲉ, ⲑ, ⲟ, ⲥ).
- DB id: `modulartypology`

#### AXIS
- Axis of the writing (upright/right-sloping).
- DB id: `writingaxis`

#### THICK-AND-THIN STYLE
- Noted if present.
- DB id: `thickandthin`

#### TYPE OF Ⲉ Ⲟ Ⲥ
- Description of the type of Ⲉ Ⲟ Ⲥ (wide/narrow).
- DB id: `typeofeos`

#### TYPE OF Ⲙ
- Description of the type of Ⲙ (3-stroke/4-stroke).
- DB id: `typeofm`

#### TYPE OF Ⲣ
- Description of the type of Ⲣ (tall/short).
- DB id: `typeofr `

#### TYPE OF Ⲩ
- Description of the type of Ⲩ (tall/short).
- DB id: `typeofy`

#### TYPE OF Ϥ
- Description of the type of Ϥ (tall/short).
- DB id: `typeoff`

#### NOTES OF WRITING
- Noteworthy elements related to the writing and the glyphs.
- DB id: `writingnotes`

---

### Diacritical signs

#### LECTIONAL SIGNS
- Signs used to help the correct reading of the text: trema, apostrophe, etc.
- DB id: `lectionalsigns`

#### PUNCTUATION AND STRUCTURAL/LOGICAL SIGNS
- Signs used to help the reader to identify the structure of the text. These signs may be graphic (paragraphos, obelos, etc.) or layout characteristics (eisthesis, ekthesis, etc.).
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
- Description of ruling types (and systems), following Leroy's method (J. Leroy, Les types de réglures des manuscrits grecs, Paris 1976; J.H. Sautel, Répertoire des réglures dans les manuscrits grecs sur parchemin, Turnhout 1995).
- DB id: `rulingtype`

#### RULING TOOL
- Description of the ruling tools.
- DB id: `rulingtool`

#### PRICKING
- Noted if present. Description of pricking patterns, according to L.W. Jones, Pricking Manuscripts: the Instruments and their Significance, in Speculum 21 (1941), 389-403.
- DB id: `pricking`

#### RULING NOTES
- Noteworthy matters related to ruling.
- DB id: `rulingnotes`

#### LEAF TABS
- Little leather or parchment tab fixed to the outer margin of a leaf as a bookmark.
- DB id: `leaftabs`

---
### MANIFACTURE OF THE ROLLS

#### KOLLĒSEIS
- Noted if present.
- DB id: `kolleseis`

#### KOLLĒSEIS DESCRIPTION
- Number, direction (horizontal of vertical).
- DB id: `kolleseseisdescr`

#### NOTES
- Position on the pages or on the roll (use 'K+number' identifies the kolleseis: K1, K2, etc.)
- DB id: `tracesnotes`

#### NUMBER OF KOLLĒMATA
- Noted if the number can be estimated.
- DB id: `kollno`

#### KOLLĒMATA DIMENSIONS
- Noted if possible to measure (use "k+number" to identifies the kollemata: k1, k2, etc.)
- DB id: `kolldim`

---

### BIDINGS

#### PRESENCE OF BINDINGS
- Noted if present.
- DB id: `bindings`

#### PRESENCE OF SEWINGS
- Noted if present.
- DB id: `sewings`

#### TYPE OF SEWING
- Description of the sewing type.
- DB id: `sewingtype`

#### COVERS
- Noted if preserved.
- DB id: `covers`

#### NOTES ON COVERS
- Verbose description of the covers.
- DB id: `coversnotes`

#### NO. OF HOLES
- Number of the extant binding holes (also applicable to tablets).
- DB id: `holesno`

#### ARRANGEMENT OF HOLES
- Position of the holes.
- DB id: `holesarrangement`

#### NOTES ON HOLES
- Specific/special characteristics of the holes
- DB id: `holesnotes`

---

### Additional information

#### CHANGE OF HAND
- Noted if present.
- DB id: `changeofhand`

#### MARGINAL NOTES
- Noted if present.
- DB id: `marginalnotes`

#### PALIMPSEST
- It records whether the manuscript is palimpsest or not.
- DB id: `palimpsest`

#### NOTES ON PALIMPSEST
- Additional notes on palimpsest.
- DB id: `palipsestnotes`

#### ANCIENT RESTORATION
- Notes on ancient restoration, if any.
- DB id: `restancient`

#### MODERN RESTORATIONS
- Notes on modern restoration, if any.
- DB id: `restmodern`

#### INKS
- Type of ink (iron gall, tannin, carbon).
- DB id: `inks`

#### RED INK
- Noted if present.
- DB id: `redink`

#### NOTES ON RED INK
- Verbose description of the red ink use and function.
- DB id: `redlinknotes`

#### DECORATION TYPES
- Description of the decorative type(s).
- DB id: `decortype`

#### DECORATION SUBJECTS
- Description of the decorative subject(s).
- DB id: `decorsubj`

#### DECORATION DESCRIPTION
- Position of the decorative elements.
- DB id: `decorationdescr`

#### ENLARGED INITIALS
- Noted if present.
- DB id: `enlargedinitials`

#### SOURCE OF INFORMATION ABOUT THIS RECORD
- Catalogues - Editions - Secondary literature - Autoptic analysis - Photographic reproductions - Personal communication (from...)
- DB id: `sourceinfo`

#### EDITORS
- Initials of the person(s) responsible for the record.
- DB id: `editors`

---

### BIBLIOGRAPHY
For each manuscript multiple instances of the following group of fields can be filed, each one describing a bibliographic reference.

These fields are not part of the [manuscripts table](../db-schema/manuscripts.md) but of the [m_biblio table](../db-schema/m_biblio.md).

#### SHORT REFERENCE
- Short reference of the bibliographic item as stored in [biblio table](biblio.md)
- DB id: `short`

#### SPECIFIC DETAILS
- Pages of the publication if not precised in the reference
- DB id: `details`

#### DETAILS ABOUT IMAGES
- Pages or figures containing reproductions of (part[s] of) the manuscript
- DB id: `images`
