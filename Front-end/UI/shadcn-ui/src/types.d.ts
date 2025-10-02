declare global {
  interface EthereumProvider {
    request<T = unknown>(args: { method: string; params?: unknown[] | Record<string, unknown> }): Promise<T>;
    on?(event: string, handler: (...args: unknown[]) => void): void;
    removeListener?(event: string, handler: (...args: unknown[]) => void): void;
    isMetaMask?: boolean;
  }

  interface Window {
    ethereum?: EthereumProvider;
  }
}

export {};