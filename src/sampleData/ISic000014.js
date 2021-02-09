const ISic000014 = `<?xml-model href="http://www.stoa.org/epidoc/schema/latest/tei-epidoc.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"?><?xml-model href="../schematron/ircyr-checking.sch" schematypens="http://purl.oclc.org/dsdl/schematron"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0" xml:lang="en">
    <teiHeader>
        <fileDesc>
            <titleStmt>
                <title>I.Sicily inscription 0014</title>
                <editor ref="#JP">Jonathan Prag</editor>
                <principal ref="#JP">Jonathan Prag</principal>
                <funder>John Fell OUP Research Fund</funder>
                <funder>
                    <ref target="https://cordis.europa.eu/project/id/885040">ERC Advanced Grant no.885040</ref>
                </funder>
                <respStmt>
                    <name xml:id="JP" ref="http://orcid.org/0000-0003-3819-8537">Jonathan Prag</name>
                    <resp>original data collection and editing</resp>
                </respStmt>
                <respStmt>
                    <name xml:id="JCu" ref="http://orcid.org/0000-0002-6686-3728">James Cummings</name>
                    <resp>conversion to EpiDoc</resp>
                </respStmt>
                <respStmt>
                    <name xml:id="JCh" ref="http://orcid.org/0000-0001-6823-0265">James Chartrand</name>
                    <resp>site construction and encoding</resp>
                </respStmt>
                <respStmt>
                    <name xml:id="VV" ref="http://orcid.org/0000-0002-9695-0240">Valeria Vitale</name>
                    <resp>editing of geo data</resp>
                </respStmt>
                <respStmt>
                    <name xml:id="MM">Michael Metcalfe</name>
                    <resp>museum data collection</resp>
                </respStmt>
                <respStmt>
                    <name xml:id="TA" ref="https://orcid.org/0000-0001-8417-7089">Tuuli Ahlholm</name>
                    <resp>EpiDoc editing</resp>
                </respStmt>
                <respStmt>
                    <name xml:id="SS" ref="https://orcid.org/0000-0003-3914-9569">Simona Stoyanova</name>
                    <resp>standardisation of template and tidying up encoding</resp>
                </respStmt>
                <respStmt>
                    <name xml:id="system">system</name>
                    <resp>automated or batch processes</resp>
                </respStmt>
            </titleStmt>
            <publicationStmt>
                <authority>I.Sicily</authority>
                <idno type="filename">ISic000014</idno>
                <idno type="TM">175727</idno>
                <idno type="EDR">074901</idno>
                <idno type="EDH"/>
                <idno type="EDCS">9701489</idno>
                <idno type="PHI"/>
                <idno type="URI">http://sicily.classics.ox.ac.uk/inscription/ISic000014</idno>
                <idno type="DOI" when="2020-12-17">10.5281/zenodo.4333771</idno>
                <availability>
                    <licence target="http://creativecommons.org/licenses/by/4.0/">Licensed under a Creative
                        Commons-Attribution 4.0 licence.
                    </licence>
                </availability>
            </publicationStmt>
            <sourceDesc>
                <msDesc>
                    <msIdentifier>
                        <country>Italy</country>
                        <region>Sicily</region>
                        <settlement>Palermo</settlement>
                        <repository role="museum" ref="http://sicily.classics.ox.ac.uk/museum/064">Museo Archeologico
                            Regionale Antonino Salinas
                        </repository>
                        <idno type="inventory">3514</idno>
                        <!--Adding location for old id numbers if available-->
                        <altIdentifier>
                            <settlement/>
                            <repository/>
                            <idno type="old"/>
                        </altIdentifier>
                    </msIdentifier>
                    <msContents>
                        <textLang mainLang="la">Latin</textLang>
                    </msContents>
                    <physDesc>
                        <objectDesc>
                            <supportDesc>
                                <support>
                                    <material key="limestone" ref="http://www.eagle-network.eu/voc/material/lod/66.html">
                                        limestone
                                    </material>
                                    <dimensions><!--Default values and requires editing-->
                                        <height unit="cm"/>
                                        <width unit="cm"/>
                                        <depth unit="cm"/>
                                    </dimensions>
                                </support>
                                <condition/>
                            </supportDesc>
                            <layoutDesc>
                                <layout>
                                    <rs type="execution" ref="http://www.eagle-network.eu/voc/writing/lod/1">Engraved
                                    </rs>
                                </layout>
                            </layoutDesc>
                        </objectDesc>
                        <handDesc>
                            <handNote><!--Default value and requires editing-->
                                <locus from="line1" to="line1">Line 1</locus>
                                <dimensions type="letterHeight">
                                    <height unit="mm"/>
                                </dimensions>
                                <locus from="line1" to="line2">Interlineation line 1 to 2</locus>
                                <dimensions type="interlinear">
                                    <height unit="mm"/>
                                </dimensions>
                            </handNote>
                        </handDesc>
                    </physDesc>
                    <history>
                        <origin>
                            <origPlace>
                                <placeName type="ancient" ref="http://pleiades.stoa.org/places/462410">Panhormus</placeName>
                                <placeName type="modern" ref="http://sws.geonames.org/2523920">Palermo</placeName>
                                <geo>38.13205, 13.33561</geo>
                            </origPlace>
                            <origDate datingMethod="#julian" notBefore-custom="0200" notAfter-custom="0250">195 - 211 AD
                                (Raepsaet-Charlier, Latomus 33 (1974), 125 rejects the narrow date of Bivona)
                            </origDate>
                        </origin>
                        <provenance type="found"/>
                        <provenance type="observed" subtype="autopsied">No Autopsy</provenance>
                        <acquisition>Palermo, Museo Archeologico Regionale Antonino Salinas no. 3514</acquisition>
                    </history>
                </msDesc>
            </sourceDesc>
        </fileDesc>
        <profileDesc>
            <calendarDesc>
                <calendar xml:id="julian">
                    <p>Julian Calendar</p>
                </calendar>
            </calendarDesc>
            <langUsage>
                <language ident="en">English</language>
                <language ident="it">Italian</language>
                <language ident="grc">Ancient Greek</language>
                <language ident="la">Latin</language>
                <language ident="he">Hebrew</language>
                <language ident="phn">Phoenician</language>
                <language ident="xpu">Punic</language>
                <language ident="osc">Oscan</language>
                <language ident="xly">Elymian</language>
                <language ident="scx">Sikel</language>
                <language ident="sxc">Sikan</language>
            </langUsage>
            <textClass>
                <keywords scheme="http://www.eagle-network.eu/voc/typeins.html">
                    <term key="dedication" ref="http://www.eagle-network.eu/voc/typeins/lod/88.html">dedication</term>
                </keywords>
            </textClass>
        </profileDesc>
        <revisionDesc status="draft">
            <listChange>
                <change when="2016-12-03" who="#JCu">James Cummings autogenerated EpiDoc output from database</change>
                <change when="2018-03-27" who="#TA">Tuuli Ahlholm revised the Epidoc and added an apparatus and translation</change>
                <change when="2020-10-05" who="#SS">Simona Stoyanova normalised Unicode</change>
                <change when="2020-10-08" who="#SS">Simona Stoyanova updated list of languages</change>
                <change when="2020-11-20" who="#SS">Simona Stoyanova added EDCS numbers</change>
                <change when="2020-11-26" who="#SS">Simona Stoyanova restructured bibliography</change>
                <change when="2020-12-17" who="#system">Updated Zenodo DOI</change>
                <change when="2021-01-19" who="#SS">renumbered files, uris and references</change>
            </listChange>
        </revisionDesc>
    </teiHeader>
    <facsimile>
        <surface/>
        <!--delete empty surface above and uncomment template below if needed-->
        <!--
  <surface type="front">
    <graphic n="screen" url="{concat('ISic', $num, '_tiled.tif')}"
      height="4912px" width="7360px">
      <desc>Add Description Here</desc>
    </graphic>
    <graphic n="print" url="{concat('ISic', $num, '.jpg')}" height="3680px" width="5520px">
      <desc>Add Description Here</desc>
    </graphic>
  </surface>

    -->
    </facsimile>
    <text>
        <body>
            <div type="edition" xml:space="preserve" xml:lang="la">
                <ab>
                    <lb n="1"/>Iuliae <g type="interpunct">·</g>
                    <expan>
                        <abbr>Au<supplied reason="lost">g</supplied>
                        </abbr>
                        <ex>ustae</ex>
                    </expan>
                    <lb n="2"/>matri <g type="interpunct">·</g>
                    <expan>
                        <abbr>castro<supplied reason="lost">r</supplied>
                        </abbr>
                        <ex>um</ex>
                    </expan>
                    <lb n="3"/>
                    <expan>
                        <abbr>Imp</abbr>
                        <ex>eratoris</ex>
                    </expan>
                    <g type="interpunct">·</g>
                    <expan>
                        <abbr>L</abbr>
                        <ex>uci</ex>
                    </expan>
                    <g type="interpunct">·</g> Septimi <g type="interpunct">·</g> Severi <g type="interpunct">·</g>
                    <unclear>P</unclear>
                    <supplied reason="lost">ii</supplied>
                    <lb n="4"/>
                    <unclear>P</unclear>ertin<unclear>acis</unclear>
                    <expan>
                        <abbr>
                            <unclear>Au</unclear>g</abbr>
                        <ex>usti</ex>
                    </expan>
                    <g type="interpunct">·</g> Arabi<unclear>c</unclear>
                    <supplied reason="lost">i</supplied>
                    <lb n="5"/>
                    <supplied reason="lost">Adiabenici</supplied>
                    <supplied reason="lost">Parth</supplied>
                    <unclear>i</unclear>
                    <supplied reason="lost">ci</supplied>
                    <supplied reason="lost">Maximi</supplied>
                    <gap reason="lost" extent="unknown" unit="character"/>
                    <lb n="6"/>
                    <gap reason="lost" extent="unknown" unit="line"/>
                </ab>
            </div>
            <div type="apparatus">
                <listApp>
                    <app>
                        <note>Text of ILMusPalermo</note>
                    </app>
                </listApp>
            </div>
            <div type="translation" xml:lang="en" resp="#TA">
                <p>To Julia Augusta, Mother of the Camp, (wife) of Emperor Lucius Septimius Severus Pius Pertinax Augustus, victor in Arabia and Adiabene, great victor in Parthia [...]</p>
            </div>
            <div type="commentary">
                <p><!--commented out pending revision-->
                    <!--frag. imperial dedication, ?to Iulia Domna.-->
                </p>
            </div>
            <div type="bibliography">
                <listBibl type="edition">
                    <bibl type="bulletin" n="AE">
                        <citedRange>1968.0200</citedRange>
                        <ptr target="http://zotero.org/groups/382445/items/R46KDTZX"/>
                    </bibl>
                    <bibl type="corpus" n="ILMusPalermo">
                        <citedRange>14</citedRange>
                        <ptr target="https://www.zotero.org/groups/382445/items/FZWWPUD6"/>
                    </bibl>
                    <bibl>
                        <author>Raepsaet-Charlier</author>
                        <date>1974</date>
                        <citedRange>125</citedRange>
                        <ptr target="https://www.zotero.org/groups/382445/items/PZHQV5MN"/>
                    </bibl>
                    <bibl>
                        <author>Bivona</author>
                        <date>1967</date>
                        <ptr target="https://www.zotero.org/groups/382445/items/9J2C443I"/>
                    </bibl>
                </listBibl>
                <listBibl type="discussion">
                    <bibl/>
                </listBibl>
            </div>
        </body>
    </text>
</TEI>`

export default ISic000014