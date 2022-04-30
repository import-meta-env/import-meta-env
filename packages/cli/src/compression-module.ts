export interface CompressionModule {
  shouldProcess: ({ path }: { path: string }) => boolean;
  compressSync: ({ buffer, path }: { buffer: Buffer; path: string }) => Buffer;
  decompressSync: ({
    buffer,
    path,
  }: {
    buffer: Buffer;
    path: string;
  }) => Buffer;
}
