/********************* constants *************************************************/
const VERSION = 2.1;

const MAX_TEAMS = 12

const DEFAULT_HEADER = '4v4 Mixed - Jets Monday Session';

const DEFAULT_TEAM_NAME_PREFIX = 'J-Team';

const DEFAULT_FAVOURITE_TEAM_NAMES = [
    'Drummond Jets',
    'ThunderJets Smashers',
    'NinJets',
    'OAP Jets', 
    'Ready Jets Go',
    'Setters on the dance floor',
    'Rampage World Tour',
    'Laser Jets',
];

const SET_OF = {
    COLORS : ['Black', 'Blue', 'Red', 'Pink', 'White', 'Green', 'Gray', 'Purple'],
    NAMES : ['Barbara', 'Hanna', 'Bill', 'Mary', 'Martha', 'Frank', 'Simon', 'Lucy', 'Etta', 'Eleanor', 'Nina', 'Tina', 'Daisy', 'Vicky'],   
    GENITIVES : ['Barbara\'s', 'France\'s', 'Jeremiah\'s', 'Mary\'s', 'Buddy\'s', 'Dwight\'s', 'Sophia\'s', 'Adam\'s', 'Mars'],  
    INTERIECTIONS_BF : ['Oh', 'Forza', 'Ready'],   
    INTERIECTIONS_AF : ['Yay', 'Woppa', 'Go'], 
    CLUBS : ['JETS', 'METS', 'NUVOC', 'QMU'],
    ADGECTIVES : ['Authentic', 'Ambitious', 'Bad', 'Fab', 'Legendary', 'Winter', 'Sandy', 'Smoky', 'Smoking', 'Extra Virgin', 'Knackered', 'Polar', 'Tie-Dye', 'Suede', 'Electric', 'Chemical', 'Hardcore', 'Wee', 'Leather', 'Dark', 'Devil', 'Ready', 'Bouncy', 'Peppy', 'Snake Print', 'Bow-Tie', 'Original', 'Scottish', 'Irish', 'Welsh', 'Mexican', 'Spanish', 'Fluffy' ,'Spunky', 'Exotic', 'Hoppy', 'Tannic', 'Crispy'],
    QUALIFICATIVES : ['Net', 'Ball', 'Volley', 'Airborne', 'Aerial', 'Radio', 'Morning', 'Garden', 'Karate', 'Judo'],
    SUBSTANTIVES_PL_1 : ['Elbows', 'Wasps', 'Ninjas', 'Turtles', 'Setters', 'Spikes', 'Tippers', 'Digs', 'Flags', 'Thunders', 'Bros', 'Clouds', 'Jets', 'Chocolates', 'Cars', 'Sushi', 'Spaghetti', 'Rockets', 'Sycamores', 'Shrimps', 'Dogs', 'Heroes', 'Queens', 'Pints', 'Monkeys', 'Stars', 'Dolphins', 'Peas', 'Ladybugs', 'Thistles', 'Drums', 'Eggs', 'Nachos', 'Eyes', 'Wolves', 'Nomads', 'Giants', 'Lions', 'Rockers', 'Vipers', 'Blazers', 'Glasses', 'Wizards', 'Guns', 'Echoes', 'Deserts', 'Mountains'],
    SUBSTANTIVES_PL_2 : ['Chips', 'Hornets', 'Deers', 'Comrades', 'Spikers', 'Tips', 'Sets', 'Aces', 'Diggers', 'Cards', 'Lightnings', 'Sisses', 'Candies', 'Confetti', 'Ships', 'Cycles', 'Feathers', 'Chefs', 'Mushrooms', 'Pines', 'Llamas', 'Devils', 'Kings', 'Hippos', 'Hills', 'Beans', 'Stripes', 'Barrels', 'Sharks', 'Snails', 'Apricots', 'Dwarves', 'Hats', 'Horses', 'Supremes', 'Sirens', 'Tigers', 'Neckties', 'Buttons', 'Drivers', 'Gators', 'Boots', 'Books', 'Lizards', 'Roses', 'Mirrors', 'Lakes', 'Waterfalls'],
    SUBSTANTIVES_PL_3 : ['Hammers', 'Ladders', 'Wrenches', 'Prunes', 'Bananas', 'Paws', 'Footsteps', 'Candles', 'Mondays', 'Fridays', 'Sundays'],
    SUBSTANTIVES_SN : ['Octopus', 'Rhabarberbar', 'Nessy', 'Star', 'Force', 'Illusion', 'Jungle', 'Olive Oil', 'Petroleum', 'Recovery', 'Burrito', 'Pasta', 'Caravan', 'Gnome', 'Recipe', 'Storm', 'Flag'],
    COMPLIMENTS_FOR_IN : ['America', 'Japan', 'Scotland', 'Iceland', 'The Meadow', 'Las Vegas', 'Florida', 'Olympus', 'Burma', 'June', 'The Rain', 'The Future', 'The Box', 'The Groove'],
    AGGREGATIVES : ['Club', 'Brigade', 'Collective', 'Revival', 'Oil', 'Collection', 'Gang', 'Squad', 'Impact', 'Shortage', 'Museum', 'Island', 'Salad', 'Roll', 'Way', 'Street', 'Place', 'Metaverse', 'Sea', 'Unit', 'Folk', 'Band', 'Group', 'Family', 'Army'],
    NUMBERS : ['66', '99', '4', '7', '8', '17', '22'],
    CONJUNCTIONS : ['And', 'Or', '&', '\'N\''],
    IN : ['From', 'In'],
    JOINTS_SN : ['& The', 'VS The'],
    JOINTS_PL : ['& The', 'Between The', 'With The']
};

const NAME_TYPES = [
    'GENITIVES + SUBSTANTIVES_PL_1',
    'ADGECTIVES + SUBSTANTIVES_PL_3',
    'GENITIVES + SUBSTANTIVES_SN',
    'GENITIVES + AGGREGATIVES',
    'QUALIFICATIVES + AGGREGATIVES',
    'COLORS + SUBSTANTIVES_SN',
    'COLORS + SUBSTANTIVES_PL_1',
    'COLORS + SUBSTANTIVES_PL_2',
    'COLORS + SUBSTANTIVES_PL_1 + AGGREGATIVES',
    'COLORS + ADGECTIVES + SUBSTANTIVES_PL_1',
    'COLORS + AGGREGATIVES',
    'SUBSTANTIVES_PL_1 + CONJUNCTIONS + SUBSTANTIVES_PL_2',
    'SUBSTANTIVES_PL_2 + CONJUNCTIONS + SUBSTANTIVES_PL_1',
    'SUBSTANTIVES_PL_1 + CONJUNCTIONS + SUBSTANTIVES_SN',
    'SUBSTANTIVES_SN + CONJUNCTIONS + SUBSTANTIVES_PL_2',
    'AGGREGATIVES + NUMBERS',
    'CLUBS + SUBSTANTIVES_PL_1',
    'CLUBS + SUBSTANTIVES_PL_2',
    'CLUBS + SUBSTANTIVES_PL_3',
    'INTERIECTIONS_BF + SUBSTANTIVES_PL_1',
    'INTERIECTIONS_BF + CLUBS + INTERIECTIONS_AF', 
    'QUALIFICATIVES + SUBSTANTIVES_PL_1 + INTERIECTIONS_AF', 
    'ADGECTIVES + SUBSTANTIVES_PL_1',
    'QUALIFICATIVES + SUBSTANTIVES_PL_1',
    'ADGECTIVES + SUBSTANTIVES_PL_2',
    'QUALIFICATIVES + SUBSTANTIVES_PL_2',
    'ADGECTIVES + SUBSTANTIVES_PL_3',
    'ADGECTIVES + SUBSTANTIVES_SN',    
    'ADGECTIVES + SUBSTANTIVES_PL_2 + AGGREGATIVES', 
    'ADGECTIVES + ADGECTIVES + SUBSTANTIVES_PL_2',
    'NAMES + JOINTS_PL + SUBSTANTIVES_PL_1',
    'NAMES + JOINTS_SN + SUBSTANTIVES_SN',
    'ADGECTIVES + SUBSTANTIVES_PL_1 + IN + COMPLIMENTS_FOR_IN',
    'COLORS + SUBSTANTIVES_PL_2 + IN + COMPLIMENTS_FOR_IN',
    'COLORS + SUBSTANTIVES_SN + IN + COMPLIMENTS_FOR_IN'
];

const PARAMS_DEFAULTS = {
    SETUP : 15,
    TAKEDOWN : 15,
    BREAKS : 2,
    END : '21:00',
    WIN_PTS : 2,
    DRAW_PTS : 1,
    LOSS_PTS : 0
};

/********************* general utils **********************************************************/

let rSeed = 1;

/**
 * @param {integer} topVal  
 * @returns a number between 0 (included) and topVal (excluded)
 */
function getRandomNum(topVal){
    const d = new Date().getMilliseconds();
    const r = Math.floor(Math.random() * 1000 * rSeed++);  
    return (d + r) % topVal;
}

/**
 * around 33% of random names are taken from either app.favTeamNames or DEFAULT_FAVOURITE_TEAM_NAMES 
 */
function getRandomName(){    

    let name = '';

    const nt = getRandomNum(1000);
    nt % NAME_TYPES.length
    
    // 66% of times generate name from NAME_TYPES
    if(nt <= 666) {

        const sets = NAME_TYPES[nt % NAME_TYPES.length].split(' + ');

        for(let s = 0; s < sets.length; s++) {
            const set = SET_OF[`${sets[s]}`]; 
            name += set[getRandomNum(set.length)] + ' ';
        }
    
        return name.trim();

    } else {
        // 33% of times generate name from either app.favTeamNames or DEFAULT_FAVOURITE_TEAM_NAMES
        const favNames = [...DEFAULT_FAVOURITE_TEAM_NAMES, ...app.favTeamNames.map(function(fav){ return fav.name})];
        return favNames[nt % favNames.length];
    }
}

function matchDefaultTeamNameTemplate(str) {            
    return str.match(new RegExp('^' + DEFAULT_TEAM_NAME_PREFIX + '\\s(\\d+)$', 'g'));
}

function even(n) {
    return n + n % 2;
}

function rounds_for(nt) {
    return even(nt) - 1;
}

function courts_for(nt) {
    return even(nt) / 2;
}

/**
 * get an array of 0-based indexes where if nTeams is odd eventually an extra index is added in the second position 
 * because we want to leave the pivot team in court 1 side 1, and match the fake team with the pivot team in the last round
 */
function getEvenArrayOfIndexes(nTeams){

    const res = [...Array(nTeams).keys()];

    if(nTeams % 2 != 0) {
        // add the next index (nTeams) in second position (1)
        res.splice(1, 0, nTeams);
    }

    return res;
}

function rr(indexes, round){

    if(round > 1) {        
        const tmp = indexes.pop();
        indexes.splice(1, 0, tmp);
        rr(indexes, round - 1);
    }
}

/**
 * get the 0-based index of the team at (round, court, side)
 */
function getTeamIndexFor(nTeams, round, court, side) {
    
    const indexes = getEvenArrayOfIndexes(nTeams); 

    rr(indexes, round);

    if(side == 1) return indexes[court - 1];
    else return indexes[indexes.length - court];
}

/********************* local storage utils *********************************************************/

function localStorage_getItem_or_int(key, alt) {
    const item = parseInt(localStorage.getItem(key));
    return (item) ? item : alt;    
}

function localStorage_getItem_or_string(key, alt) {
    const item = localStorage.getItem(key);
    return (item !== null) ? item : alt;    
}

function localStorage_getObject(key) {
    return JSON.parse(localStorage.getItem(key));
}

function localStorage_setString(key, value) {
    return localStorage.setItem(key, value.toString());
}

function localStorage_setObject(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
}

/************************** idb ***************************************************************/

DB_NAME = 'Robinator';
DB_VERSION = 1;

const idbHelper = {

    connection : null,

    openConnection : async function() {

        this.connection = await idb.openDB(DB_NAME, DB_VERSION, {

            upgrade(db, oldVersion, newVersion, transaction, event) {
                console.log(`idbHelper: indexedDB needed an ugrade from version ${oldVersion} to version ${newVersion}`);

                switch(newVersion) {     

                    case 1:                     
                        // create store favourite_team_name (id, name)
                        db.createObjectStore('favourite_team_name', { keyPath: 'id' });

                        // ..and put some initial values
                        transaction.addEventListener('complete', function(transComplEvent){
                            for(let i = 0; i < DEFAULT_FAVOURITE_TEAM_NAMES.length; i++) {                                
                                db.add('favourite_team_name', {id: i + 1, name: DEFAULT_FAVOURITE_TEAM_NAMES[i]});
                            }
                        });
                        break;
                }
            },

            blocked(currentVersion, blockedVersion, event) {
                console.log("Please close all other tabs with this site open!");
            },

            blocking(currentVersion, blockedVersion, event) {                
                db.close();
                console.log("A new version of this page is ready. Please reload or close this tab!");
            },

            terminated() {},

        });
    },

    getFavouriteTeamNames : async function(){
        await this.openConnection();
        const names = await this.connection.getAll('favourite_team_name');
        this.connection.close();
        return names;
    },

    addOrRemoveFavouriteTeamNames : async function(ins, out){
        await this.openConnection(); 

        for(let i = 0; i < out.length; i++) {            
            await this.connection.delete('favourite_team_name', out[i].id);
        }

        for(let i = 0; i < ins.length; i++) {                           
            await this.connection.add('favourite_team_name', ins[i]);
        }

        this.connection.close();
    }
}

/************************** app object *********************************************************/

const app = {

    header : null,

    favTeamNames : [],

    params : {
        setup : null,
        takedown : null,
        breaks : null,
        end : null,
        win_pts : null,
        draw_pts : null,
        loss_pts :null
    }, 

    nTeams : 0, 
    teams : [],     // one team example: {name: "Jets 1", score: 10}
    fixtures : [],  // one fixture example: {r:3, c:1, team1Id: 0, team2Id: 3, result: 'x'} // possible results: '1', 'x', '2', '-' // teamNId : null in case of the placeholder team

    tab : 'backend', // possible values: 'backend', 'frontend'    

    initializeFavouriteTeamNames : async function() {
        this.favTeamNames = await idbHelper.getFavouriteTeamNames();
    },

    updateFavouriteTeamNames : async function(newNames) {

        const ln = this.favTeamNames.length;
        const lid = this.favTeamNames[ln - 1].id;

        const ins = newNames.filter(function(name){ return !matchDefaultTeamNameTemplate(name); })
                            .map(function(name, i){ return {id: (lid + i + 1), name}; });
        const out = [];
        const res = [];

        let rem = 100 - newNames.length;
        let af = 0;

        for(let i = ln - 1; i >= 0; i--) {
            const currName = this.favTeamNames[i].name;
            if (newNames.includes(currName)) {  
                // we found a duplicate, we can delete the old one             
                out.push(this.favTeamNames[i]);
                // the new one must be really useful, bubble it till the end of the pile (so it will last longer)
                for(let j = 0; j < ins.length - 1 - af; j++) {
                    if(ins[j].name.match(currName)) {
                        ins[j].name = ins[j+1].name; 
                        ins[j+1].name = currName;
                    }
                }
                af++;
            } else if (rem <= 0) {
                // no more space among the 100 favourites
                out.push(this.favTeamNames[i]);
            } else {
                // still having space, plus it's not a duplicate, let's keep it   
                res.unshift(this.favTeamNames[i]);
                rem--;
            }
        }

        for(let i = 0; i < ins.length; i++) {
            res.push(ins[i]);
        }

        await idbHelper.addOrRemoveFavouriteTeamNames(ins, out);

        this.favTeamNames = res;
    },

    syncWithStorage : function() {

        this.header = localStorage_getItem_or_string('header', DEFAULT_HEADER);

        // if no header in the storage, then initialize it from this object
        if(!localStorage.getItem('header'))
            localStorage.setItem('header', this.header);

        this.params.setup = localStorage_getItem_or_int('setup', PARAMS_DEFAULTS.SETUP);
        this.params.takedown = localStorage_getItem_or_int('takedown', PARAMS_DEFAULTS.TAKEDOWN);
        this.params.breaks = localStorage_getItem_or_int('breaks', PARAMS_DEFAULTS.BREAKS);
        this.params.end = localStorage_getItem_or_string('end', PARAMS_DEFAULTS.END);
        this.params.win_pts = localStorage_getItem_or_int('win_pts', PARAMS_DEFAULTS.WIN_PTS);
        this.params.draw_pts = localStorage_getItem_or_int('draw_pts', PARAMS_DEFAULTS.DRAW_PTS);
        this.params.loss_pts = localStorage_getItem_or_int('loss_pts', PARAMS_DEFAULTS.LOSS_PTS);

        // if no params in the storage, then initialize them from this object
        if(!localStorage.getItem('setup'))
            this.setStorageParamsFromThis();

        this.nTeams = localStorage_getItem_or_int('nTeams', 0);

        // if no nTeams in the storage, then initialize it from this object
        if(!localStorage.getItem('nTeams'))
            localStorage_setString('nTeams', this.nTeams);

        if(this.nTeams > 0) {

            for(let i = 0; i < this.nTeams; i++) {
                this.teams.push(localStorage_getObject(`team_${i}`));
            }

            // if we have teams, we also have fixtures...  
            for(let i = 1; i <= rounds_for(this.nTeams); i++) {
                for(let j = 1; j <= courts_for(this.nTeams); j++) {
                    this.fixtures.push(localStorage_getObject(`fixture_${i}_${j}`));
                }
            }
        }

        this.tab = localStorage_getItem_or_string('tab', 'backend');

        // if no tab in the storage, then initialize it from this object
        if(!localStorage.getItem('tab'))
            localStorage.setItem('tab', this.tab);
    },

    update : function(headerValue, paramValues, teamNames) {

        // clear the storage.....................
        localStorage.clear();

        // update header.........................
        this.header = headerValue;
        localStorage.setItem('header', this.header);

        // update params.........................
        this.params.setup = paramValues.setup;
        this.params.takedown = paramValues.takedown;
        this.params.breaks = paramValues.breaks;
        this.params.end = paramValues.end;
        this.params.win_pts = paramValues.win_pts;
        this.params.draw_pts = paramValues.draw_pts;
        this.params.loss_pts = paramValues.loss_pts;
        this.setStorageParamsFromThis();

        // update nTeams.........................
        this.nTeams = teamNames.length;
        localStorage_setString('nTeams', this.nTeams);

        // update teams..........................

        // reset the array first
        this.teams.splice(0, this.teams.length);

        for(let i = 0; i < teamNames.length; i++){
            this.teams.push({name: teamNames[i], score: 0});
        }   

        this.setStorageTeamsFromThis();

        // update fixtures......................

        // reset the array first
        this.fixtures.splice(0, this.fixtures.length);

        for(let i = 1; i <= rounds_for(this.nTeams); i++) {
            for(let j = 1; j <= courts_for(this.nTeams); j++) {
                const team1Id = getTeamIndexFor(this.nTeams, i, j, 1);
                const team2Id = getTeamIndexFor(this.nTeams, i, j, 2);
                const t1Id = (team1Id == this.nTeams) ? null : team1Id;                
                const t2Id = (team2Id == this.nTeams) ? null : team2Id;
                this.fixtures.push({r: i, c: j, team1Id: t1Id, team2Id: t2Id, result: '-'});
            }
        }

        this.setStorageFixturesFromThis();
    },

    setHeader : function(headerValue) {
        this.header = headerValue;        
        localStorage.setItem('header', this.header);
    },

    switchTabTo : function(tab) {
        this.tab = tab;
        localStorage.setItem('tab', tab);
    },

    setResult : function(r, c, newRes) {

        const fixture = this.getFixtureByRC(r, c);        
        const oldRes = fixture.result;

        this.teams[fixture.team1Id].score += this.getScoreDiff(1, newRes, oldRes);        
        this.teams[fixture.team2Id].score += this.getScoreDiff(2, newRes, oldRes);

        fixture.result = newRes;

        localStorage_setObject(`fixture_${r}_${c}`, fixture);        
        localStorage_setObject(`team_${fixture.team1Id}`,  this.teams[fixture.team1Id]);     
        localStorage_setObject(`team_${fixture.team2Id}`,  this.teams[fixture.team2Id]);
    },

    getScoreDiff : function(side, newRes, oldRes){
        const multiplier = [0, this.params.loss_pts, this.params.draw_pts, this.params.win_pts];
        let newM = 0; oldM = 0;
        if(newRes === 'x') newM = 2; else if (newRes !== '-' && parseInt(newRes) === side) newM = 3; else if (newRes !== '-' && parseInt(newRes) !== side) newM = 1;
        if(oldRes === 'x') oldM = 2; else if (oldRes !== '-' && parseInt(oldRes) === side) oldM = 3; else if (oldRes !== '-' && parseInt(oldRes) !== side) oldM = 1;
        return multiplier[newM] - multiplier[oldM];
    },

    getFixtureByRC : function(r, c){
        return this.fixtures.find(function(f){
            return (f.r === r && f.c === c);
        });
    },

    getFixtureResult : function(r, c) {
        const fixture = this.getFixtureByRC(r, c);
        return fixture.result;
    },

    getTeamNameByCardinal : function(card) {
        return (card <= this.teams.length) ? this.teams[card-1].name : '';
    },

    getTeamNameFromFixture : function(r, c, s) {
        const fixture =  this.getFixtureByRC(r, c);
        const teamId = (s === 1) ? fixture.team1Id : fixture.team2Id;
        return (teamId === null) ? teamId : this.teams[teamId].name;
    },    

    getRoundInterval : function(r){

        const endSplits = app.params.end.split(':');
        const endDate = new Date();
        endDate.setHours(parseInt(endSplits[0]));    
        endDate.setMinutes(parseInt(endSplits[1])); 

        const nowDate = new Date();
        
        const mmLeft = (endDate.getTime() - nowDate.getTime()) / (60 * 1000) - app.params.setup - app.params.takedown - app.params.breaks * (rounds_for(this.nTeams) - 1);

        const duration = Math.round(mmLeft / rounds_for(this.nTeams));

        const fromStart = app.params.setup + (r - 1) * (duration + app.params.breaks);

        const startDate = new Date(nowDate.getTime() + fromStart * 60 * 1000);

        const stopDate = new Date(startDate.getTime() + duration * 60 * 1000);

        const sh = String(startDate.getHours()).padStart(2, '0');
        const sm = String(startDate.getMinutes()).padStart(2, '0');
        const eh = String(stopDate.getHours()).padStart(2, '0');
        const em = String(stopDate.getMinutes()).padStart(2, '0');

        return `${sh}:${sm} - ${eh}:${em}`;
    },

    setStorageParamsFromThis : function() {
        localStorage_setString('setup', this.params.setup);
        localStorage_setString('takedown', this.params.takedown);
        localStorage_setString('breaks', this.params.breaks);
        localStorage.setItem('end', this.params.end);
        localStorage_setString('win_pts', this.params.win_pts);
        localStorage_setString('draw_pts', this.params.draw_pts);
        localStorage_setString('loss_pts', this.params.loss_pts);
    },

    setStorageTeamsFromThis : function() {
        for(let i = 0; i < this.teams.length; i++) {
            localStorage_setObject(`team_${i}`, this.teams[i]);
        }
    },

    setStorageFixturesFromThis : function() {
        for(let i = 1; i <= rounds_for(this.nTeams); i++) {
            for(let j = 1; j <= courts_for(this.nTeams); j++) {
                localStorage_setObject(`fixture_${i}_${j}`, this.getFixtureByRC(i, j));
            }
        }
    }
}

/********************* UI utils ****************************************************/

function updateHeader() {      
    document.querySelector('#header_h1').innerHTML = app.header;   
    document.querySelector('#headerINPUT').value = app.header;   
}

function updateControls() {
    updateParamsControls();
    updateTeamsControls();
}

function updateParamsControls() {
    document.querySelector('#setup').value = app.params.setup.toString();
    document.querySelector('#takedown').value = app.params.takedown.toString();
    document.querySelector('#breaks').value = app.params.breaks.toString();
    document.querySelector('#end').value = app.params.end;
    document.querySelector('#win_pts').value = app.params.win_pts.toString();
    document.querySelector('#draw_pts').value = app.params.draw_pts.toString();
    document.querySelector('#loss_pts').value = app.params.loss_pts.toString();
}

function updateTeamsControls(){

    const teamsFormControls = document.querySelector('#teamsFormControls');
    teamsFormControls.innerHTML = '';

    let inputs = {};

    const suggestedNames = app.favTeamNames.map(function(fav){ return fav.name}).sort();

    for(let i = 1; i <= MAX_TEAMS; i++){

        const span = document.createElement('span');
        span.classList.add('input-group-text');
        span.setAttribute('style', `font-family:Consolas, monospace;`);
        span.innerHTML = (i < 10) ? `&nbsp;${i}` : `${i}`;
  
        inputs[`${i}`] = document.createElement('input');
        inputs[`${i}`].classList.add('form-control');
        inputs[`${i}`].setAttribute('type', 'text');
        inputs[`${i}`].setAttribute('aria-label', `team ${i} input`);
        inputs[`${i}`].setAttribute('id', `team${i}_INPUT`);        
        inputs[`${i}`].value = app.getTeamNameByCardinal(i);
        autocomplete(inputs[`${i}`], suggestedNames);

        const jButton = document.createElement('button');
        jButton.classList.add('btn', 'btn-primary');
        jButton.setAttribute('type', 'button');
        jButton.setAttribute('id', `j${i}_BTN`);
        jButton.innerHTML = 'DN';

        const rButton = document.createElement('button');
        rButton.classList.add('btn', 'btn-primary');
        rButton.setAttribute('type', 'button');
        rButton.setAttribute('id', `r${i}_BTN`);
        rButton.innerHTML = 'RN';

        const uButton = document.createElement('button');
        uButton.classList.add('btn', 'btn-primary', 'd-none', 'd-sm-inline');
        uButton.setAttribute('type', 'button');
        uButton.setAttribute('id', `u${i}_BTN`);
        uButton.innerHTML = `<i class="bi bi-chevron-up"></i>`;

        const tButton = document.createElement('button');
        tButton.classList.add('btn', 'btn-primary');
        tButton.setAttribute('type', 'button');
        tButton.setAttribute('id', `t${i}_BTN`);
        tButton.innerHTML = `<i class="bi bi-chevron-double-up"></i>`;

        const xButton = document.createElement('button');
        xButton.classList.add('btn', 'btn-danger');
        xButton.setAttribute('type', 'button');
        xButton.setAttribute('id', `x${i}_BTN`);
        xButton.innerHTML = `<i class="bi bi-x"></i>`;   

        xButton.addEventListener('click', function (event) {
            inputs[`${i}`].value = '';
        });

        uButton.addEventListener('click', function (event) {
            if(i > 1) {
                const tmp = inputs[`${(i-1)}`].value;
                inputs[`${(i-1)}`].value = inputs[`${i}`].value;
                inputs[`${i}`].value = tmp;
            };
        });

        tButton.addEventListener('click', function (event) {
            if(i > 1) {                
                const tmp = inputs[`${i}`].value;
                for(let j=i-1; j > 0; j--){
                    inputs[`${(j+1)}`].value = inputs[`${j}`].value;
                }
                inputs[1].value = tmp;
            };
        });

        jButton.addEventListener('click', function (event) { 
            const taken = [];     
            for(let j = 1; j <= MAX_TEAMS; j++) {                
                const inputVal = document.querySelector(`#team${j}_INPUT`).value;
                if(j !== i && matchDefaultTeamNameTemplate(inputVal)) {
                    taken.push(parseInt(inputVal.split(' ').pop()));
                }
            }
            for(let j = 1; j <= MAX_TEAMS; j++) {
                if(!taken.includes(j)){
                     inputs[`${i}`].value = DEFAULT_TEAM_NAME_PREFIX + ` ${j}`; 
                     break;
                }
            }            
        }); 

        rButton.addEventListener('click', function (event) { 
            inputs[`${i}`].value = getRandomName();
        });              

        const div = document.createElement('div');
        div.classList.add('input-group', 'input-group-sm', 'mb-2', 'autocomplete');
        div.appendChild(span);
        div.appendChild(inputs[`${i}`]);
        div.appendChild(jButton);
        div.appendChild(rButton);
        div.appendChild(uButton);
        div.appendChild(tButton);
        div.appendChild(xButton);

        teamsFormControls.appendChild(div);
    }
}

function updateViews(){
    updateFixturesView();
    updateTableView();
}

function updateFixturesView(){

    const fixtures = document.getElementById('fixtures');    
    fixtures.innerHTML = '';    

    const nRounds = rounds_for(app.nTeams);
    const nCourts = courts_for(app.nTeams);   

    const resultButtons = {};

    for (let r = 1; r <= nRounds; r++) {

        const tableWrap = document.createElement('div'); 
        tableWrap.classList.add('fxTableWrap');                       

        const wall1 = document.createElement('div');
        wall1.classList.add('rInterval');
        wall1.innerHTML = app.getRoundInterval(r);

        const table = document.createElement('div'); 
        table.classList.add('fxTable');

        const side1 = document.createElement('div');
        side1.classList.add('row', 'gx-1', 'gx-md-2');        

        const net = document.createElement('div');
        net.classList.add('row');
        net.innerHTML = `<div class="col"><hr class="my-0"></div>`;

        const side2 = document.createElement('div');
        side2.classList.add('row', 'gx-1', 'gx-md-2');   
        
        for(let c = 1; c <= nCourts; c++) {
            side1.appendChild(createFixtureDiv(r, c, 1)); 
            side2.appendChild(createFixtureDiv(r, c, 2)); 
        }

        table.appendChild(side1);
        table.appendChild(net);
        table.appendChild(side2);                 

        const wall2 = document.createElement('div');
        wall2.classList.add('row', 'gx-1', 'gx-md-2');
        for(let c = 1; c <= nCourts; c++) { 
            const cNumber = document.createElement('div');
            cNumber.classList.add('col', 'cNumber');
            cNumber.innerHTML = c;
            wall2.appendChild(cNumber);
        }
        
        tableWrap.appendChild(wall1);   
        tableWrap.appendChild(table);
        tableWrap.appendChild(wall2);   

        fixtures.appendChild(tableWrap);
    }
}

function createFixtureDiv(r, c, s){    

    const result = app.getFixtureResult(r, c);
    const teamAName = app.getTeamNameFromFixture(r, c, s); 
    const teamBName = app.getTeamNameFromFixture(r, c, 3-s); 

    const fixtureDiv = document.createElement('div');   
    fixtureDiv.classList.add('col', 'fxCell', 'p-1', 'position-relative');

    let btnResultClass;
    if(result === '-') btnResultClass = 'btn-light';
    else if(result === 'x') btnResultClass = 'btn-warning';
    else if(parseInt(result) === s) btnResultClass = 'btn-success';
    else btnResultClass = 'btn-danger';

    resultButton = document.createElement('button');    
    resultButton.setAttribute('id', `result_${r}_${c}_${s}_BTN`);            
    resultButton.classList.add('btn', btnResultClass, 'btn-sm');
    resultButton.setAttribute('type', 'button'); 

    resultButton.innerHTML  = teamAName != null ? teamAName : '---';

    if(teamAName == null || teamBName == null) resultButton.setAttribute('disabled', 'true');

    resultButton.addEventListener('click', function (event) {

        disableBack();

        const btA = event.target;
        const btB = document.querySelector(`#result_${r}_${c}_${(3-s)}_BTN`);  

        // remove the old thumb
        let oldThumb = document.querySelector('#thumb');
        if(oldThumb) oldThumb.remove();

        if(btA.classList.contains('btn-light')) {            
            app.setResult(r, c, `${s}`);            
            btA.classList.replace('btn-light', 'btn-success');
            btB.classList.replace('btn-light', 'btn-danger');

        } else if(btA.classList.contains('btn-success')) {                      
            app.setResult(r, c, 'x');            
            btA.classList.replace('btn-success', 'btn-warning');            
            btB.classList.replace('btn-danger', 'btn-warning');

        } else if(btA.classList.contains('btn-warning')) {                     
            app.setResult(r, c, `${3-s}`);            
            btA.classList.replace('btn-warning', 'btn-danger');            
            btB.classList.replace('btn-warning', 'btn-success'); 

        } else if(btA.classList.contains('btn-danger')) {                   
            app.setResult(r, c, '-');            
            btA.classList.replace('btn-danger', 'btn-light');            
            btB.classList.replace('btn-success', 'btn-light');
        }        

        // create and append the new thumb
        appendNewThumbFor(fixtureDiv);
        
        updateTableView();
    });

    fixtureDiv.appendChild(resultButton);

    return fixtureDiv;
}

function appendNewThumbFor(blockEle){
    const newThumb = document.createElement('div');  
    newThumb.setAttribute('id', 'thumb');   
    newThumb.classList.add('thumb', 'position-absolute');
    newThumb.setAttribute('style', `font-size: 1.2em; transform: rotate(0deg); opacity: 0.50;`);
    newThumb.innerHTML = `<i class="bi bi-hand-thumbs-up"></i>`;
    blockEle.appendChild(newThumb);

    // animate the thumb
    const steps = [
        {siz: 1.4, opa: 0.55}, {siz: 1.6, opa: 0.60}, {siz: 1.8, opa: 0.65}, {siz: 2.0, opa: 0.70}, {siz: 2.0, opa: 0.75},
        {siz: 2.0, opa: 0.80}, {siz: 1.8, opa: 0.85}, {siz: 1.6, opa: 0.90}, {siz: 1.4, opa: 0.95}, {siz: 1.2, opa: 1.00}
    ];
    for(let i = 0; i < steps.length; i++){
        setTimeout(() => {                
            newThumb.setAttribute('style', `font-size: ${steps[i].siz}em; transform: rotate(0deg); opacity: ${steps[i].opa};`);
        }, i * 50);
    }
}

function updateTableView(){
    
    lb = document.querySelector('#leaderboard');
    lb.innerHTML = '';

    const lbTeams = [...app.teams]; 

    lbTeams.sort(function(a, b){ return b.score - a.score; });

    let currScore = rounds_for(app.nTeams) * app.params.win_pts + 1;
    let ordHTML = '';
    let bgi = 1;

    for( let i = 0; i < lbTeams.length; i++){

        if(lbTeams[i].score < currScore) {
            currScore = lbTeams[i].score;
            ordHTML = `<p>${i+1}</p>`;
            bgi++;
        } else {
            ordHTML = `<p>&nbsp;</p>`; 
        }
        
        const tableRow = document.createElement('div');
        const bg = (bgi % 2 == 0) ? 'lb-even' : 'lb-odd';
        tableRow.classList.add('row', 'mb-2', bg);
        if(i == 0) tableRow.classList.add('mt-3');

        const ordCol = document.createElement('div');
        ordCol.classList.add('col-1', 'col-md-2', 'lbOrd', 'ps-0', 'text-end');
        ordCol.innerHTML = ordHTML;
        
        const teamCol = document.createElement('div');
        teamCol.classList.add('col-9', 'col-md-8', 'ps-0');
        teamCol.innerHTML = `<p>${lbTeams[i].name}</p>`;

        const scoreCol = document.createElement('div');
        scoreCol.classList.add('col-2', 'text-end');
        scoreCol.innerHTML = `<p>${lbTeams[i].score}</p>`;
        
        tableRow.appendChild(ordCol);
        tableRow.appendChild(teamCol);
        tableRow.appendChild(scoreCol);
        lb.appendChild(tableRow);
    }
}

function fetchParamsFromControls(){
    return {
        setup: parseInt(document.querySelector('#setup').value),
        takedown: parseInt(document.querySelector('#takedown').value),
        breaks: parseInt(document.querySelector('#breaks').value),
        end: document.querySelector('#end').value,
        win_pts: parseInt(document.querySelector('#win_pts').value),
        draw_pts: parseInt(document.querySelector('#draw_pts').value),
        loss_pts: parseInt(document.querySelector('#loss_pts').value)
    };
}

function fetchTeamsFromControls(){
    
    const teamNames = [];
    
    // fetch team names from input controls
    for(let i = 1; i <= MAX_TEAMS; i++) {
        input = document.querySelector(`\#team${i}_INPUT`);
        if(input.value.trim() != '') {
            teamNames.push(input.value.trim());
        }
    }

    return teamNames;
}

function fetchHeaderFromUI(){
    return document.querySelector('#header_h1').innerHTML;
}

function resetControls() {

    document.querySelector('#setup').value = PARAMS_DEFAULTS.SETUP;
    document.querySelector('#takedown').value = PARAMS_DEFAULTS.TAKEDOWN;
    document.querySelector('#breaks').value = PARAMS_DEFAULTS.BREAKS;
    document.querySelector('#end').value = PARAMS_DEFAULTS.END; 

    document.querySelector('#win_pts').value = PARAMS_DEFAULTS.WIN_PTS;
    document.querySelector('#draw_pts').value = PARAMS_DEFAULTS.DRAW_PTS;
    document.querySelector('#loss_pts').value = PARAMS_DEFAULTS.LOSS_PTS;

    for(let i = 1; i <= MAX_TEAMS; i++) { 
        document.querySelector(`\#team${i}_INPUT`).value = '';
    }
}

function disableBack() {
    document.querySelector('#backBTN').disabled = true;
}

/*********************  page load ****************************************************/

document.addEventListener("DOMContentLoaded", async function() {

    const backendTab = new bootstrap.Tab(document.querySelector('#backendTab'));
    const frontendTab = new bootstrap.Tab(document.querySelector('#frontendTab'));    

    const editHeaderBTN = document.querySelector('#editHeaderBTN');
    const saveHeaderBTN = document.querySelector('#saveHeaderBTN');
    const nextBTN = document.querySelector('#nextBTN');
    const backBTN = document.querySelector('#backBTN');
    const resetBTN = document.querySelector('#resetBTN');
    const diceBTN = document.querySelector('#diceBTN');
    const collapseBTN = document.querySelector('#collapseBTN');
    const lockCalcBTN = document.querySelector('#lockCalcBTN');    
    const lockBackBTN = document.querySelector('#lockBackBTN');    
    const calcBTN = document.querySelector('#calcBTN');

    document.querySelector('#version').innerHTML = VERSION;

    editHeaderBTN.addEventListener('click', function (event) { 
        document.querySelector('#header_h1_div').classList.add('d-none');
        document.querySelector('#header_form').classList.remove('d-none');
    }); 

    saveHeaderBTN.addEventListener('click', function (event) { 
        app.setHeader(document.querySelector('#headerINPUT').value.trim());    
        document.querySelector('#header_h1').innerHTML = app.header;
        document.querySelector('#header_form').classList.add('d-none');
        document.querySelector('#header_h1_div').classList.remove('d-none');
    });       

    nextBTN.addEventListener('click', function (event) {    
        backBTN.disabled = true;
        calcBTN.disabled = true;    
        app.switchTabTo('frontend');  
        frontendTab.show();
    });    

    backBTN.addEventListener('click', function (event) {   
        backBTN.disabled = true;
        calcBTN.disabled = true;   
        app.switchTabTo('backend');  
        backendTab.show();
    });

    resetBTN.addEventListener('click', function (event) {
        resetControls();
    });

    diceBTN.addEventListener('click', function (event) {       
        
        for(let i = 1; i <= MAX_TEAMS; i++) {
            document.querySelector(`\#team${i}_INPUT`).value = getRandomName();
        }
    });

    collapseBTN.addEventListener('click', function (event) {   
        
        const inputs = [];
        const names = [];
        
        for(let i = 1; i <= MAX_TEAMS; i++) {
            input = document.querySelector(`\#team${i}_INPUT`);
            inputs.push(input);
            if(input.value.trim() != '') {
                names.push(input.value.trim());
            }
        }

        for(let i = 0; i < MAX_TEAMS; i++) {
            inputs[i].value = i < names.length ? names[i] : '';
        }

    });

    lockCalcBTN.addEventListener('click', function (event) {
        calcBTN.disabled = false;
    });

    lockBackBTN.addEventListener('click', function (event) {
        backBTN.disabled = false;
    });

    calcBTN.addEventListener('click', async function (event) {
        backBTN.disabled = true;
        calcBTN.disabled = true;
        const fetchedTeams = fetchTeamsFromControls()
        app.update(fetchHeaderFromUI(), fetchParamsFromControls(), fetchedTeams);   
        await app.updateFavouriteTeamNames(fetchedTeams);       
        app.switchTabTo('frontend');   
        frontendTab.show();   
        updateControls();
        updateViews();
    });
    
    app.syncWithStorage();
    if(app.tab === 'backend') backendTab.show(); else frontendTab.show();
    
    await app.initializeFavouriteTeamNames();
    
    updateHeader();
    updateControls();
    updateViews();
 });