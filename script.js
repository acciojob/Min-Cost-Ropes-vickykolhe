function mincost(arr) {
    let totalCost = 0;
    let heap = [...arr];
    heap.sort((a, b) => a - b);

    while (heap.length > 1) {
        
        let first = heap.shift();
        let second = heap.shift();
        let cost = first + second;
        totalCost += cost;
        heap.push(cost);
        heap.sort((a, b) => a - b);
    }

    return totalCost;
}

module.exports = mincost;