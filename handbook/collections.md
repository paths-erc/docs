---
title: "Manual for the correct use and reading of the Collections attested in colophons section of PAThs database"
permalink: "/handbook/collections"
---

A detailed technical description of database schema is published at [schema/collections](../schema/collections).


Ref.: `paths.collections`

---

#### ID
- The unique stable identifier of each Collection. The identifier is a sequential integer provided by the database engine. 
This field id not available to public.
- DB id: `paths__collections.id`

#### CREATOR
- Reference to the user who created the record 
This field id not available to public.
- DB id: `paths__collections.creator`

#### FULL COLLECTION NAME
- Full name of the collection
- DB id: `paths__collections.fullname`

#### CMCL NAME
- Name of the collection as found in the CMCL
- DB id: `paths__collections.cmclname`

#### COUNTRY
- Country where the collection is preserved
- DB id: `paths__collections.country`

#### TOWN
- Town where the collection is preserved
- DB id: `paths__collections.town`

#### INSTITUTION
- Institution where the collection is preserved
- DB id: `paths__collections.institution`

#### NAME
- Well known name (abbreviation) of the collection
- DB id: `paths__collections.name`

#### NOTES
- Descriptive notes for the Collection
- DB id: `paths__collections.notes`

#### EDITORS
- Initials of the person(s) responsible for the record.
- DB id: `paths__collections.editors`

#### STATUS
- If the record has been fully compiled the status is set to `complete`; if it is under study the status is set to `in-progress`. If the status is blank it means that the provided information are incomplete, not reliable and liable to change in the future.
- DB id: `paths__collections.status`

#### LAST MODIFIED
- Date of last edit
- DB id: `paths__collections.lastmodified`

---

### Bibliography
For each Collection multiple instances of the following group of fields can be filed, each one describing a bibliographic reference.

These fields are not part of the [places table](/schema/places) but of the [m_biblio table](/schema/m_biblio).

#### SHORT REFERENCE
- Short reference of the bibliographic item as stored in [biblio table](biblio)
- DB id: `paths__m_biblio.short`

#### SPECIFIC DETAILS
- Pages of the publication if not precised in the reference
- DB id: `paths__m_biblio.details`

#### DETAILS ABOUT IMAGES
- Pages or figures containing reproductions of (part[s] of) the manuscript
- DB id: `paths__m_biblio.images`

