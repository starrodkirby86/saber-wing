const PLAYERS = [
    {
        "Tag": "Ty",
        "Pool": "Top 6"
    },
    {
        "Tag": "Roscoe",
        "Pool": "Top 6"
    },
    {
        "Tag": "kay0ss",
        "Pool": "Top 6"
    },
    {
        "Tag": "FENRIR",
        "Pool": "Top 6"
    },
    {
        "Tag": "Desklamp",
        "Pool": "16"
    },
    {
        "Tag": "Flash",
        "Pool": "16"
    },
    {
        "Tag": "T. Swag",
        "Pool": "16"
    },
    {
        "Tag": "BIGC",
        "Pool": "15"
    },
    {
        "Tag": "Sonny_DDR",
        "Pool": "15"
    },
    {
        "Tag": "nock",
        "Pool": "15"
    },
    {
        "Tag": "EVERGLOW",
        "Pool": "14"
    },
    {
        "Tag": "Kenji",
        "Pool": "14"
    },
    {
        "Tag": "kennys",
        "Pool": "14"
    },
    {
        "Tag": "NRM",
        "Pool": "13"
    },
    {
        "Tag": "PinkLumenade",
        "Pool": "13"
    },
    {
        "Tag": "shoopa",
        "Pool": "13"
    },
    {
        "Tag": "chezmix",
        "Pool": "12"
    },
    {
        "Tag": "Thotful",
        "Pool": "12"
    },
    {
        "Tag": "Godo",
        "Pool": "12"
    },
    {
        "Tag": "Gachime",
        "Pool": "11"
    },
    {
        "Tag": "dlim",
        "Pool": "11"
    },
    {
        "Tag": "cosmynx",
        "Pool": "11"
    },
    {
        "Tag": "Dickey",
        "Pool": "10"
    },
    {
        "Tag": "Zeo",
        "Pool": "10"
    },
    {
        "Tag": "Dmtechno",
        "Pool": "10"
    },
    {
        "Tag": "Hitswi",
        "Pool": "9"
    },
    {
        "Tag": "DOMIGAME",
        "Pool": "9"
    },
    {
        "Tag": "D.KEVIN",
        "Pool": "9"
    },
    {
        "Tag": "Mr3dimensional",
        "Pool": "8"
    },
    {
        "Tag": "BigYama",
        "Pool": "8"
    },
    {
        "Tag": "Hiten",
        "Pool": "8"
    },
    {
        "Tag": "ando",
        "Pool": "7"
    },
    {
        "Tag": "verniy",
        "Pool": "7"
    },
    {
        "Tag": "Slime",
        "Pool": "7"
    },
    {
        "Tag": "Nightman",
        "Pool": "6"
    },
    {
        "Tag": "rawblink",
        "Pool": "6"
    },
    {
        "Tag": "Daggett",
        "Pool": "6"
    },
    {
        "Tag": "AlexCilantro",
        "Pool": "5"
    },
    {
        "Tag": "ItalianFalchion",
        "Pool": "5"
    },
    {
        "Tag": "StarBfly",
        "Pool": "5"
    },
    {
        "Tag": "LibraryTitan",
        "Pool": "4"
    },
    {
        "Tag": "fastboy",
        "Pool": "4"
    },
    {
        "Tag": "evand3r",
        "Pool": "4"
    },
    {
        "Tag": "Fredo",
        "Pool": "3"
    },
    {
        "Tag": "Freddie",
        "Pool": "3"
    },
    {
        "Tag": "HipHopSoul",
        "Pool": "3"
    },
    {
        "Tag": "countchief",
        "Pool": "2"
    },
    {
        "Tag": "CROSSANT",
        "Pool": "2"
    },
    {
        "Tag": "JennuineInc",
        "Pool": "2"
    },
    {
        "Tag": "calzone",
        "Pool": "1"
    },
    {
        "Tag": "Upgrade",
        "Pool": "1"
    },
    {
        "Tag": "Mental Minx",
        "Pool": "1"
    },
    {
        "Tag": "DINOREV!",
        "Pool": "1"
    }
];

const PLAYERS_ARRANGED_BY_POOL: Record<string, string[]> = { "1": ["calzone", "Upgrade", "Mental Minx", "DINOREV!"], "2": ["countchief", "CROSSANT", "JennuineInc"], "3": ["Fredo", "Freddie", "HipHopSoul"], "4": ["LibraryTitan", "fastboy", "evand3r"], "5": ["AlexCilantro", "ItalianFalchion", "StarBfly"], "6": ["Nightman", "rawblink", "Daggett"], "7": ["ando", "verniy", "Slime"], "8": ["Mr3dimensional", "BigYama", "Hiten"], "9": ["Hitswi", "DOMIGAME", "D.KEVIN"], "10": ["Dickey", "Zeo", "Dmtechno"], "11": ["Gachime", "dlim", "cosmynx"], "12": ["chezmix", "Thotful", "Godo"], "13": ["NRM", "PinkLumenade", "shoopa"], "14": ["EVERGLOW", "Kenji", "kennys"], "15": ["BIGC", "Sonny_DDR", "nock"], "16": ["Desklamp", "Flash", "T. Swag"], "Top 6": ["Ty", "Roscoe", "kay0ss", "FENRIR"] };

const POOL_ORDER = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "Top 6"];

export const MAP_POOL_DICT_TO_ARRAYS = () => POOL_ORDER.map(key => {
    const pool = PLAYERS_ARRANGED_BY_POOL[key];
    return pool.map((playerName: string) => ({
        player: { name: playerName },
        wins: 0,
    }));
})