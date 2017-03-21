# Overview

Loggi Presto has a web API that conforms to the GraphQL standard. [Here](/introduction/welcome) you can learn more about it.

To consume this API, you'll need to obtain a key. [Here](/introduction/authorization) is how to get it.

Then you are able to estimate a delivery cost, create a retail order and verify the status of your order packages.

In order to do any of these, you need at least to know the desired ```shopId```. A query to [allShops](/presto/all-shops) is how to do that. The ```shopId``` can be any ```node.pk``` that is on the list ```data.allShops.edges```.

With the ```shopId``` in hands, you now can:

- Get an estimate cost of your delivery, through the query [estimateDelivery](/presto/estimate-delivery)

- Create a retail order, through the mutation [createRetailOrder](/presto/create-retail-order)

- Verify your package status through the query [packageStatus](/presto/package-status)
