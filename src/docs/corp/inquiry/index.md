Inquiries
=========

An inquiry needs the following data:

- city: Id of the city. Options available:
    - 1: Sao Paulo;
    - 2: Rio de Janeiro;
    - 3: Belo Horizonte;
    - 4: Curitiba;
    - 5: Porto Alegre.

- packateType: Packate type to be delivered:
    - "document": Document delivery;
    - "box": Small box, with max dimension 15cm x 15cm x 15cm;
    - "medium_box": Max dimension 20cm x 20cm x 20cm;
    - "large_box": Max dimension 42cm x 44cm x 32cm.

- slo: Int value representing the delivery mode to be used:
    - "1": Loggi Já - Entrega imediata (default);
    - "2": Loggi Smart - Entrega em até 4 horas.

- transportType: Select transport type, can be moto(default), bicycle or van;

- waypoints - List of points for an inquiry:
    - tag: Classify an action in this point;
    - instructions: Description about what to do in each point;
    - addressData: Full information about the address;
    - addressComplement: Optional complement of an address;
    - isReturn: Optional boolean to indicates if it's a return point;
    - favorite: Optional favorite address id selected to create a point. 

Example:

```graphiql
mutation {
  createOrderInquiry(input: {
    city: 1 
    packageType: "document" 
    slo: 1 
    clientMutationId: "test_inquiry"
    waypoints: [
      {
        addressComplement: "Complemento retirada"
        instructions: "Retirada de documento"
        tag: , retirar_documento
        addressData: {addressComponents: [{longName: "161", shortName: "161", types: ["street_number"]}, {longName: "Rua Antônieta Leitão", shortName: "R. Antônieta Leitão", types: ["route"]}, {longName: "Freguesia do Ó", shortName: "Freguesia do Ó", types: ["neighborhood", "political"]}, {longName: "São Paulo", shortName: "São Paulo", types: ["locality", "political"]}, {longName: "São Paulo", shortName: "São Paulo", types: ["administrative_area_level_2", "political"]}, {longName: "São Paulo", shortName: "São Paulo", types: ["administrative_area_level_1", "political"]}, {longName: "Brazil", shortName: "BR", types: ["country", "political"]}, {longName: "02925-160", shortName: "02925-160", types: ["postal_code"]}], formattedAddress: "Rua Antônieta Leitão, 161 - Freguesia do Ó, São Paulo - SP, 02925-160, Brazil", geometry: {location: {lat: -23.5024555, lng: -46.696077100000025}}, types: ["street_address"]}
      }, {
        addressComplement: "Complemento da entrega" 
        instructions: "Entregar documento" 
        tag: entregar
        addressData: {addressComponents: [{longName: "153", shortName: "153", types: ["street_number"]}, {longName: "Rua Balsa", shortName: "R. Balsa", types: ["route"]}, {longName: "Freguesia do Ó", shortName: "Freguesia do Ó", types: ["sublocality_level_1", "sublocality", "political"]}, {longName: "São Paulo", shortName: "São Paulo", types: ["locality", "political"]}, {longName: "São Paulo", shortName: "São Paulo", types: ["administrative_area_level_2", "political"]}, {longName: "São Paulo", shortName: "SP", types: ["administrative_area_level_1", "political"]}, {longName: "Brazil", shortName: "BR", types: ["country", "political"]}, {longName: "02910", shortName: "02910", types: ["postal_code_prefix", "postal_code"]}], formattedAddress: "R. Balsa, 153 - Freguesia do Ó, São Paulo - SP, Brazil", geometry: {location: {lat: -23.5050657, lng: -46.69513159999997}}, types: ["street_address"]}
      }, {
        addressComplement: "Complemento retorno" 
        instructions: "Retorno de documento"
        tag: outros
        isReturn: true
        addressData: {addressComponents: [{longName: "161", shortName: "161", types: ["street_number"]}, {longName: "Rua Antônieta Leitão", shortName: "R. Antônieta Leitão", types: ["route"]}, {longName: "Freguesia do Ó", shortName: "Freguesia do Ó", types: ["neighborhood", "political"]}, {longName: "São Paulo", shortName: "São Paulo", types: ["locality", "political"]}, {longName: "São Paulo", shortName: "São Paulo", types: ["administrative_area_level_2", "political"]}, {longName: "São Paulo", shortName: "São Paulo", types: ["administrative_area_level_1", "political"]}, {longName: "Brazil", shortName: "BR", types: ["country", "political"]}, {longName: "02925-160", shortName: "02925-160", types: ["postal_code"]}], formattedAddress: "Rua Antônieta Leitão, 161 - Freguesia do Ó, São Paulo - SP, 02925-160, Brazil", geometry: {location: {lat: -23.5024555, lng: -46.696077100000025}}, types: ["street_address"]}
      }]
  }) {
    success
    inquiry {
      pk
      pricing {
        totalCmGross
        bonuses
        totalCm
        appliedBonuses {
          discount
          key
          usercode
        }
      }
      numWaypoints
      productDescription
      paymentMethod {
        name
      }
    }
    errors {
      field
      message
    }
  }
}

```
