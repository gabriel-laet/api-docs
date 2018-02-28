# Order Lifecycle

* Once you create an Order, we’ll try to find a nearby Driver to perform the delivery. The current status at this moment is *allocating*.
* When a Driver is found, the status is changed to started. And when completed, the status is changed to *finished*.
* If we can’t find a Driver within 10 minutes, your Order will change status to *dropped*. We’ll not automatically retry, unless you explicit call our Order Redo endpoint.
[https://api.loggi.com/presto/order-redo](https://api.loggi.com/presto/order-redo)
* When an Order is [http://localhost:3000/corp-overview/cancel-order](cancelled):
  * Before a Driver is assigned, status will be `cancelled`
  * After a Driver is assigned, status will be `cancelledWithCharge`

Order Status is fetched using the following query:

```graphql
query {
  packageOrder(packageId:80455) {
    status
  }
}
```

