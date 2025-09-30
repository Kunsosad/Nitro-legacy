const classData = {
    swordfighter: {
        id: 'swordfighter',
        name: 'Swordfighter',
        archetype: 'Frontline Duelist',
        tagline: 'Balanced melee duelist wielding enchanted steel.',
        description: 'Swordfighters open Nitro Legacy in the Forest of Whispers. They specialize in close-quarters pressure, chaining parries into Nitro-charged finishers. Nara points reinforce their already stable ATK and DEF.',
        nitroSkill: 'Blade Tempest - spend the full Nitro bar to unleash a spinning combo that strikes all nearby foes three times and grants a brief damage shield.',
        stats: {
            atk: 40,
            def: 20,
            int: 10,
            mana: 10,
            speed: 20,
            nitro: 30
        },
        color: '#ff9b45',
        heroArt: 'https://sdmntprwestus3.oaiusercontent.com/files/00000000-7f9c-61fd-b829-fca52b50f5ac/raw?se=2025-09-29T17%3A14%3A43Z&sp=r&sv=2024-08-04&sr=b&scid=20b5e0d0-7f28-5324-b95a-26375311fafa&skoid=03727f49-62d3-42ac-8350-1c0e6559d238&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-29T00%3A54%3A51Z&ske=2025-09-30T00%3A54%3A51Z&sks=b&skv=2024-08-04&sig=pNvhqdicPEmg29Bv0IGoCTEuQUAJXvH6dvfFnypue2o%3D',
        heroAlt: 'Swordfighter pixel art hero',
        nara: 120,
        affinityMaps: ['forest', 'citadel'],
        starterWeaponName: 'Iron Sword'
    },
    archer: {
        id: 'archer',
        name: 'Archer',
        archetype: 'Precision Ranger',
        tagline: 'Elemental archer weaving Nitro arrows across the canyon winds.',
        description: 'Archers dominate open spaces like the Molten Peaks with ricochet shots and Nitro-powered piercing volleys. Their high speed lets them kite rare mobs while investing Nara to push critical hit potential.',
        nitroSkill: 'Tempest Volley - consumes Nitro to fire a whirlwind of arrows that applies elemental marks, enabling bonus drops on marked foes.',
        stats: {
            atk: 30,
            def: 10,
            int: 10,
            mana: 20,
            speed: 30,
            nitro: 30
        },
        color: '#ffa463',
        heroArt: 'https://public-frontend-cos.metadl.com/mgx/img/nitro-legacy/hero-archer.png',
        heroAlt: 'Archer pixel art hero',
        nara: 110,
        affinityMaps: ['canyon', 'forest'],
        starterWeaponName: 'Ashwood Bow'
    },
    magician: {
        id: 'magician',
        name: 'Magician',
        archetype: 'Arcane Conductor',
        tagline: 'Crystal sage bending mana currents into explosive spells.',
        description: 'Magicians excel in the Glacial Bastion, drawing power from ancient runes. Their INT and mana scaling eruptions devastate clustered enemies. Allocate Nara into Nitro to extend ultimate duration.',
        nitroSkill: 'Astral Nova - convert the Nitro gauge into an orbiting crystal nova that freezes enemies and refunds mana on detonation.',
        stats: {
            atk: 10,
            def: 10,
            int: 40,
            mana: 30,
            speed: 40,
            nitro: 30
        },
        color: '#5fc1ff',
        heroArt: 'https://public-frontend-cos.metadl.com/mgx/img/nitro-legacy/hero-magician.png',
        heroAlt: 'Magician pixel art hero',
        nara: 115,
        affinityMaps: ['citadel', 'abyss'],
        starterWeaponName: 'Astral Staff'
    },
    support: {
        id: 'support',
        name: 'Support',
        archetype: 'Guardian Weaver',
        tagline: 'Mystic healer binding shields and Nitro-sharing sigils.',
        description: 'Support channelers guard the Clockwork Haven settlement. They manipulate Nitro to shield allies, heal, and trigger aura buffs. Investing Nara into DEF or mana transforms them into raid anchors.',
        nitroSkill: 'Harmony Pulse - consume Nitro to deploy a field that heals allies, cleanses debuffs, and refunds a portion of Nitro to the party.',
        stats: {
            atk: 10,
            def: 40,
            int: 20,
            mana: 40,
            speed: 20,
            nitro: 30
        },
        color: '#6bd3ff',
        heroArt: 'https://public-frontend-cos.metadl.com/mgx/img/nitro-legacy/hero-support.png',
        heroAlt: 'Support pixel art hero',
        nara: 130,
        affinityMaps: ['forest', 'haven'],
        starterWeaponName: 'Ember Tome'
    }
};
const inventorySlots = Array.from({ length: 20 }, (_, index) => ({ slot: index, item: null }));
const assignItem = (slot, item) => {
    if (inventorySlots[slot]) {
        inventorySlots[slot].item = item;
    }
};
assignItem(0, {
    id: 'swordfighter-iron-sword',
    name: 'Iron Sword',
    icon: '??',
    rarity: 'rare',
    owner: 'swordfighter',
    description: 'Reliable blade infused with Nitro conduits. Grants +5 ATK on combo finishers.'
});
assignItem(1, {
    id: 'swordfighter-chainmail',
    name: 'Chainmail Vest',
    icon: '???',
    rarity: 'common',
    owner: 'swordfighter',
    description: 'Light armor crafted in Forest of Whispers. +8 DEF when Nitro above 15.'
});
assignItem(2, {
    id: 'archer-ashwood-bow',
    name: 'Ashwood Bow',
    icon: '??',
    rarity: 'rare',
    owner: 'archer',
    description: 'Starter bow strung with spectral fibers. Unlocks ricochet at Nitro threshold 20.'
});
assignItem(3, {
    id: 'archer-frost-arrows',
    name: 'Frostbite Quiver',
    icon: '??',
    rarity: 'epic',
    owner: 'archer',
    description: 'Elemental quiver that slows enemies and extends Nitro combos for Archers.'
});
assignItem(4, {
    id: 'magician-astral-staff',
    name: 'Astral Staff',
    icon: '?',
    rarity: 'rare',
    owner: 'magician',
    description: 'Focus stave forged in the Glacial Bastion. Boosts INT scaling for Astral Nova.'
});
assignItem(5, {
    id: 'magician-crystal-focus',
    name: 'Crystal Focus',
    icon: '??',
    rarity: 'epic',
    owner: 'magician',
    description: 'Amplifies spell crits and refunds mana when Nitro surpasses 25.'
});
assignItem(6, {
    id: 'support-ember-tome',
    name: 'Ember Tome',
    icon: '??',
    rarity: 'rare',
    owner: 'support',
    description: 'Starter tome storing flame sigils. Enables Harmony Pulse to ignite shields.'
});
assignItem(7, {
    id: 'support-guardian-bell',
    name: 'Guardian Bell',
    icon: '??',
    rarity: 'epic',
    owner: 'support',
    description: 'Rings to distribute Nitro across teammates after every heal tick.'
});
assignItem(8, {
    id: 'universal-potion',
    name: 'Healing Potion',
    icon: '??',
    rarity: 'common',
    owner: 'all',
    description: 'Restores 120 HP. Craftable via Molten Peaks materials.'
});
assignItem(9, {
    id: 'universal-warpstone',
    name: 'Warpstone Core',
    icon: '??',
    rarity: 'legendary',
    owner: 'all',
    description: 'Teleports party to any unlocked map. Consumed on use.'
});
assignItem(10, {
    id: 'universal-nitro-capacitor',
    name: 'Nitro Capacitor',
    icon: '?',
    rarity: 'rare',
    owner: 'all',
    description: 'Temporarily doubles Nitro gain for 15 seconds.'
});
assignItem(11, {
    id: 'support-bastion-shield',
    name: 'Clockwork Barrier',
    icon: '???',
    rarity: 'epic',
    owner: 'support',
    description: 'Emits mechanical wards in Clockwork Haven raids.'
});
assignItem(12, {
    id: 'magician-glacial-robe',
    name: 'Glacial Robe',
    icon: '??',
    rarity: 'rare',
    owner: 'magician',
    description: 'Frost-threaded robe that reduces mana cost of Astral Nova.'
});
assignItem(13, {
    id: 'archer-windrunner',
    name: 'Windrunner Boots',
    icon: '??',
    rarity: 'rare',
    owner: 'archer',
    description: 'Grants sprint burst and Nitro regen while moving.'
});
assignItem(14, {
    id: 'swordfighter-titan-shield',
    name: 'Titan Shield',
    icon: '???',
    rarity: 'epic',
    owner: 'swordfighter',
    description: 'A massive shield salvaged from Molten Peaks golems. Adds guard break immunity.'
});
assignItem(15, {
    id: 'support-harmony-relic',
    name: 'Harmony Relic',
    icon: '??',
    rarity: 'legendary',
    owner: 'support',
    description: 'Legendary relic that shares 25% of Support Nitro gain with allies.'
});
assignItem(16, {
    id: 'universal-scroll',
    name: 'Quest Scroll',
    icon: '??',
    rarity: 'common',
    owner: 'all',
    description: 'Unlocks a daily quest chain for Nara rewards.'
});
assignItem(17, {
    id: 'magician-celestial-ring',
    name: 'Celestial Ring',
    icon: '??',
    rarity: 'legendary',
    owner: 'magician',
    description: 'Boosts INT by 8 and extends Nitro Nova duration by two seconds.'
});
const mapData = [
    {
        id: 'forest',
        name: 'Forest of Whispers',
        biome: 'Lush woodland',
        description: 'Starter refuge with hidden spirit groves and mischievous mushlings.',
        enemies: ['Mushling', 'Timber Warg', 'Sylphling'],
        background: 'linear-gradient(180deg, rgba(58, 184, 116, 0.92) 0%, rgba(22, 61, 39, 0.92) 100%), url(https://public-frontend-cos.metadl.com/mgx/img/nitro-legacy/map-forest.png)',
        accent: '#61ffb3',
        favored: ['swordfighter', 'support']
    },
    {
        id: 'canyon',
        name: 'Molten Peaks',
        biome: 'Volcanic canyon',
        description: 'Crimson ridges and lava geysers reward bold ranged hunters.',
        enemies: ['Ember Drake', 'Ash Serpent', 'Cinder Golem'],
        background: 'linear-gradient(180deg, rgba(255, 154, 82, 0.9) 0%, rgba(115, 33, 15, 0.92) 100%), url(https://public-frontend-cos.metadl.com/mgx/img/nitro-legacy/map-canyon.png)',
        accent: '#ff7f50',
        favored: ['archer', 'swordfighter']
    },
    {
        id: 'citadel',
        name: 'Glacial Bastion',
        biome: 'Frozen mountains',
        description: 'Ancient ice towers where arcane crystals amplify spellcraft.',
        enemies: ['Frost Revenant', 'Cryo Elemental', 'Rune Sentinel'],
        background: 'linear-gradient(180deg, rgba(120, 196, 255, 0.88) 0%, rgba(27, 65, 110, 0.9) 100%), url(https://public-frontend-cos.metadl.com/mgx/img/nitro-legacy/map-glacier.png)',
        accent: '#71d4ff',
        favored: ['magician']
    },
    {
        id: 'haven',
        name: 'Clockwork Haven',
        biome: 'Steampunk refuge',
        description: 'Workshop city buzzing with automata and cooperative raids.',
        enemies: ['Gearbound', 'Steam Warden', 'Volt Sprite'],
        background: 'linear-gradient(180deg, rgba(226, 184, 120, 0.9) 0%, rgba(92, 61, 45, 0.92) 100%), url(https://public-frontend-cos.metadl.com/mgx/img/nitro-legacy/map-haven.png)',
        accent: '#ffc76f',
        favored: ['support', 'magician']
    }
];
const weaponCatalog = {
    swordfighter: [
        { name: 'Iron Sword', rarity: 'rare', note: 'Starter blade with balanced Nitro flow.' },
        { name: 'Bronze Claymore', rarity: 'common', note: 'Heavy swing, slower Nitro gain.' },
        { name: 'Mythril Edge', rarity: 'epic', note: 'Adds bleed on Blade Tempest hits.' },
        { name: 'Dragonflare Saber', rarity: 'legendary', note: 'Ignites foes and grants Nitro shield.' },
        { name: 'Celestial Katana', rarity: 'legendary', note: 'Phase through enemies on Nitro spend.' },
        { name: 'Voidreaver Greatsword', rarity: 'epic', note: 'Converts Nitro overflow into DEF.' }
    ],
    archer: [
        { name: 'Ashwood Bow', rarity: 'rare', note: 'Starter bow from Forest craftsmen.' },
        { name: 'Recurve Gale', rarity: 'rare', note: 'Enhances multi-hit Nitro volley.' },
        { name: 'Stormcall Longbow', rarity: 'epic', note: 'Calls lightning on marked targets.' },
        { name: 'Crystal Prism Bow', rarity: 'legendary', note: 'Splits shots into spectral arrows.' },
        { name: 'Phoenix Talon Bow', rarity: 'epic', note: 'Ignites Nitro combos with burn ticks.' },
        { name: 'Eclipse Railgun', rarity: 'legendary', note: 'Converts Nitro to piercing energy bolts.' }
    ],
    magician: [
        { name: 'Astral Staff', rarity: 'rare', note: 'Starter conduit for Nova combos.' },
        { name: 'Runebound Rod', rarity: 'rare', note: 'Adds mana regen channels.' },
        { name: 'Crystal Chorus Scepter', rarity: 'epic', note: 'Echoes spells to nearby foes.' },
        { name: 'Nebula Catalyst', rarity: 'legendary', note: 'Amplifies Nitro Nova radius.' },
        { name: 'Starlight Codex', rarity: 'legendary', note: 'Unlocks gravity wells at Nitro max.' },
        { name: 'Void Prism Staff', rarity: 'epic', note: 'Pulls enemies inward before detonation.' }
    ],
    support: [
        { name: 'Ember Tome', rarity: 'rare', note: 'Starter tome for healing flames.' },
        { name: 'Serenity Grimoire', rarity: 'rare', note: 'Extends HoT duration per Nitro tick.' },
        { name: 'Harmony Bell', rarity: 'epic', note: 'Pulse heals allies after ultimate.' },
        { name: 'Aegis Scepter', rarity: 'epic', note: 'Shields convert to Nitro when broken.' },
        { name: 'Sanctum Prism', rarity: 'legendary', note: 'Projects barriers across the map.' },
        { name: 'Genesis Relic', rarity: 'legendary', note: 'Revives allies when Nitro is full.' }
    ]
};
const statLabels = {
    atk: 'ATK',
    def: 'DEF',
    int: 'INT',
    mana: 'MANA',
    speed: 'SPEED',
    nitro: 'NITRO'
};
const statScale = 60;
const classSelector = document.getElementById('class-selector');
const statGrid = document.getElementById('stat-grid');
const nitroBar = document.getElementById('nitro-bar');
const nitroDescription = document.getElementById('nitro-description');
const classFlavour = document.getElementById('class-flavour');
const heroImage = document.querySelector('.pixel-hero');
const pixelPreview = document.querySelector('.pixel-preview');
const naraBadge = document.getElementById('nara-points');
const inventoryGrid = document.getElementById('inventory-grid');
const mapGallery = document.getElementById('map-gallery');
const weaponColumns = document.getElementById('weapon-columns');
const weaponColumnRefs = new Map();
const mapCardRefs = new Map();
const toRgba = (hex, alpha) => {
    const sanitized = hex.replace(/#/g, '');
    if (sanitized.length !== 3 && sanitized.length !== 6) {
        return `rgba(255, 255, 255, ${alpha})`;
    }
    const normalized = sanitized.length === 3
        ? sanitized.split('').map((segment) => segment + segment).join('')
        : sanitized;
    const value = parseInt(normalized, 16);
    const r = (value >> 16) & 255;
    const g = (value >> 8) & 255;
    const b = value & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
const renderStats = (classInfo) => {
    if (!statGrid)
        return;
    statGrid.innerHTML = '';
    Object.keys(statLabels).forEach((key) => {
        const card = document.createElement('div');
        card.className = 'stat-card';
        const label = document.createElement('span');
        label.textContent = statLabels[key];
        const value = document.createElement('div');
        value.className = 'stat-value';
        value.textContent = classInfo.stats[key].toString();
        const bar = document.createElement('div');
        bar.className = 'bar';
        const fill = document.createElement('div');
        fill.className = 'bar-fill';
        fill.style.transform = `scaleX(${Math.min(classInfo.stats[key] / statScale, 1)})`;
        bar.append(fill);
        card.append(label, value, bar);
        statGrid.append(card);
    });
};
const renderInventory = (activeClass) => {
    if (!inventoryGrid)
        return;
    inventoryGrid.innerHTML = '';
    inventorySlots.forEach((slot) => {
        const slotElement = document.createElement('div');
        slotElement.className = 'inventory-slot';
        slotElement.dataset.slot = slot.slot.toString();
        const item = slot.item;
        if (item) {
            slotElement.classList.add(`item-${item.rarity}`);
            slotElement.title = `${item.name} - ${item.description}`;
            const icon = document.createElement('span');
            icon.className = 'slot-icon';
            icon.textContent = item.icon;
            const name = document.createElement('span');
            name.textContent = item.name;
            slotElement.append(icon, name);
            if (item.owner === activeClass || item.owner === 'all') {
                slotElement.classList.add('active');
            }
        }
        else {
            slotElement.textContent = 'Empty Slot';
        }
        inventoryGrid.append(slotElement);
    });
};
const renderWeaponColumns = () => {
    if (!weaponColumns)
        return;
    weaponColumns.innerHTML = '';
    weaponColumnRefs.clear();
    Object.keys(weaponCatalog).forEach((classId) => {
        const column = document.createElement('article');
        column.className = 'weapon-card';
        column.dataset.class = classId;
        const header = document.createElement('h3');
        header.textContent = `${classData[classId].name}`;
        const subtitle = document.createElement('span');
        subtitle.className = 'subtitle';
        subtitle.textContent = classData[classId].archetype;
        const list = document.createElement('ul');
        list.className = 'weapon-list';
        weaponCatalog[classId].forEach((weapon) => {
            const item = document.createElement('li');
            const name = document.createElement('strong');
            name.textContent = `${weapon.name} - ${weapon.rarity.toUpperCase()}`;
            const note = document.createElement('span');
            note.textContent = weapon.note;
            item.append(name, note);
            list.append(item);
        });
        column.append(header, subtitle, list);
        weaponColumns.append(column);
        weaponColumnRefs.set(classId, column);
    });
};
const renderMaps = () => {
    if (!mapGallery)
        return;
    mapGallery.innerHTML = '';
    mapCardRefs.clear();
    mapData.forEach((map) => {
        const card = document.createElement('article');
        card.className = 'map-card';
        card.dataset.map = map.id;
        const overlay = document.createElement('div');
        overlay.className = 'map-overlay';
        overlay.style.backgroundImage = map.background;
        const info = document.createElement('div');
        info.className = 'map-info';
        const title = document.createElement('h3');
        title.textContent = map.name;
        title.style.color = map.accent;
        const biome = document.createElement('span');
        biome.className = 'subtitle';
        biome.textContent = map.biome;
        const description = document.createElement('p');
        description.textContent = map.description;
        const enemyBar = document.createElement('div');
        enemyBar.className = 'enemy-tags';
        map.enemies.forEach((enemy) => {
            const tag = document.createElement('span');
            tag.textContent = enemy;
            enemyBar.append(tag);
        });
        info.append(title, biome, description, enemyBar);
        card.append(overlay, info);
        mapGallery.append(card);
        mapCardRefs.set(map.id, card);
    });
};
const highlightWeapons = (activeClass) => {
    weaponColumnRefs.forEach((element, classId) => {
        if (classId === activeClass) {
            element.style.borderColor = 'var(--accent)';
            element.style.boxShadow = '0 0 18px rgba(111, 220, 255, 0.35)';
            element.style.transform = 'translateY(-4px)';
        }
        else {
            element.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            element.style.boxShadow = 'none';
            element.style.transform = 'none';
        }
    });
};
const highlightMaps = (activeClass) => {
    mapCardRefs.forEach((element, mapId) => {
        const mapInfo = mapData.find((map) => map.id === mapId);
        if (!mapInfo)
            return;
        const baseGlow = toRgba(mapInfo.accent, 0.45);
        const activeGlow = toRgba(mapInfo.accent, 0.75);
        element.style.borderColor = mapInfo.accent;
        if (mapInfo.favored.includes(activeClass)) {
            element.style.filter = 'brightness(1.08)';
            element.style.boxShadow = '0 0 26px ' + activeGlow;
        }
        else {
            element.style.filter = 'brightness(1)';
            element.style.boxShadow = '0 0 18px ' + baseGlow;
        }
    });
};
const setActiveClassCard = (classId) => {
    if (!classSelector)
        return;
    const cards = classSelector.querySelectorAll('.class-card');
    cards.forEach((card) => {
        if (card.dataset.class === classId) {
            card.classList.add('active');
        }
        else {
            card.classList.remove('active');
        }
    });
};
const setHeroVisuals = (classInfo) => {
    if (heroImage) {
        heroImage.src = classInfo.heroArt;
        heroImage.alt = classInfo.heroAlt;
    }
    if (pixelPreview) {
        pixelPreview.style.boxShadow = `0 14px 40px ${classInfo.color}44`;
        pixelPreview.style.borderColor = `${classInfo.color}55`;
    }
};
const updateClassDetails = (classId) => {
    const classInfo = classData[classId];
    renderStats(classInfo);
    if (nitroBar) {
        nitroBar.style.transform = `scaleX(${Math.min(classInfo.stats.nitro / statScale, 1)})`;
    }
    if (nitroDescription) {
        nitroDescription.textContent = classInfo.nitroSkill;
    }
    if (classFlavour) {
        classFlavour.textContent = `${classInfo.tagline} ${classInfo.description}`;
    }
    if (naraBadge) {
        naraBadge.textContent = `Nara - ${classInfo.nara} pts`;
    }
    renderInventory(classId);
    highlightWeapons(classId);
    highlightMaps(classId);
    setHeroVisuals(classInfo);
};
const attachClassSelection = () => {
    if (!classSelector)
        return;
    const cards = classSelector.querySelectorAll('.class-card');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            const classId = card.dataset.class;
            if (!classId)
                return;
            setActiveClassCard(classId);
            updateClassDetails(classId);
        });
    });
};
window.addEventListener('DOMContentLoaded', () => {
    renderWeaponColumns();
    renderMaps();
    attachClassSelection();
    setActiveClassCard('swordfighter');
    updateClassDetails('swordfighter');
});
