const raw = `
10|A|00002508|Davie Toastmasters|Davie, FL|In-Person||https://www.toastmasters.org/Find-a-Club/2508
10|A|01007807|Miramar Dynamic Toastmasters|Miramar, FL|Online||https://www.toastmasters.org/Find-a-Club/1007807
10|A|01390883|Saturday Fearless Toastmasters|Miramar, FL|Online||https://www.toastmasters.org/Find-a-Club/01390883
10|A|03532365|Broward College Toastmasters|Davie, FL|Online||https://www.toastmasters.org/Find-a-Club/03532365
10|A|07404346|SGWS SFL Toastmasters|Miramar, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/07404346
10|A|07840406|Shark Tank Toastmasters|Davie, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/07840406
11|A|00002096|Gelfand Good Morning Toastmasters|Hollywood, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00002096
11|A|01261950|Hollywood Toastmasters|Hollywood, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/01261950
11|A|01348034|Art of Speaking Toastmasters|Hollywood, FL|In-Person||https://www.toastmasters.org/Find-a-Club/01348034
11|A|07840560|South Florida PMI Toastmasters|Miramar, FL|Online||https://www.toastmasters.org/Find-a-Club/07840560
11|A|28679302|Southwest Ranches/Davie/Cooper City|Southwest Ranches, FL|In Person|Restricted|https://www.toastmasters.org/Find-a-Club/28679302
12|A|00006003|Paul Spiewak Toastmasters Club|Pembroke Pines, FL|Online||https://www.toastmasters.org/Find-a-Club/00006003
12|A|02566217|Freedom Speakers-Toastmasters|Pembroke Pines, FL|Online||https://www.toastmasters.org/Find-a-Club/02566217
12|A|03034515|Miramar Bilingual Speakers Toastmasters|Pembroke Pines, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/03034515
12|A|03815740|Team Entrepreneur Toastmasters|Pembroke Pines, FL|In-Person||https://www.toastmasters.org/Find-a-Club/03815740
12|A|06003592|West Pines Toastmasters Club|Pembroke Pines, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/06003592
13|A|00007653|Universal Toastmasters Club #7653|Miami, FL|In-Person||https://www.toastmasters.org/Find-a-Club/00007653
13|A|01489049|Universal Advanced Toastmasters|Miami, FL|In-Person||https://www.toastmasters.org/Find-a-Club/01489049
13|A|07905675|Claro Toastmasters Club|Miami, FL|Online||https://www.toastmasters.org/Find-a-Club/07905675
13|A|28676586|PTC Bilingual Speaking Club|Miami, FL|In-Person||https://www.toastmasters.org/Find-a-Club/28676586
13|A|28679485|Early Education Link Toastmaster Club|Miami, FL|Online||https://www.toastmasters.org/Find-a-Club/28679485
14|A|00003840|North Miami Beach Toastmasters Club|North Miami, FL|Online||https://www.toastmasters.org/Find-a-Club/00003840
14|A|00005754|Daybreak Toastmasters Club|North Miami, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00005754
14|A|00006568|Miami Lakes Club|Miami Lakes, FL|Online||https://www.toastmasters.org/Find-a-Club/00006568
14|A|03248923|Miami Gardens Toastmasters Club|Miami Gardens, FL|Online||https://www.toastmasters.org/Find-a-Club/03248923
14|A|05883077|Toastmasters of BankUnited|Miami Lakes, FL|Online||https://www.toastmasters.org/Find-a-Club/05883077
20|B|00003001|Friendly Club of Fort Lauderdale|Ft Lauderdale, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00003001
20|B|00003659|Early Bird Toastmasters|Ft Lauderdale, FL|Online||https://www.toastmasters.org/Find-a-Club/00003659
20|B|01498739|Broward Bilingual Toastmasters Club|Margate, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/01498739
20|B|07376003|Sunrise Toastmasters|Sunrise, FL|Online||https://www.toastmasters.org/Find-a-Club/07376003
20|B|07594558|Toastmasters of Tamarac|Tamarac, FL|In Person||https://www.toastmasters.org/Find-a-Club/07594558
20|B|28676933|Team Horner Toastmasters|Pembroke Pines, FL|Online||https://www.toastmasters.org/Find-a-Club/28676933
21|B|00002266|Proud Speakers Club|Wilton Manors, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00002266
21|B|00009400|Toast of Las Olas|Ft Lauderdale, FL|In-Person||https://www.toastmasters.org/Find-a-Club/00009400
21|B|01118683|BPB Talking Heads|Ft Lauderdale, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/01118683
21|B|07709126|RSM Toastmasters|Ft Lauderdale, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/07709126
21|B|07967066|DSD Toastmasters|Ft Lauderdale, FL|In Person||https://www.toastmasters.org/Find-a-Club/07967066
22|B|00002582|Plantation Club|Sunrise, FL|In Person||https://www.toastmasters.org/Find-a-Club/00002582
22|B|00590751|Sawgrass Toastmasters Club|Sunrise, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00590751
22|B|28676928|Rising Stars Society|Sunrise, FL|In Person||https://www.toastmasters.org/Find-a-Club/28676928
22|B|28677366|Jazwares|Sunrise, FL|In Person||https://www.toastmasters.org/Find-a-Club/28677366
22|B|28677409|MedPro Healthcare Staffing Toastmasters Club|Sunrise, FL|In Person||https://www.toastmasters.org/Find-a-Club/28677409
23|B|00005758|Weston Area Toastmasters Club|Weston, FL|In-Person||https://www.toastmasters.org/Find-a-Club/00005758
23|B|00005931|Crossroads Club|Plantation, FL|Online||https://www.toastmasters.org/Find-a-Club/00005931
23|B|00009745|Plantation Pointe Toastmasters|Plantation, FL|In Person||https://www.toastmasters.org/Find-a-Club/00009745
23|B|07967898|Emerald Toastmasters Club|Weston, FL|Online||https://www.toastmasters.org/Find-a-Club/07967898
23|B|07995181|UKG Build Toastmasters|Weston, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/07995181
23|B|28679973|Moss Energy Leadership Lab||| |https://www.toastmasters.org/Find-a-Club/28679973
30|C|00001978|West Boca Toastmasters Club|Delray Beach, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00001978
30|C|00002225|Delray Newsmakers Club|Delray Beach, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00002225
30|C|03299156|City of Delray Beach|Delray Beach, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/03299156
30|C|06512963|Sailfish Toastmasters|Boynton Beach, FL|In-Person||https://www.toastmasters.org/Find-a-Club/06512963
31|C|00003518|Sensor Toast Club|Boca Raton, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00003518
31|C|01216633|NCCI Toastmasters|Boca Raton, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/01216633
31|C|01888268|Boca Raton Advanced Toastmasters|Delray Beach, FL|Online||https://www.toastmasters.org/Find-a-Club/01888268
31|C|04345782|The Toastmasters Club At FAU|Boca Raton, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/04345782
32|C|00003299|Boca Raton Toastmasters|Boca Raton, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00003299
32|C|01216688|Boca Speak Easy Toastmasters|Boca Raton, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/01216688
32|C|01567808|Club Paradise|Deerfield Beach, FL|In-Person||https://www.toastmasters.org/Find-a-Club/01567808
32|C|07692356|Toastmasters At JM Family|Deerfield Beach, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/07692356
32|C|28678766|Brazil-USA Toastmasters Club|Deerfield Beach, FL|In Person||https://www.toastmasters.org/Find-a-Club/28678766
33|C|00002445|Club Awesome Toastmasters|Coral Springs, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00002445
33|C|00002903|Achievers Club|Coral Springs, FL|Online||https://www.toastmasters.org/Find-a-Club/00002903
33|C|01469413|Outspoken Toastmasters|Coral Springs, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/01469413
33|C|01575030|Club Power Speakers|Coral Springs, FL|Online||https://www.toastmasters.org/Find-a-Club/01575030
80|C|07912158|TTEC-WIL Toastmasters|Colorado|Online|Restricted|https://www.toastmasters.org/Find-a-Club/7912158
34|C|00003003|Pompano Beach Toastmasters|Pompano, FL|In Person||https://www.toastmasters.org/Find-a-Club/00003003
34|C|00003278|Club V.O.I.C.E.|Pompano Beach, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00003278
34|C|07851603|CSCCR Chamber Voices|Coral Springs, FL|In-Person||https://www.toastmasters.org/Find-a-Club/07851603
34|C|28675870|Toasting Under the Sun|Coral Springs, FL|In-Person||https://www.toastmasters.org/Find-a-Club/28675870
34|C|28678439|KEITH Talks - Toastmasters Club|Pompano Beach, FL|Online|Restricted|https://www.toastmasters.org/Find-a-Club/28678439
40|D|00008181|Palm City Orators|Palm City, FL|In-Person||https://www.toastmasters.org/Find-a-Club/00008181
40|D|00008437|Port St. Lucie Speakers|Port St. Lucie, FL|In-Person||https://www.toastmasters.org/Find-a-Club/00008437
40|D|00621469|Beachsiders Toastmasters|Vero Beach, FL|In Person||https://www.toastmasters.org/Find-a-Club/621469
40|D|03589459|Talking Heads of Stuart|Stuart, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/03589459
40|D|28678591|Sunrise City Toastmasters Club|Fort Pierce, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/28678591
40|D|28679321|Voices of the Glades|E Belle Glade, FL|In Person||https://www.toastmasters.org/Find-a-Club/28679321
41|D|00002727|Gold Coast Toastmasters Club|Palm Beach Gardens, FL|In-Person||https://www.toastmasters.org/Find-a-Club/00002727
41|D|01206922|Hobe Sound Toasters|Hobe Sound, FL|In-Person||https://www.toastmasters.org/Find-a-Club/01206922
41|D|01376226|High Voltage Voices|Juno Beach, FL|In-Person||https://www.toastmasters.org/Find-a-Club/01376226
41|D|01778344|Scientifically Speaking|Jupiter, FL|In-Person||https://www.toastmasters.org/Find-a-Club/01778344
41|D|05083709|The REAL Toastmasters Club|Palm Beach Gardens, FL|In-Person||https://www.toastmasters.org/Find-a-Club/05083709
42|D|00005173|Freddy's Forum Toastmasters Club|West Palm Beach, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00005173
42|D|00005222|Sunset Speakers Toastmasters Club|West Palm Beach, FL|In-Person||https://www.toastmasters.org/Find-a-Club/00005222
42|D|00005390|Talk Of The Town Club|West Palm Beach, FL|Online||https://www.toastmasters.org/Find-a-Club/00005390
42|D|01588575|The Palm Beach Toastmasters Club|West Palm Beach, FL|In-Person||https://www.toastmasters.org/Find-a-Club/01588575
42|D|07845161|The Vocal Collective|Dade City, FL|Online||https://www.toastmasters.org/Find-a-Club/07845161
43|D|00006775|Wellington Toastmasters Club|Wellington, FL|In-Person||https://www.toastmasters.org/Find-a-Club/00006775
43|D|00008664|RiverWalk Toastmasters Club|Loxahatchee, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00008664
43|D|01510120|Palm Beach Advanced Toastmasters|West Palm Beach, FL|Online||https://www.toastmasters.org/Find-a-Club/01510120
43|D|05616466|The Toastmasters Club At Palm Beach State College|Lake Worth, FL|Online||https://www.toastmasters.org/Find-a-Club/05616466
43|D|28676665|C&W HOLA Toastmasters Club||| |https://www.toastmasters.org/Find-a-Club/28676665
43|D|28676723|Superior Speakers Advanced Club|Lake Worth, FL|Online||https://www.toastmasters.org/Find-a-Club/28676723
50|E|01913022|MIA Tarmac Speakers|Miami, FL|Online||https://www.toastmasters.org/Find-a-Club/01913022
50|E|04054964|Miami Business Speakers Toastmasters|Miami, FL|Online||https://www.toastmasters.org/Find-a-Club/04054964
50|E|04916034|The Landing|Miami, FL|Online||https://www.toastmasters.org/Find-a-Club/04916034
50|E|05575442|Women in Construction Toastmasters Club|Miami, FL|Online||https://www.toastmasters.org/Find-a-Club/05575442
50|E|06098434|305 Speaks|Miami, FL|Online||https://www.toastmasters.org/Find-a-Club/06098434
50|E|28677907|UCCA Toastmasters|Miami, FL|In Person||https://www.toastmasters.org/Find-a-Club/28677907
51|E|00007619|Brickell Toastmasters Club|Miami, FL|In-Person||https://www.toastmasters.org/Find-a-Club/00007619
51|E|00008251|Miami Dade Toastmasters Club|Brickell, FL|Online||https://www.toastmasters.org/Find-a-Club/00008251
51|E|01293723|Miami Beach Toastmasters|Miami Beach, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/01293723
51|E|04486222|Miami-Wynwood Toastmasters|Miami, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/04486222
51|E|28676571|City of Miami Beach|Miami Beach, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/28676571
52|E|00000861|Doral Toastmasters|Doral, FL|In Person||https://www.toastmasters.org/Find-a-Club/00000861
52|E|00002283|Miracle Mile Toastmasters Club|Coconut Grove, FL|In-Person||https://www.toastmasters.org/Find-a-Club/00002283
52|E|00007082|Voice Of Champions Club|Doral, FL|Online||https://www.toastmasters.org/Find-a-Club/00007082
52|E|04555744|Bold Communicators Club|Doral, FL|Online||https://www.toastmasters.org/Find-a-Club/04555744
52|E|28678131|Telemundo Center Toastmasters||| |https://www.toastmasters.org/Find-a-Club/28678131
52|E|28678307|MDCR Fantastic Speakers|Doral, FL|In Person|Restricted|https://www.toastmasters.org/Find-a-Club/28678307
53|E|00001695|Coral Gables Toastmasters|Coral Gables, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00001695
53|E|00002463|South Dade Toastmasters Club|South Miami, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00002463
53|E|00008370|West Kendall Toastmasters Club 8370|Kendall, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00008370
53|E|01582184|Coconut Grove Toastmasters|Coral Gables, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/01582184
53|E|28679112|FIU Toastmasters|Miami, FL|In Person|Restricted|https://www.toastmasters.org/Find-a-Club/28679112
54|E|00002798|Miami Advanced Toastmasters Club|Kendall, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/00002798
54|E|00006298|Key West Toastmasters|Key West, FL|In Person||https://www.toastmasters.org/Find-a-Club/00006298
54|E|00704393|Florida Keys Toastmasters|Islamorada, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/00704393
54|E|01412303|Cutler Bay Toastmasters|Homestead, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/01412303
54|E|28679707|OneADP Miami|Miami, FL|In Person|Restricted|https://www.toastmasters.org/Find-a-Club/28679707
60|F|00001095|Action For Achievement Club 1095|Nassau - New Providence, Bahamas|In-Person||https://www.toastmasters.org/Find-a-Club/00001095
60|F|00006796|BAMSI Club Altitude|Nassau - New Providence, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/00006796
60|F|00971904|Chickcharney Toastmasters Club|Nassau - New Providence, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/00971904
60|F|01510789|Luminaries Toastmasters Club #1510789|Nassau - New Providence, Bahamas|In-Person||https://www.toastmasters.org/Find-a-Club/01510789
60|F|07875684|Leading Voices Toastmasters Club|Nassau - New Providence, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/07875684
61|F|00007178|Healing Communicators Club|Nassau - New Providence, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/00007178
61|F|02591529|Cable Revolutionaries Toastmasters Club 2591529|Nassau - New Providence, Bahamas|Online||https://www.toastmasters.org/Find-a-Club/2591529
61|F|04719842|FG Knights|Nassau - New Providence, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/04719842
61|F|07773041|Pinewood Trendsetters|Nassau - New Providence, Bahamas|In-Person||https://www.toastmasters.org/Find-a-Club/07773041
61|F|28680429|BRON Blazers|Nassau - New Providence, Bahamas|Hybrid|Restricted|https://www.toastmasters.org/Find-a-Club/28680429
61|F|28680489|Elite Executives|Nassau - New Providence, Bahamas|Hybrid|Restricted|https://www.toastmasters.org/Find-a-Club/28680489
62|F|00008123|First Exuma Branch Club 8123|Exuma Island, Bahamas|Online||https://www.toastmasters.org/Find-a-Club/00008123
62|F|01358961|B.U.T. Nation Builders|Nassau - New Providence, Bahamas|Online||https://www.toastmasters.org/Find-a-Club/01358961
62|F|07180193|Legalites|Nassau - New Providence, Bahamas|Online||https://www.toastmasters.org/Find-a-Club/07180193
62|F|07717904|East Central Archdeaconry|Nassau - New Providence, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/07717904
62|F|28680462|MOESD Voices of Excellence|Nassau - New Providence, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/28680462
62|F|28680490|Modern Pillars of Excellence|Nassau - New Providence, Bahamas|Hybrid|Restricted|https://www.toastmasters.org/Find-a-Club/28680490
63|F|01200778|Dynamic Persuaders|Nassau - New Providence, Bahamas|In-Person||https://www.toastmasters.org/Find-a-Club/01200778
63|F|01811702|Achievers of Excellence Club #1811702|Nassau - New Providence, Bahamas|In-Person||https://www.toastmasters.org/Find-a-Club/01811702
63|F|07548881|Visionaries Toastmasters Club|Nassau - New Providence, Bahamas|In-Person||https://www.toastmasters.org/Find-a-Club/07548881
63|F|07807079|San Salvador Explorers|San Salvador Island, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/07807079
63|F|28680592|BBUC Prospective Club|Nassau - New Providence, Bahamas|Online||https://www.toastmasters.org/Find-a-Club/28680592
70|G|00001425|Freeport Eagles|Freeport - Grand Bahama, Bahamas|In Person||https://www.toastmasters.org/Find-a-Club/1425
70|G|00839960|Club Destiny|Freeport - Grand Bahama, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/00839960
70|G|05183408|B.P.S.U. Excellers|Freeport - Grand Bahama, Bahamas|In Person||https://www.toastmasters.org/Find-a-Club/05183408
70|G|06847742|B.U.T. Abaco Trail Blazers|Abaco, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/06847742
70|G|28676271|Diversified Network Speakers|Online, Bahamas|Online||https://www.toastmasters.org/Find-a-Club/28676271
70|G|28676498|Rocky Shores Trending Orators|Eight Mile Rock - Grand Bahama, Bahamas|In Person||https://www.toastmasters.org/Find-a-Club/28676498
71|G|00007108|Ernest T. Strachan Advanced|Nassau - Bahamas, Bahamas|Online||https://www.toastmasters.org/Find-a-Club/00007108
71|G|01360933|B.P.S.U. Majestic Marlins Toastmasters Club|Nassau - New Providence, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/01360933
71|G|05922881|BFM Diplomats|Nassau - New Providence, Bahamas|Online||https://www.toastmasters.org/Find-a-Club/05922881
71|G|06724527|Club Carmichael|Nassau - New Providence, Bahamas|Online||https://www.toastmasters.org/Find-a-Club/06724527
71|G|28677257|Bethel Toastmasters Club|Nassau - New Providence, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/28677257
72|G|01050379|E.T. Communicators|Nassau - Central New Providence, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/01050379
72|G|06484905|AGOC Nationbuilders|Nassau - Bahamas, Bahamas|In Person||https://www.toastmasters.org/Find-a-Club/06484905
72|G|07775252|The First Breakfast Toastmasters Club of The Bahamas|Nassau - Central New Providence, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/07775252
72|G|07842684|ABC Ambassadors|Nassau - Bahamas, Bahamas|Online||https://www.toastmasters.org/Find-a-Club/07842684
73|G|00001600|First Bahamas Branch of Toastmasters|Nassau - Central New Providence, Bahamas|In Person||https://www.toastmasters.org/Find-a-Club/00001600
73|G|01513325|Pinnacle Seekers|Nassau - East of Central New Providence, Bahamas|In Person||https://www.toastmasters.org/Find-a-Club/01513325
73|G|06742900|B.U.T. North Eleuthera Shakers|North Eleuthera, Bahamas|Online||https://www.toastmasters.org/Find-a-Club/06742900
73|G|07012965|Eloquent Voices|Nassau - East of Central New Providence, Bahamas|Hybrid||https://www.toastmasters.org/Find-a-Club/07012965
80|H|00002449|Bradenton Toastmasters Club|Bradenton, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/2449
80|H|00007719|FCCI Toastmasters Club||| |https://www.toastmasters.org/Find-a-Club/7719
80|H|00009352|Positively Speaking Toastmasters Club|Sarasota, FL|In Person||https://www.toastmasters.org/Find-a-Club/9352
80|H|01197988|Power Speakers of MCG|Bradenton, FL|In Person|Restricted|https://www.toastmasters.org/Find-a-Club/1197988
81|H|00001958|Sarasota Toastmasters Club|Sarasota, FL|In Person||https://www.toastmasters.org/Find-a-Club/1958
81|H|6026|Sarasota Evening Club|North Venice, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/6026
81|H|00777513|Sarasota Speakers Exchange Toastmasters Club|Sarasota, FL|In Person||https://www.toastmasters.org/Find-a-Club/777513
82|H|00005486|Venice Area Toastmasters Club|North Venice, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/5486
81|H|00007327|Sarasota WCR Toastmasters Club|Sarasota, FL|In Person||https://www.toastmasters.org/Find-a-Club/7327
82|H|01395623|North Port Toastmasters|North Port, FL|Online||https://www.toastmasters.org/Find-a-Club/1395623
82|H|06485018|CC Gov Toastmasters|Port Charlotte, FL|In Person|Restricted|https://www.toastmasters.org/Find-a-Club/6485018
82|H|28677961|ECCA Toastmasters||| |https://www.toastmasters.org/Find-a-Club/28677961
83|H|00001702|Ft Myers Toastmasters Club #1702|Ft Meyers, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/1702
83|H|00005701|Electric Toasters Club|North Fort Myers, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/5701
83|H|00009051|Cape Coral Toastmasters Club|Cape Coral, FL|In Person||https://www.toastmasters.org/Find-a-Club/9051
83|H|28679126|Greater Fort Myers Chamber of Commerce Toastmasters Club|Fort Myers, FL|In Person|Restricted|https://www.toastmasters.org/Find-a-Club/28679126
84|H|00002835|Naples Toastmasters Club|Naples, FL|In Person||https://www.toastmasters.org/Find-a-Club/2835
84|H|00008838|Naples Advanced Toastmasters|Naples, FL|Hybrid||https://www.toastmasters.org/Find-a-Club/8838
84|H|00009628|Naples Sunrise Bay Toastmasters Club|Naples, FL|In Person||https://www.toastmasters.org/Find-a-Club/9628
84|H|06743270|Avow|Naples, FL|In Person||https://www.toastmasters.org/Find-a-Club/6743270
84|H|28679881|Toastmasters North Port EDD|North Port, FL|In Person|Restricted|https://www.toastmasters.org/Find-a-Club/28679881
`.trim()

const normalizeMeetingType = (value) => {
  const v = value.trim().toLowerCase()
  if (!v) return 'Not listed'
  if (v === 'online') return 'Online'
  if (v === 'hybrid' || v === 'hyrid') return 'Hybrid'
  return 'In Person'
}

export const clubs = raw.split('\n').map((line) => {
  const [area, division, number, name, location, meetingType, clubType, url] = line.split('|')
  return {
    area,
    division,
    number,
    name,
    location: location?.trim() || 'See official club listing',
    meetingType: normalizeMeetingType(meetingType || ''),
    clubType: clubType?.trim() || 'Open',
    url,
    country: location?.toLowerCase().includes('bahamas') ? 'The Bahamas' : (location ? 'United States' : 'Not listed'),
  }
})

export const alignmentAsOf = 'July 6, 2026'
export const alignmentSource = 'https://www.toastmastersd47.org/district-47-clubs/'
