const logFn = (x) => {
    console.log(x * 2);
}

const cancellable = (fn, args, t) => {
    fn(...args);
    const intervalId = setInterval(() => fn(...args), t)

    return () => clearInterval(intervalId) 
}

const r = cancellable(logFn, [2], 1000);

const cancelTimeMs = 5000;
setTimeout(r, cancelTimeMs);

