console.log("Connecting to Bluetooth device...");
// Function to connect to a Bluetooth device and show battery level
async function connectToBluetoothDevice() {
    try {
        // Request the Bluetooth device
        const device = await navigator.bluetooth.requestDevice({
            filters: [{ services: ['battery_service'] }]
        });
        // Read the battery level
        await readBatteryLevel(device);
    } catch (error) {
        console.error("Error connecting to Bluetooth device:", error);
    }
}

connectToBluetoothDevice();


// not working 
