const crypto = require("crypto");

/**
 * Description of changes:
 *
 * 1. A createHash function is extracted to abstract its functionality, as well to prevent duplication
 * 2. candidate initialization Pseudocode:
 *  a. if the event doesn't exist, the candidate will be initialized as the trivial value
 *  b. If it doesn't, if a partitionKey doesn't exist, we set the candidate as the hash of the stringified event
 *  c. If it does, we check if it's a string, and if so we return it, otherwise we stringify it
 * 3. generateEventPartitionKey & formatCandidateformatCandidate are extracted to abstract their functionalities,
 * and improve readability
 *
 * note: changes to improve readability are intended to allow for the function to read like pseudocode, and give the
 * reader control over the level of complexity they'd like to delve into
 */

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
