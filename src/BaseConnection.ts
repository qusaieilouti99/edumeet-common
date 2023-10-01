/* eslint-disable no-unused-vars */
import { EventEmitter } from 'events';
import { SignalingInterface, SocketMessage } from './SignalingInterface';

export type InboundNotification<T> = (
	notification: T
) => void;

export type InboundRequest<T> = (
	request: T,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	respond: (response: any) => void,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reject: (error: any) => void
) => void;

export declare interface BaseConnection<T> {
	// Connection events
	on(event: 'close', listener: () => void): this;
	on(event: 'connect', listener: () => void): this;
	on(event: 'reconnect', listener: () => void): this;
    on(event: 'reconnect_attempt', listener: (attempt: number) => void): this;
    on(event: 'reconnect_error', listener: (error: Error) => void): this;
    on(event: 'error', listener: (error: Error) => void): this;

	// Inbound messages
	on(
		event: 'notification',
		listener: InboundNotification<T>): this;
	on(
		event: 'request',
		listener: InboundRequest<T>): this;
}

/**
 * Base class for all connections (SocketIO/DataChannel etc.).
 */
export abstract class BaseConnection <T>
	extends EventEmitter implements SignalingInterface<T> {
	public abstract notify(notification: T): void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public abstract request(request: T): Promise<unknown>;
	public abstract close(): void;
	public abstract get id(): string;
}