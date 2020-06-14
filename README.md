# corda-on-docker
Run a Corda node on Docker
## First, we need to create some artifacts (node certificates and network-parameters) for the Corda network.
## we can easily generate these artifacts using the network-bootstrapper tool.
Download network-bootstrapper tool here: https://software.r3.com/artifactory/corda/net/corda/corda-tools-network-bootstrapper/4.4/corda-tools-network-bootstrapper-4.4-sources.jar

To bootstrap a test-network we need the node.conf files for each node. The network-bootstrapper tool would be able to read the node.conf files to generate the required artifacts for the test-network.
