export declare class Logger {
    #private;
    constructor(prefix?: string);
    get debug(): debug.Debugger;
    get warn(): debug.Debugger;
    get error(): debug.Debugger;
}
