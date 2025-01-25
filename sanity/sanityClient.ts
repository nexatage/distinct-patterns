import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "wqwzzi9l", // Replace with your Sanity project ID
  dataset: "distinct-patterns", // Replace with your dataset name (e.g., 'production')
  useCdn: true, // `true` for faster, cacheable requests (ideal for public data)
  token:"skFEgHrcBr9hEbOtivnWs25vA1qhNZn7jl0bGfk1CNeeqW8M0HiLdMq6EqZn47ISlXmgEeFHyF9LQDnFwegKcMymtBnsry8sUV7gVKWPV2BfS1OTI24ltLXIwwElCZDN71C2qc1NwTySbZWAs0BrAtSOkh0w7rkyliVDopTFKYxDXwxwS2Ou",
  apiVersion: "2023-10-01", // Use the latest API version or lock it for stability
});

export default sanityClient;
