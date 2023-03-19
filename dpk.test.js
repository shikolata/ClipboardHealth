const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
    it("Returns '0' nothing/null is passed", () => {
        const resultPartitionKey = deterministicPartitionKey();
        expect(resultPartitionKey).toBe("0");
    });

    it("Returns event.partitionKey when passed an event object with a partitionKey string property", () => {
        const event = {
            partitionKey : 'partitionKey'
        }
        const resultPartitionKey = deterministicPartitionKey(event);
        expect(resultPartitionKey).toBe("partitionKey");
    });

    it("Returns stringified event.partitionKey when passed an event object with a partitionKey string property", () => {
        const event = {
            partitionKey : 123123
        }
        const resultPartitionKey = deterministicPartitionKey(event);
        expect(resultPartitionKey).toBe("123123");
    });

    it("Returns stringified event when passed an event object with no partitionKey property", () => {
        const event = {
            otherProperty : 12123412341234123412341234123
        }
        const resultPartitionKey = deterministicPartitionKey(event);
        expect(resultPartitionKey).toBe("90f00a5ca8b52d9db75aa3a23958d486a2197ce525ad9ba662e07a6fbf66a3b6cdbeaeab13d3ed946f19735af67a5fa58efff36498c45262b3e1ec9b1c5fdb3f");
    });

    it("Returns created hash of a key that exceeds the specified max length", () => {
        const event = '90f00a5ca8b52d9db75aa3a23958d486a2197ce525ad9ba662e07a6fbf66a3b6cdbeaeab13d3ed946f19735af67a5fa58efff36498c45262b3e1ec9b1c5fdb3f90f00a5ca8b52d9db75aa3a23958d486a2197ce525ad9ba662e07a6fbf66a3b6cdbeaeab13d3ed946f19735af67a5fa58efff36498c45262b3e1ec9b1c5fdb3f'
        const resultPartitionKey = deterministicPartitionKey(event);
        expect(resultPartitionKey).toBe("a330ee879cb1501b3d20e972c83854292b1a45f66ac3eaf1b8a367df5a9528a29af08e4f1c9699db84e371a41f5bca8d6cf1cc2079a8bb2ab96eee328e841bab");
    });
});
