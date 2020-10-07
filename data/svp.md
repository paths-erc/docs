---
title: PAThs Simple Vectorization Protocol
layout: default
---

{% include data-menu.html %}

## Introduction
PAThs Simple Vectorization Protocol or simply SVP is a very simple but rich protocol
to vecotorize archaeological or architectonic legacy data. It was firstly developed at PAThs
as a tool to easily encode rich set of information in very a simple and concise form and
in a short time developed to become a general purpose tool, fit to any chronological
or cultural context. 

Chronological phases, state of preservation, reconstruction hypothesis, 
typology of the building parts, elevation information, etc., can be easily
endoded with a help of minimal and higly intuitive vocabularies.

Vector data encoded with SVP can be used in map applications
both in desktop environment (GIS) and in the Web (webGIS).

Feel free to use it, and [drop us a line](julian.bogdani@uniroma1.it) if you found 
it useful for ypur everyday work.

![SVP at work](/images/svp-at-work.png "SVP at work")


---

## Copyright and license
SVP is free to use and to develop.

It was created by [Julian Bogdani](julian.bogdani@uniroma1.it), at 
[PAThs](http://paths.uniroma1.it) and it is distributed with
[ Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/), which is a
[Free Culture License](https://creativecommons.org/freeworks).

It means that you are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material
for any purpose, even commercially.

Under the following terms:
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- **No additional restrictions** — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

---

## Caveat
THE PROTOCOL IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE PROTOCOL OR THE USE OR
OTHER DEALINGS IN THE PROTOCOL.

---

## Current version
SVP follows the [semver](https://semver.org/) syntax for version tracking.

The current version is **1.0.0**

---

### File format
This protocol is not about defining a unique or the most efficient file-format for the vectorization process, but mainly about defining a common structure, independently from the file format. At “PAThs” [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) is being used as main vector file format, yet other formats can be used, like [Esri Shapefile](https://en.wikipedia.org/wiki/Shapefile), [spatialite](https://en.wikipedia.org/wiki/SpatiaLite), [PostGIS](https://en.wikipedia.org/wiki/PostGIS), [Geopackage](https://en.wikipedia.org/wiki/GeoPackage), etc.

---

### Data containers
Data containers should be divided by geometry type: points, (poly)lines and polygons should be kept separated, not due to encoding limits (which exists since most formats accepts only one geometry type per layer/table), but mainly for styling/output reasons.

Data containers of different geometries share the same structure. This is the most important point here, since structure defines semantics, not graphical output. This document always refers to polygon data, which are the most complex to draw and style, but also the most flexible and ductile to represent complex information.

---

### What does this protocol define?
This protocol defines **data structure** and **best-practices** for digital encoding architectonical documentation in vector formats. It clears the path in the way the vectorization process is performed, the data and metadata that are being recorded and defines a very simple yet powerful way of graphically describing archaeological data.

---

### What does this protocol define not?
- This protocol **does not provide** actual technology for vectorizing raster data, nor shared platforms for their publication.
- This protocol **does not provide yet** tools to validate your data. If you are interested in contributing, feel free to join.
- This protocol **does not provide yet** ready-to-use style definitions to render your data. If you are interested in contributing, feel free to join.
- This protocol **does not consider** absolute chronology, since it is mainly focused on architectonic remains documented in legacy data, where information on absolute chronology is both vague and rare. It is more useful to record information on relative chronology, phases, which can be easier to detect and represent.

---

## Attribute list
The definition of the attribute list and values to use for each field is the most important step of the entire process.

#### Identification / Location
- `place` (*Text, 255*): Identifier of the place/site where the building being vectorized is located. At PAThs the [Place ID](https://docs.paths-erc.eu/handbook/places#id) is being used.
- `subplace` (*Text, 255*): Identifier, if applicable, of the sub-site building, structure or area that is being vectorized.

#### Description
- `reconstr` (*Integer, 1*): whether the feature is/was visible/preserved or was hypothetically reconstructed when surveyed.
  - **0** (**null**) if the feature was clearly visible and preserved when surveyed; usually a solid line is used to represent this feature.
  - **1** if the feature is not visible or preserved and has bee hypothetically reconstructed by the surveyor or the author of the source drawing; usually a dashed line is used to represent these features.
  - **2** if the feature is not visible or preserved and has been hypothetically reconstructed by the operator who vectorised the images
- `part` (*Text, 10,0*): defines what part of the building the features is. This is not about the function of the feature in the architectonical complex (except but for a few cases), but about the conventional way of representation.
  - **null**, default value, used for in most cases, especially when no information is provided in the source documentation.
  - **s**, stands for *sectioned* and is used for walls or other parts that are sectioned or cut by the projection plane.
  - **u**, stands for *upper projection* and is used for structures that does not intersect the projection plane, but are located above it. It can used for ceilings, domes, etc.
  - **l**, stands for *lower projection* and is used for structures that does not intersect the projection plane, but are located below it. It can used for pavements, benches, low walls, etc.
  - **d**, stands for *doorways* and is an exception of the above mentioned rule of not recording the building parts. Yet passageways and doorways need an easy way to be reported.

#### Chronology
- `phase` (*Integer64*) a numeric value indicating relative chronology. Both negative numbers can be used to extend the relative chronology to the past and decimal numbers, to further detail sub-phases. **null** values can be used for mono-phasic buildings and/or main phase. The main phase is not the architectonically most important phase, but the phase on which the research puts its main focus.

#### Other metadada
- `lost` (*Integer, 0*), whether a feature is lost (**1**) or not (**0** or **null**). This is different from `reconstr` since a feature might have been preserved when surveyed (reconstr = null\|0) but no more visible (lost = 1) because buried or damaged.
- `scale` (*Integer, 10*), the scale of the original plan from which the feature has been vectorized. Enter only the second part of the ratio scale, presuming that the first part is always 1, eg. for ratio scale **1:200000** enter **200000**.
- `source` (*String, 30*), contains the bibliographic or archive reference to the document used as the source for the vectorization. At PAThs, the Zotero identifier of [PAThs official bibliographic repository is being used](https://www.zotero.org/groups/2189557/erc-paths).
- `subsource` (*String, 255*), enter page number and or figure number of the bibliographic record containing the original image.
- `operator` (*String, 255*), name or codename of the operator who vectorised the image.
- `date` (*Datetime*), Datetime of the vectorization process.

#### Elevation
- `height` (*Double, 7,2*), elevation of the feature for extrusion purposes
- `minHeight` (*Integer, 10*), offset elevation of the feature for extrusion purposes

---

## Sample code (GeoJSON)


```json
{
  "type": "FeatureCollection",
  "name": "polygons",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "place": 338,
        "subplace": "Eastern Church",
        "reconstr": 0,
        "part": null,
        "phase": null,
        "lost": null,
        "scale": null,
        "source": "BGQ6JNX2",
        "subsource": null,
        "operator": "JB",
        "date": null,
        "height": 3.1,
        "minHeight": 0.1
        },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [ [ [ [ 29.514580528538012, 30.942515705530337 ], [ 29.514570907686849, 30.942528387561413 ], [ 29.514574551948652, 30.942530574118496 ], [ 29.514583443947455, 30.942518183628362 ], [ 29.514580528538012, 30.942515705530337 ] ] ] ]
      }
    }
  ]
}
```

---
## Validation
[**Update 2020-03-12**]  
Is is now availabe a very simple validation tool for SVP, published at [https://paths-erc.eu/svp-validate/](https://paths-erc.eu/svp-validate/).
This tool will not check about geometry consistency; only the attributes will be checked. 

The tool is still under development; feedback and suggestions are much appreciated.

---

## Demo
For a fully working example, built with Leaflet follow [this link](./demo/). It uses a sample geojson file following the most recent version of the protocol.
