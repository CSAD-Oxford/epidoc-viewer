(this["webpackJsonpepidoc-viewer"]=this["webpackJsonpepidoc-viewer"]||[]).push([[0],{51:function(n,e,t){},52:function(n,e,t){},53:function(n,e,t){},59:function(n,e,t){"use strict";t.r(e);var i=t(7),a=t(0),r=t(9),o=t.n(r),s=(t(51),t(38)),c=(t(52),t(93)),p=t(95),l=t(101),d=t(96),u=t(97),g=t(100),m=t(92),h=t(39),x=(t(53),{actions:[{condition:function(n){return"ab"===n.nodeName.toLowerCase()},pre:function(n){return n.className+=" leiden-transcription",n}},{condition:function(n){return"ex"===n.nodeName.toLowerCase()},pre:function(n,e){return n.prepend("("),n.append(")"),n}},{condition:function(n){return"supplied"===n.nodeName.toLowerCase()},pre:function(n,e){return n.prepend("["),n.append("]"),n}},{condition:function(n){return"unclear"===n.nodeName.toLowerCase()},pre:function(n,e){return n.textContent=n.textContent.split("").map((function(n){return n+"\u0323"})).join("").trim(),n}},{condition:function(n){return"hi"===n.nodeName.toLowerCase()},pre:function(n,e){if("ligature"==n.getAttribute("rend")){var t=n.textContent;n.textContent=t.charAt(0)+"\u0302"+t.substring(1)}return n}},{condition:function(n){return"space"===n.nodeName.toLowerCase()},pre:function(n,e){return n.textContent="(vac.".concat(n.getAttribute("extent"),")"),n}},{condition:function(n){return"gap"===n.nodeName.toLowerCase()},pre:function(n,e){var t,i=n.getAttribute("reason"),a=n.getAttribute("extent");n.getAttribute("unit");return"lost"==i?(t="[",t+="unknown"==a?"---":".".repeat(a),t+="]"):"illegible"==i&&(t="+".repeat(a)),n.textContent=t,n}}],type:"application/xml",selector:'div[type="edition"] > *'}),b=function(n){var e=n.tei;return Object(i.jsx)(l.a,{m:4,children:Object(h.a)(e,x)})},f=Object(m.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},button:{maxWidth:"100px",maxHeight:"40px",minWidth:"100px",minHeight:"40px"}});var y=function(){var n=Object(a.useState)('<?xml-model href="http://www.stoa.org/epidoc/schema/latest/tei-epidoc.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"?><?xml-model href="../schematron/ircyr-checking.sch" schematypens="http://purl.oclc.org/dsdl/schematron"?>\n<TEI xmlns="http://www.tei-c.org/ns/1.0" xml:lang="en">\n    <teiHeader>\n        <fileDesc>\n            <titleStmt>\n                <title>I.Sicily inscription 0014</title>\n                <editor ref="#JP">Jonathan Prag</editor>\n                <principal ref="#JP">Jonathan Prag</principal>\n                <funder>John Fell OUP Research Fund</funder>\n                <funder>\n                    <ref target="https://cordis.europa.eu/project/id/885040">ERC Advanced Grant no.885040</ref>\n                </funder>\n                <respStmt>\n                    <name xml:id="JP" ref="http://orcid.org/0000-0003-3819-8537">Jonathan Prag</name>\n                    <resp>original data collection and editing</resp>\n                </respStmt>\n                <respStmt>\n                    <name xml:id="JCu" ref="http://orcid.org/0000-0002-6686-3728">James Cummings</name>\n                    <resp>conversion to EpiDoc</resp>\n                </respStmt>\n                <respStmt>\n                    <name xml:id="JCh" ref="http://orcid.org/0000-0001-6823-0265">James Chartrand</name>\n                    <resp>site construction and encoding</resp>\n                </respStmt>\n                <respStmt>\n                    <name xml:id="VV" ref="http://orcid.org/0000-0002-9695-0240">Valeria Vitale</name>\n                    <resp>editing of geo data</resp>\n                </respStmt>\n                <respStmt>\n                    <name xml:id="MM">Michael Metcalfe</name>\n                    <resp>museum data collection</resp>\n                </respStmt>\n                <respStmt>\n                    <name xml:id="TA" ref="https://orcid.org/0000-0001-8417-7089">Tuuli Ahlholm</name>\n                    <resp>EpiDoc editing</resp>\n                </respStmt>\n                <respStmt>\n                    <name xml:id="SS" ref="https://orcid.org/0000-0003-3914-9569">Simona Stoyanova</name>\n                    <resp>standardisation of template and tidying up encoding</resp>\n                </respStmt>\n                <respStmt>\n                    <name xml:id="system">system</name>\n                    <resp>automated or batch processes</resp>\n                </respStmt>\n            </titleStmt>\n            <publicationStmt>\n                <authority>I.Sicily</authority>\n                <idno type="filename">ISic000014</idno>\n                <idno type="TM">175727</idno>\n                <idno type="EDR">074901</idno>\n                <idno type="EDH"/>\n                <idno type="EDCS">9701489</idno>\n                <idno type="PHI"/>\n                <idno type="URI">http://sicily.classics.ox.ac.uk/inscription/ISic000014</idno>\n                <idno type="DOI" when="2020-12-17">10.5281/zenodo.4333771</idno>\n                <availability>\n                    <licence target="http://creativecommons.org/licenses/by/4.0/">Licensed under a Creative\n                        Commons-Attribution 4.0 licence.\n                    </licence>\n                </availability>\n            </publicationStmt>\n            <sourceDesc>\n                <msDesc>\n                    <msIdentifier>\n                        <country>Italy</country>\n                        <region>Sicily</region>\n                        <settlement>Palermo</settlement>\n                        <repository role="museum" ref="http://sicily.classics.ox.ac.uk/museum/064">Museo Archeologico\n                            Regionale Antonino Salinas\n                        </repository>\n                        <idno type="inventory">3514</idno>\n                        \x3c!--Adding location for old id numbers if available--\x3e\n                        <altIdentifier>\n                            <settlement/>\n                            <repository/>\n                            <idno type="old"/>\n                        </altIdentifier>\n                    </msIdentifier>\n                    <msContents>\n                        <textLang mainLang="la">Latin</textLang>\n                    </msContents>\n                    <physDesc>\n                        <objectDesc>\n                            <supportDesc>\n                                <support>\n                                    <material key="limestone" ref="http://www.eagle-network.eu/voc/material/lod/66.html">\n                                        limestone\n                                    </material>\n                                    <dimensions>\x3c!--Default values and requires editing--\x3e\n                                        <height unit="cm"/>\n                                        <width unit="cm"/>\n                                        <depth unit="cm"/>\n                                    </dimensions>\n                                </support>\n                                <condition/>\n                            </supportDesc>\n                            <layoutDesc>\n                                <layout>\n                                    <rs type="execution" ref="http://www.eagle-network.eu/voc/writing/lod/1">Engraved\n                                    </rs>\n                                </layout>\n                            </layoutDesc>\n                        </objectDesc>\n                        <handDesc>\n                            <handNote>\x3c!--Default value and requires editing--\x3e\n                                <locus from="line1" to="line1">Line 1</locus>\n                                <dimensions type="letterHeight">\n                                    <height unit="mm"/>\n                                </dimensions>\n                                <locus from="line1" to="line2">Interlineation line 1 to 2</locus>\n                                <dimensions type="interlinear">\n                                    <height unit="mm"/>\n                                </dimensions>\n                            </handNote>\n                        </handDesc>\n                    </physDesc>\n                    <history>\n                        <origin>\n                            <origPlace>\n                                <placeName type="ancient" ref="http://pleiades.stoa.org/places/462410">Panhormus</placeName>\n                                <placeName type="modern" ref="http://sws.geonames.org/2523920">Palermo</placeName>\n                                <geo>38.13205, 13.33561</geo>\n                            </origPlace>\n                            <origDate datingMethod="#julian" notBefore-custom="0200" notAfter-custom="0250">195 - 211 AD\n                                (Raepsaet-Charlier, Latomus 33 (1974), 125 rejects the narrow date of Bivona)\n                            </origDate>\n                        </origin>\n                        <provenance type="found"/>\n                        <provenance type="observed" subtype="autopsied">No Autopsy</provenance>\n                        <acquisition>Palermo, Museo Archeologico Regionale Antonino Salinas no. 3514</acquisition>\n                    </history>\n                </msDesc>\n            </sourceDesc>\n        </fileDesc>\n        <profileDesc>\n            <calendarDesc>\n                <calendar xml:id="julian">\n                    <p>Julian Calendar</p>\n                </calendar>\n            </calendarDesc>\n            <langUsage>\n                <language ident="en">English</language>\n                <language ident="it">Italian</language>\n                <language ident="grc">Ancient Greek</language>\n                <language ident="la">Latin</language>\n                <language ident="he">Hebrew</language>\n                <language ident="phn">Phoenician</language>\n                <language ident="xpu">Punic</language>\n                <language ident="osc">Oscan</language>\n                <language ident="xly">Elymian</language>\n                <language ident="scx">Sikel</language>\n                <language ident="sxc">Sikan</language>\n            </langUsage>\n            <textClass>\n                <keywords scheme="http://www.eagle-network.eu/voc/typeins.html">\n                    <term key="dedication" ref="http://www.eagle-network.eu/voc/typeins/lod/88.html">dedication</term>\n                </keywords>\n            </textClass>\n        </profileDesc>\n        <revisionDesc status="draft">\n            <listChange>\n                <change when="2016-12-03" who="#JCu">James Cummings autogenerated EpiDoc output from database</change>\n                <change when="2018-03-27" who="#TA">Tuuli Ahlholm revised the Epidoc and added an apparatus and translation</change>\n                <change when="2020-10-05" who="#SS">Simona Stoyanova normalised Unicode</change>\n                <change when="2020-10-08" who="#SS">Simona Stoyanova updated list of languages</change>\n                <change when="2020-11-20" who="#SS">Simona Stoyanova added EDCS numbers</change>\n                <change when="2020-11-26" who="#SS">Simona Stoyanova restructured bibliography</change>\n                <change when="2020-12-17" who="#system">Updated Zenodo DOI</change>\n                <change when="2021-01-19" who="#SS">renumbered files, uris and references</change>\n            </listChange>\n        </revisionDesc>\n    </teiHeader>\n    <facsimile>\n        <surface/>\n        \x3c!--delete empty surface above and uncomment template below if needed--\x3e\n        \x3c!--\n  <surface type="front">\n    <graphic n="screen" url="{concat(\'ISic\', $num, \'_tiled.tif\')}"\n      height="4912px" width="7360px">\n      <desc>Add Description Here</desc>\n    </graphic>\n    <graphic n="print" url="{concat(\'ISic\', $num, \'.jpg\')}" height="3680px" width="5520px">\n      <desc>Add Description Here</desc>\n    </graphic>\n  </surface>\n\n    --\x3e\n    </facsimile>\n    <text>\n        <body>\n            <div type="edition" xml:space="preserve" xml:lang="la">\n                <ab>\n                    <lb n="1"/>Iuliae <g type="interpunct">\xb7</g>\n                    <expan>\n                        <abbr>Au<supplied reason="lost">g</supplied>\n                        </abbr>\n                        <ex>ustae</ex>\n                    </expan>\n                    <lb n="2"/>matri <g type="interpunct">\xb7</g>\n                    <expan>\n                        <abbr>castro<supplied reason="lost">r</supplied>\n                        </abbr>\n                        <ex>um</ex>\n                    </expan>\n                    <lb n="3"/>\n                    <expan>\n                        <abbr>Imp</abbr>\n                        <ex>eratoris</ex>\n                    </expan>\n                    <g type="interpunct">\xb7</g>\n                    <expan>\n                        <abbr>L</abbr>\n                        <ex>uci</ex>\n                    </expan>\n                    <g type="interpunct">\xb7</g> Septimi <g type="interpunct">\xb7</g> Severi <g type="interpunct">\xb7</g>\n                    <unclear>P</unclear>\n                    <supplied reason="lost">ii</supplied>\n                    <lb n="4"/>\n                    <unclear>P</unclear>ertin<unclear>acis</unclear>\n                    <expan>\n                        <abbr>\n                            <unclear>Au</unclear>g</abbr>\n                        <ex>usti</ex>\n                    </expan>\n                    <g type="interpunct">\xb7</g> Arabi<unclear>c</unclear>\n                    <supplied reason="lost">i</supplied>\n                    <lb n="5"/>\n                    <supplied reason="lost">Adiabenici</supplied>\n                    <supplied reason="lost">Parth</supplied>\n                    <unclear>i</unclear>\n                    <supplied reason="lost">ci</supplied>\n                    <supplied reason="lost">Maximi</supplied>\n                    <gap reason="lost" extent="unknown" unit="character"/>\n                    <lb n="6"/>\n                    <gap reason="lost" extent="unknown" unit="line"/>\n                </ab>\n            </div>\n            <div type="apparatus">\n                <listApp>\n                    <app>\n                        <note>Text of ILMusPalermo</note>\n                    </app>\n                </listApp>\n            </div>\n            <div type="translation" xml:lang="en" resp="#TA">\n                <p>To Julia Augusta, Mother of the Camp, (wife) of Emperor Lucius Septimius Severus Pius Pertinax Augustus, victor in Arabia and Adiabene, great victor in Parthia [...]</p>\n            </div>\n            <div type="commentary">\n                <p>\x3c!--commented out pending revision--\x3e\n                    \x3c!--frag. imperial dedication, ?to Iulia Domna.--\x3e\n                </p>\n            </div>\n            <div type="bibliography">\n                <listBibl type="edition">\n                    <bibl type="bulletin" n="AE">\n                        <citedRange>1968.0200</citedRange>\n                        <ptr target="http://zotero.org/groups/382445/items/R46KDTZX"/>\n                    </bibl>\n                    <bibl type="corpus" n="ILMusPalermo">\n                        <citedRange>14</citedRange>\n                        <ptr target="https://www.zotero.org/groups/382445/items/FZWWPUD6"/>\n                    </bibl>\n                    <bibl>\n                        <author>Raepsaet-Charlier</author>\n                        <date>1974</date>\n                        <citedRange>125</citedRange>\n                        <ptr target="https://www.zotero.org/groups/382445/items/PZHQV5MN"/>\n                    </bibl>\n                    <bibl>\n                        <author>Bivona</author>\n                        <date>1967</date>\n                        <ptr target="https://www.zotero.org/groups/382445/items/9J2C443I"/>\n                    </bibl>\n                </listBibl>\n                <listBibl type="discussion">\n                    <bibl/>\n                </listBibl>\n            </div>\n        </body>\n    </text>\n</TEI>'),e=Object(s.a)(n,2),t=e[0],r=e[1];return f(),Object(i.jsxs)(c.a,{maxWidth:"lg",className:"App",children:[Object(i.jsx)(l.a,{m:2,children:Object(i.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",height:100})}),Object(i.jsx)(p.a,{variant:"h4",component:"h1",gutterBottom:!0,children:"I.Sicily EpiDoc Viewer"}),Object(i.jsxs)(d.a,{container:!0,spacing:3,children:[Object(i.jsx)(d.a,{item:!0,xs:6,children:Object(i.jsx)(u.a,{children:Object(i.jsxs)(l.a,{height:"32em",children:[Object(i.jsx)("h4",{children:"Epidoc"}),Object(i.jsx)(g.a,{placeholder:"Paste your text division here",multiline:!0,rows:20,rowsMax:20,fullWidth:!0,value:t,onChange:function(n){return r(n.target.value)}})]})})}),Object(i.jsx)(d.a,{item:!0,xs:6,children:Object(i.jsx)(u.a,{children:Object(i.jsxs)(l.a,{height:"32em",children:[Object(i.jsx)("h4",{children:"Leiden"}),Object(i.jsx)(b,{tei:t})]})})})]})]})},A=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,103)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),i(n),a(n),r(n),o(n)}))},v=t(99),w=t(98),O=t(37),S=Object(O.a)({palette:{type:"light",primary:{main:"#002147",light:"#002147",dark:"#002147"},secondary:{main:"#002147",light:"#002147",dark:"#002147"},background:{default:"#e6e6e6"},text:{primary:"#002147"}},typography:{fontFamily:"'PT Sans', sans-serif"},overrides:{MuiPaper:{root:{padding:"30px 30px",margin:"30px",backgroundColor:"#fff"}},MuiButton:{root:{margin:"15px"}},MuiInputBase:{root:{fontSize:"14px",lineHeight:"17px"},input:{height:"0.95em"}}}});o.a.render(Object(i.jsxs)(w.a,{theme:S,children:[Object(i.jsx)(v.a,{}),Object(i.jsx)(y,{})]}),document.getElementById("root")),A()}},[[59,1,2]]]);
//# sourceMappingURL=main.7152ae78.chunk.js.map