//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = md5(args.join(','));
        let objectInCache = cache.find(item => item.hash === hash);

        if (objectInCache) {
            console.log("Из кеша: " + objectInCache.value);
            return "Из кеша: " + objectInCache.value;
        }

        let result = func(...args);
        cache.push({ hash, value: result });

        if (cache.length > 5) {
            cache.shift();
        }

        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }

    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    let count = 0;
    let allCount = 0;

    function wrapper(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
            allCount++;
        }
        if (!timeoutId) {
            func.apply(this, args);
            count++;
        }

        timeoutId = setTimeout(() => {
            count++;
            func.apply(this, args);
            wrapper.count = count;
        }, delay);

        wrapper.allCount = allCount;
    }

    return wrapper;

}
