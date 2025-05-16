/**
* LEVEL 0.
  Есть склад спец. одежды разных размеров.
  store: Array<{ size: number, quantity: number}>
  
  К нам приходит заказ на спец. одежду
  order: Array<{ id: number, size: [s1: number] | [s1: number, s2: s1+1]  }>, 
  в котором указывается для каждого рабочего его id: number и size: [s1: number] | [s1: number, s2: s1+1]. 
    
  То есть по каждому рабочему может быть указан 
  либо один подходящий размер одежды, либо два, причем 2-ой размер только на 1 больше первого.
  
  Нужно написать функцию processOrder, которая бы на получила на вход:
  1) массив доступных размеров спец. одежды
  store: Array<{ size: number, quantity: number}>
  2) Заказ на спец. одежду для сотрудников:
  order: Array<{ id: number, size: [s1: number] | [s1: number, s2: s1+1]  }>
  
  На выходе функция должна выдать false, 
  если на складе недостаточно одежды на обеспечение всех сотрудников, 
  а если это возможно, то возвращала объект:
  {
    stats: Array<{size: number, quantity: number}>,
    assignment:  Array<{id: number, size: number}>
  }
  где stats - упорядоченный массив по возрастанию size массив 
              размеров size и количества quantity выдаваемой одежды со склада;
  assignment - массив распределения одежды по сотрудникам,
              где id - идентификатор рабочего из order, size - выданный ему размер
    
  Для проверки работоспособности функции запустить runTests()
  
  @param store: Array<{ size: number, quantity: number}>
  @param order: Array<{ id: number, size: [s1: number] | [s1: number, s2: s1+1]  }>
  @return false | {
    stats: Array<{size: number, quantity: number}>,
    assignment:  Array<{id: number, size: number}>
  }
*/
function processOrder(store, order) {
    // store: [{ size: 2, quantity: 1 }]

    // order: [{ id: 102, size: [1, 2] }],

    for (let i = 0; i < order.length; i++) {
        const orderSizes = order[i].size
        console.log(orderSizes)

        for(el of store) {

            if(!orderSizes.includes(el.size)) {
                // el.quantity = el.quantity - 1
                // console.log(store)
                return false
            }
        }
    }
   
}

const myOrder = [
    { id: 101, size: [2] },
    { id: 102, size: [1, 2] },
]

const myStore = [{ size: 2, quantity: 4 }]

const r = processOrder(myStore, myOrder)
// console.log(r)
  
  function compareNumericArrays(arr1, arr2) {
    if(arr1.length !== arr2.length) {
      return false;
    }
    
    arr1 = [...arr1].sort();
    arr2 = [...arr2].sort();
    
    for(let i=0; i<arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return false;
      }
    }
    
    return true;
  }
  
  function compareArraysOfNumericArrays(arr1, arr2) {
    if(arr1.length !== arr2.length) {
      return false;
    }
    
    for(let el1 of arr1) {
      if(arr2.findIndex(el2 => compareNumericArrays(el1, el2)) < 0) {
        return false;
      }
    }
    
    return true;
  }
  
  runTests();
  
  function runTests() {
      const tests = [
      ////////////////////////////
      {
          title: 'Test #1',
        store: [{ size: 2, quantity: 1 }],
        order: [{ id: 102, size: [1, 2] }],
        isPosible: true,
      },
      {
          title: 'Test #2',
        store: [{ size: 2, quantity: 1 }],
        order: [{ id: 102, size: [1, 2] }],
        isPosible: true,
      },
      //////////////////////////////////
      {
          title: 'Test #3',
        store: [{ size: 3, quantity: 1 }],
        order: [{ id: 102, size: [1, 2] }],
        isPosible: false,
      },
      //////////////////////////////////
      {
          title: 'Test #4',
        store: [{ size: 2, quantity: 4 }],
        order: [
          { id: 101, size: [2] },
          { id: 102, size: [1, 2] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #5',
        store: [{ size: 2, quantity: 4 }],
        order: [
          { id: 101, size: [2] },
          { id: 102, size: [1, 2] },
        ],
        isPosible: true,
      },
      //////////////////////////////////
      {
          title: 'Test #6',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 1 },
        ],
        order: [
          { id: 101, size: [2] },
          { id: 102, size: [1, 2] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #7',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 1 },
        ],
        order: [
          { id: 101, size: [2] },
          { id: 102, size: [1, 2] },
        ],
        isPosible: true,
      },
      //////////////////////////////////
      {
          title: 'Test #8',
        store: [
          { size: 1, quantity: 1 },
          { size: 3, quantity: 1 },
        ],
        order: [
          { id: 101, size: [2] },
          { id: 102, size: [1, 2] },
        ],
        isPosible: false,
      },
      //////////////////////////////////
      {
          title: 'Test #9',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 2 },
          { size: 3, quantity: 1 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #10',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 2 },
          { size: 3, quantity: 1 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #11',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 2 },
          { size: 3, quantity: 1 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #12',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 2 },
          { size: 3, quantity: 1 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
        ],
        isPosible: true,
      },
      //////////////////////////////
      {
          title: 'Test #13',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 2 },
          { size: 3, quantity: 1 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
          { id: 104, size: [4] },
          { id: 105, size: [3, 4] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #14',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 2 },
          { size: 3, quantity: 1 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
          { id: 105, size: [3, 4] },
          { id: 104, size: [4] },
          
          { id: 100, size: [1] },
          { id: 101, size: [2] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #15',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 2 },
          { size: 3, quantity: 1 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
          { id: 104, size: [4] },
          { id: 105, size: [3, 4] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #16',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 2 },
          { size: 3, quantity: 1 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
          { id: 104, size: [4] },
          { id: 105, size: [3, 4] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #17',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 2 },
          { size: 3, quantity: 1 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
          { id: 104, size: [4] },
          { id: 105, size: [3, 4] },
        ],
        isPosible: true,
      },
      // //////////////////////////////////
      {
          title: 'Test #18',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 1 },
          { size: 3, quantity: 2 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
          { id: 104, size: [4] },
          { id: 105, size: [3, 4] },
        ],
        isPosible: false,
      },
      // //////////////////////////////////
      {
          title: 'Test #19',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 3 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
          { id: 104, size: [4] },
          { id: 105, size: [3, 4] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #20',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 3 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
          { id: 104, size: [4] },
          { id: 105, size: [3, 4] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #21',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 3 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
          { id: 104, size: [4] },
          { id: 105, size: [3, 4] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #22',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 3 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
          { id: 104, size: [4] },
          { id: 105, size: [3, 4] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #23',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 3 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
          { id: 104, size: [4] },
          { id: 105, size: [3, 4] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #24',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 3 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
          { id: 104, size: [4] },
          { id: 105, size: [3, 4] },
        ],
        isPosible: true,
      },
      {
          title: 'Test #25',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 3 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [2] },
          { id: 102, size: [2, 3] },
          { id: 103, size: [1, 2] },
          { id: 104, size: [4] },
          { id: 105, size: [3, 4] },
        ],
        isPosible: true,
      },
      //////////////////////////////////
      {
          title: 'Test #26',
        store: [
          { size: 1, quantity: 2 },
          { size: 2, quantity: 2 },
          { size: 3, quantity: 1 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [1, 2] },
          { id: 102, size: [1, 2] },
          { id: 103, size: [2] },
          { id: 104, size: [2, 3] },
          { id: 105, size: [4] },
          { id: 106, size: [3, 4] },
        ],
        isPosible: true,
      },
      //////////////////////////////////
      {
          title: 'Test #27',
        store: [
          { size: 1, quantity: 10 },
          { size: 2, quantity: 0 },
          { size: 3, quantity: 0 },
          { size: 4, quantity: 10 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [1, 2] },
          { id: 102, size: [1, 2] },
          { id: 105, size: [4] },
          { id: 106, size: [3, 4] },
        ],
        isPosible: true,
      },
      //////////////////////////////////
      {
          title: 'Test #28',
        store: [
          { size: 1, quantity: 10 },
          { size: 2, quantity: 10 },
          { size: 3, quantity: 0 },
          { size: 4, quantity: 10 },
        ],
        order: [
          { id: 100, size: [1] },
          { id: 101, size: [1, 2] },
          { id: 102, size: [1, 2] },
          { id: 105, size: [4] },
          { id: 106, size: [3, 4] },
        ],
        isPosible: true,
      },
      //////////////////////////////////
      {
          title: 'Test #29',
        store: [
          { size: 1, quantity: 10 },
          { size: 2, quantity: 1 },
          { size: 3, quantity: 0 },
          { size: 4, quantity: 10 },
        ],
        order: [
          { id: 100, size: [1, 2] },
          { id: 101, size: [1, 2] },
          { id: 102, size: [1, 2] },
          { id: 105, size: [4] },
          { id: 106, size: [3, 4] },
        ],
        isPosible: true,
      },
      //////////////////////////////////
      {
        title: 'Test #30',
        store: [
          { size: 10, quantity: 5 },
          { size: 20, quantity: 5 },
          { size: 99, quantity: 5 },
        ],
        order: [
          { id: 1, size: [10] },
          { id: 2, size: [20] },
        ],
        isPosible: true,
      },
      //////////////////////////////////
      {
          title: 'Test #31',
        store: [
          { size: 49, quantity: 1 },
          { size: 50, quantity: 1 },
          { size: 51, quantity: 1 },
        ],
        order: [
          { id: 10, size: [49, 50] },
          { id: 20, size: [49, 50] },
        ],
        isPosible: true,
        
      },
      //////////////////////////////////
      {
          title: 'Test #32',
        store: [
          { size: 10, quantity: 1 },
          { size: 11, quantity: 2 },
          { size: 99, quantity: 5 }, // Unused size in store
        ],
        order: [
          { id: 1, size: [10, 11] }, // Prefers 10
          { id: 2, size: [10, 11] }, // Prefers 10
          { id: 3, size: [11] },                      // Needs 11
        ],
        isPosible: true,
        
      },
      //////////////////////////////////
      {
        title: 'Test #33',
        store: [
          { size: 5, quantity: 1 },
          { size: 6, quantity: 1 },
        ],
        order: [
          { id: 1, size: [5, 6] }, // Prefers 6
          { id: 2, size: [5] },                      // Needs 5
        ],
        isPosible: true,
      },
      //////////////////////////////////
      {
        title: 'Test #33',
        store: [
          { size: 7, quantity: 1 },
          { size: 8, quantity: 1 },
        ],
        order: [
          { id: 1, size: [7, 8] }, // Prefers 7
          { id: 2, size: [7, 8] }, // Prefers 8
        ],
        isPosible: true,
            },
      //////////////////////////////////
      {
        title: 'Test #34',
        store: [
          { size: 2, quantity: 1 },
          { size: 3, quantity: 1 },
          { size: 4, quantity: 1 },
        ],
        order: [
          { id: 1, size: [2, 3] },
          { id: 2, size: [3, 4] },
          { id: 3, size: [3, 4] },
        ],
        isPosible: true,
      },
      //////////////////////////////////
      {
          title: 'Test #35',
        store: [
          { size: 1, quantity: 1 },
          { size: 2, quantity: 1 },
          { size: 3, quantity: 2 },
          { size: 4, quantity: 2 },
        ],
        order: [
          { id: 1, size: [3, 4] },
          { id: 2, size: [2, 3] },
          { id: 3, size: [3] },
          { id: 4, size: [1, 2] },
        ],
        isPosible: true,
      },
    ];
  
    let errors = 0;
    for (const test of tests) {
        let result = undefined;
      
      try {
        result = processOrder(test.store, test.order);
  
        if (!checkOrderProcessingResult(test, result)) {
          errors++;
          console.log('//////////////////////////////////');
          console.log(`failed for ${test.title}`);
          console.log('store', test.store);
          console.log('order', test.order);
          console.log('wanted result', { isPosible: test.isPosible });
          console.log("actual result", result);
        }
      } catch (e) {
        errors++;
        console.log('//////////////////////////////////');
        console.log(`failed for ${test.title}`);
        console.log('store', test.store);
        console.log('order', test.order);
        console.log('wanted result', { isPosible: test.isPosible });
        console.log("actual result", result);
        console.log("exception", e.message, e);
      }
    }
  
    if(errors === 0) {
      console.log('processOrder test successfuly completed');
    } else {
      console.log(`processOrder test failed with ${errors} errors`);
    }
    console.log('////////////////////////////////////////');
    console.log('////////////////////////////////////////');
    console.log('////////////////////////////////////////');
    console.log('////////////////////////////////////////');
  }
  
  function checkOrderProcessingResult(test, result) {
    // console.log('test', test, 'result', result);
    
    if(!test.isPosible && !result) {
      // 
      return true;  
    }
  
    if((!test.isPosible || !result) && test.isPosible != result) {
      return false;
    }
  
    compareStatsAndAssigmnet(result);
    compareOrderAndAssigment(test.order, result.assignment);
    compareStoreAndStats(test.store, result.stats);
  
    return true;
  }
  
  function compareStatsAndAssigmnet(result) {
    const {stats, assignment} = result;
  
    const calcStatsMap = new Map();
    for(const ass of assignment) {
      const m = calcStatsMap.get(ass.size);
      calcStatsMap.set(ass.size, (m || 0) + 1);
    }
  
    const calcStatsArr = [...calcStatsMap.entries()].sort((e1, e2) => e1[0] - e2[0]);
    const orignalStatsArr = [...stats].sort((e1, e2) => e1.size - e2.size).filter(e => e.quantity > 0); 
  
    if(calcStatsArr.length !== orignalStatsArr.length) {
      throw new Error('stats does not correspond to assignment');
    }
  
    for(let i=0; i< calcStatsArr.length; i++) {
      const calcStatsItem = calcStatsArr[i];
      const orignalStatItem = orignalStatsArr[i];
  
      if(calcStatsItem[0] !== orignalStatItem.size) {
          throw new Error('stats does not correspond to assignment');
      }
      if(calcStatsItem[1] !== orignalStatItem.quantity) {
          throw new Error('stats does not correspond to assignment');
      }
    }
  }
  
  function compareOrderAndAssigment(order, assignment) {
      if(order.length !== assignment.length) {
        throw new Error(`order.length != assignment.length`);
    }
    
    for(const o of order) {
      const ass = assignment.find(a => a.id == o.id);
      if(!ass) {
        throw new Error(`Cannot find assigment for id=${o.id}`);
      }
  
      if(!o.size.includes(ass.size)) {
        throw new Error(`Assigned wrong size (${ass.size}) for id=${o.id}`);
      }
    }
  }
  
  function compareStoreAndStats(store, stats) {
    for(const statsItem of stats) {
      if(statsItem.quantity === 0) {
        continue;
      }
      
      const storeItem = store.find(storeI => storeI.size === statsItem.size);
      if(!storeItem) {
        throw new Error(`Cannot find store item for statsItem.size=${statsItem.size}`);
      }
  
      if(storeItem.quantity < statsItem.quantity) {
        throw new Error(`store item for size=${storeItem.size} has quantity=${storeItem.quantity} < statsItem.quantity=${statsItem.quantity}`);
      }
    }
  }
  