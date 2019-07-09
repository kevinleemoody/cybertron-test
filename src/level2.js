import { test } from 'tape-modern'
import { map, filter, reduce, compose } from 'ramda'

const clients = [
  {
    age: 22,
    eyeColor: 'green',
    name: {
      firstName: 'Horne',
      lastName: 'Hahn'
    },
    gender: 'male',
    email: 'hornehahn@vidto.com',
    phone: '+1 (803) 528-3269',
    address: {
      street: '494 Bayview Place',
      city: 'Chesterfield',
      state: 'Nebraska',
      zip: 84643
    },
    registered: '2014-04-13T12:10:25 +04:00'
  },
  {
    age: 25,
    eyeColor: 'green',
    name: {
      firstName: 'Rhodes',
      lastName: 'Harvey'
    },
    gender: 'male',
    email: 'rhodesharvey@vidto.com',
    phone: '+1 (975) 583-2319',
    address: {
      street: '705 Legion Street',
      city: 'Herald',
      state: 'Idaho',
      zip: 63136
    },
    registered: '2015-03-24T11:02:46 +04:00'
  },
  {
    age: 40,
    eyeColor: 'green',
    name: {
      firstName: 'Concetta',
      lastName: 'Talley'
    },
    gender: 'female',
    email: 'concettatalley@vidto.com',
    phone: '+1 (807) 538-2667',
    address: {
      street: '7245 3rd Ave',
      city: 'Pickens',
      state: 'South Carolina',
      zip: 28745
    },
    registered: '2015-09-19T12:40:05 +04:00'
  },
  {
    age: 26,
    eyeColor: 'green',
    name: {
      firstName: 'Sandra',
      lastName: 'Hogan'
    },
    gender: 'female',
    email: 'sandrahogan@vidto.com',
    phone: '+1 (987) 568-2357',
    address: {
      street: '332 Junius Street',
      city: 'Cheyenne',
      state: 'Wyoming',
      zip: 37564
    },
    registered: '2015-03-18T11:57:49 +04:00'
  },
  {
    age: 27,
    eyeColor: 'blue',
    name: {
      firstName: 'Butler',
      lastName: 'Flynn'
    },
    gender: 'male',
    email: 'butlerflynn@vidto.com',
    phone: '+1 (993) 588-3113',
    address: {
      street: '342 Gelston Avenue',
      city: 'Asheville',
      state: 'North Carolina',
      zip: 28801
    },
    registered: '2017-10-02T06:08:32 +04:00'
  },
  {
    age: 27,
    eyeColor: 'blue',
    name: {
      firstName: 'Hurst',
      lastName: 'Adkins'
    },
    gender: 'male',
    email: 'hurstadkins@vidto.com',
    phone: '+1 (955) 490-2739',
    address: {
      street: '874 Delvana Street',
      city: 'Nanafilda',
      state: 'Wyoming',
      zip: 98647
    },
    registered: '2015-02-01T11:16:26 +05:00'
  }
]

export default function() {
  /* Level 2 - colors */

  const ex1 =
    'Use map to return a concatenated first and last name of each client.'
  const exercise1 = _ => {
    let fullClientNames = clients.map(clientName => `${clientName.name.firstName} ${clientName.name.lastName}`);
    return fullClientNames
  }


  const ex2 = 'Use filter to return clients from Wyoming'
  const exercise2 = _ => {
    return filter(client => client.address.state === 'Wyoming', clients)

  }


  // const ex3 = 'Use reduce to count the number of people with green eyes '
  // const exercise3 = _ => {
  //  const greenEyeClients = clients 
  //  .reduce
    
  //   return reduce(acc, client) => {
  //     if (client.eyeColor) === 'green' {
        


  // const products = [
  //   { name: 'hard drive', price: 59.99 },
  //   { name: 'lighbulbs', price: 2.59 },
  //   { name: 'paper towels', price: 6.99 },
  //   { name: 'flatscreen monitor', price: 159.99 },
  //   { name: 'cable ties', price: 19.99 },
  //   { name: 'ballpoint pens', price: 4.49 },
  // ];
  
  //     // Result: { name: 'paper towels', price: 6.99 }
  // const product = products
  //   .filter(product => product.price < 10)
  //   .reduce((highest, product) => {
  //   if (highest.price > product.price) {  
  //   return highest;
  //   }
  //   return product;
  //   });
  //   console.log(product)



  const ex3 = 'Use reduce to count the number of people with green eyes '  
  const exercise3 = _ => {
    return reduce(
     (acc, client) => {
      if (client => client.eyeColor === 'green') {
        acc = acc + 1
      }
      return acc
    },
    0,
    clients
  )
}





  // const ex3 = 'Use reduce to count the number of people with green eyes '
  // const exercise3 = _ => {
  //   return reduce(
  //     (acc, client) => {
  //       if (prop('eyeColor', client) === 'green') {
  //         acc = acc + 1
  //       }
  //       return acc
  //     },
  //     0,
  //     clients
  //   )
  // }









  const ex4 = `Use map, filter and reduce with compose to return the full name (as a string) of the female from Wyoming. `
  const exercise4 = _ => {
    return null
  }

  const ex5 =
    'Use map and filter to return the full address of the clients living in North Carolina'
  const exercise5 = _ => {
    return []
  }

  const ex6 = 'use filter to remove anyone over the age of 25'
  const exercise6 = _ => {
    return []
  }

  const ex7 =
    'use reduce to count the number of males, age 22 - 27, who have green eyes'
  const exercise7 = _ => {
    return 0
  }

  /* tests to validate exercises go here */
  test('test', assert => {
    assert.same(
      exercise1(),
      [
        'Horne Hahn',
        'Rhodes Harvey',
        'Concetta Talley',
        'Sandra Hogan',
        'Butler Flynn',
        'Hurst Adkins'
      ],
      ex1
    )
    assert.same(
      exercise2(),
      [
        {
          age: 26,
          eyeColor: 'green',
          name: {
            firstName: 'Sandra',
            lastName: 'Hogan'
          },
          gender: 'female',
          email: 'sandrahogan@vidto.com',
          phone: '+1 (987) 568-2357',
          address: {
            street: '332 Junius Street',
            city: 'Cheyenne',
            state: 'Wyoming',
            zip: 37564
          },
          registered: '2015-03-18T11:57:49 +04:00'
        },
        {
          age: 27,
          eyeColor: 'blue',
          name: {
            firstName: 'Hurst',
            lastName: 'Adkins'
          },
          gender: 'male',
          email: 'hurstadkins@vidto.com',
          phone: '+1 (955) 490-2739',
          address: {
            street: '874 Delvana Street',
            city: 'Nanafilda',
            state: 'Wyoming',
            zip: 98647
          },
          registered: '2015-02-01T11:16:26 +05:00'
        }
      ],
      ex2
    )
    assert.same(exercise3(), 4, ex3)
    assert.same(exercise4(), 'Sandra Hogan', ex4)
    assert.same(
      exercise5(),
      ['342 Gelston Avenue Asheville, North Carolina 28801'],
      ex5
    )
    assert.same(
      exercise6(),
      [
        {
          age: 22,
          eyeColor: 'green',
          name: {
            firstName: 'Horne',
            lastName: 'Hahn'
          },
          gender: 'male',
          email: 'hornehahn@vidto.com',
          phone: '+1 (803) 528-3269',
          address: {
            street: '494 Bayview Place',
            city: 'Chesterfield',
            state: 'Nebraska',
            zip: 84643
          },
          registered: '2014-04-13T12:10:25 +04:00'
        },
        {
          age: 25,
          eyeColor: 'green',
          name: {
            firstName: 'Rhodes',
            lastName: 'Harvey'
          },
          gender: 'male',
          email: 'rhodesharvey@vidto.com',
          phone: '+1 (975) 583-2319',
          address: {
            street: '705 Legion Street',
            city: 'Herald',
            state: 'Idaho',
            zip: 63136
          },
          registered: '2015-03-24T11:02:46 +04:00'
        }
      ],
      ex6
    ),
      assert.same(exercise7(), 2, ex7)
  })
}
