const logFn = (x) => {
    console.log(x * 2);
}

// const cancellable = (fn, args, t) => {
//     fn(...args);
//     const intervalId = setInterval(() => fn(...args), t)

//     return () => clearInterval(intervalId) 
// }


const cancellable1 = (fn, args, t) => {
    let isCanselled = false;
    fn(...args);

    const startInterval = () => {
            setTimeout(() => {
                if(isCanselled) return
                fn(...args);

                startInterval()
        }, t) 
    }

    startInterval()

    return () => {
        isCanselled = true;
    }
}

const r = cancellable1(logFn, [2], 1000);

const cancelTimeMs = 5000;
setTimeout(r, cancelTimeMs);

