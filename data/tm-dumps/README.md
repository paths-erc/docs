---
title: "Dump files from PAThs database"
layout: default
permalink: /data/tm-dumps/
---


The following files have been exported from [PAThs database](https://atlas.paths-erc.eu)
in order to be processed and imported by [Trismegistos](trismegistos.org).

Latest export was completed on **2019-05-21**.

## ms-plain.csv
[Download](ms-plain.csv)

Contains a plain list of manuscripts, dated or datable before 800 CE:
- `id`      i.e. [CLM Identifier](https://docs.paths-erc.eu/handbook/manuscripts#clm)
- `cmclid`  i.e. [CMCL Identifier](https://docs.paths-erc.eu/handbook/manuscripts#cmcl)
- `tm`      i.e. [Trismegistos Identifier](https://docs.paths-erc.eu/handbook/manuscripts#tm)
- `ldab`    i.e. [LDAB Identifier](https://docs.paths-erc.eu/handbook/manuscripts#ldab)
- `writingsupport` i.e. [Writing support](https://docs.paths-erc.eu/handbook/manuscripts#writing-support)
- `bookform` i.e. [Book form](https://docs.paths-erc.eu/handbook/manuscripts#book-form)
- `chronofrom` i.e. [Chronology from](https://docs.paths-erc.eu/handbook/manuscripts#from)
- `chronoto` i.e. [Chronology to](https://docs.paths-erc.eu/handbook/manuscripts#to)

This list is also available as real-time web service, in JSON format [at this link](https://db-dev.bradypus.net/api/paths/manuscripts?verb=search&type=encoded&q_encoded=YGNocm9ub2Zyb21gPDgwMQ%3D%3D&limit_start=0&limit_end=20000&fields[paths__manuscripts.id+as+clm]=CLM&fields[paths__manuscripts.cmclid]=CMCL&fields[paths__manuscripts.tm]=TM&fields[paths__manuscripts.ldab]=LDAB&fields[paths__manuscripts.writingsupport]=Writing+support&fields[paths__manuscripts.bookform]=Book+form&fields[paths__manuscripts.chronofrom]=From&fields[paths__manuscripts.chronoto]=To).

---

## ms-full.csv
[Download](ms-full.csv)

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

This list is also available as real-time web service, in JSON format [at this link](http://db-dev.bradypus.net/api/paths/manuscripts?verb=search&type=encoded&q_encoded=YGNocm9ub2Zyb21gPDgwMQ%3D%3D&limit_start=0&limit_end=20000&fields[paths__manuscripts.id+as+clm]=CLM&fields[paths__manuscripts.cmclid]=CMCL&fields[paths__manuscripts.tm]=TM&fields[paths__manuscripts.ldab]=LDAB&fields[paths__manuscripts.writingsupport]=Writing+support&fields[paths__manuscripts.bookform]=Book+form&fields[paths__manuscripts.chronofrom]=From&fields[paths__manuscripts.chronoto]=To&fields[c.fullname]=Collection&fields[s.shelfmark]=Shelfmark&fields[s.pp]=Pp&join=+JOIN+paths__m_shelfmarks+as+s+ON+s.table_link+%3D+%27paths__manuscripts%27+AND+clm+%3D+s.id_link+JOIN++paths__collections+as+c+ON+c.id+%3D+s.collection).

---

## places.csv
[Download](places.csv)

Contains a plain list of manuscripts, dated or datable before 800 CE:
- `id`      i.e. [PAThs Place Identifier](https://docs.paths-erc.eu/handbook/places#id)
- `name`  i.e. [Site Name](https://docs.paths-erc.eu/handbook/places#site-name)
- `tm`      i.e. [Trismegistos GeoID](https://docs.paths-erc.eu/handbook/places#trismegistos-geoid)
- `pleiades`    i.e. [Pleiades Id](https://docs.paths-erc.eu/handbook/places#pleiades-id)
- `region` i.e. [Region](https://docs.paths-erc.eu/handbook/places#region)

This list is also available as real-time web service, in JSON format [at this link](http://db-dev.bradypus.net/api/paths/places?verb=search&type=encoded&q_encoded=MQ==&limit_start=0&limit_end=20000&fields[paths__places.id]=Id&fields[paths__places.name]=Place+name&fields[tm]=Trismegistos+GeoId&fields[paths__places.pleiades]=Pleiades&fields[paths__places.region]=Region).
