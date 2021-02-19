---
name: "Full list of manuscripts, dated or datable before 800 CE, exported for Trismegistos"
type: table
date_created: 2021-02-19
lang: English
year: 2020
copyright: PAThs team
license: CC BY-NC-SA
source: Archaeological Atlas of Coptic Literature, https://atlas.paths-erc.eu
availability:
  json: /raw-data/tm-dumps/ms-full-pre-800.json
  webservice: https://bdus.cloud/db/api/paths?verb=search&shortsql=@manuscripts~[manuscripts.id:clm,manuscripts.cmclid,manuscripts.tm,manuscripts.ldab,manuscripts.writingsupport,manuscripts.bookform,manuscripts.chronofrom,manuscripts.chronoto,collections.fullname,m_shelfmarks.shelfmark,m_shelfmarks.pp~]collections||collections.id|=|^m_shelfmarks.collection~?chronofrom|%3C|801&records_per_page=2000
credits:
  - role: Creation
    name: PAThs team
    web: https://paths.uniroma1.it
    email: julian.bogdani@uniroma1.it
---

Contains a full list of manuscripts, dated or datable before 800 CE, exported from PAThs database for importing to Trismegistos dabase. 

**Please note** due to the 1-to-many relationship between manuscripts and shelfmarks, the manuscript data are repeated for each different shekfmark!