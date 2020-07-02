---
title: "Dump files from PAThs database to Trismegistos"
layout: default
permalink: /data/tm-dumps/
---


The following files have been exported from [PAThs database](https://atlas.paths-erc.eu)
in order to be processed and imported by [Trismegistos](trismegistos.org).

Latest export was completed on **2020-07-01**.

## ms-plain-pre-800.json
[Download](ms-plain-pre-800.json)

Contains a plain list of manuscripts, dated or datable before 800 CE:
- `id`      i.e. [CLM Identifier](https://docs.paths-erc.eu/handbook/manuscripts#clm)
- `cmclid`  i.e. [CMCL Identifier](https://docs.paths-erc.eu/handbook/manuscripts#cmcl)
- `tm`      i.e. [Trismegistos Identifier](https://docs.paths-erc.eu/handbook/manuscripts#tm)
- `ldab`    i.e. [LDAB Identifier](https://docs.paths-erc.eu/handbook/manuscripts#ldab)
- `writingsupport` i.e. [Writing support](https://docs.paths-erc.eu/handbook/manuscripts#writing-support)
- `bookform` i.e. [Book form](https://docs.paths-erc.eu/handbook/manuscripts#book-form)
- `chronofrom` i.e. [Chronology from](https://docs.paths-erc.eu/handbook/manuscripts#from)
- `chronoto` i.e. [Chronology to](https://docs.paths-erc.eu/handbook/manuscripts#to)

This list is also available as real-time web service, in JSON format 
[at this link](https://db.bradypus.net/api/v2/paths?verb=search&shortsql=@manuscripts~[id:clm,cmclid,tm,ldab,writingsupport,bookform,chronofrom,chronoto~?chronofrom|%3C|801&records_per_page=1500).

Preview
```json
{
    "head": {
        "total_rows": 849,
        "total_pages": 1,
        "stripped_table": "manuscripts",
        "table_label": "Manuscripts",
        "page": 1,
        "no_records_shown": 849
    },
    "debug": false,
    "records": [
        {
            "clm": "14",
            "cmclid": "CMCL.AN",
            "tm": "108165",
            "ldab": "108165",
            "writingsupport": "papyrus",
            "bookform": "codex",
            "chronofrom": "701",
            "chronoto": "800"
        },
        {
            "clm": "15",
            "cmclid": "CMCL.AO",
            "tm": "108159",
            "ldab": "108159",
            "writingsupport": "papyrus",
            "bookform": "codex",
            "chronofrom": "701",
            "chronoto": "800"
        },
        ...
```

---

## ms-full-pre-800.json
[Download](ms-full-pre-800.json)

Contains a plain list of manuscripts, dated or datable before 800 CE:
- `id`      i.e. [CLM Identifier](https://docs.paths-erc.eu/handbook/manuscripts#clm)
- `cmclid`  i.e. [CMCL Identifier](https://docs.paths-erc.eu/handbook/manuscripts#cmcl)
- `tm`      i.e. [Trismegistos Identifier](https://docs.paths-erc.eu/handbook/manuscripts#tm)
- `ldab`    i.e. [LDAB Identifier](https://docs.paths-erc.eu/handbook/manuscripts#ldab)
- `writingsupport` i.e. [Writing support](https://docs.paths-erc.eu/handbook/manuscripts#writing-support)
- `bookform` i.e. [Book form](https://docs.paths-erc.eu/handbook/manuscripts#book-form)
- `chronofrom` i.e. [Chronology from](https://docs.paths-erc.eu/handbook/manuscripts#chronofrom)
- `chronoto` i.e. [Chronology to](https://docs.paths-erc.eu/handbook/manuscripts#to)
- `fullname` i.e. Collection full name
- `shelfmark` i.e. Shelfmark number
- `pp`        i.e. Pages

**Please note**: due to the 1-to-many relationship between manuscripts and shelfmarks,
the manuscript data are repeated for each different shekfmark!

This list is also available as real-time web service, in JSON format 
[at this link](https://db.bradypus.net/api/v2/paths?verb=search&shortsql=@manuscripts~[manuscripts.id:clm,manuscripts.cmclid,manuscripts.tm,manuscripts.ldab,manuscripts.writingsupport,manuscripts.bookform,manuscripts.chronofrom,manuscripts.chronoto,collections.fullname,m_shelfmarks.shelfmark,m_shelfmarks.pp~%2Bm_shelfmarks||m_shelfmarks.table_link|=|paths__manuscripts||AND|manuscripts.id|=|^m_shelfmarks.id_link~%2Bcollections||collections.id|=|^m_shelfmarks.collection~?chronofrom|%3C|801&records_per_page=2000).

Preview
```json
{
    "head": {
        "total_rows": 1476,
        "total_pages": 1,
        "stripped_table": "manuscripts",
        "table_label": "Manuscripts",
        "page": 1,
        "no_records_shown": 1476
    },
    "debug": false,
    "records": [
        {
            "clm": "14",
            "cmclid": "CMCL.AN",
            "tm": "108165",
            "ldab": "108165",
            "writingsupport": "papyrus",
            "bookform": "codex",
            "chronofrom": "701",
            "chronoto": "800",
            "fullname": "Russian Federation, Moscow, Puškin Museum ",
            "shelfmark": "I.1.B0690",
            "pp": "(026-027%)"
        },
        {
            "clm": "14",
            "cmclid": "CMCL.AN",
            "tm": "108165",
            "ldab": "108165",
            "writingsupport": "papyrus",
            "bookform": "codex",
            "chronofrom": "701",
            "chronoto": "800",
            "fullname": "Austria, Wien, Österreichische Nationalbibliothek - Papyrussammlung, K",
            "shelfmark": "04038",
            "pp": ""
        },
        ...
```

---

## places.json
[Download](places.json)

Contains a plain list of places:
- `id`      i.e. [PAThs Place Identifier](https://docs.paths-erc.eu/handbook/places#id)
- `name`  i.e. [Site Name](https://docs.paths-erc.eu/handbook/places#site-name)
- `tm`      i.e. [Trismegistos GeoID](https://docs.paths-erc.eu/handbook/places#trismegistos-geoid)
- `pleiades`    i.e. [Pleiades Id](https://docs.paths-erc.eu/handbook/places#pleiades-id)
- `region` i.e. [Region](https://docs.paths-erc.eu/handbook/places#region)

This list is also available as real-time web service, in JSON format [at this link](https://db.bradypus.net/api/v2/paths?verb=search&shortsql=@places~[id,name,tmgeo,pleiades,region&pretty=1&records_per_page=1000).

Preview
```json
{
    "head": {
        "total_rows": 419,
        "total_pages": 1,
        "stripped_table": "places",
        "table_label": "Places",
        "page": 1,
        "no_records_shown": 419
    },
    "debug": false,
    "records": [
        {
            "id": "1",
            "name": "Memphis",
            "tmgeo": "1344",
            "pleiades": "736963",
            "region": "Lower Egypt (Delta)"
        },
        {
            "id": "2",
            "name": "Letopolis",
            "tmgeo": "1245",
            "pleiades": "727149",
            "region": "Lower Egypt (Delta)"
        },
        ...
```