import { Client } from "minio";

const client = new Client({
    accessKey: "123",
    secretKey: "123",
    endPoint: "example.com",
});
