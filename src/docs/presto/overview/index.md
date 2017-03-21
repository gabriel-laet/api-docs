# Overview

Loggi Presto has a web API that conforms to the GraphQL standard, you can learn more about it in our [introduction](/introduction/welcome).

To make requests against our API, you'll need to obtain an api key, details about this are outlined in our [authorization section](/introduction/authorization).

Then you are able to estimate a delivery cost, create a retail order and verify the status of your order packages.

In order to do any of these, you need at least to know the desired ```shopId```. A query to [allShops](/presto/all-shops) is how to do that. The ```shopId``` can be any ```node.pk``` that is on the list ```data.allShops.edges```.

With the ```shopId``` in hands, you can follow our recommended work-flow:

- Get an estimate cost of your delivery, through the query [estimateDelivery](/presto/estimate-delivery)

- Create an order, through the mutation [createRetailOrder](/presto/create-retail-order)

- Verify the status of your delivery, through the query [packageStatus](/presto/package-status)