export function binarySearch(array: any[], key: any, keyFn: (arg: any) => any): number {
    return _binarySearch(array, key, keyFn, 0, array.length - 1);
}

function _binarySearch(array: any[], key: any, keyFn: (arg: any) => any, low: number, high: number): number {
    if (low >= high)
        return -1;
    let mid = Math.floor((high + low) / 2);
    let value = keyFn(array[mid]);
    if (value === key)
        return mid;
    if (value < key)
        return _binarySearch(array, key, keyFn, mid + 1, high);
    return _binarySearch(array, key, keyFn, low, mid - 1);
}

export function getCanvasWidth(context: CanvasRenderingContext2D): number {
    return context.canvas.clientWidth;
}

export function getCanvasHeight(context: CanvasRenderingContext2D): number {
    return context.canvas.clientHeight;
}

export function strokeLine(context: CanvasRenderingContext2D, sx: number, sy: number, dx: number, dy: number) {
    context.beginPath();
    context.moveTo(sx, sy);
    context.lineTo(dx, dy);
    context.stroke();
}