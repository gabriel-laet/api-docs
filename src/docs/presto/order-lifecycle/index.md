# Order Lifecycle

* After creating [an Order](/presto/create-retail-order), we’ll try to find a nearby Driver to perform the delivery. The current status at this moment is `allocating`.
* When a Driver is found, the status is changed to `accpeted`.
* Once the driver arrives at your shop, the status is updated to `started`.
* When all packages are delivered to the customers, the status is changed to `finished`.
* If we can’t find a Driver within 10 minutes, your Order will change status to `dropped`. We’ll not automatically retry, unless you explicit call our [Order Redo endpoint](/presto/order-redo).
* When an Order is [cancelled](/corp-overview/cancel-order):
  * Before a Driver is assigned, status will be `cancelled`, meaning you won't be charged.
  * After a Driver is assigned, status will be `cancelledWithCharge`, meaning we will charge you the minimun value for a delivery.

Order Status is fetched using the following query:

```graphql
query {
  packageOrder(packageId:80455) {
    status
  }
}
```