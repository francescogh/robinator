/********************* app constants *****************************************/

const DEFAULT_TEAM_NAME_PREFIX = 'Jets';

const SET_OF = {
    COLORS : ['Black', 'Blue', 'Red', 'Pink', 'White', 'Green', 'Gray', 'Purple'],
    NAMES : ['Barbara', 'Hanna', 'Bill', 'Mary', 'Martha', 'Frank', 'Simon', 'Lucy', 'Etta', 'Eleanor', 'Nina', 'Tina', 'Daisy', 'Vicky'],   
    GENITIVES : ['Barbara\'s', 'France\'s', 'Jeremiah\'s', 'Mary\'s', 'Buddy\'s', 'Dwight\'s', 'Sophia\'s', 'Adam\'s', 'Mars'],  
    INTERIECTIONS_BF : ['Oh', 'Forza', 'Ready'],   
    INTERIECTIONS_AF : ['Yay', 'Woppa', 'Go'], 
    CLUBS : ['JETS', 'METS', 'NUVOC', 'QMU'],
    ADGECTIVES : ['Bad', 'Fab', 'Winter', 'Sandy', 'Smoky', 'Smoking', 'Extra Virgin', 'Knackered', 'Polar', 'Tie-Dye', 'Suede', 'Electric', 'Chemical', 'Hardcore', 'Wee', 'Leather', 'Dark', 'Devil', 'Ready', 'Bouncy', 'Peppy', 'Snake Print', 'Bow-Tie', 'Original', 'Scottish', 'Irish', 'Welsh', 'Mexican', 'Spanish', 'Fluffy' ,'Spunky', 'Exotic', 'Hoppy', 'Tannic', 'Crispy'],
    QUALIFICATIVES : ['Net', 'Ball', 'Volley', 'Radio', 'Morning', 'Garden', 'Karate', 'Judo'],
    SUBSTANTIVES_PL_1 : ['Elbows', 'Wasps', 'Ninjas', 'Setters', 'Spikes', 'Tippers', 'Digs', 'Flags', 'Thunders', 'Bros', 'Clouds', 'Jets', 'Chocolates', 'Cars', 'Sushi', 'Spaghetti', 'Rockets', 'Sycamores', 'Shrimps', 'Dogs', 'Heroes', 'Queens', 'Pints', 'Monkeys', 'Stars', 'Dolphins', 'Peas', 'Ladybugs', 'Thistles', 'Drums', 'Eggs', 'Nachos', 'Eyes', 'Wolves', 'Nomads', 'Giants', 'Lions', 'Rockers', 'Vipers', 'Blazers', 'Glasses', 'Wizards', 'Guns', 'Echoes', 'Deserts', 'Mountains'],
    SUBSTANTIVES_PL_2 : ['Chips', 'Hornets', 'Deers', 'Comrades', 'Spikers', 'Tips', 'Sets', 'Diggers', 'Cards', 'Lightnings', 'Sisses', 'Candies', 'Confetti', 'Ships', 'Cycles', 'Feathers', 'Chefs', 'Mushrooms', 'Pines', 'Llamas', 'Devils', 'Kings', 'Hippos', 'Hills', 'Beans', 'Stripes', 'Barrels', 'Sharks', 'Snails', 'Apricots', 'Dwarves', 'Hats', 'Horses', 'Supremes', 'Sirens', 'Tigers', 'Neckties', 'Buttons', 'Drivers', 'Gators', 'Boots', 'Books', 'Lizards', 'Roses', 'Mirrors', 'Lakes', 'Waterfalls'],
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

/********************* /app constants ****************************************/

/********************* app status variables **********************************/

const teams = [];
const fixtures = [];
const params = {
    setup : PARAMS_DEFAULTS.SETUP,
    takedown : PARAMS_DEFAULTS.TAKEDOWN,
    breaks : PARAMS_DEFAULTS.BREAKS,
    end : PARAMS_DEFAULTS.END,
    wp : PARAMS_DEFAULTS.WIN_PTS,
    dp : PARAMS_DEFAULTS.DRAW_PTS,
    lp : PARAMS_DEFAULTS.LOSS_PTS
};

/******************** /app status variables **********************************/

function updateParams(){
    params.setup = parseInt(document.querySelector('#setup').value);
    params.takedown = parseInt(document.querySelector('#takedown').value);
    params.breaks = parseInt(document.querySelector('#breaks').value);
    params.end = document.querySelector('#end').value;
    params.wp = parseInt(document.querySelector('#wp').value);
    params.dp = parseInt(document.querySelector('#dp').value);
    params.lp = parseInt(document.querySelector('#lp').value);
}

let rSeed = 1;

/**
 * random number generator
 * 
 * @param {integer} topVal 
 * 
 * @returns a number between 0 (included) and topVal (excluded)
 */
function getRandomNum(topVal){

    const d = new Date().getMilliseconds();
    const r = Math.floor(Math.random() * 1000 * rSeed++);  
    return (d + r) % topVal;
}

function getRandomName(){    

    let name = '';

    let type = getRandomNum(NAME_TYPES.length);

    const typeSplits = NAME_TYPES[type].split(' + ');

    for(let ts = 0; ts < typeSplits.length; ts++) {

        const set = SET_OF[`${typeSplits[ts]}`]
        
        let s = getRandomNum(set.length);

        name += set[s] + ' ';
    }

    return name.trim();
}

function fetchTeams(){
    
    // reset the array first
    teams.splice(0, teams.length);
    
    // fetch team names from input controls
    for(let i = 1; i <= 10; i++) {
        input = document.querySelector(`\#team${i}_INPUT`);
        if(input.value.trim() != '') {
            const name = input.value.trim();
            const score = 0;
            teams.push({name, score});
        }
    }
}

function generateFixtures(){

    const fixtures = document.getElementById('fixtures');

    const nRounds = teams.length + teams.length % 2 - 1;
    const nCourts = (teams.length + teams.length % 2) / 2;

    const resultButtons = {};

    for (let r = 1; r <= nRounds; r++) {

        const tableWrap = document.createElement('div'); 
        tableWrap.classList.add('fxTableWrap');                       

        const wall1 = document.createElement('div');
        wall1.classList.add('rInterval');
        wall1.innerHTML = getInterval(r, nRounds);

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
            side1.appendChild(createCell(r, c, 1)); 
            side2.appendChild(createCell(r, c, 2)); 
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

function createCell(r, c, s){

    const cell = document.createElement('div');
    cell.classList.add('col', 'p-1');

    resultButton = document.createElement('button');    
    resultButton.setAttribute('id', `result_${r}_${c}_${s}_BTN`);            
    resultButton.classList.add('btn', 'btn-light', 'btn-sm', 'p-1');
    resultButton.setAttribute('type', 'button');   

    const idA = getTeamIndexFor(r, c, s);
    const idB = getTeamIndexFor(r, c, 3-s)

    const teamNameA = getTeamName(idA); 
    const teamNameB = getTeamName(idB); 

    resultButton.innerHTML  = teamNameA != null ? teamNameA : '---';

    if(teamNameA == null || teamNameB == null) resultButton.setAttribute('disabled', 'true');

    resultButton.addEventListener('click', function (event) {

        disableBack();

        const btA = event.target;
        const btB = document.querySelector(`#result_${r}_${c}_${(3-s)}_BTN`);  

        if(btA.classList.contains('btn-light')) {
            
            btA.classList.replace('btn-light', 'btn-success');
            teams[idA].score += params.wp;

            btB.classList.replace('btn-light', 'btn-danger');
            teams[idB].score += params.lp;

        } else if(btA.classList.contains('btn-success')) {
            
            btA.classList.replace('btn-success', 'btn-warning');
            teams[idA].score += (params.dp - params.wp);
            
            btB.classList.replace('btn-danger', 'btn-warning');
            teams[idB].score += (params.dp - params.lp);

        } else if(btA.classList.contains('btn-warning')) {
            
            btA.classList.replace('btn-warning', 'btn-danger');
            teams[idA].score += (params.lp - params.dp);
            
            btB.classList.replace('btn-warning', 'btn-success');            
            teams[idB].score += (params.wp - params.dp);

        } else if(btA.classList.contains('btn-danger')) {
            
            btA.classList.replace('btn-danger', 'btn-light');
            teams[idA].score -= params.lp;
            
            btB.classList.replace('btn-success', 'btn-light');
            teams[idB].score -= params.wp;
        }

        updateLeaderboard();
    });

    cell.appendChild(resultButton);

    return cell;
}

function disableBack() {
    document.querySelector('#backBTN').disabled = true;
}

function getInterval(round, nRounds){

    console.table(params);

    const endSplits = params.end.split(':');
    const endDate = new Date();
    endDate.setHours(parseInt(endSplits[0]));    
    endDate.setMinutes(parseInt(endSplits[1])); 

    const nowDate = new Date();
    
    const mmLeft = (endDate.getTime() - nowDate.getTime()) / (60 * 1000) - params.setup - params.takedown - params.breaks * (nRounds - 1);

    const duration = Math.round(mmLeft / nRounds);

    const fromStart = params.setup + (round - 1) * (duration + params.breaks);

    const startDate = new Date(nowDate.getTime() + fromStart * 60 * 1000);

    const stopDate = new Date(startDate.getTime() + duration * 60 * 1000);

    const sh = String(startDate.getHours()).padStart(2, '0');
    const sm = String(startDate.getMinutes()).padStart(2, '0');
    const eh = String(stopDate.getHours()).padStart(2, '0');
    const em = String(stopDate.getMinutes()).padStart(2, '0');

    return `${sh}:${sm} - ${eh}:${em}`;

}

function updateLeaderboard(){
    
    lb = document.querySelector('#leaderboard');
    
    lb.innerHTML = '';

    const lbTeams = [...teams]; 

    lbTeams.sort(function(a, b){ return b.score - a.score; });

    for( let i = 0; i < lbTeams.length; i++){
        
        const p = document.createElement('p');
        const bg = (i % 2 == 0) ? 'lb-even' : 'lb-odd';
        p.classList.add('row', 'mb-2', bg);

        const teamCol = document.createElement('div');
        teamCol.classList.add('col-10');
        teamCol.innerHTML = lbTeams[i].name;

        const scoreCol = document.createElement('div');
        scoreCol.classList.add('col-2', 'text-end');
        scoreCol.innerHTML = lbTeams[i].score;
        
        p.appendChild(teamCol);
        p.appendChild(scoreCol);
        lb.appendChild(p);
    }
}

function generateDOM_teamsFormControls(){

    let inputs = {};

    for(let i = 1; i <= 10; i++){

        const span = document.createElement('span');
        span.classList.add('input-group-text');
        span.setAttribute('style', `font-family:Consolas, monospace;`);
        span.innerHTML = (i < 10) ? `&nbsp;${i}` : `${i}`;
       
        inputs[`${i}`] = document.createElement('input');
        inputs[`${i}`].classList.add('form-control');
        inputs[`${i}`].setAttribute('type', 'text');
        inputs[`${i}`].setAttribute('aria-label', `team ${i} input`);
        inputs[`${i}`].setAttribute('id', `team${i}_INPUT`);

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
            inputs[`${i}`].value = DEFAULT_TEAM_NAME_PREFIX + ` ${i}`; 
        }); 

        rButton.addEventListener('click', function (event) { 
            inputs[`${i}`].value = getRandomName();
        });              

        const div = document.createElement('div');
        div.classList.add('input-group', 'input-group-sm', 'mb-2');
        div.appendChild(span);
        div.appendChild(inputs[`${i}`]);
        div.appendChild(jButton);
        div.appendChild(rButton);
        div.appendChild(uButton);
        div.appendChild(tButton);
        div.appendChild(xButton);

        document.querySelector('#teamsFormControls').appendChild(div);
    }
}

function evenArrayOfIndexes(){

    const res = [...Array(teams.length).keys()];

    if(teams.length % 2 != 0) {
        // add the next index (i.e. teams.length) in second position (i.e. 1)
        //(coz we wanna leave the pivot alone and match the fake team with the pivot team in the last round)
        res.splice(1, 0, teams.length);
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

function getTeamIndexFor(round, court, side) {
    
    const indexes = evenArrayOfIndexes(); 

    rr(indexes, round);

    if(side == 1) return indexes[court - 1];
    else return indexes[indexes.length - court];
}

function getTeamName(i) {
    if(i == teams.length) {
        return null;
    } else {
        return teams[i].name;
    }
}

function resetControls(){

    document.querySelector('#setup').value = PARAMS_DEFAULTS.SETUP;
    document.querySelector('#takedown').value = PARAMS_DEFAULTS.TAKEDOWN;
    document.querySelector('#breaks').value = PARAMS_DEFAULTS.BREAKS;
    document.querySelector('#end').value = PARAMS_DEFAULTS.END; 

    document.querySelector('#wp').value = PARAMS_DEFAULTS.WIN_PTS;
    document.querySelector('#dp').value = PARAMS_DEFAULTS.DRAW_PTS;
    document.querySelector('#lp').value = PARAMS_DEFAULTS.LOSS_PTS;

    for(let i = 1; i <= 10; i++) { 
        document.querySelector(`\#team${i}_INPUT`).value = '';
    }
}

document.addEventListener("DOMContentLoaded", function() {

    const backendTab = new bootstrap.Tab(document.querySelector('#backendTab'));
    const frontendTab = new bootstrap.Tab(document.querySelector('#frontendTab'));
    
    const nextBTN = document.querySelector('#nextBTN');
    const backBTN = document.querySelector('#backBTN');
    const resetBTN = document.querySelector('#resetBTN');
    const diceBTN = document.querySelector('#diceBTN');
    const collapseBTN = document.querySelector('#collapseBTN');
    const lockCalcBTN = document.querySelector('#lockCalcBTN');    
    const lockBackBTN = document.querySelector('#lockBackBTN');    
    const calcBTN = document.querySelector('#calcBTN');

    generateDOM_teamsFormControls();

    nextBTN.addEventListener('click', function (event) {
        frontendTab.show();
        backBTN.disabled = true;
        calcBTN.disabled = true;
    });    

    backBTN.addEventListener('click', function (event) {
        backendTab.show();
        backBTN.disabled = true;
        calcBTN.disabled = true;
    });

    resetBTN.addEventListener('click', function (event) {
        resetControls();
    });

    diceBTN.addEventListener('click', function (event) {       
        
        for(let i = 1; i <= 10; i++) {
            document.querySelector(`\#team${i}_INPUT`).value = getRandomName();
        }
    });

    collapseBTN.addEventListener('click', function (event) {   
        
        const inputs = [];
        const names = [];
        
        for(let i = 1; i <= 10; i++) {
            input = document.querySelector(`\#team${i}_INPUT`);
            inputs.push(input);
            if(input.value.trim() != '') {
                names.push(input.value.trim());
            }
        }

        for(let i = 0; i < 10; i++) {
            inputs[i].value = i < names.length ? names[i] : '';
        }

    });

    lockCalcBTN.addEventListener('click', function (event) {
        calcBTN.disabled = false;
    });

    lockBackBTN.addEventListener('click', function (event) {
        backBTN.disabled = false;
    });

    calcBTN.addEventListener('click', function (event) {
        frontendTab.show();
        document.getElementById('fixtures').innerHTML = '';        
        document.getElementById('leaderboard').innerHTML = '';
        backBTN.disabled = true;
        calcBTN.disabled = true;
        updateParams();
        fetchTeams();
        generateFixtures();
        updateLeaderboard();
    });  

    resetControls();
 });