function listFollowers(followerNames: string[]): string {
  const [nameOne, nameTwo] = followerNames;
  return `Followed by ${nameOne}, ${nameTwo} and others`;
}

export default listFollowers;
