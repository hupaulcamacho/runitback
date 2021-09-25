// asset import
import solIcon from "../Assets/CharIcons/sol.jpg";
import solPortrait from "../Assets/CharPortraits/GGST_SOL.png";

import kyIcon from "../Assets/CharIcons/ky.jpg";
import kyPortrait from "../Assets/CharPortraits/GGST_KY.png";

import mayIcon from "../Assets/CharIcons/may.jpg";
import mayPortrait from "../Assets/CharPortraits/GGST_MAY.png";

import axlIcon from "../Assets/CharIcons/axl.jpg";
import axlPortrait from "../Assets/CharPortraits/GGST_AXL.png";

import chippIcon from "../Assets/CharIcons/chipp.jpg";
import chippPortrait from "../Assets/CharPortraits/GGST_CHIPP.png";

import potIcon from "../Assets/CharIcons/potemkin.jpg";
import potPortrait from "../Assets/CharPortraits/GGST_POTEMKIN.png";

import faustIcon from "../Assets/CharIcons/faust.jpg";
import faustPortrait from "../Assets/CharPortraits/GGST_FAUST.png";

import milliaIcon from "../Assets/CharIcons/millia.jpg";
import milliaPortrait from "../Assets/CharPortraits/GGST_MILLIA.png";

import zatoIcon from "../Assets/CharIcons/zato.jpg";
import zatoPortrait from "../Assets/CharPortraits/GGST_ZATO=1.png";

import ramIcon from "../Assets/CharIcons/ramlethal.jpg";
import ramPortrait from "../Assets/CharPortraits/GGST_RAMLETHAL.png";

import nagoIcon from "../Assets/CharIcons/nagoriyuki.jpg";
import nagoPortrait from "../Assets/CharPortraits/GGST_NAGORIYUKI.png";

import leoIcon from "../Assets/CharIcons/leo.jpg";
import leoPortrait from "../Assets/CharPortraits/GGST_LEO.png";

import gioIcon from "../Assets/CharIcons/giovanna.jpg";
import gioPortrait from "../Assets/CharPortraits/GGST_GIOVANNA.png";

import anjiIcon from "../Assets/CharIcons/anji.jpg";
import anjiPortrait from "../Assets/CharPortraits/GGST_ANJI.png";

import inoIcon from "../Assets/CharIcons/ino.jpg";
import inoPortrait from "../Assets/CharPortraits/GGST_INO.png";


// object definition
export let characters = {
    sol: {
        charName: "Sol Badguy",
        icon: solIcon,
        portrait: solPortrait,
        type: "Balanced",
        tag: "#GGST_SOL",
        moves: {
            normals: {
                "5P": { 
                    damage: "28", 
                    startup: "4f", 
                    active: "5f", 
                    recovery: "9f", 
                    onblock: "-2f"
                },
                "5K": {
                    damage: "14,28",
                    startup: "3f",
                    active: "1f,3f",
                    recovery: "25f",
                    onblock: "-14f"
                },
                "c.S": {
                    damage: "44",
                    startup: "7f",
                    active: "6f",
                    recovery: "10f",
                    onblock: "+3f"
                },
                "f.S": {
                    damage: "36",
                    startup: "10f",
                    active: "2f",
                    recovery: "13f",
                    onblock: "+2f"
                },
                "5H": {
                    damage: "52",
                    startup: "11f",
                    active: "4f",
                    recovery: "25f",
                    onblock: "-5f"
                },
                "5D": {
                    damage: "50[62]",
                    startup: "20~28[28]f",
                    active: "3f",
                    recovery: "27f",
                    onblock: "-15[-10]f"
                },
                "2P": {
                    damage: "22",
                    startup: "5f",
                    active: "4f",
                    recovery: "8f",
                    onblock: "-2f"
                },
                "2K": {
                    damage: "28",
                    startup: "6f",
                    active: "3f",
                    recovery: "11f",
                    onblock: "-2f"
                },
                "2S": {
                    damage: "34",
                    startup: "10f",
                    active: "3f",
                    recovery: "18f",
                    onblock: "-7f"
                },
                "2H": {
                    damage: "46",
                    startup: "11f",
                    active: "5f",
                    recovery: "31f",
                    onblock: "-17f"
                },
                "2D": {
                    damage: "26",
                    startup: "10f",
                    active: "3f",
                    recovery: "18f",
                    onblock: "-4f"
                },
                "j.P": {
                    damage: "24",
                    startup: "5f",
                    active: "3f",
                    recovery: "8f",
                    onblock: ""
                },
                "j.K": {
                    damage: "30",
                    startup: "6f",
                    active: "3f",
                    recovery: "20f",
                    onblock: ""
                },
                "j.S": {
                    damage: "36",
                    startup: "10f",
                    active: "3f",
                    recovery: "23f",
                    onblock: ""
                },
                "j.H": {
                    damage: "24x2",
                    startup: "11f",
                    active: "4f,8f",
                    recovery: "0f",
                    onblock: ""
                },
                "j.D": {
                    damage: "45",
                    startup: "9f",
                    active: "3f",
                    recovery: "17f",
                    onblock: ""
                }
            },
            commandNormals: {
                "6P": {
                    damage: "36",
                    startup: "9f",
                    active: "5f",
                    recovery: "20f",
                    onblock: "-11f"
                },
                "6S": {
                    damage: "55",
                    startup: "15f",
                    active: "6f",
                    recovery: "20f",
                    onblock: "-7f"
                },
                "6H": {
                    damage: "60",
                    startup: "9f",
                    active: "3f",
                    recovery: "38f",
                    onblock: "-22f"
                }
            },
            specials: {
                "Gun Flame": {
                    damage: "40→35→30→30",
                    startup: "20f",
                    active: "10f,10f,10f,10f",
                    recovery: "54f",
                    onblock: "-8f",
                    input: "236P"
                },
                "Gun Flame Feint": {
                    damage: "-",
                    startup: "-",
                    active: "-",
                    recovery: "30f",
                    onblock: "-",
                    input: "214P"
                },
                "Volcanic Viper S": {
                    damage: "40",
                    startup: "7f",
                    active: "2(3)4f",
                    recovery: "17+10f after landing ",
                    onblock: "-22",
                    input: "623S"
                },
                "Volcanic Viper S(AIR)": {
                    damage: "40",
                    startup: "7f",
                    active: "2(3)4f",
                    recovery: "Until landing+10f",
                    onblock: "-",
                    input: "623S"
                },
                "Volcanic Viper H": {
                    damage: "35,40[35,100] ",
                    startup: "13f",
                    active: "2(3)11f",
                    recovery: "17+10f after landing ",
                    onblock: "-26",
                    input: "623S"
                },
                "Volcanic Viper H(AIR)": {
                    damage: "35,40[35,100] ",
                    startup: "13f",
                    active: "2(3)11f",
                    recovery: "Until landing+10f",
                    onblock: "-",
                    input: "623S"
                },
                "Bandit Revolver": {
                    damage: "20,25",
                    startup: "16f",
                    active: "6f",
                    recovery: "23+9f after landing ",
                    onblock: "-7",
                    input: "236K"
                },
                "Bandit Revolver(AIR)": {
                    damage: "20,25",
                    startup: "10f",
                    active: "6f",
                    recovery: "Until landing+9f",
                    onblock: "-",
                    input: "236K"
                },
                "Bandit Bringer": {
                    damage: "50",
                    startup: "30f",
                    active: "7f",
                    recovery: "12f after landing ",
                    onblock: "-2",
                    input: "214K"
                },
                "Bandit Bringer(AIR)": {
                    damage: "40",
                    startup: "30f",
                    active: "Until landing",
                    recovery: "Until landing+12f",
                    onblock: "-",
                    input: "214K"
                },
                "Wild Throw": {
                    damage: "120",
                    startup: "6f",
                    active: "2f",
                    recovery: "41f",
                    onblock: "-",
                    input: "623K"
                },
                "Night Raid Vortex": {
                    damage: "45[55]",
                    startup: "15f~31[32]f",
                    active: "2f",
                    recovery: "32[26]f",
                    onblock: "-17",
                    input: "214S (Hold OK)"
                },
                "Fafnir": {
                    damage: "65",
                    startup: "24f",
                    active: "3f",
                    recovery: "16f",
                    onblock: "+11",
                    input: "41236H"
                }
            },
            overdrives: {
                "Tyrant Rave": {
                    damage: "70, 100[70, 130]",
                    startup: "5+2f",
                    active: "3f",
                    recovery: "16f",
                    onblock: "-34",
                    input: "632146H"
                },
                "Heavy Mob Cemetary": {
                    damage: "40, 161",
                    startup: "13+7f",
                    active: "49f",
                    recovery: "84f",
                    onblock: "-",
                    input: "214214H"
                }
            }
        }
    },
    // ky: {
    //     charName: "Ky Kiske",
    //     icon: kyIcon,
    //     portrait: kyPortrait,
    //     type: "Balanced",
    //     moves: {
    //         normals: {
    //             "5P": { 
    //                 damage: "26", 
    //                 startup: "5f", 
    //                 active: "4f", 
    //                 recovery: "7f", 
    //                 onblock: "-1f"
    //             },
    //             "5K": {
    //                 damage: "30",
    //                 startup: "7f",
    //                 active: "6f",
    //                 recovery: "6f",
    //                 onblock: "-2f"
    //             },
    //             "c.S": {
    //                 damage: "42",
    //                 startup: "7f",
    //                 active: "6f",
    //                 recovery: "13f",
    //                 onblock: "-2f"
    //             },
    //             "f.S": {
    //                 damage: "42",
    //                 startup: "12f",
    //                 active: "6f",
    //                 recovery: "19f",
    //                 onblock: "-11f"
    //             },
    //             "5H": {
    //                 damage: "48",
    //                 startup: "14f",
    //                 active: "6f",
    //                 recovery: "21f",
    //                 onblock: "-8f"
    //             },
    //             "5D": {
    //                 damage: "45[56]",
    //                 startup: "20[28]f",
    //                 active: "4f",
    //                 recovery: "25f",
    //                 onblock: "-15[-10]f"
    //             },
    //             "2P": {
    //                 damage: "22",
    //                 startup: "5f",
    //                 active: "4f",
    //                 recovery: "8f",
    //                 onblock: "-2f"
    //             },
    //             "2K": {
    //                 damage: "26",
    //                 startup: "6f",
    //                 active: "4f",
    //                 recovery: "10f",
    //                 onblock: "-2f"
    //             },
    //             "2S": {
    //                 damage: "32",
    //                 startup: "10f",
    //                 active: "2f",
    //                 recovery: "20f",
    //                 onblock: "-8f"
    //             },
    //             "2H": {
    //                 damage: "14,40",
    //                 startup: "11f",
    //                 active: "1f,4f",
    //                 recovery: "28f",
    //                 onblock: "-13f"
    //             },
    //             "2D": {
    //                 damage: "34",
    //                 startup: "10f",
    //                 active: "6f",
    //                 recovery: "18f",
    //                 onblock: "-10f"
    //             },
    //             "j.P": {
    //                 damage: "20",
    //                 startup: "6f",
    //                 active: "3f",
    //                 recovery: "9f",
    //                 onblock: ""
    //             },
    //             "j.K": {
    //                 damage: "26",
    //                 startup: "7f",
    //                 active: "4f",
    //                 recovery: "8f",
    //                 onblock: ""
    //             },
    //             "j.S": {
    //                 damage: "32",
    //                 startup: "7f",
    //                 active: "3f",
    //                 recovery: "21f",
    //                 onblock: ""
    //             },
    //             "j.H": {
    //                 damage: "44",
    //                 startup: "13f",
    //                 active: "4f",
    //                 recovery: "23f",
    //                 onblock: ""
    //             },
    //             "j.D": {
    //                 damage: "32",
    //                 startup: "13f",
    //                 active: "6f",
    //                 recovery: "15f",
    //                 onblock: ""
    //             }
    //         },
    //         commandNormals: {

    //         },
    //         specials: {

    //         },
    //         overdrives: {

    //         }
    //     }
    // },
    // may: {
    //     charName: "May",
    //     icon: mayIcon,
    //     portrait: mayPortrait,
    //     type: "Balanced",
    //     moves: {
    //         normals: {

    //         },
    //         commandNormals: {

    //         },
    //         specials: {

    //         },
    //         overdrives: {

    //         }
    //     }
    // },
    axl: {
        charName: "Axl Low",
        icon: axlIcon,
        portrait: axlPortrait,
        type: "Long Range",
        tag: "#GGST_AX",
        moves: {
            normals: {
                "5P": { 
                    damage: "40[52]", 
                    startup: "7f", 
                    active: "6f", 
                    recovery: "19f", 
                    onblock: "-11f"
                },
                "5K": {
                    damage: "30",
                    startup: "6f",
                    active: "3f",
                    recovery: "11f",
                    onblock: "-2f"
                },
                "c.S": {
                    damage: "40",
                    startup: "8f",
                    active: "6f",
                    recovery: "15f",
                    onblock: "-4f"
                },
                "f.S": {
                    damage: "34",
                    startup: "10f",
                    active: "3f",
                    recovery: "25f",
                    onblock: "-14f"
                },
                "5H": {
                    damage: "48",
                    startup: "16f",
                    active: "4f",
                    recovery: "19f",
                    onblock: "-4f"
                },
                "5D": {
                    damage: "45[56]",
                    startup: "20[28]f",
                    active: "6f",
                    recovery: "23f",
                    onblock: "-15[-10]f"
                },
                "2P": {
                    damage: "30[39]",
                    startup: "10f",
                    active: "4f",
                    recovery: "21f",
                    onblock: "-13f"
                },
                "2K": {
                    damage: "26",
                    startup: "7f",
                    active: "5f",
                    recovery: "9f",
                    onblock: "-2f"
                },
                "2S": {
                    damage: "35[45]",
                    startup: "9f",
                    active: "10f",
                    recovery: "23f",
                    onblock: "-16f"
                },
                "2H": {
                    damage: "45[58]",
                    startup: "11f",
                    active: "9f",
                    recovery: "26f",
                    onblock: "-18f"
                },
                "2D": {
                    damage: "34",
                    startup: "10f",
                    active: "6f",
                    recovery: "17f",
                    onblock: "-9f"
                },
                "j.P": {
                    damage: "32[41]",
                    startup: "9f",
                    active: "4f",
                    recovery: "23f",
                    onblock: ""
                },
                "j.K": {
                    damage: "28",
                    startup: "8f",
                    active: "3f",
                    recovery: "16f",
                    onblock: ""
                },
                "j.S": {
                    damage: "32[41]",
                    startup: "11f",
                    active: "7f",
                    recovery: "18f",
                    onblock: ""
                },
                "j.H": {
                    damage: "40[52]",
                    startup: "12f",
                    active: "6f",
                    recovery: "25f",
                    onblock: ""
                },
                "j.D": {
                    damage: "44",
                    startup: "10f",
                    active: "5f",
                    recovery: "22f",
                    onblock: ""
                }
            },
            commandNormals: {
                "6P": {
                    damage: "30",
                    startup: "12f",
                    active: "5f",
                    recovery: "18f",
                    onblock: "-13f"
                },
                "6K": {
                    damage: "40[52]",
                    startup: "11f",
                    active: "5f",
                    recovery: "25f",
                    onblock: "-13f"
                },
                "6H": {
                    damage: "50",
                    startup: "27f",
                    active: "9f",
                    recovery: "13f",
                    onblock: "-3f"
                }
            },
            specials: {
                "Sickle Flash": {
                    damage: "15*3",
                    startup: "24f",
                    active: "15f",
                    recovery: "29f",
                    onblock: "-19~-9",
                    input: "[4]6S"
                },
                "Soaring Chain Strike": {
                    damage: "30",
                    startup: "8f",
                    active: "16f",
                    recovery: "34f",
                    onblock: "-11",
                    input: "8 after Sickle Flash"
                },
                "Spinning Chain Strike": {
                    damage: "15*5",
                    startup: "7f",
                    active: "36[79]f",
                    recovery: "19f",
                    onblock: "-6",
                    input: "2 after Sickle Flash(Hold OK)"
                },
                "Winter Cherry": {
                    damage: "40[60]",
                    startup: "18[22]f",
                    active: "10f",
                    recovery: "24f",
                    onblock: "-3[+10]",
                    input: "S after Sickle Flash"
                },
                "Winter Mantis": {
                    damage: "61[62]",
                    startup: "28f",
                    active: "20f",
                    recovery: "34f",
                    onblock: "-",
                    input: "41236H"
                },
                "Snail": {
                    damage: "45",
                    startup: "17f",
                    active: "12f",
                    recovery: "29f",
                    onblock: "-24",
                    input: "214H"
                },
                "Snail(AIR)": {
                    damage: "45",
                    startup: "16f",
                    active: "9f",
                    recovery: "Until landing +10f",
                    onblock: "-25",
                    input: "214H"
                },
                "Axl Bomber": {
                    damage: "80",
                    startup: "9f",
                    active: "10f",
                    recovery: "Until landing +7f",
                    onblock: "-22",
                    input: "j.623H"
                }
            },
            overdrives: {
                "Sickle Storm": {
                    damage: "50*2, 20*3",
                    startup: "11+1f",
                    active: "8(24)13f",
                    recovery: "26f",
                    onblock: "-2",
                    input: "236236H"
                },
                "One Vision": {
                    damage: "-",
                    startup: "5+22f",
                    active: "-f",
                    recovery: "-",
                    onblock: "-",
                    input: "632146P"
                }
            }
        }
    },
    // chipp: {
    //     charName: "Chipp Zanuff",
    //     icon: chippIcon,
    //     portrait: chippPortrait,
    //     type: "High Speed",
    //     moves: {
    //         normals: {

    //         },
    //         commandNormals: {

    //         },
    //         specials: {

    //         },
    //         overdrives: {

    //         }
    //     }
    // },
    // potemkin: {
    //     charName: "Potemkin",
    //     icon: potIcon,
    //     portrait: potPortrait,
    //     type: "Power Throw",
    //     moves: {
    //         normals: {

    //         },
    //         commandNormals: {

    //         },
    //         specials: {

    //         },
    //         overdrives: {

    //         }
    //     }
    // },
    // faust: {
    //     charName: "Faust",
    //     icon: faustIcon,
    //     portrait: faustPortrait,
    //     type: "Unique",
    //     moves: {
    //         normals: {

    //         },
    //         commandNormals: {

    //         },
    //         specials: {

    //         },
    //         overdrives: {

    //         }
    //     }
    // },
    // millia: {
    //     charName: "Millia Rage",
    //     icon: milliaIcon,
    //     portrait: milliaPortrait,
    //     type: "High Speed",
    //     moves: {
    //         normals: {

    //         },
    //         commandNormals: {

    //         },
    //         specials: {

    //         },
    //         overdrives: {

    //         }
    //     }
    // },
    // zato: {
    //     charName: "Zato=1",
    //     icon: zatoIcon,
    //     portrait: zatoPortrait,
    //     type: "Technical",
    //     moves: {
    //         normals: {

    //         },
    //         commandNormals: {

    //         },
    //         specials: {

    //         },
    //         overdrives: {

    //         }
    //     }
    // },
    ramlethal: {
        charName: "Ramlethal Valentine",
        icon: ramIcon,
        portrait: ramPortrait,
        type: "Shooting",
        tag: "#GGST_RA",
        moves: {
            normals: {
                "5P": { 
                    damage: "22", 
                    startup: "5f", 
                    active: "4f", 
                    recovery: "8f", 
                    onblock: "-2f"
                },
                "5K": {
                    damage: "30",
                    startup: "7f",
                    active: "3f",
                    recovery: "11f",
                    onblock: "-2f"
                },
                "c.S": {
                    damage: "40",
                    startup: "7f",
                    active: "6f",
                    recovery: "13f",
                    onblock: "-2f"
                },
                "f.S": {
                    damage: "32[25]",
                    startup: "11f",
                    active: "6f",
                    recovery: "21f",
                    onblock: "-10[-13]f"
                },
                "5H": {
                    damage: "42[33]",
                    startup: "12f",
                    active: "3f",
                    recovery: "28f",
                    onblock: "-12[-13]f"
                },
                "5D": {
                    damage: "45[56]",
                    startup: "20[28]f",
                    active: "2[2]f",
                    recovery: "27[27]f",
                    onblock: "-15[-10]f"
                },
                "2P": {
                    damage: "22",
                    startup: "6f",
                    active: "4f",
                    recovery: "9f",
                    onblock: "-3f"
                },
                "2K": {
                    damage: "26",
                    startup: "6f",
                    active: "5f",
                    recovery: "9f",
                    onblock: "-2f"
                },
                "2S": {
                    damage: "38[30]",
                    startup: "12[12]f",
                    active: "4[4]f",
                    recovery: "20[20]f",
                    onblock: "-7[-10]f"
                },
                "2H": {
                    damage: "46[35]",
                    startup: "14f",
                    active: "-",
                    recovery: "-",
                    onblock: "-15[-17]f"
                },
                "2D": {
                    damage: "36",
                    startup: "10f",
                    active: "6f",
                    recovery: "19f",
                    onblock: "-8f"
                },
                "j.P": {
                    damage: "20",
                    startup: "5f",
                    active: "4f",
                    recovery: "8f",
                    onblock: ""
                },
                "j.K": {
                    damage: "22",
                    startup: "7f",
                    active: "4f",
                    recovery: "13f",
                    onblock: ""
                },
                "j.S": {
                    damage: "30[24]",
                    startup: "12f",
                    active: "4f",
                    recovery: "24f",
                    onblock: ""
                },
                "j.H": {
                    damage: "40[32]",
                    startup: "16f",
                    active: "6f",
                    recovery: "31f",
                    onblock: ""
                },
                "j.D": {
                    damage: "16*3",
                    startup: "10f",
                    active: "",
                    recovery: "",
                    onblock: ""
                }
            },
            commandNormals: {
                "6P": {
                    damage: "30",
                    startup: "9f",
                    active: "5f",
                    recovery: "18f",
                    onblock: "-9f"
                },
                "6H": {
                    damage: "50[40]",
                    startup: "18[18]f",
                    active: "2[2]f",
                    recovery: "33[33]f",
                    onblock: "-16[-18]f"
                }
            },
            specials: {
                "Dauro": {
                    damage: "35",
                    startup: "11f",
                    active: "3f",
                    recovery: "27f",
                    onblock: "-10f",
                    input: "623P"
                },
                "Erarlumo": {
                    damage: "30, 35[50], 40[70]",
                    startup: "20f, 12f, 22f",
                    active: "7f, 4f, 6f",
                    recovery: "21f, 41f, 32f",
                    onblock: "-9f, -13[-2], -19",
                    input: "214P, 214P, 214P"
                },
                "Sildo Detruo": {
                    damage: "40",
                    startup: "30f",
                    active: "2f",
                    recovery: "18f",
                    onblock: "-3f",
                    input: "214K"
                },
                "Sildo Detruo(AIR)": {
                    damage: "40",
                    startup: "30f",
                    active: "Until landing",
                    recovery: "-",
                    onblock: "-7~-4f",
                    input: "214K"
                },
                "Bajoneto S": {
                    damage: "30, 35",
                    startup: "20f",
                    active: "",
                    recovery: "37f",
                    onblock: "+9f",
                    input: "236S"
                },
                "Bajoneto H": {
                    damage: "30, 35",
                    startup: "20f",
                    active: "",
                    recovery: "43f",
                    onblock: "+3f",
                    input: "236H"
                },
                "Agresa Ordono": {
                    damage: "30,30 [24,30] [30,24] {24,24} ",
                    startup: "12f",
                    active: "4(10)4f",
                    recovery: "24f",
                    onblock: "-",
                    input: "j.214S"
                },
                "Sabrobato": {
                    damage: "100 [75] {50} ",
                    startup: "19f",
                    active: "4f",
                    recovery: "42f",
                    onblock: "-27 [-27] {-32} ",
                    input: "214H"
                }
            },
            overdrives: {
                "Calvados": {
                    damage: "4*29, 50",
                    startup: "11f+13f",
                    active: "-",
                    recovery: "-",
                    onblock: "-70",
                    input: "632146H"
                },
                "Mortobato": {
                    damage: "160 [130] {100} ",
                    startup: "7f+2f",
                    active: "-",
                    recovery: "-",
                    onblock: "-30 [-30] {-35} ",
                    input: "236236S"
                }
            }
        }
    },
    // leo: {
    //     charName: "Leo Whitefang",
    //     icon: leoIcon,
    //     portrait: leoPortrait,
    //     type: "Balanced",
    //     moves: {
    //         normals: {

    //         },
    //         commandNormals: {

    //         },
    //         specials: {

    //         },
    //         overdrives: {

    //         }
    //     }
    // },
    // nagoriyuki: {
    //     charName: "Nagoriyuki",
    //     icon: nagoIcon,
    //     portrait: nagoPortrait,
    //     type: "One Shot",
    //     moves: {
    //         normals: {

    //         },
    //         commandNormals: {

    //         },
    //         specials: {

    //         },
    //         overdrives: {

    //         }
    //     }
    // },
    giovanna: {
        charName: "Giovanna",
        icon: gioIcon,
        portrait: gioPortrait,
        type: "Rushdown",
        tag: "#GGST_GI",
        moves: {
            normals: {
                "5P": { 
                    damage: "26 (27) [28]", 
                    startup: "4f", 
                    active: "3f", 
                    recovery: "9f", 
                    onblock: "-2f"
                },
                "5K": {
                    damage: "30 (31) [33]",
                    startup: "6f",
                    active: "4f",
                    recovery: "10f",
                    onblock: "-2f"
                },
                "c.S": {
                    damage: "40 (42) [44]",
                    startup: "7f",
                    active: "6f",
                    recovery: "10f",
                    onblock: "+3f"
                },
                "f.S": {
                    damage: "10, 10, 16 [11, 11, 17] ",
                    startup: "9f",
                    active: "2(6)2(6)2f",
                    recovery: "16f",
                    onblock: "-4"
                },
                "5H": {
                    damage: "45 (47) [49]",
                    startup: "10f",
                    active: "3f",
                    recovery: "19f",
                    onblock: "-5f"
                },
                "5D": {
                    damage: "45 (47) [49] [56 (58) [61] ] ",
                    startup: "20[28]f",
                    active: "4[4]f",
                    recovery: "25[25]f",
                    onblock: "-15[-10]f"
                },
                "2P": {
                    damage: "22 (23) [24]",
                    startup: "5f",
                    active: "2f",
                    recovery: "10f",
                    onblock: "-2f"
                },
                "2K": {
                    damage: "28 (29) [30]",
                    startup: "6f",
                    active: "3f",
                    recovery: "11f",
                    onblock: "-2f"
                },
                "2S": {
                    damage: "16, 18 [17, 19]",
                    startup: "9f",
                    active: "3(5)3f",
                    recovery: "15f",
                    onblock: "-6f"
                },
                "2H": {
                    damage: "40 (42) [44]",
                    startup: "11f",
                    active: "6f",
                    recovery: "21f",
                    onblock: "-8f"
                },
                "2D": {
                    damage: "40 (42) [44]",
                    startup: "17f",
                    active: "10f",
                    recovery: "7f",
                    onblock: "-3f"
                },
                "j.P": {
                    damage: "20 (21) [22]",
                    startup: "6f",
                    active: "5f",
                    recovery: "9f",
                    onblock: ""
                },
                "j.K": {
                    damage: "25 (26) [27]",
                    startup: "6f",
                    active: "3f",
                    recovery: "19f",
                    onblock: ""
                },
                "j.S": {
                    damage: "30 (31) [33]",
                    startup: "7f",
                    active: "3f",
                    recovery: "24f",
                    onblock: ""
                },
                "j.H": {
                    damage: "35 (36) [38]",
                    startup: "8f",
                    active: "5f",
                    recovery: "18f",
                    onblock: ""
                },
                "j.D": {
                    damage: "25,25 (26,26) [27,27]",
                    startup: "7f",
                    active: "3(7)3f",
                    recovery: "18f",
                    onblock: ""
                }
            },
            commandNormals: {
                "6P": {
                    damage: "32 (33) [35]",
                    startup: "13f",
                    active: "8f",
                    recovery: "15f",
                    onblock: "-9"
                },
                "6H": {
                    damage: "32 (33) [35], 28 (28) [30], 29 (31) [32]",
                    startup: "17f, 11f, 13f",
                    active: "9f",
                    recovery: "15f",
                    onblock: "-10, -11, -16"
                }
            },
            specials: {
                "Sepultura": {
                    damage: "45 (47) [49]",
                    startup: "13f",
                    active: "3f",
                    recovery: "20f",
                    onblock: "-4",
                    input: "214K"
                },
                "Trovão": {
                    damage: "48 (50) [52]",
                    startup: "27f",
                    active: "7f",
                    recovery: "15f",
                    onblock: "+2",
                    input: "236K"
                },
                "Sol Nascente": {
                    damage: "40 (42) [44]",
                    startup: "7f",
                    active: "14f",
                    recovery: "21f",
                    onblock: "-15",
                    input: "623S"
                },
                "Sol Poente": {
                    damage: "30 (31) [33]",
                    startup: "4[30]f",
                    active: "6(20)3f",
                    recovery: "10f",
                    onblock: "+4",
                    input: "214S"
                },
                "Sol Poente(AIR)": {
                    damage: "30 (31) [33]",
                    startup: "4[30]f",
                    active: "6(20)3f",
                    recovery: "Until landing +4f",
                    onblock: "+4",
                    input: "214S"
                }
            },
            overdrives: {
                "Ventania": {
                    damage: "168[176]",
                    startup: "4+3f",
                    active: "",
                    recovery: "",
                    onblock: "-37",
                    input: "632146H"
                },
                "Tempestade": {
                    damage: "140[150]",
                    startup: "3+1f",
                    active: "Until landing",
                    recovery: "",
                    onblock: "+6",
                    input: "j.236236H"
                }
            }
        }
    },
    // anji: {
    //     charName: "Anji Mito",
    //     icon: anjiIcon,
    //     portrait: anjiPortrait,
    //     type: "Balanced",
    //     moves: {
    //         normals: {

    //         },
    //         commandNormals: {

    //         },
    //         specials: {

    //         },
    //         overdrives: {

    //         }
    //     }
    // },
    // ino: {
    //     charName: "I-NO",
    //     icon: inoIcon,
    //     portrait: inoPortrait,
    //     type: "Rushdown",
    //     moves: {
    //         normals: {

    //         },
    //         commandNormals: {

    //         },
    //         specials: {

    //         },
    //         overdrives: {

    //         }
    //     }
    // }
    
}

