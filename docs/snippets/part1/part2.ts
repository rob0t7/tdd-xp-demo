class Shipment {
    state: ShipmentState
    contents: Item[]

    constructor({state: ShipmentState, contents: Item[]}) {
        this.state = state
        this.contents = contents
    }

    receiveShipment() {
        this.state = ShipmentState.Received
    }

    static createNewShipment(contents: Item[]) {
        return new Shipment({state: ShipmentState.New, contents})
    }
}
