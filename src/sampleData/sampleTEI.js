const sampleTEI = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-model href="http://www.stoa.org/epidoc/schema/latest/tei-epidoc.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"?>
<?xml-model href="../schematron/ircyr-checking.sch" schematypens="http://purl.oclc.org/dsdl/schematron"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0" xml:lang="en" xmlns:xi="http://www.w3.org/2001/XInclude">
    <teiHeader>
        <fileDesc>
            <titleStmt>
                <title>Epitaph for Lurius Zosimus</title>
                <editor ref="#JP">Jonathan Prag</editor>
                <principal ref="#JP">Jonathan Prag</principal>
                <funder>John Fell OUP Research Fund</funder>
	   <funder><ref target="https://cordis.europa.eu/project/id/885040">ERC Advanced Grant no.885040</ref></funder>
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
                <idno type="filename">ISic000002</idno>
                <idno type="TM">491568</idno>
                <idno type="EDR">141180</idno>
                <idno type="EDH"/>
                <idno type="EDCS">21900397</idno>
                <idno type="PHI"/>
                <idno type="URI">http://sicily.classics.ox.ac.uk/inscription/ISic000002</idno>
                <idno type="DOI" when="2020-12-17">10.5281/zenodo.4333725</idno>
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
                        <repository role="museum" ref="http://sicily.classics.ox.ac.uk/museum/064">Museo Archeologico Regionale Antonino Salinas</repository>
                        <idno type="inventory">3502</idno>
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
                                    <material ana="#material.stone.marble" ref="http://www.eagle-network.eu/voc/material/lod/48.html">marble</material>
                                    <objectType/>
                                    <dimensions>
                                        <height unit="cm"/>
                                        <width unit="cm"/>
                                        <depth unit="cm"/>
                                    </dimensions>
                                </support>
                                <condition/>
		    </supportDesc>
                            <layoutDesc>
                                <layout>
                                    <rs ana="#execution.chiselled" ref="http://www.eagle-network.eu/voc/writing/lod/1">chiselled</rs>
                                	<damage/>
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
                                <placeName type="ancient" ref="http://pleiades.stoa.org/places/462270">Catina</placeName>
                                <placeName type="modern" ref="http://sws.geonames.org/2525068">Catania</placeName>
                                <geo>37.49223, 15.07041</geo>
                            </origPlace>
                            <origDate datingMethod="#julian" notBefore-custom="0200" notAfter-custom="0300">C3 AD ?</origDate>
                        </origin>
                        <provenance type="found"/>
                        <provenance type="observed" subtype="autopsied">No Autopsy</provenance>
                        <acquisition>Palermo, Museo Archeologico Regionale Antonino Salinas no. 3502</acquisition>
                    </history>
                </msDesc>
            </sourceDesc>
        </fileDesc>
        <encodingDesc>
             <p>Encoded following EpiDoc guidelines 9.2</p>
             <xi:include href="../alists/ISicily-taxonomies.xml">
                 <xi:fallback>
                     <p>Taxonomies for ISicily controlled values</p>
                 </xi:fallback>
             </xi:include>
         </encodingDesc>
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
                    <term ana="#function.funerary" ref="http://www.eagle-network.eu/voc/typeins/lod/92.html">funerary</term>
                </keywords>
            </textClass>
        </profileDesc>
        <revisionDesc status="draft">
            <listChange>
                <change when="2016-12-03" who="#JCu">James Cummings autogenerated EpiDoc output from database</change>
                <change when="2017-07-31" who="#JP">Jonathan Prag checked the EpiDoc</change>
            	   <change when="2020-10-05" who="#SS">Simona Stoyanova normalised Unicode</change>             	   
            	   <change when="2020-10-08" who="#SS">Simona Stoyanova updated list of languages</change>
                <change when="2020-10-30" who="#JP">Jonathan Prag test relocated geo in origPlace; tidied up epidoc</change>
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
            <div type="edition" xml:space="preserve" resp="#JP">
                <div type="textpart" subtype="section" xml:lang="la" n="a">
                    <ab>
                    <lb n="1"/><expan><abbr>D</abbr><ex>is</ex></expan> <!-- D(is) -->
                    <g type="interpunct">·</g> <!-- display the dot and keep the reference to charDecl.xml as a fall-back for rendering, as ((interpunct)) -->
                    <expan><abbr>M</abbr><ex>anibus</ex></expan> <g type="interpunct">·</g> <expan><abbr>s</abbr><ex>acrum</ex></expan>
                    <lb n="2"/><persName><name>Lurius</name> <g type="interpunct">·</g> 
                        <name>Zosimus</name></persName> <!-- persName will have ref to external list of all persons; name will have ref to external list of all names -->
                    <lb n="3"/><expan><abbr>vix</abbr><ex>it</ex></expan> <g type="interpunct">·</g> annis <g type="interpunct">·</g> 
                       <num value="7">VII</num> <!-- Do we want a pop-up with Arabic value of all numerals?  -->
                    <lb n="4"/><persName><name>Luria</name> <g type="interpunct">·</g> <name><expan><abbr>Melanth</abbr><ex>e</ex></expan></name></persName> i <!-- ideally no space between the first part of the word and the hyphen -->
                    <lb n="5" break="no"/>n <g type="interpunct">·</g> suo <g type="interpunct">·</g> filio <g type="interpunct">·</g> fecit
                    <lb n="6"/><choice><orig>Caesare</orig><reg>Caesari</reg></choice> <!-- in this div keep the text in orig; output the text in reg into app/note -->
                </ab>
                </div>
                <div type="textpart" subtype="section" xml:lang="grc" n="b">
                    <ab>
                    <lb n="1"/>Εὐμοίρει Θεοκτίστην <milestone unit="section" n="1"/>Οὐλπία δέξε τεκοῦσα Θεοκτίστην <!-- for milestones output a pipe | with a superscript number taken from the @n -->
                    <lb n="2" style="text-direction:r-to-l"/>Φαίδιμος ἐποίε <!-- to indicate right-to-left direction of text, output ← between the line number and the text  -->
                    <lb n="3"/><orig>ΑΒΓ</orig>  <!-- leave content of orig in uppercase -->
                    <lb n="4"/><supplied reason="lost">D</supplied><unclear>io</unclear>cletiano Pio  <!-- all charaters in unclear output with an underdot &#x0323; --> 
                    <lb n="5"/><del rend="erasure">lio</del> <!-- [[lio]]; it could have unclear letter inside, so make underdots possible if needed -->    
                    <lb n="6"/><del rend="erasure"><supplied reason="lost">Ale</supplied>xandro</del> <!-- ⟦[Ale]xandro⟧ - two brackets to indicate the erasure, additional set to indicate the restored bit -->    
                    <lb n="8"/><del rend="erasure"><gap reason="lost" quantity="4" unit="character"/></del>  <!-- ⟦[·· 4··]⟧ - two brackets for the erasure, another set for the gap with its quantity --> 
                    <lb n="9"/>ἔτ<subst><del rend="corrected">η</del><add place="overstrike">ῶν</add></subst>  <!-- output the word with the content of <add> between «», so ἔτ«ῶν»; output the deleted version in an app/note, so ἔτη  -->   
                    <lb n="10"/>ἑ<add place="above">κ</add>κέδεκα <!-- output slashes around the added character, so ἑ\κ/κέδεκα --> 
                    <lb n="11"/><gap reason="illegible" quantity="3" unit="character"/> <!-- output as three dots with space between them . . . -->
                    <lb n="12"/><gap reason="illegible" extent="unknown" unit="character"/> <!-- output as ·· ? ··  -->
                    <lb n="13"/><gap reason="illegible" quantity="7" unit="character" precision="low"/>  <!-- output as ·· ca. 7··  -->
                    <lb n="14"/><gap reason="illegible" atLeast="4" atMost="6" unit="character"/>   <!-- output as ·· 3-4·· -->
                     <lb n="15"/><gap reason="illegible" atLeast="3" atMost="5" unit="line"/>  <!-- output 'Traces of 3-5 lines' -->
                     <lb n="16"/><gap reason="lost" quantity="5" unit="character"/> <!-- [·· 5··]  -->
                     <lb n="17"/><gap reason="lost" extent="unknown" unit="character"/>   <!-- [·· ? ··]  -->
                     <lb n="18"/><gap reason="lost" quantity="12" unit="character" precision="low"/> <!-- [·· ca. 12··]  -->
                     <lb n="19"/><gap reason="lost" atLeast="1" atMost="3" unit="character"/> <!-- [ -1-3- ]  -->
                     <lb n="20"/><gap reason="omitted" extent="unknown" unit="character"/> <!-- <·· ? ··> -->
                     <lb n="21"/><space quantity="1" unit="character"/> <!-- vac.; if quantity more than 1, output e.g. 'vac. 3' with value of @quantity -->
                     <lb n="22"/><space extent="3" unit="line"/> <!-- if space is measured in lines, output 'vacat' -->
                     <lb n="23"/><handShift new="#h2"/>Ὡριγένης <!-- @new refers to a handNote/@xml:id declared in the header; output (hand 2) before the text -->
                     <lb n="24"/><hi rend="apex">a</hi> <!-- á -->
                     <lb n="25"/><hi rend="supraline">θε</hi> <!--  θε with a line avobe which I can't paste in the xml -->
                     <lb n="26"/>ab<hi rend="superscript">c</hi> <!-- normal superscript rendering; same logic for subscript --> 
                     <lb n="27"/>Εὐα<hi rend="reversed">ν</hi>τήτῳ <!-- Εὐα((ν))τήτῳ -->  
                     <lb n="29"/><supplied reason="lost">In</supplied>comparabilis <!-- [In]comparabilis -->
                     <lb n="30"/><supplied reason="lost" cert="low">ὁμο</supplied>λογῶ  <!-- [ὁμο(?)]λογῶ -->
                     <lb n="31"/><w><supplied reason="lost">diui</supplied></w> <name><supplied reason="lost">Tra</supplied>iani</name>  <!-- [diui Tra]iani -->
                     <lb n="32"/><supplied reason="lost"><expan><abbr>co</abbr><ex>n</ex><abbr>s</abbr><ex>uli</ex></expan></supplied> 
                                        <num><supplied reason="lost">I</supplied>V</num> <!-- [co(n)s(uli) I]V -->
                     <lb n="33"/><gap reason="lost" quantity="4" unit="character"><desc>personal name</desc></gap>  <!-- [.. ? ..personal name]  -->
                     <lb n="34"/><supplied reason="lost" evidence="previouseditor">ὑπ</supplied>ὲρ  <!-- underline the content of the supplied when @evidence is 'previouseditor' -->
                     <lb n="35"/>Ἰουλιανὴ<surplus>ν</surplus> <!-- Ἰουλιανὴ{ν} -->   
                     <lb n="36"/>Valent<supplied reason="omitted">in</supplied>iani <!-- Valent<in>iani -->
                     <lb n="37"/><expan><abbr>Iul</abbr><ex cert="low">ius</ex></expan> <!-- Iul(ius?) -->
                     <lb n="38"/><abbr>στρατηγ</abbr>  <!-- στρατηγ(- - -) -->
                     <lb n="39"/><expan><abbr><am><g ref="#sestertius"/></am></abbr><ex>sestertius</ex></expan> <!-- (sestertius) -->
                     <lb n="40"/>clarissima <supplied reason="subaudible">femina</supplied> Iulia  <!-- clarissima (femina) Iulia -->   
                     <lb n="41"/><note>editor's note here</note>  <!-- (editor's note here) -->
                     <lb n="42"/>
                </ab>
                <ab>
                    <cb n="1"/><!-- when text is in columns, output 'Col. 1' before the text content, taking the number from the @n -->
                    <lb n="2"/>στραταγοὶ διὰ πέντε ἐτέων·
                    <lb n="3"/>ἐπὶ Ἱστιείου<!-- a.1 -->
                    <lb n="4"/>Νυμφόδωρος Σιμίσκου
                    <lb n="5"/>Φιλιστίων Θαρρία
                    <lb n="6"/>ἐπὶ Δαματρίου<!-- a.2 -->
                    <lb n="7"/>Ἀριστέας Ἀρτεμιδώρου
                    <lb n="8"/>Ἀγάθαρχος Εὐάνδρου
                    <lb n="9"/>ἐπὶ Ἀριστέος<!-- a.3 -->
                    <cb n="2"/>Εὐπόλεμος Εὐάνδρου  <!-- second column starts here, it can be mid-text -->
                    <lb n="10"/>Ἡράκλητος Ἀγωνίππου
                    <lb n="11"/>ἐπὶ Φρύνιος<!-- a.4 -->
                </ab>
                </div>
            </div>
            <div type="apparatus">
                <listApp>
                    <app loc="Line 4-5">
                        <note>Mommsen rejects the alternative reading of 'Melanthin(a) suo'</note>
                    </app>
                </listApp>
            </div>
            <div type="translation" xml:lang="en" resp="#JP">
                <p>Sacred to the shades of the underworld. Luris Zosimus lived for 7 years. Luria Melanthe made it for her son.</p>
            </div>
            <div type="commentary">
                <p><!--commentary--></p>
            </div>
            <div type="bibliography">
                <listBibl type="edition">
                    <bibl type="corpus" n="CIL">
                        <citedRange>
                            <ref target="http://arachne.uni-koeln.de/books/CILv10pII1883">10.7075</ref>
                        </citedRange>
                        <ptr target="https://www.zotero.org/groups/382445/items/GQN8UZSI"/>
                    </bibl>
                    <bibl type="corpus" n="ILMusPalermo">
                        <citedRange>2</citedRange>
                        <ptr target="https://www.zotero.org/groups/382445/items/FZWWPUD6"/>
                    </bibl>
                    <bibl/>
                </listBibl>
	   <listBibl type="discussion"><bibl/></listBibl>
            </div>
        </body>
    </text>
</TEI>`

export default sampleTEI