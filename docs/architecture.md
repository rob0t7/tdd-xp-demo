# Architecture

## Simple Layered

![alt Layered Architecture](./images/layered-architecture.svg)

## More Complex Layered

![alt Layered Example](./images/layered-architecture-complex.svg)

## Hexagonal (Ports & Adapters / Clean)

![alt Hexagonal Architecture](./images/hexagonal-architecture-external-dependencies.svg)

## Hexagonal Flow

![alt Hexagonal Flow](./images/hexagonal-architecture-flow-of-control.svg)

## Hexagonal Adapters

![alt Hex Adapters](./images/hexagonal-architecture-primary-and-secondary-adapters.svg)

A typical mistake is that we write the use cases with knowledge about particular technologies. Such use cases are not speaking business language, become coupled with technologies used and are harder to maintain.

![alt Primary Adapters](./images/hexagonal-architecture-primary-adapter.svg)

![alt Secondary Adapters](./images/hexagonal-architecture-secondary-adapter.svg)

## Testing business Logic (Unit Test)

![alt Testing Business Logic](./images/hexagonal-architecture-unit-test.svg)

## Test Primary Adapters

![alt Testing Primary Adapters](./images/hexagonal-architecture-primary-adapter-integration-test.svg)

## Test Secondary Adapters

![alt Testing Secondary Adapters](./images/hexagonal-architecture-secondary-adapter-integration-test.svg)

## Testing End to End

![alt Testing End To End](./images/hexagonal-architecture-end-to-end-test.svg)
