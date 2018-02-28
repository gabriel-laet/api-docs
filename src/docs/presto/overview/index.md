# Overview

Loggi Presto has a web API that conforms to the GraphQL standard, you can learn more about it in our [introduction](/introduction/welcome).

To make requests against our API, you'll need to obtain an api key, details about this are outlined in our [authorization section](/introduction/authorization).

Then you are able to estimate a delivery cost, create a retail order and verify the status of your order packages.

In order to do any of these, you need at least to know the desired ```shopId```. A query to [allShops](/presto/all-shops) is how to do that. The ```shopId``` can be any ```node.pk``` that is on the list ```data.allShops.edges```.

With the ```shopId``` in hands, you can follow our recommended work-flow:

- Get an estimate cost of your delivery, through the query [estimateDelivery](/presto/estimate-delivery)

- Create an order, through the mutation [createRetailOrder](/presto/create-retail-order)

- Verify the status of your delivery, through the query [packageStatus](/presto/package-status)

### Basic Concepts
* Shop: indicates the pickup location
* Package: indicates the delivery location
* Order: a collection of packages - a single Driver is assigned  to perform the delivery

#### Shop
* You can’t create a Shop through our API, this is done through our support.
* You can list all shops assigned to your account. You’ll need this endpoint to find the Shop ID, which is required when creating an Order.

#### Package
* A package is composed by three groups: Recipient, Destination & Charge Information
* *Recipient:* name (required) & phone (once provided, we’ll send an SMS with delivery tracking)
* *Destination:* delivery address info (lat/lng, street address, street number, neighborhood and city)
* *Charge Information:* charge method, charge value and charge change (when cash is the chosen charge method)
