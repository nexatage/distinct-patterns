import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "yxd7c6pz", // Replace with your Sanity project ID
  dataset: "distinct-patterns", // Replace with your dataset name (e.g., 'production')
  useCdn: true, // `true` for faster, cacheable requests (ideal for public data)
  apiVersion: "2023-10-01", // Use the latest API version or lock it for stability
});

export default sanityClient;
