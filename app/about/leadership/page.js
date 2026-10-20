import FounderPage, { metadata as founderMetadata } from "../founder/page";

export const metadata = {
  ...founderMetadata,
  title: "Founder’s Message & Leadership | Pak Royal College"
};

export default function LeadershipRedirectPage() {
  return <FounderPage />;
}
