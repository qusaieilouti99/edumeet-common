import { BaseConnection } from './BaseConnection';
import { ChatSocketMessage } from './SignalingInterface';
import { Socket } from 'socket.io';
interface ClientServerEvents {
    notification: (notification: ChatSocketMessage) => void;
    request: (request: ChatSocketMessage, result: (serverError: unknown | null, responseData: unknown) => void) => void;
}
interface ServerClientEvents {
    notification: (notification: ChatSocketMessage) => void;
    request: (request: ChatSocketMessage, result: (timeout: Error | null, serverError: unknown | null, responseData: unknown) => void) => void;
}
export type clientAddress = {
    address: string;
    forwardedFor?: string;
};
export declare class IOChatServerConnection extends BaseConnection {
    closed: boolean;
    private socket;
    constructor(socket: Socket<ClientServerEvents, ServerClientEvents>);
    close(): void;
    get id(): string;
    get address(): clientAddress;
    notify(notification: ChatSocketMessage): void;
    private sendRequestOnWire;
    request(request: ChatSocketMessage): Promise<unknown>;
    private handleSocket;
}
export {};
