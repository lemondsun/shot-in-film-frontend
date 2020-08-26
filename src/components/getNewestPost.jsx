export const getNewestPost = (content) => {
  let latestPosts = []
  // iterates backwards through the array three times
  //  pushes the last three items in the array to latest post.
  for (let i = content.length - 1; i > content.length-4; i--) {
    latestPosts.push(content[i])
  }
  return latestPosts
}
