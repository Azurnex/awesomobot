"use strict"

const discord = require("discord.js");
const timers = require("timers");

const Server = require("../common/models/server");

const client = new discord.Client();

const servers = [];

//
const temp = {
    "total": 2378,
    "list": [{
        "id": "174754869595471873",
        "name": "Kyrion",
        "shits": 303,
        "activity": 58224,
        "lastmsg": 54
    }, {
        "id": "331641326816854028",
        "name": "Tweek Tweak",
        "shits": 177,
        "activity": 43430,
        "lastmsg": 11
    }, {
        "id": 217486439380811780,
        "name": "superfloree",
        "shits": 146,
        "activity": 17616.772924033245,
        "lastmsg": 80
    }, {
        "id": 168232762862600200,
        "name": "kratosgow342",
        "shits": 117,
        "activity": 37350,
        "lastmsg": 1
    }, {
        "id": 168690518899949570,
        "name": "!Dragon1320",
        "shits": 110,
        "activity": 11257,
        "lastmsg": 110
    }, {
        "id": 191579984274522100,
        "name": "Bell",
        "shits": 105,
        "activity": 16744,
        "lastmsg": 17
    }, {
        "id": 262345465306021900,
        "name": "SmashRoyale",
        "shits": 100,
        "activity": 30879.140772982006,
        "lastmsg": 11
    }, {
        "id": 190914446774763520,
        "name": "Mattheous",
        "shits": 94,
        "activity": 8682.621594137521,
        "lastmsg": 133
    }, {
        "id": "142896162955984896",
        "name": "kajcsi",
        "shits": 91,
        "activity": 11114,
        "lastmsg": 22
    }, {
        "id": "99626024181968896",
        "name": "Airborn56",
        "shits": 80,
        "activity": 7712,
        "lastmsg": 37
    }, {
        "id": 230875863644635140,
        "name": "Fa99les",
        "shits": 71,
        "activity": 17448,
        "lastmsg": 269
    }, {
        "id": "210577042998034433",
        "name": "ファックオフ、縮退❤",
        "shits": 66,
        "activity": 10154,
        "lastmsg": 517
    }, {
        "id": "375586532527964160",
        "name": "BBush",
        "shits": 63,
        "activity": 7286,
        "lastmsg": 11
    }, {
        "id": "275397087485755392",
        "name": "*name change",
        "shits": 55,
        "activity": 8492,
        "lastmsg": 71
    }, {
        "id": "228887919689990144",
        "name": "Paladin Butters",
        "shits": 54,
        "activity": 39590,
        "lastmsg": 3
    }, {
        "id": "280031103761514507",
        "name": "MINTBERRYCRRRRRRRRRRRRUNCH!",
        "shits": 48,
        "activity": 21603.135164329025,
        "lastmsg": 1628
    }, {
        "id": "312808956340731905",
        "name": "しろ",
        "shits": 43,
        "activity": 3108.2863365801168,
        "lastmsg": 915
    }, {
        "id": "215982178046181376",
        "name": "Tweekerino",
        "shits": 38,
        "activity": 15012,
        "lastmsg": 13
    }, {
        "id": "213884331838406656",
        "name": "OkAycase",
        "shits": 37,
        "activity": 15186,
        "lastmsg": 83
    }, {
        "id": 194652191896764400,
        "name": "kiyomitsuuu",
        "shits": 34,
        "activity": 2767.8023981981337,
        "lastmsg": 183
    }, {
        "id": "170229410014822400",
        "name": "AlbinoClock",
        "shits": 31,
        "activity": 2429.7038933721606,
        "lastmsg": 782
    }, {
        "id": "198687342079246336",
        "name": "play that music funky white boi",
        "shits": 23,
        "activity": 8560.950340605446,
        "lastmsg": 759
    }, {
        "id": "319999952350740481",
        "name": "Karkat Vantas",
        "shits": 21,
        "activity": 4228.475924098766,
        "lastmsg": 80
    }, {
        "id": "273409276725166081",
        "name": "Ceres",
        "shits": 19,
        "activity": 0,
        "lastmsg": 1809
    }, {
        "id": "395090104491966474",
        "name": "officalchespiny",
        "shits": 19,
        "activity": 4956,
        "lastmsg": 47
    }, {
        "id": "117783098623655936",
        "name": "Fennwayz",
        "shits": 18,
        "activity": 2910,
        "lastmsg": 92
    }, {
        "id": "150687833353486337",
        "name": "Endless Nameless (godo)",
        "shits": 17,
        "activity": 1462.873359734032,
        "lastmsg": 1740
    }, {
        "id": "326447343840788480",
        "name": "DeadMemes",
        "shits": 17,
        "activity": 5566.678235079568,
        "lastmsg": 66
    }, {
        "id": "228561869852508172",
        "name": "Lei",
        "shits": 16,
        "activity": 54,
        "lastmsg": 380
    }, {
        "id": "313768840188395521",
        "name": "🎄 Lania",
        "shits": 16,
        "activity": 3446.009781921823,
        "lastmsg": 3912
    }, {
        "id": "270588978741116938",
        "name": "Dont know who i am",
        "shits": 15,
        "activity": 3916,
        "lastmsg": 180
    }, {
        "id": 220257478296862720,
        "name": "Ravus",
        "shits": 14,
        "activity": 1795.0863603586636,
        "lastmsg": 765
    }, {
        "id": "303133450796400642",
        "name": "shanny 🚀",
        "shits": 14,
        "activity": 0,
        "lastmsg": 5155
    }, {
        "id": 122649425062395900,
        "name": "Ryder",
        "shits": 13,
        "activity": 10322.603307875115,
        "lastmsg": 199
    }, {
        "id": "160088262231195648",
        "name": "Porter",
        "shits": 12,
        "activity": 0,
        "lastmsg": 7280
    }, {
        "id": "383901109288173568",
        "name": "fuckmewahddytilmyfacefallsoff",
        "shits": 12,
        "activity": 2552,
        "lastmsg": 135
    }, {
        "id": "219562678371352577",
        "name": "Umbreon",
        "shits": 12,
        "activity": 0,
        "lastmsg": 2706
    }, {
        "id": 349886534989643800,
        "name": "WonderTweek",
        "shits": 12,
        "activity": 4688.980783134877,
        "lastmsg": 129
    }, {
        "id": "299075711983943681",
        "name": "Xeno",
        "shits": 11,
        "activity": 1233.818321577925,
        "lastmsg": 2017
    }, {
        "id": "330756704985808909",
        "name": "Rick-C137",
        "shits": 11,
        "activity": 2329.142097238959,
        "lastmsg": 1715
    }, {
        "id": "226106120446541824",
        "name": "Lextreme",
        "shits": 10,
        "activity": 1720.777309352385,
        "lastmsg": 698
    }, {
        "id": "157615456826556416",
        "name": "Engikirby",
        "shits": 14,
        "activity": 3840,
        "lastmsg": 13
    }, {
        "id": "212761441676165120",
        "name": "Vex (Creatur3)",
        "shits": 9,
        "activity": 808,
        "lastmsg": 423
    }, {
        "id": "319941812230029312",
        "name": "vit",
        "shits": 8,
        "activity": 0,
        "lastmsg": 2962
    }, {
        "id": "158971865392611328",
        "name": "Wokesy",
        "shits": 8,
        "activity": 0,
        "lastmsg": 6150
    }, {
        "id": "248950499150266369",
        "name": "BaconTheUber",
        "shits": 8,
        "activity": 1962.9598192790086,
        "lastmsg": 1324
    }, {
        "id": "296211279083995136",
        "name": "skinny penis",
        "shits": 8,
        "activity": 1266,
        "lastmsg": 47
    }, {
        "id": "239482850062237707",
        "name": "0utofbody",
        "shits": 7,
        "activity": 996,
        "lastmsg": 455
    }, {
        "id": "267818273389674497",
        "name": "Icy Boi",
        "shits": 7,
        "activity": 1219.3043134131417,
        "lastmsg": 561
    }, {
        "id": "289830409397731338",
        "name": "tweek is my best gay sonn",
        "shits": 7,
        "activity": 0,
        "lastmsg": 3227
    }, {
        "id": "329020358911066113",
        "name": "yes, definitely, absolutely.",
        "shits": 5,
        "activity": 1708,
        "lastmsg": 68
    }, {
        "id": "161573813379792899",
        "name": "Kamui",
        "shits": 5,
        "activity": 12046,
        "lastmsg": 43
    }, {
        "id": 144015500974751740,
        "name": "Alexander Hamilton",
        "shits": 4,
        "activity": 0,
        "lastmsg": 3145
    }, {
        "id": "342296352853721092",
        "name": "VaderSpawn",
        "shits": 4,
        "activity": 0,
        "lastmsg": 7127
    }, {
        "id": "277338703884582923",
        "name": "Polturkey",
        "shits": 4,
        "activity": 320.1410822149002,
        "lastmsg": 368
    }, {
        "id": "257221980426731530",
        "name": "KA E DET SOM SKJEEEER?!!!!",
        "shits": 4,
        "activity": 273.1681508846269,
        "lastmsg": 205
    }, {
        "id": "346750957373227029",
        "name": "cloudshaped",
        "shits": 4,
        "activity": 1278,
        "lastmsg": 177
    }, {
        "id": "287951569809309696",
        "name": "PiggyTerry",
        "shits": 4,
        "activity": 1387.8009705708635,
        "lastmsg": 823
    }, {
        "id": "230225521277927424",
        "name": "ellaisgrumpy",
        "shits": 4,
        "activity": 0,
        "lastmsg": 1986
    }, {
        "id": "277581652484554752",
        "name": "Festive Dany",
        "shits": 3,
        "activity": 248.8059691334032,
        "lastmsg": 1084
    }, {
        "id": "214458285242187777",
        "name": "Calvin Craig",
        "shits": 3,
        "activity": 820.0749926064893,
        "lastmsg": 103
    }, {
        "id": "252747964903063552",
        "name": "dumb",
        "shits": 3,
        "activity": 0,
        "lastmsg": 7756
    }, {
        "id": "326678360812158986",
        "name": "werewolf2814",
        "shits": 3,
        "activity": 0,
        "lastmsg": 4658
    }, {
        "id": "385872274034524161",
        "name": "Samaaah",
        "shits": 3,
        "activity": 0,
        "lastmsg": 2742
    }, {
        "id": "327185764720836608",
        "name": "I'm NoT jUsT gAy I'm A cAtAmiTe.",
        "shits": 3,
        "activity": 668.3548084903787,
        "lastmsg": 142
    }, {
        "id": "363425165536919552",
        "name": "abc",
        "shits": 3,
        "activity": 0,
        "lastmsg": 3445
    }, {
        "id": "198005882586398721",
        "name": "everydaykemkem",
        "shits": 3,
        "activity": 8732,
        "lastmsg": 20
    }, {
        "id": "259787857802035201",
        "name": "Floatie",
        "shits": 3,
        "activity": 0,
        "lastmsg": 789
    }, {
        "id": "196270492208988162",
        "name": "CREPS",
        "shits": 3,
        "activity": 0,
        "lastmsg": 1648
    }, {
        "id": "307248302397718529",
        "name": "GrajowiecPL",
        "shits": 3,
        "activity": 814,
        "lastmsg": 133
    }, {
        "id": "215046363526725632",
        "name": "Draumr",
        "shits": 3,
        "activity": 0,
        "lastmsg": 4038
    }, {
        "id": "332990864538468354",
        "name": "Free Man",
        "shits": 3,
        "activity": 0,
        "lastmsg": 4803
    }, {
        "id": "341761717614804993",
        "name": "Kyle Broflovski",
        "shits": 3,
        "activity": 466.97538739698933,
        "lastmsg": 237
    }, {
        "id": 325285208805081100,
        "name": "SilverFoxtail",
        "shits": 2,
        "activity": 0,
        "lastmsg": 12486
    }, {
        "id": "345336838376128512",
        "name": "gAH AAAAAAA",
        "shits": 2,
        "activity": 296,
        "lastmsg": 50
    }, {
        "id": "213079375434874880",
        "name": "Rev. B",
        "shits": 2,
        "activity": 522,
        "lastmsg": 70
    }, {
        "id": "351781671844053004",
        "name": "boaredaoc",
        "shits": 2,
        "activity": 0,
        "lastmsg": 5326
    }, {
        "id": "335461949250863115",
        "name": "JaimeSimpson05",
        "shits": 2,
        "activity": 0,
        "lastmsg": 6547
    }, {
        "id": "157241268991164416",
        "name": "Bnm",
        "shits": 2,
        "activity": 0,
        "lastmsg": 6720
    }, {
        "id": "361206071253139457",
        "name": "Venhedis",
        "shits": 2,
        "activity": 3474.7906948294903,
        "lastmsg": 143
    }, {
        "id": "233832353468907521",
        "name": "Polnareff",
        "shits": 2,
        "activity": 0,
        "lastmsg": 634
    }, {
        "id": "322273717612969987",
        "name": "Facepalm Marsh",
        "shits": 2,
        "activity": 270,
        "lastmsg": 185
    }, {
        "id": "315618699715411969",
        "name": "JamesRogers",
        "shits": 2,
        "activity": 0,
        "lastmsg": 3033
    }, {
        "id": "119147779795714048",
        "name": "Pokefan993",
        "shits": 2,
        "activity": 0,
        "lastmsg": 7112
    }, {
        "id": "199339588790124546",
        "name": "Scoots",
        "shits": 2,
        "activity": 0,
        "lastmsg": 1057
    }, {
        "id": "342086358010953728",
        "name": "KlausHeissler",
        "shits": 1,
        "activity": 2197.847372835122,
        "lastmsg": 53
    }, {
        "id": "382852098057961496",
        "name": "Brendon",
        "shits": 1,
        "activity": 146,
        "lastmsg": 454
    }, {
        "id": "195586396310732800",
        "name": "Neccria",
        "shits": 1,
        "activity": 0,
        "lastmsg": 2252
    }, {
        "id": "194634079197462529",
        "name": "A Loser Named Michael",
        "shits": 1,
        "activity": 0,
        "lastmsg": 1708
    }, {
        "id": "242044514255110145",
        "name": "OOFthatsroughbuddy",
        "shits": 1,
        "activity": 352,
        "lastmsg": 412
    }, {
        "id": "208603371710578688",
        "name": "CompressedWizard",
        "shits": 1,
        "activity": 0,
        "lastmsg": 9183
    }, {
        "id": "356138814332207104",
        "name": "Ducky Claus",
        "shits": 1,
        "activity": 0,
        "lastmsg": 5668
    }, {
        "id": "364619266852388864",
        "name": "warmachinerox7192",
        "shits": 1,
        "activity": 2,
        "lastmsg": 234
    }, {
        "id": "230502782623285248",
        "name": "Kyle",
        "shits": 1,
        "activity": 1382,
        "lastmsg": 43
    }, {
        "id": "346833866645962753",
        "name": "VATSman892",
        "shits": 1,
        "activity": 446,
        "lastmsg": 389
    }, {
        "id": "352947555501473793",
        "name": "Owl",
        "shits": 1,
        "activity": 0,
        "lastmsg": 6823
    }, {
        "id": "341127145801646080",
        "name": "Delereno",
        "shits": 1,
        "activity": 0,
        "lastmsg": 7304
    }, {
        "id": "272336984104763393",
        "name": "☆ Savөк ☆",
        "shits": 1,
        "activity": 1009.99045714449,
        "lastmsg": 662
    }, {
        "id": "382011429059821569",
        "name": "TheInkDemon678",
        "shits": 1,
        "activity": 0,
        "lastmsg": 2646
    }, {
        "id": "204415305580150785",
        "name": "Blizix",
        "shits": 1,
        "activity": 0,
        "lastmsg": 7051
    }, {
        "id": "377202675596394496",
        "name": "protocol",
        "shits": 1,
        "activity": 0,
        "lastmsg": 7300
    }, {
        "id": "140204090486423552",
        "name": "Dellen",
        "shits": 1,
        "activity": 0,
        "lastmsg": 10795
    }, {
        "id": "314587513018646529",
        "name": "[¿] Kenny McCormick [?]",
        "shits": 1,
        "activity": 0,
        "lastmsg": 5008
    }, {
        "id": "221021977043795969",
        "name": "A Sad Sangheili",
        "shits": 1,
        "activity": 0,
        "lastmsg": 6548
    }, {
        "id": "290328985328549898",
        "name": "Felipe",
        "shits": 1,
        "activity": 0,
        "lastmsg": 2967
    }, {
        "id": "336842890527375363",
        "name": "Maya",
        "shits": 1,
        "activity": 0,
        "lastmsg": 1675
    }, {
        "id": "210274015682494466",
        "name": "Philip_Daniel ('a=452.89)",
        "shits": 1,
        "activity": 0,
        "lastmsg": 731
    }, {
        "id": "294093612029837323",
        "name": "Banjo Unleashed",
        "shits": 1,
        "activity": 0,
        "lastmsg": 10430
    }, {
        "id": "264563883153293312",
        "name": "Shuichi",
        "shits": 1,
        "activity": 0,
        "lastmsg": 6476
    }, {
        "id": "302317832807383041",
        "name": "From God's Perspective",
        "shits": 1,
        "activity": 12,
        "lastmsg": 73
    }, {
        "id": "356941255579533313",
        "name": "A Dead Kenny",
        "shits": 1,
        "activity": 28,
        "lastmsg": 147
    }, {
        "id": "264088740375429121",
        "name": "GeraltOfEthiopia",
        "shits": 1,
        "activity": 0,
        "lastmsg": 9963
    }, {
        "id": "305815788894289941",
        "name": "RandomComrade",
        "shits": 1,
        "activity": 0,
        "lastmsg": 6761
    }, {
        "id": "170773798918946816",
        "name": "TheRockzSG",
        "shits": 1,
        "activity": 0,
        "lastmsg": 9838
    }, {
        "id": 203602726892863500,
        "name": "!Zerobyte",
        "shits": 1,
        "activity": 0,
        "lastmsg": 12486
    }, {
        "id": "133099495411023872",
        "name": "Nerd Letter",
        "shits": 1,
        "activity": 0,
        "lastmsg": 6685
    }, {
        "id": "282258121701720066",
        "name": "Gracie",
        "shits": 1,
        "activity": 0,
        "lastmsg": 2724
    }, {
        "id": "357552726789324800",
        "name": "Spirit Chan",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5093
    }, {
        "id": "323413101149945857",
        "name": "Hey",
        "shits": 0,
        "activity": 0,
        "lastmsg": 12240
    }, {
        "id": "297737269140389888",
        "name": "DoorKnobCum4938",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7585
    }, {
        "id": "325600863865274379",
        "name": "Mieon (≚ᄌ≚)ƶƵ",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11717
    }, {
        "id": "376939941638176770",
        "name": "Butters the Futa King",
        "shits": 0,
        "activity": 0,
        "lastmsg": 10782
    }, {
        "id": "244141448142782474",
        "name": "avacadoloki",
        "shits": 0,
        "activity": 346,
        "lastmsg": 90
    }, {
        "id": "248977438191648769",
        "name": "2ndparty",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8195
    }, {
        "id": "363003387031191553",
        "name": "Xero",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5610
    }, {
        "id": "171493147292073984",
        "name": "Syntrick",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5566
    }, {
        "id": "330672414880956419",
        "name": "Bubbly",
        "shits": 0,
        "activity": 0,
        "lastmsg": 12438
    }, {
        "id": "361498162378047488",
        "name": "A Silent Night 2 Remember",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9557
    }, {
        "id": "186877285771509761",
        "name": "irene",
        "shits": 0,
        "activity": 0,
        "lastmsg": 10985
    }, {
        "id": "143772403829309440",
        "name": "tarm",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11145
    }, {
        "id": "384236051952173056",
        "name": "kyle",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9901
    }, {
        "id": "98542850995650560",
        "name": "slat3",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7294
    }, {
        "id": "178850358452289538",
        "name": "Cass",
        "shits": 0,
        "activity": 0,
        "lastmsg": 1355
    }, {
        "id": "145181137197596672",
        "name": "POWER",
        "shits": 0,
        "activity": 0,
        "lastmsg": 4588
    }, {
        "id": "342135357233430528",
        "name": "Festive Toast n' Jam",
        "shits": 0,
        "activity": 0,
        "lastmsg": 12215
    }, {
        "id": "336280106198630400",
        "name": "Croissant ( ͡~ ͜ʖ ͡°)",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3023
    }, {
        "id": "323190010964869120",
        "name": "фHiф",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11386
    }, {
        "id": "293884532753432587",
        "name": "SW1774",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9280
    }, {
        "id": "224661038216249345",
        "name": "Lord Foxy Boy",
        "shits": 0,
        "activity": 0,
        "lastmsg": 10664
    }, {
        "id": "334785919674613761",
        "name": "Kylie The Badass Ginger",
        "shits": 0,
        "activity": 6,
        "lastmsg": 215
    }, {
        "id": "316768012407668756",
        "name": "Girble",
        "shits": 0,
        "activity": 0,
        "lastmsg": 10397
    }, {
        "id": "383164960509001740",
        "name": "Cu-Miun",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11524
    }, {
        "id": "93766974877741056",
        "name": "meowzzies",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9077
    }, {
        "id": "292562717527506944",
        "name": "PurpleShlurp",
        "shits": 0,
        "activity": 0,
        "lastmsg": 10359
    }, {
        "id": "174961449330802689",
        "name": "Ricky",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6184
    }, {
        "id": "259939492922654721",
        "name": "freddyairmail",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5829
    }, {
        "id": "396468761311313931",
        "name": "fandom queer trash",
        "shits": 0,
        "activity": 0,
        "lastmsg": 702
    }, {
        "id": "368618417684611072",
        "name": "zdub350",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9327
    }, {
        "id": "127206060904677376",
        "name": "evey119",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9316
    }, {
        "id": "299170703255535616",
        "name": "bunny",
        "shits": 0,
        "activity": 0,
        "lastmsg": 1758
    }, {
        "id": "143866772360134656",
        "name": "Scarlet",
        "shits": 0,
        "activity": 0,
        "lastmsg": 1253
    }, {
        "id": "194920411958476816",
        "name": "TGF",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9271
    }, {
        "id": "338403341455327242",
        "name": "A tua irmã de quatro",
        "shits": 0,
        "activity": 0,
        "lastmsg": 12472
    }, {
        "id": "131244146324144137",
        "name": "lilpumpkin2000",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9314
    }, {
        "id": "370800063427117059",
        "name": "Revvy",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5258
    }, {
        "id": "215285904963665920",
        "name": "Ionic Ass Cannon",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7297
    }, {
        "id": "382201054043045888",
        "name": "pingQ",
        "shits": 0,
        "activity": 0,
        "lastmsg": 10763
    }, {
        "id": "313428733899964417",
        "name": "Hayleycakes2009",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9300
    }, {
        "id": "234518776454840320",
        "name": "ＺＵＣＣ",
        "shits": 0,
        "activity": 0,
        "lastmsg": 12358
    }, {
        "id": "371070223882780682",
        "name": "NoobVanNoob",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7259
    }, {
        "id": "364804540635152386",
        "name": "P0rtals",
        "shits": 0,
        "activity": 0,
        "lastmsg": 1123
    }, {
        "id": "221803637591113729",
        "name": "smokeymicpot",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3649
    }, {
        "id": "201421675558862848",
        "name": "Gonso a secas",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3602
    }, {
        "id": "384489695238684673",
        "name": "The Space",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8911
    }, {
        "id": "293477659781103616",
        "name": "KDbeast42813",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8906
    }, {
        "id": "283285670795935745",
        "name": "Ilkay",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5750
    }, {
        "id": "340224253494558731",
        "name": "BlakeIsLIT",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5698
    }, {
        "id": "328367483775877120",
        "name": "loop",
        "shits": 0,
        "activity": 0,
        "lastmsg": 4221
    }, {
        "id": "385827419610808340",
        "name": "Patrick",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9160
    }, {
        "id": "381575867672821760",
        "name": "Wonder Tweek",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8654
    }, {
        "id": "201014010395623424",
        "name": "alfredo2006",
        "shits": 0,
        "activity": 389.0596528926743,
        "lastmsg": 128
    }, {
        "id": "262655459658432514",
        "name": "Travall",
        "shits": 0,
        "activity": 20,
        "lastmsg": 145
    }, {
        "id": "220726653117136897",
        "name": "Saurav",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3873
    }, {
        "id": "329430391872159755",
        "name": "F.Dank",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9253
    }, {
        "id": "300947353060507648",
        "name": "Ray~Kun",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8576
    }, {
        "id": "361636825170706442",
        "name": "heyitsbailey",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8535
    }, {
        "id": "280844846904770561",
        "name": "Woodland Critters",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8516
    }, {
        "id": "173275217722998786",
        "name": "Edgar",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7314
    }, {
        "id": "395167253533818880",
        "name": "waqasvic",
        "shits": 0,
        "activity": 0,
        "lastmsg": 1176
    }, {
        "id": "256379238230392833",
        "name": "pure irony",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7712
    }, {
        "id": "142885328724819969",
        "name": "Samurai",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8401
    }, {
        "id": "272862527900221440",
        "name": "rikkun",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8396
    }, {
        "id": "96373682871492608",
        "name": "Hexxie 🍒",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3116
    }, {
        "id": "133046540074876929",
        "name": "Tyeiz",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7885
    }, {
        "id": "348989621742600194",
        "name": "Eli",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11109
    }, {
        "id": "275754534285082624",
        "name": "himiko",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8807
    }, {
        "id": "199740565753954304",
        "name": "Centrist16",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8157
    }, {
        "id": "265547706905264152",
        "name": "oncelier",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8150
    }, {
        "id": "352452842801332226",
        "name": "Jelly",
        "shits": 0,
        "activity": 0,
        "lastmsg": 2733
    }, {
        "id": "371143800590041089",
        "name": "Jarabe",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5613
    }, {
        "id": "107810822859821056",
        "name": "swiggaswayslit",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9095
    }, {
        "id": "148969884615704576",
        "name": "saku",
        "shits": 0,
        "activity": 0,
        "lastmsg": 2001
    }, {
        "id": "145284235354308608",
        "name": "definiteely",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8617
    }, {
        "id": "327238996683915267",
        "name": "K1NG L0P3Z",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3026
    }, {
        "id": "304980605207183370",
        "name": "Sigma",
        "shits": 0,
        "activity": 0,
        "lastmsg": 2960
    }, {
        "id": "272986016242204672",
        "name": "nathanielcwm",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9148
    }, {
        "id": "356560547245981697",
        "name": "leodood",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9448
    }, {
        "id": "337082933733097474",
        "name": "Kathiyar",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7243
    }, {
        "id": "253691181970489344",
        "name": "×+",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6153
    }, {
        "id": "326728154511048708",
        "name": "Noka",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6875
    }, {
        "id": "298610959335948289",
        "name": "Scancilen",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7383
    }, {
        "id": "267907982115864576",
        "name": "Ryan eats 20 peppers and dies",
        "shits": 0,
        "activity": 0,
        "lastmsg": 1800
    }, {
        "id": "252303783785136138",
        "name": "Zipphy",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5813
    }, {
        "id": "209192627306889216",
        "name": "Habri",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7260
    }, {
        "id": "365957462333063170",
        "name": "Alexdewa",
        "shits": 0,
        "activity": 0,
        "lastmsg": 1806
    }, {
        "id": "173525714409226240",
        "name": "DaimeowSparklez",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9003
    }, {
        "id": "268936097399177218",
        "name": "angelkenny",
        "shits": 0,
        "activity": 0,
        "lastmsg": 1002
    }, {
        "id": "66021750319620096",
        "name": "Tobled",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7276
    }, {
        "id": "388165140152844288",
        "name": "pickwickjesus",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7298
    }, {
        "id": "308665976231165953",
        "name": "pokemonmaster!",
        "shits": 0,
        "activity": 114,
        "lastmsg": 147
    }, {
        "id": "139478949779603465",
        "name": "Dank Tree",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7296
    }, {
        "id": "295721447995736064",
        "name": "jka0004",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11094
    }, {
        "id": "175361312484884482",
        "name": "corylulu",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7275
    }, {
        "id": "348292774870908929",
        "name": "axoloto",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7259
    }, {
        "id": "324864375817240577",
        "name": "hatrack",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7164
    }, {
        "id": "107560034455543808",
        "name": "Midnight",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11616
    }, {
        "id": "308362412908871682",
        "name": "Highlandcatt",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5742
    }, {
        "id": "292497046353477633",
        "name": "Kae",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7148
    }, {
        "id": "268650976460668929",
        "name": "somevietlove",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9633
    }, {
        "id": "349149314372861953",
        "name": "MateiTheSouthParkFan",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8385
    }, {
        "id": "111910654452989952",
        "name": "RosstheBossy",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7297
    }, {
        "id": "366750726640107520",
        "name": "dieandfuckingloveme",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6158
    }, {
        "id": "202967811285450752",
        "name": "HyyDee",
        "shits": 0,
        "activity": 0,
        "lastmsg": 10990
    }, {
        "id": "254243953828823041",
        "name": "yuri",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6827
    }, {
        "id": "286268252730949633",
        "name": "The Great Garbo",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11691
    }, {
        "id": "295577134259240962",
        "name": "bkr121",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6801
    }, {
        "id": "326045308184166400",
        "name": "Tweek Tweak",
        "shits": 0,
        "activity": 0,
        "lastmsg": 10844
    }, {
        "id": "308912385325006848",
        "name": "DragonFart",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6533
    }, {
        "id": "244240370450432001",
        "name": "Crystalpyg613",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11140
    }, {
        "id": "300373645555924993",
        "name": "MCMAYNERBERRY",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11071
    }, {
        "id": "382245126409551873",
        "name": "LORDE",
        "shits": 0,
        "activity": 182,
        "lastmsg": 426
    }, {
        "id": "173866620844900352",
        "name": "jokerj4513",
        "shits": 0,
        "activity": 0,
        "lastmsg": 4123
    }, {
        "id": "286242060271484928",
        "name": "nuke",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6166
    }, {
        "id": "213402490752729089",
        "name": "victorREZNOV12",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11645
    }, {
        "id": "273558514784403466",
        "name": "•sad-cormick•",
        "shits": 0,
        "activity": 0,
        "lastmsg": 1947
    }, {
        "id": "288988292588896256",
        "name": "Catharsis",
        "shits": 0,
        "activity": 8,
        "lastmsg": 144
    }, {
        "id": "293891845908594689",
        "name": "bluh",
        "shits": 0,
        "activity": 2,
        "lastmsg": 398
    }, {
        "id": "212027945211002880",
        "name": "Dexter (Kitkat)",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3837
    }, {
        "id": "387263906508308500",
        "name": "Ice....",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6376
    }, {
        "id": "311676229898076170",
        "name": "Master Assassin",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6491
    }, {
        "id": "223967777898102784",
        "name": "emithecheme",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6964
    }, {
        "id": "126131102153834497",
        "name": "Δbility",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6894
    }, {
        "id": "262979877005688832",
        "name": "Mr.SnowBones",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3271
    }, {
        "id": "247338595839377418",
        "name": "Samuel_420",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7461
    }, {
        "id": "237825448862547978",
        "name": "....🥃",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6583
    }, {
        "id": "220010763593580545",
        "name": "pornjesus",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6813
    }, {
        "id": "320130681265192960",
        "name": "OPERA",
        "shits": 0,
        "activity": 0,
        "lastmsg": 2947
    }, {
        "id": "281967911680081923",
        "name": "the bard",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9635
    }, {
        "id": "318211176930738177",
        "name": "4in",
        "shits": 0,
        "activity": 0,
        "lastmsg": 4023
    }, {
        "id": "262354819652517888",
        "name": "Gook Jr.",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9632
    }, {
        "id": "230841624685445120",
        "name": "Ben | Gongon",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5460
    }, {
        "id": "177092979155140608",
        "name": "Star 🎄",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3897
    }, {
        "id": "322586251280515082",
        "name": "Beth.",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5397
    }, {
        "id": "195206033558339584",
        "name": "Surgt11",
        "shits": 0,
        "activity": 0,
        "lastmsg": 6267
    }, {
        "id": "135821957844172800",
        "name": "Poker1st",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5874
    }, {
        "id": "250366258741116928",
        "name": "Shmow",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5086
    }, {
        "id": "214584733395451905",
        "name": "merry birbmas",
        "shits": 0,
        "activity": 438,
        "lastmsg": 88
    }, {
        "id": "197336283176108032",
        "name": "Syncro37",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5308
    }, {
        "id": "250235216155639808",
        "name": "Husk le Pups",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5550
    }, {
        "id": "352605872704192513",
        "name": "TheShareBear",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3581
    }, {
        "id": "192806211534585856",
        "name": "shiki",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11422
    }, {
        "id": "133950904226414593",
        "name": "Quaxo",
        "shits": 0,
        "activity": 0,
        "lastmsg": 10816
    }, {
        "id": "164752496982491136",
        "name": "The Christmas Egg",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3933
    }, {
        "id": "199762100183105536",
        "name": "Yuriprime",
        "shits": 0,
        "activity": 0,
        "lastmsg": 4361
    }, {
        "id": "327292206354399235",
        "name": "ducc",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11019
    }, {
        "id": "343417573880102912",
        "name": "Cookie",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11631
    }, {
        "id": "374270368522698753",
        "name": "BlueSah89",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9317
    }, {
        "id": "173168799506235392",
        "name": "Craig Tucker",
        "shits": 0,
        "activity": 0,
        "lastmsg": 4087
    }, {
        "id": "363857633998012416",
        "name": "Sophelia",
        "shits": 0,
        "activity": 0,
        "lastmsg": 4364
    }, {
        "id": "333162055542767619",
        "name": "najen",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8620
    }, {
        "id": "281550411058642946",
        "name": "Xor",
        "shits": 0,
        "activity": 0,
        "lastmsg": 2849
    }, {
        "id": "347502445103939586",
        "name": "PinkPawedProductions",
        "shits": 0,
        "activity": 0,
        "lastmsg": 4326
    }, {
        "id": "294613651808190464",
        "name": "She's the one I love",
        "shits": 0,
        "activity": 0,
        "lastmsg": 1144
    }, {
        "id": "155149108183695360",
        "name": "Dyno",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9108
    }, {
        "id": "316372939157012481",
        "name": "Witt",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3892
    }, {
        "id": "248958355996016662",
        "name": "Noerdy",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5875
    }, {
        "id": "297544042718298125",
        "name": "necks_lvl",
        "shits": 0,
        "activity": 0,
        "lastmsg": 677
    }, {
        "id": "144872569525239809",
        "name": "nitroyoshi9",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11610
    }, {
        "id": "330044916216365056",
        "name": "Micavolg2344",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3915
    }, {
        "id": "314917673123446786",
        "name": "Alkalye",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3886
    }, {
        "id": "255764664938528784",
        "name": "1998CR",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3847
    }, {
        "id": "253903514391150592",
        "name": "That One South Park Fan",
        "shits": 0,
        "activity": 0,
        "lastmsg": 4451
    }, {
        "id": "273268037837127690",
        "name": "MonstoBusta2000",
        "shits": 0,
        "activity": 0,
        "lastmsg": 2227
    }, {
        "id": "391393163186798594",
        "name": "Bitterra",
        "shits": 0,
        "activity": 6,
        "lastmsg": 141
    }, {
        "id": "349968272738877440",
        "name": "Blu Haired Boi",
        "shits": 0,
        "activity": 0,
        "lastmsg": 10542
    }, {
        "id": "307976961064435713",
        "name": "RedBot",
        "shits": 0,
        "activity": 0,
        "lastmsg": 12244
    }, {
        "id": "181370713817612289",
        "name": "Kawa",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3523
    }, {
        "id": "389259207750451201",
        "name": "csensang",
        "shits": 0,
        "activity": 0,
        "lastmsg": 4072
    }, {
        "id": "324313543753203723",
        "name": "GhostCPYT",
        "shits": 0,
        "activity": 0,
        "lastmsg": 11632
    }, {
        "id": "374108952746786818",
        "name": "Tweak",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3154
    }, {
        "id": "148170360406147075",
        "name": "Seaner23",
        "shits": 0,
        "activity": 0,
        "lastmsg": 898
    }, {
        "id": "333369502026956802",
        "name": "fat",
        "shits": 0,
        "activity": 0,
        "lastmsg": 2143
    }, {
        "id": "305792949193539584",
        "name": "Max is Festive",
        "shits": 0,
        "activity": 0,
        "lastmsg": 10035
    }, {
        "id": "331010622760288257",
        "name": "Xheraldo",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8676
    }, {
        "id": "390208355873849355",
        "name": "Perroloco",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3670
    }, {
        "id": "331766123924160533",
        "name": "Rodent",
        "shits": 0,
        "activity": 0,
        "lastmsg": 2002
    }, {
        "id": "169152171873533952",
        "name": "why",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8877
    }, {
        "id": "190837075183009792",
        "name": "Lightning",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9171
    }, {
        "id": "289829303565156353",
        "name": "feliz hannkuah",
        "shits": 0,
        "activity": 0,
        "lastmsg": 2415
    }, {
        "id": "373089771771396099",
        "name": "FrightfulDread",
        "shits": 0,
        "activity": 0,
        "lastmsg": 2719
    }, {
        "id": "248084943522103296",
        "name": "Katsura",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5959
    }, {
        "id": "388838167119396864",
        "name": "CreekShipper64",
        "shits": 0,
        "activity": 0,
        "lastmsg": 1645
    }, {
        "id": "104984717891223552",
        "name": "2th",
        "shits": 0,
        "activity": 20,
        "lastmsg": 71
    }, {
        "id": "372155002396868614",
        "name": "ＷＩＺＡＲＤ",
        "shits": 0,
        "activity": 842,
        "lastmsg": 57
    }, {
        "id": "330193848137678848",
        "name": "Raven",
        "shits": 0,
        "activity": 108,
        "lastmsg": 312
    }, {
        "id": "156564558368997376",
        "name": "boop",
        "shits": 0,
        "activity": 98,
        "lastmsg": 255
    }, {
        "id": "270343911581417482",
        "name": "blizz",
        "shits": 0,
        "activity": 0,
        "lastmsg": 2123
    }, {
        "id": "171798358153887744",
        "name": "Lolwutburger",
        "shits": 0,
        "activity": 882,
        "lastmsg": 253
    }, {
        "id": "256545543398883329",
        "name": "randall",
        "shits": 0,
        "activity": 22.153086488973877,
        "lastmsg": 698
    }, {
        "id": "383370313611870218",
        "name": "Magnet Cloud",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8156
    }, {
        "id": "313466406563872769",
        "name": "theboss",
        "shits": 0,
        "activity": 158,
        "lastmsg": 425
    }, {
        "id": "67773365326184448",
        "name": "Meoin",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9321
    }, {
        "id": "273864312206917634",
        "name": "Wheatley",
        "shits": 0,
        "activity": 0,
        "lastmsg": 1993
    }, {
        "id": "267056064527073280",
        "name": "Ice",
        "shits": 0,
        "activity": 0,
        "lastmsg": 3311
    }, {
        "id": "156055487618482176",
        "name": "🎄 マフィン 🍊",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8927
    }, {
        "id": "352657542452609024",
        "name": "tit slit",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7286
    }, {
        "id": "396344307902054401",
        "name": "Mr. Mantis",
        "shits": 0,
        "activity": 1764,
        "lastmsg": 85
    }, {
        "id": "395675681574354944",
        "name": "Cloyster//LunalaDalaShala",
        "shits": 0,
        "activity": 52,
        "lastmsg": 477
    }, {
        "id": "245408198713016320",
        "name": "Mysterion?",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9311
    }, {
        "id": "379142078048894976",
        "name": "MLGesus",
        "shits": 0,
        "activity": 48,
        "lastmsg": 350
    }, {
        "id": "262071124463058944",
        "name": "Ghostler",
        "shits": 0,
        "activity": 0,
        "lastmsg": 2511
    }, {
        "id": "227482342309101568",
        "name": "what the FUCK is up kyle",
        "shits": 0,
        "activity": 40,
        "lastmsg": 399
    }, {
        "id": "195968053123481601",
        "name": "Jay Frost",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8819
    }, {
        "id": "381481841636671498",
        "name": "Shanmalon",
        "shits": 0,
        "activity": 5.71622455545256,
        "lastmsg": 658
    }, {
        "id": "336851422639554560",
        "name": "Policeman Craig",
        "shits": 0,
        "activity": 8,
        "lastmsg": 83
    }, {
        "id": "202609552804282368",
        "name": "Karachoice07",
        "shits": 0,
        "activity": 0,
        "lastmsg": 899
    }, {
        "id": "215651576356929546",
        "name": "l1nka7",
        "shits": 0,
        "activity": 2114,
        "lastmsg": 149
    }, {
        "id": "192752976606003201",
        "name": "LANES",
        "shits": 0,
        "activity": 120,
        "lastmsg": 416
    }, {
        "id": "369188529965760535",
        "name": "!.[!Heidi Turner].!",
        "shits": 0,
        "activity": 0,
        "lastmsg": 754
    }, {
        "id": "168758473587163137",
        "name": "Oneironaut",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9064
    }, {
        "id": "254751031001481216",
        "name": "stinky",
        "shits": 0,
        "activity": 360,
        "lastmsg": 57
    }, {
        "id": "368352414409162752",
        "name": "Abeldor",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8657
    }, {
        "id": "307446347559206922",
        "name": "skankhunt42",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8620
    }, {
        "id": "304819781838700546",
        "name": "Th3 R4nd0m P3rs0n",
        "shits": 0,
        "activity": 14,
        "lastmsg": 97
    }, {
        "id": "377183753061138444",
        "name": "jazzeuopho",
        "shits": 0,
        "activity": 0,
        "lastmsg": 8023
    }, {
        "id": "280425545886597131",
        "name": "Super Adam",
        "shits": 0,
        "activity": 0,
        "lastmsg": 5382
    }, {
        "id": "306436950842146816",
        "name": "dead meme🤔",
        "shits": 0,
        "activity": 6,
        "lastmsg": 427
    }, {
        "id": "229183531006296064",
        "name": "Yasoran",
        "shits": 0,
        "activity": 0,
        "lastmsg": 12068
    }, {
        "id": "104747875782660096",
        "name": "Sorathomos",
        "shits": 0,
        "activity": 0,
        "lastmsg": 10864
    }, {
        "id": "258397522207178753",
        "name": "Wyatt",
        "shits": 0,
        "activity": 0,
        "lastmsg": 7304
    }, {
        "id": "276488010726637578",
        "name": "MayContainWheat",
        "shits": 1,
        "activity": 52,
        "lastmsg": 21
    }, {
        "id": "158150240715800576",
        "name": "Shadok123",
        "shits": 0,
        "activity": 0,
        "lastmsg": 9426
    }]
}
//

// Emitted whenever a channel is created.
client.on("channelCreate", channel => {

});

// Emitted whenever a channel is deleted.
client.on("channelDelete", channel => {

});

// Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event,
// not much information can be provided easily here - you need to manually check the pins yourself.
client.on("channelPinsUpdate", (channel, time) => {

});

// Emitted whenever a channel is updated - e.g. name change, topic change.
client.on("channelUpdate", (oldChannel, newChannel) => {

});

// Emitted whenever the client user's settings update.
client.on("clientUserGuildSettingsUpdate", clientUserGuildSettings => {

});

// Emitted when the client user's settings update.
client.on("clientUserSettingsUpdate", clientUserSettings => {

});

// Emitted for general debugging information.
client.on("debug", info => {

});

// Emitted when the client's WebSocket disconnects and will no longer attempt to reconnect.
client.on("disconnect", event => {

});

// Emitted whenever a custom emoji is created in a guild.
client.on("emojiCreate", emoji => {

});

// Emitted whenever a custom guild emoji is deleted.
client.on("emojiDelete", emoji => {

});

// Emitted whenever a custom guild emoji is updated.
client.on("emojiUpdate", (oldEmoji, newEmoji) => {

});

// Emitted whenever the client's WebSocket encounters a connection error.
client.on("error", error => {

});

// Emitted whenever a member is banned from a guild.
client.on("guildBanAdd", (guild, user) => {

});

// Emitted whenever a member is unbanned from a guild.
client.on("guildBanRemove", (guild, user) => {

});

// Emitted whenever the client joins a guild.
client.on("guildCreate", guild => {

});

// Emitted whenever a guild is deleted/left.
client.on("guildDelete", guild => {

});

// Emitted whenever a user joins a guild.
client.on("guildMemberAdd", member => {

});

// Emitted whenever a member becomes available in a large guild.
client.on("guildMemberAvailable", member => {

});

// Emitted whenever a member leaves a guild, or is kicked.
client.on("guildMemberRemove", member => {

});

// Emitted whenever a chunk of guild members is received (all members come from the same guild).
client.on("guildMembersChunk", (members, guild) => {

});

// Emitted once a guild member starts/stops speaking.
client.on("guildMemberSpeaking", (member, speaking) => {

});

// Emitted whenever a guild member changes - i.e. new role, removed role, nickname.
client.on("guildMemberUpdate", (oldMember, newMember) => {

});

// Emitted whenever a guild becomes unavailable, likely due to a server outage.
client.on("guildUnavailable", guild => {

});

// Emitted whenever a guild is updated - e.g. name change.
client.on("guildUpdate", (oldGuild, newGuild) => {

});

// Emitted whenever a message is created.
client.on("message", message => {

    if (message.author.equals(client.user)) { return; }

    const ourServerId = "371762864790306817";

    if (message.content.startsWith("-debug")) {
        console.log(servers);
    }

    if (message.content.indexOf("shit") != -1) {

        // Find /r/southpark server.
        const server = servers.find(e => {
            return e._id == ourServerId;
        });
        if (server == undefined) {
            console.log("1 >> THE BOT IS BROKEN, WERE ALL FUCKED!");
            return;
        }

        // Find current member.
        if (server.members == undefined) {
            server.members = [];
        }
        const member = server.members.find(e => {
            return e.id == message.author.id;
        });
        if (member == undefined) {
            server.members.push({
                id: message.author.id,
                name: message.author.username,
                stats: [
                    {
                        name: "shits",
                        value: 1
                    }
                ]
            });
            return;
        }

        // Find 'shits' stat.
        if (member.stats == undefined) {
            member.stats = [];
        }
        const stat = member.stats.find(e => {
            return e.name == "shits";
        });
        if (stat == undefined) {
            member.stats.push({
                name: "shits",
                value: 1
            });
            return;
        }

        stat.value += 1;

        for (var i = 0; i < member.stats.length; i++) {
            if (member.stats[i].name == "shits") {
                member.stats[i] = stat;
                break;
            }
        }

        for (var i = 0; i < server.members.length; i++) {
            if (server.members[i].id == message.author.id) {
                server.members[i] = member;
                break;
            }
        }
    }
});

// Emitted whenever a message is deleted.
client.on("messageDelete", message => {

});

// Emitted whenever messages are deleted in bulk.
client.on("messageDeleteBulk", messages => {

});

// Emitted whenever a reaction is added to a message.
client.on("messageReactionAdd", (messageReaction, user) => {

});

// Emitted whenever a reaction is removed from a message.
client.on("messageReactionRemove", (messageReaction, user) => {

});

// Emitted whenever all reactions are removed from a message.
client.on("messageReactionRemoveAll", message => {

});

// Emitted whenever a message is updated - e.g. embed or content change.
client.on("messageUpdate", (oldMessage, newMessage) => {

});

// Emitted whenever a guild member's presence changes, or they change one of their details.
client.on("presenceUpdate", (oldMember, newMember) => {

});

// Emitted when the client becomes ready to start working.
client.on("ready", () => {

    const ourServerId = "371762864790306817";
    Server.findById(ourServerId, (err, server) => {
        if (err) {
            console.log("1 >> THE DB IS BROKEN, WERE ALL FUCKED!");
            return;
        }

        var found = false;
        for (var i = 0; i < servers.length; i++) {
            if (servers[i]._id == server._id) {

                found = true;
                servers[i] = server;
            }
        }

        if (!found) {
            servers.push(server);
        }
    });

    const interval = /*300000*/10000;
    timers.setInterval(() => {

        Server.findById(ourServerId, (err, server) => {
            if (err) {
                console.log("2 >> THE DB IS BROKEN, WERE ALL FUCKED!");
                return;
            }

            var found = false;
            for (var i = 0; i < servers.length; i++) {
                if (servers[i]._id == server._id) {
    
                    found = true;

                    // Convert old json storage and save in db.
                    /*
                    const members = [];
                    for (var j = 0; j < temp.list.length; j++) {
                        members.push({
                            id: temp.list[j].id,
                            name: temp.list[j].name,
                            stats: [
                                {
                                    name: "shits",
                                    value: temp.list[j].shits
                                },
                                {
                                    name: "activity",
                                    value: temp.list[j].activity
                                }
                            ]
                        });
                    }
                    */

                    server.members = servers[i].members;
                    server.graphs = servers[i].graphs;
                    server.stats = servers[i].stats;
                    server.issues = servers[i].issues;
                }
            }
    
            if (!found) {
                console.log("3 >> THE DB IS BROKEN, WERE ALL FUCKED!");
            }

            server.save(err => {
                if (err) {
                    console.log("4 >> THE DB IS BROKEN, WERE ALL FUCKED!");
                }
            });
        });

    }, interval);
});

// Emitted whenever the client tries to reconnect to the WebSocket.
client.on("reconnecting", () => {

});

// Emitted whenever a WebSocket resumes.
client.on("resume", replayed => {

});

// Emitted whenever a role is created.
client.on("roleCreate", role => {

});

// Emitted whenever a guild role is deleted.
client.on("roleDelete", role => {

});

// Emitted whenever a guild role is updated.
client.on("roleUpdate", (oldRole, newRole) => {

});

// Emitted whenever a user starts typing in a channel.
client.on("typingStart", (channel, user) => {

});

// Emitted whenever a user stops typing in a channel.
client.on("typingStop", (channel, user) => {

});

// Emitted whenever a note is updated.
client.on("userNoteUpdate", (user, oldNote, newNote) => {

});

// Emitted whenever a user's details (e.g. username) are changed.
client.on("userUpdate", (oldUser, newUser) => {

});

// Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
client.on("voiceStateUpdate", (oldMember, newMember) => {

});

// Emitted for general warnings.
client.on("warn", info => {

});

module.exports = client;