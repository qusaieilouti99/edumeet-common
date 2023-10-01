/// <reference types="node" />
import { EventEmitter } from 'events';
import { SignalingInterface } from './SignalingInterface';
export type InboundNotification<T> = (notification: T) => void;
export type InboundRequest<T> = (request: T, respond: (response: any) => void, reject: (error: any) => void) => void;
export declare interface BaseConnection<T> {
    on(event: 'close', listener: () => void): this;
    on(event: 'connect', listener: () => void): this;
    on(event: 'reconnect', listener: () => void): this;
    on(event: 'reconnect_attempt', listener: (attempt: number) => void): this;
    on(event: 'reconnect_error', listener: (error: Error) => void): this;
    on(event: 'error', listener: (error: Error) => void): this;
    on(event: 'notification', listener: InboundNotification<T>): this;
    on(event: 'request', listener: InboundRequest<T>): this;
}
/**
 * Base class for all connections (SocketIO/DataChannel etc.).
 */
export declare abstract class BaseConnection<T> extends EventEmitter implements SignalingInterface<T> {
    abstract notify(notification: T): void;
    abstract request(request: T): Promise<unknown>;
    abstract close(): void;
    abstract get id(): string;
}
