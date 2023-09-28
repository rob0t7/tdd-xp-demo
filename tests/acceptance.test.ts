import request from 'supertest'
import { app } from '../src/app'

test('can create a new shipment', async () => {
    // Given (setup)
    const reqBody = {
        items: [
            { id: '1', sku: '1', quantity: 5},
            { id: '2', sku: '2', quantity: 1}
        ]
    }
    // When (exceution)
    const response = await request(app).post('/shipments').send(reqBody)

    // Then (assertion)
    const expectedShipment = {
        id: "",
        state: 'New',
        items: reqBody.items
    }
    expect(response.status).toBe(201)
    const actualShipment = response.body
    expect(actualShipment.id).not.toBeNull
    expectedShipment.id = actualShipment.id
    expect(actualShipment).toBe(expectedShipment)
})

test.todo('can retrieve information about a shipment')

test.todo('can start the receiving process on a shipment')
