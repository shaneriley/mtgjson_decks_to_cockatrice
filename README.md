# MTGJSON Preconstructed Deck Files Converter for Cockatrice

## Prerequisites

* Install Node
*
    Download deck list JSON files from MTGJSON.
    * Full set is at [https://mtgjson.com/api/v5/AllDecksFiles.zip](https://mtgjson.com/api/v5/AllDecksFiles.zip)
    * Individual decks are at [https://mtgjson.com/downloads/all-decks/](https://mtgjson.com/downloads/all-decks/)

## Usage

* Download the deck files from MTGJSON and place them in the [AllDeckFiles](./AllDeckFiles) directory
* Run `node convert.js`

The converted Cockatrice deck files will be output in the COD directory.
These can then be moved to the decks directory, specified in Cockatrice's
settings. It is recommended you copy the decks to a subdirectory, to
differentiate between the preconstructed and your custom decks. The current
number of preconstructed decks is 840, which would make it difficult to
browse your own deck creations if copied directly to the directory.
