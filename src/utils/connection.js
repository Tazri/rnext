export function createConnection(serverUrl, roomId) {
  return {
    connect() {
      console.log(`> 🟢 Connected with server ${serverUrl} roomId ${roomId}`);
    },
    disconnect() {
      console.log(
        `> 🔴 Disconnected with server ${serverUrl} roomId ${roomId}`
      );
    },
  };
}
