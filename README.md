# CDC Testing using Pact JS - example by @hgcstr

This is a basic example for pact is divided in 2 different repos.

consumer-test: uses pact to create the mocked server and the contract.

provider-server: uses pact to read the contract created in "consumer-test" and verify agaisnt it.

## Consumer side testing

### Run tests
```
npm test
```
