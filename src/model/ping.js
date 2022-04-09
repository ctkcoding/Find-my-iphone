function Ping(snapshot) {
    this.deviceId = snapshot.id;
    this.battery = snapshot.batteryLevel;
    this.location.latitude = snapshot.location.latitude;
    this.location.longitude = snapshot.location.longitude;
    this.timestamp = new Date();
}