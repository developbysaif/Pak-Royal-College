import LeadershipPage, { metadata as leadershipMetadata } from "../leadership/page";

export const metadata = {
  ...leadershipMetadata,
  title: "Founder’s Message | Haji Muhammad Ashiq | Pak Royal College"
};

export default function FounderMessagePage() {
  return <LeadershipPage />;
}
