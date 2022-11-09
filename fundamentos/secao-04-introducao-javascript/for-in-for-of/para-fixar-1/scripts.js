let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let index in names) {
    console.log('Ola ' + names['person1'], names['person2'], names['person3']);
  }