let player = 'Matheus';
let lastname = 'Quintanilha';
let age = 27;
let medals = {golden: 5, silver: 2};

let athlete = {
    player: 'Matheus',
    lastname: 'Quintanilha',
    age: 27,
    medals: ['golden: 5', 'silver: 2']
   
};

 console.log('O atleta ' + athlete.player + ' ' + athlete.lastname + 'possui ' + athlete.age + ' anos.');

 console.log('O atleta ' + athlete['player'] + ' ' + athlete['lastname'] + 'possui ' + athlete['age'] + ' anos.');

 athlete['fullName'] = athlete.player + ' ' + athlete.lastname;

 console.table(athlete)