# Manual for the correct use and reading of the Places

This subfolder of PAThs’ main documentation repository provides a complete
documentation for users and readers of the PAThs database, currently available at
http://db.bradypus.net. The documentation is written in [Markdown](https://daringfireball.net/projects/markdown/)
by the PAThs' team (Julian Bogdani) and is available in PDF format in
[PAThs’ website](http://paths.uniroma1.it).

If you are looking for the schema description please go to [db-schema/README.md](../db-schema/README.md).



Ref.: `paths.places`

---

### Place identifiers

#### ID
- The unique stable identifier of each place. The identifier is a sequential integer provided by the database engine.
- DB id: `id`

#### SITE NAME
- English “standard” version of the most common toponym used in the scholarly literature
- DB id: `name`

#### COPTIC NAME(S)
- One ore more (comma-separated) Coptic toponyms or toponym versions, as they appear in manuscripts, related to the place, encoded in Unicode, using Antinoou font.
- DB id: `copticname`

#### GREEK NAME(S)
- One ore more (comma-separated) well-known Greek toponyms or toponym versions related to the place.
- DB id: `greekname`

#### ARABIC NAME(S)
- One ore more (comma-separated) well-known Arabic toponyms or toponym versions related to the place.
- DB id: `arabicname`

#### TRANSLITTERATION OF ARABIC NAME(S)
- Romanization of the Arabic place names, using the DIN (Deutsches Institut für Normung) 31635 standard.
- DB id: `arabictranslname`

#### EGYPTIAN NAME(S)
- One ore more (comma-separated) Egyptian toponyms or toponym versions, transliterated using the Gardiner 1953 standard (Gardiner, Alan Henderson. 1957. *Egyptian Grammar; Being an Introduction to the Study of Hieroglyphs*. 3rd ed. Oxford: Griffith Institute).
- DB id: `egyptianname`

---

### Other (external) identifiers

#### Trismegistos GeoID
- Trismegistos GeoID, if available
- DB id: `tm`

#### Pleiades Id
- Pleiades Id, if available
- DB id: `pleiades`

#### Timm references
- Bibliografical reference to Timm, S. 1984-1992. *Das christlich-koptische Ägypten in arabischer Zeit. Eine Sammlung christlicher Stätten in Ägypten in arabischer Zeit, unter Ausschluss von Alexandria, Kairo, des Apa-Mena-Klosters (Dēr Abū Mina), der Skētis (Wādi n-Naṭrūn) und der Sinai-Region*. Wiesbaden.
- DB id: `timm`

---

### Current administrative position

#### REGION
- Egyptian macro regions as listed by Baines, J., Malek, J. 1980 ()*Atlas of Ancient Egypt*. Oxford) with the exception of Thebes (divided in Western and Eastern Thebes) and the Fayyum region
- DB id: `region`

#### AREA
- A coherent modern area if available, eg. Valley of the Queens / Kings, etc. An exception is made for the Fayyum region, where *Moerides* are recorded.
- DB id: `area`

---

### Ancient administrative position

#### Meris
- The pertinent Egyptian Fayyumic meris.
- DB id: `meris`

#### NOMÓS
- The pertinent Egyptian nome. The Trismegistos’ list of the Egyptian nomes, around 3rd Century CE, published at https://www.trismegistos.org/geo/nomoi_lookup_nomoi.php?fieldname=Egyptian_Nomos&num=one is used.
- DB id: `nomos`

#### Capital of nomós
- True (1) if the site is the capital of the pertinent nome, false (0) otherwise.
- DB id: `isnomoscapital`

#### PROVINCE
- The pertinent Diocletian province.
- DB id: `province`

---

### Episcopal see

#### EPISCOPAL SEE
- If the site is documented to have been a bishopric or not.
- DB id: `episcopalsee`

#### EPISCOPAL SEE FROM YEAR
- If known, the year from which the site is documented to have been a bishopric.
- DB id: `episcopalseefrom`

#### NOTES ON EPISCOPAL SEE
- Sources or other notations on the episcopal see, if the site is documented to have been a bishopric.
- DB id: `notesepiscopalsee`

---

### Site definition


#### TYPOLOGY
- Site typologies have been shaped after (selected from) Pleiades’ Feature (or Place) Categories, with the addition of `hermitage unit(s)` and `castrum`.
- DB id: `typology`

#### TOPOGRAPHICALLY REFERRED TO
- An already inserted place (internal reference) to which the current place is topographically linked. Only upwards relations must be recorded.
-DB id: `toporeferredto`

#### NOTES ON TOPOGRAPHICAL REFERENCE
- Descriptive notes about the (upwards) topographical relation of the site.
- DB id: `notestoporeferredto`

#### HISTORICAL CONNECTIONS / REFERENCES
- Historical (textual) evidence of relations between two or more sites.
- DB id: `historicalreference`

---

### Dating

#### DATE FROM
- The upper chronological limit expressed in years of the “Coptic” phase of the site
- DB id: `datefrom`

#### DATE TO
- The lower chronological limit expressed in years of the “Coptic” phase of the site
- DB id: `dateto`

#### DATING CRITERIA AND NOTES
- Detailed information on which the dating of the site is made.
- DB id: `datingcriteria`

---

### General description

#### DESCRIPTION
- A detailed description of the site, limited to the 3rd-11th Centuries CE.
- DB id: `description`

#### MONASTERY
- True (1) if a site is a monastery od a site contains monasteries, false (0) otherwise.
- DB id: `ismonastery`

#### NOTES ON MONASTERY
- Descriptive notes on the monastic nature of the site.
- DB id: `monasterynotes`

#### POSITION ACCURACY
- The position accuracy of the the geographic coordinates.
- DB id: `accuracy`

---

### BIBLIOGRAPHY
For each place multiple instances of the following group of fields can be filed, each one describing a bibliographic reference.

These fields are not part of the [places table](../db-schema/places.md) but of the [m_biblio table](../db-schema/m_biblio.md).

#### SHORT REFERENCE
- Short reference of the bibliographic item as stored in [biblio table](biblio.md)
- DB id: `short`

#### SPECIFIC DETAILS
- Pages of the publication if not precised in the reference
- DB id: `details`

#### DETAILS ABOUT IMAGES
- Pages or figures containing reproductions of (part[s] of) the manuscript
- DB id: `images`
