/* eslint-disable no-unused-vars */

export interface SocketMessage {
	method: string; // TODO: define inbound notification method strings
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data?: any; // TODO: define inbound notification data
}

export interface ChatSocketMessage {
	peerId:string;
	roomId:string;
	method: string; // TODO: define inbound notification method strings
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data?: any; // TODO: define inbound notification data
}

/**
 * Interface for any signaling class.
 */
export interface SignalingInterface <T> {
	// Outbound messages
	notify: (notification: T) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	request: (request: T) => Promise<unknown>;
	close: () => void;
}