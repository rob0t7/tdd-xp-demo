// Web Part 1

const CREATE_SHIPMENT_URL = "/shipments";
const STATUS_CREATED = 201;

app.post(CREATE_SHIPMENT_URL, async function (req, res) {
  const createShipmentRequest = req.body;
  const createShipmentResponse = await CreateShipmentCommand(
    createShipmentRequest
  );
  res.status(STATUS_CREATED).json(createShipmentResponse);
});

// Domain Part 1
import { v4 as uuid } from "uuid";

type CreateShipmentRequest = {
  contents: Item[];
};

type CreateShipmentResponse = {
  id: string;
  state: ShipmentState;
  contents: Item[];
};

async function CreateShipmentCommand(
  req: CreateShipmentRequest
): Promise<CreateShipmentResponse> {
  return {
    id: uuid(),
    state: ShipmentState.New,
    contents: req.contents,
  };
}

enum ShipmentState {
  New = "New",
  Received = "Received",
}

type Shipment = {
  id: string;
  state: ShipmentState;
  contents: Item[];
};

type Item = {
  id: string;
  sku: string;
  quantity: string;
  description: string;
};

// Web Part 2

const FIND_SHIPMENT_URL = "/shipments/:id";
app.get(FIND_SHIPMENT_URL, async function (req, res) {
  const shipmentResponse = await FetchShipment(req.params.id);
  res.json(shipmentResponse);
});

// Domain Part 2
async function FetchShipment(id: string): Promise<ShipmentResponse> {
  return {
    id,
    state: ShipmentState.New,
    contents: [],
  };
}

interface ShipmentRepository {
  findById(id: string): Promise<Shipment>;
  create(shipment: Shipment): Promise<Shipment>;
}

class InMemoryShipmentRepository implements ShipmentRepository {
  private shipments: { [key: string]: Shipment };

  constructor() {
    this.shipments = {};
  }

  async findById(id: string): Promise<Shipment> {
    if (id in this.shipments) {
      return this.shipments[id];
    }
    throw new Error("Shipment not found");
  }

  async create(shipment: Shipment): Promise<Shipment> {
    if (shipment.id in this.shipments) {
      throw new Error("Shipment already exists");
    }
    this.shipments[shipment.id] = shipment;
    return shipment;
  }
}
