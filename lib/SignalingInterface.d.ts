export interface SocketMessage {
    method: string;
    data?: any;
}
export interface ChatSocketMessage {
    peerId?: string;
    roomId?: string;
    method: string;
    data?: any;
}
/**
 * Interface for any signaling class.
 */
export interface SignalingInterface<T> {
    notify: (notification: T) => void;
    request: (request: T) => Promise<unknown>;
    close: () => void;
}
