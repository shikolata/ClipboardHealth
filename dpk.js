const crypto = require("crypto");

createHash = data => crypto.createHash("sha3-512").update(data).digest("hex");
generateEventPartitionKey = event => {
    return event.partitionKey
        ? typeof event.partitionKey !== "string"
            ? JSON.stringify(event.partitionKey)
            : event.partitionKey
        : createHash(JSON.stringify(event));
}
formatCandidate = (partitionKey, maxPartitionKeyLength) => {
    return partitionKey.length > maxPartitionKeyLength
        ? createHash(partitionKey)
        : partitionKey;

}

exports.deterministicPartitionKey = (event) => {
    const TRIVIAL_PARTITION_KEY = "0";
    const MAX_PARTITION_KEY_LENGTH = 256;
    let candidate = event
        ? generateEventPartitionKey(event)
        : TRIVIAL_PARTITION_KEY;

    return formatCandidate(candidate, MAX_PARTITION_KEY_LENGTH);
};
