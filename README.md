---
title: PAThs documentation repository
permalink: /
---

This repository is maintained by Julian Bogdani
[julian.bogdani@uniroma1.it](mailto:julian.bogdani@uniroma1.it)

Welcome to the [PAThs](http://paths.uniroma1.it) documentation repository, which
is still at a **very early phase of drafting**.

All documentation is released under [MIT License](LICENSE.txt)

As soon as new documentation is being made available by PAThs’ team, it will immediately
be added and published here (source code in
[Markdown format](https://daringfireball.net/projects/markdown/)) and in our web site,
[paths.uniroma1.it](http://paths.uniroma1.it) (PDF format).

The PDF version is automatically exported from the Markdown one, available and
maintained as a standalone repository on
[PAThs’ account on GitHub](https://github.com/paths-erc/paths-docs). Please refer
always to the online version and consider the PDF version as a secondary source.

Please do not hesitate to report any inconsistency, error, or
typographical misprint you may notice by opening a new [issue](https://github.com/paths-erc/paths-docs/issues).

---

## Available documentation:
- [Users’ handbook](handbook)
- [Database schema](schema)
- [The vectorization protocol](/geodata/)

## Changelog

- v. **0.12** [2019-03-28] Added field `manuscripts`.`isbookbinding`
- v. **0.11** [2019-03-17] Added first version of the vectorization protocol
- v. **0.10** [2019-01-31] Doc updated:
  - Added documentation for `manuscripts`.`issinglefrag`
  - Added DDL for auxiliary tables

- v. **0.9** [2018-11-06] Changes on database schema:
  - Dropped `places.copticname`, `places.greekname`, `places.arabicname`, `places.arabictranslname`, `places.egyptianname`
  - Updated handbook section regarding `Manuscripts`
  - Updated handbook section regarding `Places`

- v. **0.8** [2018-10-30] Doc updated
  - Updated handbook section regarding `Manuscripts`
  - Updated handbook section regarding `Places`

- v. **0.7** [2018-08-30] Changes on database schema:
  - Added field places.meris
  - Added documentation on places

- v. **0.6** [2018-04-25] Changes on database schema: removed `Writing` fields in `Manuscript` table and added new `Hands` plugin
  - Added table `paths__m_hands`
  - Added `manuscripts.handstot`
  - Removed `manuscripts.modulartypology`
  - Removed `manuscripts.writingaxis`
  - Removed `manuscripts.thickandthin`
  - Removed `manuscripts.typeofeos`
  - Removed `manuscripts.typeofm`
  - Removed `manuscripts.typeofr`
  - Removed `manuscripts.typeofy`
  - Removed `manuscripts.typeoff`
  - Removed `manuscripts.writingnotes`
  - Removed `manuscripts.changeofhand`
- v. **0.5** [2018-04-05] Changes on database schema
  - Added table `paths__persons`
  - Added table `paths__m_nameforms`
- v. **0.4** [2018-03-28] Changes on database schema
  - Added `biblio.seriesvolume`
  - `paths__manuscripts.leaftabs` renamed to `paths__manuscripts.leaftabsnotes`
  - Added `paths__manuscripts.leaftabs`
- v. **0.3** [2018-03-22] Multiple changes on database schema
  - Added `paths__works.status`
  - Removed `titles.columns`
  - Added `titles.status`
  - Added `colophons.status`
  - Added `authors.status`
  - Added `places.status`
  - Added `manuscripts.status`
  - Added `m_shelfmarks.sort`
  - `manuscripts.propwuw` changed to `manuscripts.propwt`
  - Enhanced inline docs
- v. **0.2** [2018-01-30] Added user handbook for entity `Manuscripts`
- v. **0.1** [2018-01-05] Initial commit
